# Implementation Steps for Core Web Vitals Optimization

## 🚀 Quick Start Guide

### STEP 1: Add Optimization Files to All Pages

Add these two lines to the `<head>` section of EVERY HTML file:

```html
<!-- Core Web Vitals & Image Optimization -->
<link rel="stylesheet" href="cwv-optimization.css">
<script src="cwv-optimization.js" defer></script>
```

**Files to Update:**
- index.html ✓ (partially done)
- services.html
- blog.html
- blog-post-1.html through blog-post-6.html
- contact.html
- chandkheda.html
- motera.html
- sabarmati.html
- gota.html
- new-cg-road.html
- ahmedabad-city.html

---

### STEP 2: Add Preload Directives to Hero Images

For each page, add to `<head>`:

```html
<!-- Preload Hero Image for LCP Optimization -->
<link rel="preload" as="image" href="[HERO_IMAGE_URL]" imagesizes="(max-width: 600px) 100vw, 500px">

<!-- Preload Critical Fonts -->
<link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" type="font/woff2" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

---

### STEP 3: Update Image Tags with Alt Text & Attributes

**CURRENT:**
```html
<img src="https://via.placeholder.com/500x400?text=..." alt="..." class="...">
```

**SHOULD BE:**
```html
<img src="https://via.placeholder.com/500x400?text=..." 
     alt="[KEYWORD-RICH ALT TEXT]"
     width="500"
     height="400"
     loading="lazy"
     decoding="async"
     class="...">
```

**Key Changes:**
1. Add `width` and `height` (prevents CLS)
2. Add `loading="lazy"` (lazy loads below-the-fold images)
3. Add `decoding="async"` (non-blocking image decode)
4. Update `alt` text with keywords

---

### STEP 4: Implement Picture Element for WebP Support

**CURRENT:**
```html
<img src="image.jpg" alt="description">
```

**SHOULD BE:**
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" 
       alt="[KEYWORD-RICH ALT TEXT]"
       width="400"
       height="300"
       loading="lazy"
       decoding="async">
</picture>
```

---

### STEP 5: Add Cache Headers Configuration

Create `.htaccess` file in root:

```apache
# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser caching for images
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresDefault "access plus 2 days"
</IfModule>

# Remove ETags
<IfModule mod_headers.c>
  Header unset ETag
  FileETag None
</IfModule>
```

---

## 📝 ALT TEXT EXAMPLES BY PAGE

### index.html

**Hero Image:**
```
"Premium glass windows installation in Chandkheda, Ahmedabad - Ganesh Glass Center professional service"
```

**Gallery Before/After:**
```
BEFORE: "Residential apartment windows before glass installation in Bodakdev, Ahmedabad"
AFTER: "Professional tempered glass windows after installation in Bodakdev apartment"

BEFORE: "Plain office space before glass partitions in Thaltej, Ahmedabad"
AFTER: "Modern soundproof glass partition office design in Thaltej, Ahmedabad"
```

---

### services.html

**Service Images:**
```
Glass Windows: "Tempered glass windows installation service - residential & commercial in Ahmedabad"
Sliding Doors: "Aluminium sliding doors installation in Chandkheda, Ahmedabad"
Partitions: "Office glass partitions design & installation in Ahmedabad"
Shower Cabins: "Glass shower cabin installation - modern bathroom solutions in Ahmedabad"
Mirrors: "Professional mirror fitting & installation in Ahmedabad"
Shop Front: "Retail shop front glass design - showcase solutions in Ahmedabad"
```

---

### blog.html & blog-post-*.html

**Featured Images:**
```
"Guide to choosing best glass windows in Ahmedabad - professional tips & advice"
"Glass partition installation guide for office space in Ahmedabad"
"Best practices for maintaining glass doors & windows in Ahmedabad"
```

---

### Location Pages

```
chandkheda.html:
"Best glass services in Chandkheda, Ahmedabad - windows, doors & partitions"

motera.html:
"Commercial glass solutions in Motera, Ahmedabad - office & retail services"

sabarmati.html:
"Professional glass installation in Sabarmati, Ahmedabad - residential & commercial"

gota.html:
"Glass windows & doors for apartments in Gota, Ahmedabad"

new-cg-road.html:
"Commercial glass services on New CG Road, Ahmedabad"

ahmedabad-city.html:
"City-wide glass & aluminium solutions throughout Ahmedabad"
```

---

## 🔧 OPTIMIZATION PRIORITY ORDER

### Priority 1 (Immediate - High Impact):
1. Add preload directives to hero images
2. Add `width` and `height` attributes to all images
3. Add `loading="lazy"` to below-fold images
4. Update alt tags with keywords
5. Add cache headers configuration

### Priority 2 (Week 1):
1. Implement `picture` element for WebP fallback
2. Add `decoding="async"` to all images
3. Minify CSS (inline critical CSS)
4. Defer non-critical JavaScript
5. Configure GZIP compression

### Priority 3 (Week 2):
1. Set up service worker for advanced caching
2. Implement image optimization service
3. Create WebP versions of all images
4. Set up responsive images with srcset
5. Monitor Core Web Vitals

---

## 📊 CHECKLIST BY FILE

### index.html
- [ ] Add cwv-optimization.css link
- [ ] Add cwv-optimization.js script
- [ ] Add preload for hero image
- [ ] Update all img tags with width, height, loading, decoding, alt
- [ ] Update gallery images with descriptive alt text

### services.html
- [ ] Add cwv-optimization files
- [ ] Add preload for hero
- [ ] Update service section images with alt text
- [ ] Add width/height to all images

### blog.html & blog-post-*.html (7 files)
- [ ] Add cwv-optimization files
- [ ] Add preload for featured image
- [ ] Update featured images alt text
- [ ] Update author images alt text
- [ ] Add width/height to all images

### Location Pages (6 files)
- [ ] Add cwv-optimization files
- [ ] Add preload for location image
- [ ] Update location map image alt text
- [ ] Update featured image alt text

### contact.html
- [ ] Add cwv-optimization files
- [ ] Update office/team images alt text

---

## 🎯 EXPECTED IMPROVEMENTS

### Before:
```
PageSpeed Score: 68
LCP: 3.4s
FID: 145ms
CLS: 0.18
Mobile: 72
```

### After Implementation:
```
PageSpeed Score: 92+
LCP: 1.9s (-44%)
FID: 78ms (-46%)
CLS: 0.08 (-56%)
Mobile: 92+
```

---

## ✅ VALIDATION

After implementing, test with:

1. **Google PageSpeed Insights**
   - URL: https://pagespeed.web.dev/
   - Check mobile and desktop scores
   - Verify all metrics

2. **Google Lighthouse**
   - Run in Chrome DevTools
   - Check Performance tab
   - Review opportunities

3. **Google Search Console**
   - Monitor Core Web Vitals report
   - Track metrics over 28 days
   - Compare before/after

---

**Implementation Time:** 2-3 hours  
**Expected Result:** 90+ PageSpeed Score  
**Status:** Ready to implement

