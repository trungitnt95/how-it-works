#!/usr/bin/env node
// Checks the hand-written data of a concept graph before it ships: unknown ids, groups and link types,
// duplicate or reversed duplicate links, orphan nodes, lesson ids that do not exist.
//   node shared/validate-graph.js health
//   node shared/validate-graph.js grammar
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const TOPICS = {
    health: {
        dir: 'health/modules',
        data: 'graph-data.js',
        names: { cats: 'healthGraphCategories', types: 'healthGraphLinkTypes', stages: 'healthGraphStages', data: 'healthGraphData', evidence: 'healthGraphEvidence' },
        // lesson ids come from the lesson modules; graph-data.js itself is not one of them
        lessonFiles: ['body.js', 'lifestyle.js', 'illness.js', 'illness2.js', 'chronic.js', 'chronic2.js', 'groups.js', 'groups2.js', 'advanced.js', 'advanced2.js'],
        lessons: sandbox => (sandbox.window.HEALTH_TOPICS || []).map(t => t.id)
    },
    grammar: {
        dir: 'english-grammar/modules',
        data: 'graph-data.js',
        names: { cats: 'grammarGraphCategories', types: 'grammarGraphLinkTypes', stages: 'grammarGraphRoadmap', data: 'grammarGraphData' }
    }
};

const which = process.argv[2];
const cfg = TOPICS[which];
if (!cfg) { console.error('usage: node shared/validate-graph.js <' + Object.keys(TOPICS).join('|') + '>'); process.exit(2); }

function run(files, expose) {
    const sandbox = { window: {}, console };
    vm.createContext(sandbox);
    files.forEach(f => vm.runInContext(fs.readFileSync(path.join(root, cfg.dir, f), 'utf8'), sandbox, { filename: f }));
    // top-level const/let are not properties of the sandbox; read them back explicitly
    const out = {};
    expose.forEach(n => { out[n] = vm.runInContext(`typeof ${n} === 'undefined' ? undefined : ${n}`, sandbox); });
    return { sandbox, out };
}

const { out } = run([cfg.data], Object.values(cfg.names));
const cats = out[cfg.names.cats], types = out[cfg.names.types], stages = out[cfg.names.stages] || [], data = out[cfg.names.data];
const evidence = (cfg.names.evidence && out[cfg.names.evidence]) || {};
let lessonIds = null;
if (cfg.lessons) lessonIds = new Set(cfg.lessons(run(cfg.lessonFiles, []).sandbox));

const errors = [], warns = [];
const err = m => errors.push(m), warn = m => warns.push(m);

const ids = new Set();
data.nodes.forEach(n => {
    if (ids.has(n.id)) err(`duplicate node id: ${n.id}`);
    ids.add(n.id);
    if (!cats[n.cat]) err(`node ${n.id}: unknown group "${n.cat}"`);
    if (!n.label || !n.vi || !n.desc) err(`node ${n.id}: missing label, vi or desc`);
    if (n.desc && n.desc.replace(/<[^>]+>/g, '').length > 420) warn(`node ${n.id}: description is long (${n.desc.length} chars)`);
    if (lessonIds) {
        if (n.topic && !lessonIds.has(n.topic)) err(`node ${n.id}: lesson "${n.topic}" does not exist`);
        (n.more || []).forEach(([id]) => { if (!lessonIds.has(id)) err(`node ${n.id}: related lesson "${id}" does not exist`); });
        if (!n.topic) warn(`node ${n.id}: no lesson link`);
    }
});

const degree = new Map([...ids].map(i => [i, 0]));
const seen = new Map();
data.links.forEach(l => {
    const [s, t, label, type, ev] = l;
    const tag = `link ${s} -> ${t}`;
    if (!ids.has(s)) err(`${tag}: unknown source`);
    if (!ids.has(t)) err(`${tag}: unknown target`);
    if (s === t) err(`${tag}: links a node to itself`);
    if (!label) err(`${tag}: missing label`);
    if (!types[type]) err(`${tag}: unknown type "${type}"`);
    if (ev !== undefined && !evidence[ev]) err(`${tag}: unknown evidence "${ev}"`);
    const fwd = `${s}>${t}`, rev = `${t}>${s}`;
    if (seen.has(fwd)) err(`${tag}: duplicate of ${seen.get(fwd)}`);
    else if (seen.has(rev)) err(`${tag}: reverse of ${seen.get(rev)} (two links between the same pair)`);
    seen.set(fwd, `${type} "${label}"`);
    if (degree.has(s)) degree.set(s, degree.get(s) + 1);
    if (degree.has(t)) degree.set(t, degree.get(t) + 1);
});
degree.forEach((d, id) => {
    if (d === 0) err(`node ${id}: no links`);
    else if (d === 1) warn(`node ${id}: only one link`);
});

const stageIds = new Set();
const inStage = new Set();
stages.forEach(st => {
    if (stageIds.has(st.id)) err(`duplicate stage id: ${st.id}`);
    stageIds.add(st.id);
    st.nodes.forEach(n => { if (!ids.has(n)) err(`stage ${st.id}: unknown node "${n}"`); else inStage.add(n); });
    if (new Set(st.nodes).size !== st.nodes.length) err(`stage ${st.id}: lists a node twice`);
});
if (which === 'health') ids.forEach(i => { if (!inStage.has(i)) warn(`node ${i}: in no entry point`); });

const byType = {};
data.links.forEach(l => { byType[l[3]] = (byType[l[3]] || 0) + 1; });
console.log(`${which}: ${ids.size} nodes, ${data.links.length} links, ${stages.length} stages`);
console.log('links by type:', Object.entries(byType).map(([k, v]) => `${k}=${v}`).join(' '));
const top = [...degree.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8).map(([k, v]) => `${k}(${v})`).join(' ');
console.log('most connected:', top);
warns.forEach(w => console.log('warn  ', w));
errors.forEach(e => console.log('ERROR ', e));
console.log(errors.length ? `\n${errors.length} error(s)` : '\nOK');
process.exit(errors.length ? 1 : 0);
