# Image Directory Structure for Ganesh Glass Centre Website

## Required Images - SEO Optimized Naming

This directory should contain all website images with proper SEO naming conventions.

### Hero & Main Images
- `glass-windows-installation-ahmedabad-hero.jpg` (800x600px) - Main hero image
- `glass-windows-installation-ahmedabad-hero-500w.jpg` (500x400px) - Mobile responsive
- `glass-windows-installation-ahmedabad-hero-800w.jpg` (800x600px) - Desktop responsive
- `ganesh-glass-centre-shop-chandkheda-ahmedabad.jpg` (400x300px) - Shop exterior photo for schema
- `ganesh-glass-centre-chandkheda-og-image.jpg` (1200x630px) - Open Graph social sharing image

### Gallery Images - Before/After
- `before-glass-window-installation-residential-ahmedabad.jpg` (400x400px)
- `after-glass-window-installation-professional-ahmedabad.jpg` (400x400px)
- `before-office-glass-partition-installation-ahmedabad.jpg` (400x400px)
- `after-office-glass-partition-soundproof-ahmedabad.jpg` (400x400px)

### Service Images (for services.html - create later)
- `tempered-glass-window-chandkheda-ahmedabad.jpg` (600x400px)
- `aluminium-sliding-door-installation-chandkheda.jpg` (600x400px)
- `glass-shower-partition-modern-ahmedabad.jpg` (600x400px)
- `mirror-glass-sheet-supply-chandkheda.jpg` (600x400px)
- `office-glass-partition-frameless-ahmedabad.jpg` (600x400px)

### Blog Images (for blog posts - create later)
- `choosing-right-glass-windows-ahmedabad-guide.jpg`
- `aluminium-vs-upvc-windows-comparison-india.jpg`
- `tempered-glass-safety-benefits-homes.jpg`
- `glass-maintenance-tips-monsoon-season.jpg`

## Image Optimization Checklist

✅ **Format:** Use JPG for photos, PNG for graphics with transparency, WebP for modern browsers
✅ **Compression:** Compress all images (use tools like TinyPNG, ImageOptim, or Squoosh)
✅ **Dimensions:** Match actual display sizes (don't use 4000px image for 400px display)
✅ **File Size:** Keep hero images under 200KB, gallery images under 100KB
✅ **Naming:** Use lowercase, hyphens (not underscores), include keywords
✅ **ALT Tags:** Already implemented in HTML - descriptive with location keywords

## How to Add Images

1. **Take/Source Photos:**
   - Shop exterior and interior
   - Actual installation work (before/after)
   - Products (glass windows, doors, partitions)
   - Team at work (optional)

2. **Resize & Optimize:**
   - Use image editing tool (Photoshop, GIMP, or online tools)
   - Resize to exact dimensions listed above
   - Compress to reduce file size while maintaining quality
   - Save with SEO-friendly names

3. **Upload to `/images/` folder:**
   - Place all images in this directory
   - Ensure file names match exactly as referenced in HTML
   - Test website to verify all images load correctly

## Placeholder Status

**Current Status:** Using local image paths in HTML code
**Action Required:** Add actual images with these exact file names

If you don't have professional photos yet, you can:
- Use smartphone to take shop photos
- Capture before/after installation work
- Use stock photos temporarily (ensure you have rights)
- Hire a photographer for professional product shots

## Image Performance Settings

All images in index.html are configured with:
- ✅ Lazy loading (except hero image - uses `loading="eager"`)
- ✅ Width/height attributes (prevents layout shift)
- ✅ Responsive srcset for hero image
- ✅ SEO-optimized ALT tags with location keywords
- ✅ Proper aspect ratios to prevent CLS
