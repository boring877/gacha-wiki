import os
import re
from pathlib import Path
from collections import defaultdict

IMAGES_DIR = Path(r"C:\Users\Borin\OneDrive\Documents\gacha-wiki\src\assets\images")
SRC_DIR = Path(r"C:\Users\Borin\OneDrive\Documents\gacha-wiki\src")
GAMES_DIR = IMAGES_DIR / "games"

IMAGE_EXTS = {'.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'}
SOURCE_EXTS = {'.astro', '.tsx', '.ts', '.js', '.jsx', '.css', '.json', '.md'}

IMG_PATTERN = re.compile(r'[A-Za-z0-9_\-]{2,}\.(?:png|jpg|jpeg|gif|svg|webp)', re.IGNORECASE)

print("Step 1: Collecting all image files...")
all_images = []
filename_to_images = defaultdict(list)
basename_to_images = defaultdict(list)

for root, dirs, files in os.walk(IMAGES_DIR):
    for f in files:
        ext = os.path.splitext(f)[1].lower()
        if ext in IMAGE_EXTS:
            full_path = Path(root) / f
            rel_from_images = full_path.relative_to(IMAGES_DIR)
            rel_from_games = None
            try:
                rel_from_games = full_path.relative_to(GAMES_DIR)
            except ValueError:
                pass
            game = str(rel_from_games).split(os.sep)[0] if rel_from_games else str(rel_from_images).split(os.sep)[0]
            img_info = {
                'full_path': str(full_path),
                'rel_from_images': str(rel_from_images).replace('\\', '/'),
                'rel_from_games': str(rel_from_games).replace('\\', '/') if rel_from_games else None,
                'filename': f,
                'basename': os.path.splitext(f)[0],
                'game': game,
            }
            all_images.append(img_info)
            filename_to_images[f.lower()].append(img_info)
            basename_to_images[os.path.splitext(f)[0].lower()].append(img_info)

print(f"Total images: {len(all_images)}")
print(f"Unique filenames: {len(filename_to_images)}")
print(f"Unique basenames: {len(basename_to_images)}")

game_counts = defaultdict(int)
for img in all_images:
    game_counts[img['game']] += 1
for game, count in sorted(game_counts.items(), key=lambda x: -x[1]):
    print(f"  {game}: {count}")

print("\nStep 2: Scanning source files for image references...")
referenced_filenames = set()
referenced_basenames = set()

source_count = 0
for root, dirs, files in os.walk(SRC_DIR):
    # Skip the images directory itself
    if IMAGES_DIR in Path(root).parents or root == str(IMAGES_DIR):
        continue
    for f in files:
        ext = os.path.splitext(f)[1].lower()
        if ext in SOURCE_EXTS:
            source_count += 1
            filepath = Path(root) / f
            try:
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as fh:
                    content = fh.read()
                    # Find all image filename references
                    for match in IMG_PATTERN.finditer(content):
                        ref = match.group(0).lower()
                        if ref in filename_to_images:
                            referenced_filenames.add(ref)
                    # Also check for bare basenames that match our images
                    # We do this by checking if any of our known basenames appear
            except Exception as e:
                pass

print(f"Scanned {source_count} source files")
print(f"Referenced unique filenames: {len(referenced_filenames)}")

# Now for basenames, we need a more targeted approach
# Only check basenames that weren't already matched by filename
unmatched_basenames = set(bn for bn in basename_to_images.keys()
                          if not any(fn in referenced_filenames for fn in filename_to_images
                                     if os.path.splitext(fn)[0] == bn))

print(f"Checking {len(unmatched_basenames)} unmatched basenames...")

# For unmatched basenames, scan source files again looking for them
# Build a regex pattern for all unmatched basenames
if unmatched_basenames:
    # Split into chunks to avoid regex length limits
    chunk_size = 500
    basename_list = sorted(unmatched_basenames)
    for i in range(0, len(basename_list), chunk_size):
        chunk = basename_list[i:i+chunk_size]
        pattern = re.compile(r'\b(?:' + '|'.join(re.escape(bn) for bn in chunk) + r')\b', re.IGNORECASE)
        for root, dirs, files in os.walk(SRC_DIR):
            if IMAGES_DIR in Path(root).parents or root == str(IMAGES_DIR):
                continue
            for f in files:
                ext = os.path.splitext(f)[1].lower()
                if ext in SOURCE_EXTS:
                    filepath = Path(root) / f
                    try:
                        with open(filepath, 'r', encoding='utf-8', errors='ignore') as fh:
                            content = fh.read()
                            for match in pattern.finditer(content):
                                referenced_basenames.add(match.group(0).lower())
                    except:
                        pass

print(f"Referenced basenames (no extension): {len(referenced_basenames)}")

print("\nStep 3: Determining unused images...")
unused_images = []
for img in all_images:
    fn_lower = img['filename'].lower()
    bn_lower = img['basename'].lower()
    if fn_lower not in referenced_filenames and bn_lower not in referenced_basenames:
        unused_images.append(img)

print(f"Unused images: {len(unused_images)}")

unused_by_game = defaultdict(list)
for img in unused_images:
    unused_by_game[img['game']].append(img)

grand_total_unused = len(unused_images)

output_path = Path(r"C:\Users\Borin\OneDrive\Documents\gacha-wiki\unused_images_report.txt")
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(f"UNUSED IMAGES REPORT\n")
    f.write(f"Total images: {len(all_images)}\n")
    f.write(f"Unused images: {grand_total_unused}\n")
    f.write("="*80 + "\n\n")
    for game in sorted(unused_by_game.keys()):
        imgs = unused_by_game[game]
        total_in_game = game_counts[game]
        f.write(f"## {game} ({len(imgs)} unused / {total_in_game} total)\n")
        for img in sorted(imgs, key=lambda x: x['rel_from_games'] or x['rel_from_images']):
            rel = img['rel_from_games'] or img['rel_from_images']
            f.write(f"  {rel}\n")
        f.write("\n")

print(f"Report saved to: {output_path}")
print(f"GRAND TOTAL: {grand_total_unused} unused / {len(all_images)} total")
