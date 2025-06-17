# Image Optimization Guide 🖼️

## Current Issues with Your Images:
- **Total Size**: ~20MB across 97 images
- **Largest Files**: 
  - zonenova1.jpg (2.5MB)
  - Eventkingflame.jpg (1.58MB)
  - eventshop3.jpg (1.25MB)
- **Format**: All JPEG (older format)
- **No responsive images**

## 🎯 Optimization Strategy:

### 1. **Run Image Optimization**
```bash
# Optimize all images (this will create /public/images/optimized/ folder)
bun run optimize-images
```

This will create:
- **AVIF format** (70-80% smaller than JPEG)
- **WebP format** (30-50% smaller than JPEG) 
- **Optimized JPEG** (20-30% smaller than original)
- **4 responsive sizes** for each image (400px, 800px, 1200px, 1600px)

### 2. **Expected Results**:
- **Total size reduction**: 60-80% (from 20MB to 4-8MB)
- **Faster loading**: 3-5x faster on modern browsers
- **Better mobile performance**: Smaller images for mobile devices

### 3. **Update Your Components**:

#### Before (current):
```astro
<img src="/images/zonenova.jpg" alt="Zone Nova" />
```

#### After (optimized):
```astro
---
import OptimizedImage from '../components/OptimizedImage.astro';
---

<OptimizedImage 
  src="/images/zonenova.jpg" 
  alt="Zone Nova"
  width={800}
  height={600}
  priority={true}  // For above-the-fold images
/>
```

### 4. **Priority Images** (load these first):
- Zone Nova main image (`/images/zonenova.jpg`)
- Character thumbnails on homepage
- Any above-the-fold images

### 5. **Lazy Load Examples**:
```astro
<!-- Character gallery images -->
<OptimizedImage 
  src="/images/characters/afrodite.jpg" 
  alt="Afrodite"
  loading="lazy"
  width={400}
  height={400}
/>

<!-- Event banners -->
<OptimizedImage 
  src="/images/event-kingflame/Eventkingflame.jpg" 
  alt="King Flame Event"
  loading="lazy"
  width={800}
  height={450}
/>
```

## 🚀 Quick Migration Plan:

### Step 1: Optimize Images
```bash
bun run optimize-images
```

### Step 2: Update Critical Images First
Replace images in these priority areas:
1. `src/pages/index.astro` - Zone Nova featured image
2. `src/components/Header.astro` - Any logo/icons
3. Character card components

### Step 3: Test Performance
```bash
bun run build:analyze
```

### Step 4: Gradual Migration
- Update one page/component at a time
- Test loading performance
- Keep originals as fallback

## 📊 Expected Performance Gains:

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Total Images | 20MB | 4-8MB | 60-80% smaller |
| Zone Nova image | 2.5MB | 400-600KB | 75-85% smaller |
| Mobile load time | 8-12s | 2-4s | 3x faster |
| Largest Contentful Paint | 4-6s | 1-2s | 3x better |

## 🔧 Advanced Options:

### For specific use cases:
```astro
<!-- Disable optimization for specific images -->
<OptimizedImage 
  src="/images/special.jpg" 
  alt="Special image"
  useOptimized={false}
/>

<!-- Custom aspect ratio -->
<OptimizedImage 
  src="/images/banner.jpg" 
  alt="Banner"
  style="--aspect-ratio: 25" /* 4:1 ratio */
  class="aspect-ratio"
/>
```

Run `bun run optimize-images` to get started! 🚀
