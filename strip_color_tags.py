# Strip ALL game color markup (opening + closing) from ZN data files.
import re, glob

total = 0
files = glob.glob('src/data/zone-nova/characters/*.js') + ['src/data/zone-nova/memories.js']
for f in files:
    s = open(f, encoding='utf-8').read()
    s2 = re.sub(r'</?color[^>]*>', '', s)
    if s2 != s:
        open(f, 'w', encoding='utf-8', newline='').write(s2)
        total += 1
        print('cleaned', f)
print('files cleaned:', total)

# verify zero remaining
left = 0
for f in files:
    s = open(f, encoding='utf-8').read()
    left += len(re.findall(r'color>', s))
print('remaining color fragments:', left)
