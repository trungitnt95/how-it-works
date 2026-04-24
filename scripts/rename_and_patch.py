#!/usr/bin/env python3
import os, shutil, sys

base = os.getcwd()
print('Working in', base)

# Find first-level directories that contain index.html
dirs = []
for name in os.listdir(base):
    path = os.path.join(base, name)
    if os.path.isdir(path):
        idx = os.path.join(path, 'index.html')
        if os.path.isfile(idx):
            # skip root if somehow included
            if os.path.abspath(idx) == os.path.abspath(os.path.join(base, 'index.html')):
                continue
            dirs.append(name)

if not dirs:
    print('No subfolder index.html files found.')
    sys.exit(0)

print('Found dirs:', dirs)

created_redirects = []
renamed = []
skipped = []
for d in dirs:
    old = os.path.join(base, d, 'index.html')
    new = os.path.join(base, d, f'{d}.html')
    if os.path.exists(new):
        skipped.append((d, 'target exists'))
        print(f'SKIP {d}: {new} already exists')
        continue
    try:
        shutil.move(old, new)
        renamed.append((d, old, new))
        # create redirect index.html
        redirect = f'''<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta http-equiv="refresh" content="0; url=./{d}.html">
  <link rel="canonical" href="./{d}.html">
  <title>Redirecting…</title>
</head>
<body>
  <script>location.replace('./{d}.html');</script>
  <p>Redirecting to <a href="./{d}.html">{d}.html</a></p>
</body>
</html>
'''
        with open(old, 'w', encoding='utf-8') as f:
            f.write(redirect)
        created_redirects.append(old)
        print(f'Renamed and added redirect for {d}')
    except Exception as e:
        skipped.append((d, str(e)))
        print('ERROR moving', old, '->', new, e)

# Patch references across files
exts = ('.html', '.js', '.md', '.json')
changed = []

def should_skip(path):
    # skip newly created redirect files and newly created page files
    if path in created_redirects:
        return True
    for d in dirs:
        if os.path.abspath(path) == os.path.abspath(os.path.join(base, d, f'{d}.html')):
            return True
    return False

for root, _, files in os.walk(base):
    for fn in files:
        if not fn.endswith(exts):
            continue
        fp = os.path.join(root, fn)
        if should_skip(fp):
            continue
        try:
            with open(fp, 'r', encoding='utf-8') as f:
                s = f.read()
        except Exception:
            continue
        orig = s
        for d in dirs:
            # Replace common index references
            s = s.replace(f"{d}/index.html", f"{d}/{d}.html")
            s = s.replace(f"/{d}/index.html", f"/{d}/{d}.html")
            s = s.replace(f"../{d}/index.html", f"../{d}/{d}.html")
            s = s.replace(f"./{d}/index.html", f"./{d}/{d}.html")
            # Replace bare folder/ in href/src patterns
            s = s.replace(f'href="{d}/"', f'href="{d}/{d}.html"')
            s = s.replace(f"href='{d}/'", f"href='{d}/{d}.html'")
            s = s.replace(f'href="/{d}/"', f'href="/{d}/{d}.html"')
            s = s.replace(f"href='../{d}/'", f"href='../{d}/{d}.html'")
            s = s.replace(f'href="../{d}/"', f'href="../{d}/{d}.html"')
            s = s.replace(f'src="{d}/"', f'src="{d}/{d}.html"')
            s = s.replace(f"src='../{d}/'", f"src='../{d}/{d}.html'")
            s = s.replace(f'href="./{d}/"', f'href="./{d}/{d}.html"')
            s = s.replace(f"href='./{d}/'", f"href='./{d}/{d}.html'")
            # quoted absolute folder string
            s = s.replace(f'"/{d}/"', f'"/{d}/{d}.html"')
            s = s.replace(f"'/{d}/'", f"'/{d}/{d}.html'")
        if s != orig:
            try:
                with open(fp, 'w', encoding='utf-8') as f:
                    f.write(s)
                changed.append(fp)
                print('Patched', fp)
            except Exception as e:
                print('ERROR writing', fp, e)

print('\nSummary:')
print(' Renamed folders:', len(renamed))
for r in renamed[:20]:
    print('  ', r[0])
print(' Skipped:', len(skipped))
print(' Redirects created:', len(created_redirects))
print(' Files patched:', len(changed))

# Exit code 0
sys.exit(0)
