# Slice Unity texture atlases into individual hero icons
from PIL import Image
import os
import pathlib

ATLAS_DIR = r"C:\Users\Borin\OneDrive\ALL_IMAGES_EXTRACTED"
OUTPUT_DIR = r"C:\Users\Borin\OneDrive\Documents\SLICED_HERO_ICONS"

os.makedirs(OUTPUT_DIR, exist_ok=True)

def slice_atlas(atlas_path, output_dir, icon_size=256):
    """Slice a texture atlas into individual icons"""
    try:
        atlas = Image.open(atlas_path)
        width, height = atlas.size

        # Calculate grid dimensions
        cols = width // icon_size
        rows = height // icon_size

        count = 0
        atlas_name = pathlib.Path(atlas_path).stem

        for row in range(rows):
            for col in range(cols):
                # Calculate crop box
                left = col * icon_size
                top = row * icon_size
                right = left + icon_size
                bottom = top + icon_size

                # Crop and save
                icon = atlas.crop((left, top, right, bottom))

                # Skip if mostly transparent/empty
                pixels = list(icon.getdata())
                transparent_pixels = sum(1 for p in pixels if len(p) < 4 or p[3] < 10)
                if transparent_pixels > len(pixels) * 0.98:  # 98% transparent
                    continue

                output_path = os.path.join(output_dir, f"{atlas_name}_row{row}_col{col}.png")
                icon.save(output_path)
                count += 1

        return count
    except Exception as e:
        print(f"Error: {e}")
        return 0

def main():
    print("="*60)
    print("Slicing Unity Texture Atlases (256x256 icons)")
    print("="*60)

    atlas_files = []
    for file in os.listdir(ATLAS_DIR):
        if file.startswith("TEXTURE_no_name_") and ("4096x4096" in file or "2048x2048" in file):
            atlas_files.append(os.path.join(ATLAS_DIR, file))

    print(f"Found {len(atlas_files)} atlas files")
    print(f"Slicing into 256x256 icons...\n")

    total_icons = 0
    for i, atlas_path in enumerate(atlas_files, 1):
        if i % 100 == 0:
            print(f"Progress: {i}/{len(atlas_files)}... (sliced {total_icons} icons)")

        count = slice_atlas(atlas_path, OUTPUT_DIR, icon_size=256)
        total_icons += count

    print(f"\n{'='*60}")
    print(f"Sliced {total_icons} icons from {len(atlas_files)} atlases")
    print(f"Location: {OUTPUT_DIR}")
    print("="*60)

if __name__ == "__main__":
    main()
