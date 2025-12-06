# Blog Expansion Quick Reference Guide

## 🚀 How to Add a New Blog Post in 5 Minutes

### Step 1: Copy Template
```
1. Open blog-post-1.html
2. Save As: blog-post-[NUMBER].html
3. Example: blog-post-7.html for the 7th post
```

### Step 2: Update Meta Information
Replace these values in the new file:

```html
<!-- Canonical URL -->
<link rel="canonical" href="https://ganeshglasscenter.com/blog/your-article-url.html">

<!-- Meta Description -->
<meta name="description" content="Your SEO description (155 characters max)">

<!-- Keywords -->
<meta name="keywords" content="keyword1, keyword2, keyword3, local keywords">

<!-- Article Title -->
<title>Your Article Title | Ganesh Glass Center Blog</title>
```

### Step 3: Update Content
- Change H1 title in hero section
- Update category badge color and text
- Set date, author info, read time
- Replace featured image placeholder URL
- Update Table of Contents links and content
- Add your article text and sections
- Update Related Posts section
- Change canonical URL

### Step 4: Update Schema Markup
Find and update these dates:
```json
"datePublished": "2025-12-DD",
"dateModified": "2025-12-DD"
```

### Step 5: Add to Sitemap
Open `sitemap.xml` and add:
```xml
<url>
    <loc>https://ganeshglasscenter.com/blog-post-7.html</loc>
    <lastmod>2025-12-DD</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
</url>
```

---

## 📂 Blog Structure

```
Website Root (c:\Users\TUF\Desktop\FORSHOp\)
├── blog.html                      # Main blog listing
├── blog-post-1.html               # Individual articles
├── blog-post-2.html
├── blog-post-3.html
├── ... (more posts)
├── blog-post-6.html
├── sitemap.xml                    # Updated with blog URLs
├── index.html                     # Updated with blog nav link
├── services.html                  # Updated with blog nav link
├── contact.html                   # Updated with blog nav link
└── BLOG-STRUCTURE-GUIDE.md        # Detailed expansion guide
```

---

## 🎨 Category System Reference

### Color Codes & Data Attributes

| Category | Color | Hex Code | Data Attribute | Badge Color | Examples |
|----------|-------|----------|-----------------|-------------|----------|
| Glass Tips | Blue | #dbeafe | `data-category="glass-tips"` | #3b82f6 | Window selection, tempered glass benefits |
| Aluminium Maintenance | Green | #dcfce7 | `data-category="aluminium"` | #10b981 | Door maintenance, cleaning guides |
| Pricing Guides | Orange | #fed7aa | `data-category="pricing"` | #f97316 | Cost breakdowns, pricing comparison |
| Office Glass Design | Purple | #f3e8ff | `data-category="office"` | #a855f7 | Partition design, commercial solutions |

### Adding New Category
To add a 5th category:

1. **In blog.html**, add new filter button:
```html
<button class="category-filter px-4 py-2 rounded-lg font-semibold transition"
        data-category="new-category">
    New Category
</button>
```

2. **In blog-post-X.html**, use data attribute:
```html
<span class="inline-block bg-[COLOR] px-3 py-1 rounded-full text-sm font-bold">
    New Category
</span>
```

3. **Update blog.html JavaScript** (optional, for button styling)

---

## 📊 GA4 Event Naming Convention

### Blog Listing Events
- Pattern: `blog_filter_[category]`
- Examples:
  - `blog_filter_glass-tips`
  - `blog_filter_aluminium`
  - `blog_filter_pricing`
  - `blog_filter_office`

### Article Events
- Pattern: `blog_post_[action]`
- Examples:
  - `blog_post_scroll_25`
  - `blog_post_30_seconds`
  - `blog_post_sticky_call`

### How to Add Custom Events
```javascript
function trackEvent(eventName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            'event_category': 'blog_engagement',
            'event_label': 'your_label',
            'page_title': document.title
        });
    }
}

// Usage:
// <a onclick="trackEvent('blog_custom_event')">Click Me</a>
```

---

## 🔗 Internal Linking Strategy

### Related Posts Pattern
Each blog post should link to 3 related articles:

```html
<div class="related-posts">
    <div class="related-card">
        <h4>Article Title 1</h4>
        <p>Brief description...</p>
        <a href="blog-post-X.html">Read More →</a>
    </div>
    <div class="related-card">
        <h4>Article Title 2</h4>
        <p>Brief description...</p>
        <a href="blog-post-Y.html">Read More →</a>
    </div>
    <div class="related-card">
        <h4>Article Title 3</h4>
        <p>Brief description...</p>
        <a href="blog-post-Z.html">Read More →</a>
    </div>
</div>
```

### Best Practices
- Link to posts in same category when possible
- Link to complementary topics
- Rotate related posts every 2-3 months
- Create linking pyramid (newer posts to older popular ones)

---

## 📝 SEO Checklist for New Blog Post

Before publishing, verify:

### Content
- [ ] Title is compelling (50-60 characters)
- [ ] Meta description is unique (150-160 characters)
- [ ] Keywords naturally incorporated (not stuffed)
- [ ] H1 tag used only once
- [ ] H2, H3 headings create hierarchy
- [ ] Content length: 1000+ words recommended
- [ ] Bullet points and lists for readability

### Technical
- [ ] Title tag updated
- [ ] Canonical URL correct
- [ ] OG tags updated
- [ ] Meta robots tag set correctly
- [ ] Geographic meta tags included
- [ ] Schema markup validated (Article, FAQ, Breadcrumb)
- [ ] Images have alt text and title attributes

### CTA & Conversion
- [ ] Inline CTA box added (mid-article)
- [ ] Phone number correct (+91-98765-43210)
- [ ] WhatsApp link formatted correctly
- [ ] GA4 event tracking implemented
- [ ] Related posts linked
- [ ] Back to blog button included

### Publishing
- [ ] Saved with correct filename (blog-post-X.html)
- [ ] Added to sitemap.xml
- [ ] Navigation links updated (if new category)
- [ ] Tested on desktop, tablet, mobile
- [ ] Links verified to work
- [ ] Submit to Google Search Console

---

## 📱 Image Optimization

### Required Dimensions
- Featured image: 800x500px (recommended)
- Featured image alt text: 100-125 characters
- Meta image (OG): 1200x630px minimum
- Mobile: Scales down responsively

### Image File Format
- JPEG for photos/complex images
- PNG for graphics/screenshots
- WebP for modern browsers (optional)
- Max file size: 100KB per image

### Placeholder to Real Image
Replace:
```html
<img src="https://via.placeholder.com/800x500?text=Article+Title" 
     alt="Your descriptive alt text">
```

With:
```html
<img src="/images/blog/article-slug.jpg" 
     alt="Descriptive text (100-125 chars) about the image">
```

---

## 🎯 Content Calendar Template

Create this in a spreadsheet for planning:

| Week | Post Number | Title | Category | Keywords | Status | Due Date |
|------|-------------|-------|----------|----------|--------|----------|
| 1 | 7 | Topic Title | Category | keyword1, keyword2 | Draft | 2025-12-DD |
| 2 | 8 | Topic Title | Category | keyword1, keyword2 | Draft | 2025-12-DD |
| 3 | 9 | Topic Title | Category | keyword1, keyword2 | Draft | 2025-12-DD |

**Publishing Pace Recommendation:**
- Month 1-2: 1-2 posts per week
- Month 2-3: 2 posts per week
- Month 3+: Consistency (2+ per week)

---

## 📞 CTA Customization

### Update Phone Number (All 3 Locations)

1. **In CTA Box (inline article)**
```html
<a href="tel:+919876543210" ...>📞 Call Now</a>
```

2. **In Sticky Mobile CTA**
```html
<a href="tel:+919876543210" class="sticky-call-btn">📞 Call</a>
```

3. **In Floating Button**
```html
<a href="tel:+919876543210" class="float-btn call-btn">📞</a>
```

### Update WhatsApp Message (All 3 Locations)

Replace message text in:
```
https://wa.me/919876543210?text=Hello%2C%20I%20need%20...
```

Current messages:
- Blog listing: "I need glass / aluminium work"
- Blog posts: Article-specific messages
- Maintenance: "I need maintenance services"

---

## 🔍 Testing Checklist

After creating new post, test:

### Desktop Browser
- [ ] All links work
- [ ] Images load properly
- [ ] Typography is readable
- [ ] CTAs are clickable
- [ ] Schema renders correctly
- [ ] Mobile view switches properly

### Mobile Browser
- [ ] Sticky CTA bar appears
- [ ] Floating buttons visible
- [ ] Text is readable (no zooming needed)
- [ ] Images scale properly
- [ ] Links are large enough to tap
- [ ] Page loads quickly

### GA4 Integration
- [ ] Events fire when clicking CTAs
- [ ] Scroll depth events trigger
- [ ] Time on page tracks
- [ ] Event labels are correct
- [ ] No console errors

### SEO Validation
- [ ] Title tag displays in browser tab
- [ ] Meta description visible in GSC
- [ ] Canonical URL is correct
- [ ] OG tags populated (test in social)
- [ ] Schema markup valid (via schema.org validator)

---

## 📈 Monitoring & Analytics

### KPIs to Track Per Post
- Pageviews
- Unique visitors
- Bounce rate
- Average time on page
- Scroll depth % (25, 50, 75)
- CTA click-through rate
- Conversion rate (calls/leads)

### Monthly Blog Review
1. Identify top-performing posts
2. Analyze keyword rankings (GSC)
3. Review GA4 event data
4. Check mobile vs desktop traffic split
5. Update underperforming posts
6. Plan next month's content

### Tool Links
- Google Search Console: https://search.google.com/search-console
- Google Analytics 4: https://analytics.google.com
- Schema.org Validator: https://validator.schema.org

---

## 💡 Pro Tips

1. **Keyword Research**: Use Google Keyword Planner for long-tail keywords
2. **Content Clusters**: Group related posts for SEO power
3. **Update Older Posts**: Refresh top-performing posts monthly
4. **Internal Links**: Each post should link to 3-5 other posts
5. **Call-to-Action**: Every post needs 2-3 CTAs minimum
6. **Mobile First**: Always test on mobile before publishing
7. **Consistent Branding**: Maintain same CTA colors and messaging
8. **GA4 Setup**: Ensure GA4 property ID is correct (currently G-XXXXXXXXXX)

---

## 🚀 Launch Checklist

When publishing a new blog post:

1. [ ] File created: `blog-post-X.html`
2. [ ] Content complete and proofread
3. [ ] All links tested and working
4. [ ] Meta tags updated (title, description)
5. [ ] Schema markup validated
6. [ ] Images added with alt text
7. [ ] GA4 events configured
8. [ ] Related posts linked
9. [ ] Added to sitemap.xml
10. [ ] Tested on mobile/tablet/desktop
11. [ ] Submit to Google Search Console
12. [ ] Share on social media
13. [ ] Monitor GA4 for first 7 days
14. [ ] Gather engagement data

---

## 📞 Support & Questions

For implementation details, refer to:
- **Detailed Guide**: BLOG-STRUCTURE-GUIDE.md (600+ lines)
- **Deployment Info**: BLOG-DEPLOYMENT-COMPLETE.md
- **Main Website**: index.html, services.html, contact.html

---

*Quick Reference Version 1.0*
*For Blog Expansion & Ongoing Management*
*Created: December 2025*
