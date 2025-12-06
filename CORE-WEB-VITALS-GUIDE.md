# Core Web Vitals & Image SEO Optimization Guide

## 📋 Implementation Checklist

### PHASE 1: IMAGE OPTIMIZATION
- [ ] Convert all placeholder images to WebP format
- [ ] Add lazy-loading to all images
- [ ] Add descriptive alt tags with keywords
- [ ] Set width/height attributes (prevent CLS)
- [ ] Optimize image sizes (responsive)

### PHASE 2: CORE WEB VITALS
- [ ] Reduce Largest Contentful Paint (LCP) < 2.5s
- [ ] Reduce First Input Delay (FID) < 100ms
- [ ] Reduce Cumulative Layout Shift (CLS) < 0.1
- [ ] Minimize Total Blocking Time (TBT) < 200ms

### PHASE 3: PERFORMANCE OPTIMIZATION
- [ ] Minify CSS & JavaScript
- [ ] Add preload directives for critical resources
- [ ] Implement lazy-loading strategy
- [ ] Add cache headers
- [ ] Defer non-critical JavaScript

### PHASE 4: SEO IMAGE OPTIMIZATION
- [ ] Add ALT tags with service + location keywords
- [ ] Implement structured image data
- [ ] Add responsive images with srcset
- [ ] Optimize image metadata

---

## 🖼️ IMAGE ALT TAG STRATEGY

### Homepage (index.html)

**Hero Image:**
```html
<img src="placeholder.webp" 
     alt="Premium glass windows installation in Chandkheda, Ahmedabad - Ganesh Glass Center professional team"
     width="500" 
     height="400" 
     loading="lazy" 
     decoding="async">
```

**Gallery Images:**
```html
<!-- Before/After 1: Residential Windows -->
<img src="before.webp"
     alt="Before: Residential apartment windows in Bodakdev, Ahmedabad - before glass installation"
     width="400"
     height="400"
     loading="lazy">

<img src="after.webp"
     alt="After: Professional tempered glass windows installation in Bodakdev apartment, Ahmedabad"
     width="400"
     height="400"
     loading="lazy">

<!-- Before/After 2: Office Partitions -->
<img src="office-before.webp"
     alt="Before: Plain office space in Thaltej, Ahmedabad - ready for glass partitions"
     width="400"
     height="400"
     loading="lazy">

<img src="office-after.webp"
     alt="After: Modern glass partition office design in Thaltej, Ahmedabad - professional workspace"
     width="400"
     height="400"
     loading="lazy">
```

---

### Services Page (services.html)

**Service Section Images:**
```html
<!-- Glass Windows Service -->
<img src="windows.webp"
     alt="Tempered glass windows installation service in Ahmedabad - residential & commercial"
     width="400"
     height="300"
     loading="lazy">

<!-- Sliding Doors Service -->
<img src="doors.webp"
     alt="Aluminium sliding doors installation in Chandkheda, Ahmedabad - modern & durable"
     width="400"
     height="300"
     loading="lazy">

<!-- Glass Partitions Service -->
<img src="partitions.webp"
     alt="Office glass partitions in Ahmedabad - soundproof & professional design solutions"
     width="400"
     height="300"
     loading="lazy">

<!-- Shower Cabins Service -->
<img src="shower.webp"
     alt="Glass shower cabin installation in Ahmedabad - waterproof & stylish bathroom solutions"
     width="400"
     height="300"
     loading="lazy">

<!-- Mirror Fitting Service -->
<img src="mirrors.webp"
     alt="Professional mirror fitting & installation in Ahmedabad - residential & commercial"
     width="400"
     height="300"
     loading="lazy">

<!-- Shop Front Glass Service -->
<img src="shopfront.webp"
     alt="Retail shop front glass design in Ahmedabad - showcase & security solutions"
     width="400"
     height="300"
     loading="lazy">
```

---

### Blog Pages (blog.html, blog-post-*.html)

**Blog Featured Images:**
```html
<!-- Blog Post 1: Featured Image -->
<img src="blog1-featured.webp"
     alt="Guide to choosing best glass windows in Ahmedabad - professional installation tips"
     width="800"
     height="400"
     loading="lazy">

<!-- Blog Post Featured Images (General) -->
<img src="blog-featured.webp"
     alt="Glass & aluminium solutions blog - Ahmedabad home improvement & business guides"
     width="800"
     height="400"
     loading="lazy">

<!-- Blog Author Avatar -->
<img src="author.webp"
     alt="Ganesh Glass Center expert team author - 24+ years glass installation experience in Ahmedabad"
     width="100"
     height="100"
     loading="lazy"
     class="rounded-full">
```

---

### Location Pages (chandkheda.html, motera.html, etc.)

**Location Map & Images:**
```html
<!-- Chandkheda Location Map -->
<img src="chandkheda-map.webp"
     alt="Chandkheda, Ahmedabad location map - Ganesh Glass Center service area (23.2156°N, 72.6369°E)"
     width="404"
     height="400"
     loading="lazy">

<!-- Motera Location Featured Image -->
<img src="motera-featured.webp"
     alt="Glass services in Motera, Ahmedabad - commercial & retail solutions by Ganesh Glass"
     width="500"
     height="400"
     loading="lazy">

<!-- Sabarmati Location Featured Image -->
<img src="sabarmati-featured.webp"
     alt="Residential & commercial glass work in Sabarmati, Ahmedabad - professional installation"
     width="500"
     height="400"
     loading="lazy">

<!-- Gota Location Featured Image -->
<img src="gota-featured.webp"
     alt="Glass windows & doors installation in Gota, Ahmedabad - apartment complexes & homes"
     width="500"
     height="400"
     loading="lazy">

<!-- New CG Road Location Featured Image -->
<img src="newcgroad-featured.webp"
     alt="Commercial glass solutions on New CG Road, Ahmedabad - office & showroom partitions"
     width="500"
     height="400"
     loading="lazy">

<!-- Ahmedabad City Featured Image -->
<img src="ahmedabad-featured.webp"
     alt="City-wide glass & aluminium services in Ahmedabad - residential & commercial solutions"
     width="500"
     height="400"
     loading="lazy">
```

---

### Contact Page (contact.html)

**Contact Form & Company Images:**
```html
<!-- Company Office Image -->
<img src="office.webp"
     alt="Ganesh Glass Center office in Chandkheda, Ahmedabad - 24+ years glass installation expertise"
     width="500"
     height="400"
     loading="lazy">

<!-- Team/Staff Image -->
<img src="team.webp"
     alt="Professional installation team at Ganesh Glass Center, Ahmedabad - certified glass experts"
     width="500"
     height="400"
     loading="lazy">
```

---

## ⚡ CORE WEB VITALS OPTIMIZATION TECHNIQUES

### 1. REDUCE LARGEST CONTENTFUL PAINT (LCP)
**Target:** < 2.5 seconds

**Optimization Strategies:**
- Preload hero images
- Preload critical fonts
- Optimize image sizes
- Minimize CSS blocking
- Prioritize critical content

**Implementation:**
```html
<!-- Add to <head> -->
<link rel="preload" as="image" href="hero.webp" imagesizes="(max-width: 600px) 100vw, 500px">
<link rel="preload" as="font" href="inter.woff2" type="font/woff2" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://www.googletagmanager.com">
```

### 2. REDUCE FIRST INPUT DELAY (FID)
**Target:** < 100 milliseconds

**Optimization Strategies:**
- Break up long JavaScript tasks
- Use requestAnimationFrame
- Defer non-critical JavaScript
- Optimize event listeners

**Implementation:**
```javascript
// In cwv-optimization.js
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Non-critical tasks
  });
} else {
  setTimeout(() => {
    // Fallback
  }, 2000);
}
```

### 3. REDUCE CUMULATIVE LAYOUT SHIFT (CLS)
**Target:** < 0.1 (Good)

**Optimization Strategies:**
- Set width/height on images
- Avoid inserting content above existing content
- Use transform instead of position changes
- Reserve space for ads, embeds, iframes

**Implementation:**
```html
<!-- Always include width & height -->
<img src="image.webp" width="400" height="300" alt="description">

<!-- Use CSS for aspect ratio -->
<style>
  img { aspect-ratio: auto; }
  .placeholder { aspect-ratio: 16 / 9; }
</style>
```

### 4. MINIMIZE TOTAL BLOCKING TIME (TBT)
**Target:** < 200 milliseconds

**Optimization Strategies:**
- Split JavaScript into smaller chunks
- Use Web Workers for heavy computation
- Defer JavaScript execution
- Minimize JavaScript bundle size

**Implementation:**
```html
<!-- Defer non-critical scripts -->
<script src="analytics.js" defer></script>
<script src="tracking.js" defer></script>

<!-- Only critical scripts inline or in <head> -->
<script src="critical.js"></script>
```

---

## 🖼️ IMAGE OPTIMIZATION BEST PRACTICES

### WebP Conversion Strategy

**Before (JPEG/PNG):**
```
image.jpg: 245 KB
image.png: 312 KB
```

**After (WebP with fallback):**
```
image.webp: 78 KB (68% reduction)
image.jpg: 245 KB (fallback)
```

**HTML Implementation:**
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="description" width="400" height="300" loading="lazy">
</picture>
```

### Responsive Images with srcset

**Mobile Optimization:**
```html
<img 
  srcset="image-small.webp 480w, image-medium.webp 768w, image-large.webp 1200w"
  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
  src="image-medium.webp"
  alt="description"
  width="400"
  height="300"
  loading="lazy"
  decoding="async">
```

---

## 📊 CACHE HEADERS CONFIGURATION

### .htaccess Configuration (for Apache servers)

```apache
# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Images
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  
  # CSS, JavaScript, and Fonts
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType font/ttf "access plus 1 year"
  ExpiresByType font/otf "access plus 1 year"
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  
  # HTML
  ExpiresByType text/html "access plus 1 week"
  
  # Default
  ExpiresDefault "access plus 2 days"
</IfModule>

# Remove ETags
<IfModule mod_headers.c>
  Header unset ETag
  FileETag None
</IfModule>
```

### nginx Configuration

```nginx
# Images
location ~* \.(jpg|jpeg|png|gif|webp|svg|ico)$ {
  expires 1y;
  add_header Cache-Control "public, max-age=31536000, immutable";
  add_header Vary Accept;
}

# CSS & JavaScript
location ~* \.(css|js)$ {
  expires 1M;
  add_header Cache-Control "public, max-age=2592000";
}

# Fonts
location ~* \.(woff|woff2|ttf|otf)$ {
  expires 1y;
  add_header Cache-Control "public, max-age=31536000, immutable";
}

# HTML
location ~ \.html$ {
  expires 1w;
  add_header Cache-Control "public, max-age=604800";
}

# Enable GZIP
gzip on;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;
gzip_vary on;
gzip_comp_level 6;
```

---

## 📱 MOBILE PAGESPEED OPTIMIZATION

### Target: 90+ Score

**Strategies to Achieve:**

1. **Reduce JavaScript (30% impact)**
   - Defer non-critical JS
   - Split code into chunks
   - Remove unused code

2. **Optimize Images (25% impact)**
   - WebP format
   - Proper sizing
   - Lazy loading

3. **Minimize CSS (20% impact)**
   - Remove unused CSS
   - Minify all CSS
   - Critical CSS inline

4. **Preload Critical Resources (15% impact)**
   - Preload hero images
   - Preload fonts
   - Preconnect to critical origins

5. **Reduce Server Response Time (10% impact)**
   - Enable server caching
   - Use CDN
   - Optimize database queries

---

## 🔍 ALT TAG KEYWORD STRATEGY

### Keywords to Include:

**Service Keywords:**
- Glass windows
- Aluminium doors
- Glass partitions
- Tempered glass
- Sliding doors
- Mirror fitting
- Shower cabins
- Shop front glass

**Location Keywords:**
- Chandkheda
- Motera
- Sabarmati
- Gota
- New CG Road
- Ahmedabad
- Thaltej
- Bodakdev

**Modifier Keywords:**
- Installation
- Professional
- Design
- Solutions
- Service
- Expert
- Premium
- Certified

### ALT Tag Formula:
```
[Action] [Material/Service] in [Location], [City] - [Descriptive Benefit]

Examples:
- "Professional tempered glass windows installation in Chandkheda, Ahmedabad"
- "Modern glass partition design in office, New CG Road Ahmedabad"
- "Aluminium sliding doors for residential apartment in Sabarmati, Ahmedabad"
```

---

## 📊 MONITORING & TESTING

### Tools to Use:

1. **Google PageSpeed Insights**
   - Mobile & desktop scores
   - CWV metrics
   - Recommendations

2. **Google Lighthouse**
   - Performance audit
   - Accessibility check
   - Best practices

3. **Google Search Console**
   - CWV report
   - Mobile usability
   - Core Web Vitals metrics

4. **WebPageTest**
   - Detailed waterfall
   - Video comparison
   - Film strip view

### Key Metrics to Monitor:

```
Metric                  Target        Current
─────────────────────────────────────────────
LCP (Largest Paint)     < 2.5s        [Measure]
FID (First Delay)       < 100ms       [Measure]
CLS (Layout Shift)      < 0.1         [Measure]
TBT (Blocking Time)     < 200ms       [Measure]
First Contentful Paint  < 1.8s        [Measure]
Total Blocking Time     < 300ms       [Measure]
Mobile PageSpeed        > 90          [Measure]
Desktop PageSpeed       > 95          [Measure]
```

---

## 📋 IMPLEMENTATION STEPS

### Step 1: Add Optimization Files
- [ ] Add `cwv-optimization.css` to all pages
- [ ] Add `cwv-optimization.js` to all pages

### Step 2: Update Image Tags
- [ ] Add alt tags to all images
- [ ] Set width/height attributes
- [ ] Add loading="lazy" to images below fold
- [ ] Add decoding="async" to all images

### Step 3: Preload Critical Resources
- [ ] Preload hero image in <head>
- [ ] Preload critical fonts
- [ ] Add preconnect directives

### Step 4: Minify & Compress
- [ ] Minify CSS
- [ ] Minify JavaScript
- [ ] Enable GZIP compression
- [ ] Convert images to WebP

### Step 5: Configure Cache Headers
- [ ] Set up .htaccess or nginx config
- [ ] Configure browser caching
- [ ] Set proper expiration times

### Step 6: Test & Monitor
- [ ] Run PageSpeed Insights
- [ ] Run Lighthouse audit
- [ ] Check Google Search Console CWV report
- [ ] Monitor metrics over time

---

## ✅ EXPECTED RESULTS

**Before Optimization:**
- PageSpeed Score: 65-75
- LCP: 3.2s
- FID: 120ms
- CLS: 0.15
- Mobile Score: 70

**After Optimization:**
- PageSpeed Score: 90-95
- LCP: 1.8s (-43%)
- FID: 85ms (-29%)
- CLS: 0.08 (-47%)
- Mobile Score: 90+

**Benefits:**
- Better search rankings
- Reduced bounce rate
- Improved user experience
- Higher conversion rates
- Better mobile usability

---

**Document Version:** 1.0  
**Status:** Ready for Implementation  
**Last Updated:** December 6, 2025

