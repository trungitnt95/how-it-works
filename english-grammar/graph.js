// English-grammar page of the shared concept graph; the engine lives in ../shared/graph-engine.js.
KnowledgeGraph.init({
    cats: grammarGraphCategories,
    types: grammarGraphLinkTypes,
    stages: grammarGraphRoadmap,
    nodes: grammarGraphData.nodes,
    links: grammarGraphData.links,
    topicUrl: id => `english-grammar.html?topic=${encodeURIComponent(id)}`
});
