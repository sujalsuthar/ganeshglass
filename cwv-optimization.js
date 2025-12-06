// Core Web Vitals & Image SEO Optimization Script
// Add this to all HTML files in the <head> section

(function() {
  'use strict';
  
  // 1. LAZY LOADING CONFIGURATION
  const lazyLoadConfig = {
    root: null,
    rootMargin: '50px',
    threshold: 0.01
  };
  
  // Initialize Intersection Observer for lazy loading
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          
          // Load image
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
          }
          
          // Add loaded class
          img.classList.add('loaded');
          
          // Stop observing
          imageObserver.unobserve(img);
          
          // Track GA4 event
          if (typeof gtag !== 'undefined') {
            gtag('event', 'image_lazy_loaded', {
              'image_src': img.src || img.dataset.src,
              'page_title': document.title
            });
          }
        }
      });
    }, lazyLoadConfig);
    
    // Observe all lazy-load images
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback: load images immediately if IntersectionObserver not supported
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
      if (img.dataset.srcset) img.srcset = img.dataset.srcset;
    });
  }
  
  // 2. MEASURE CORE WEB VITALS
  function measureCoreWebVitals() {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          gtag('event', 'page_view', {
            'engagement_time_msec': lastEntry.renderTime || lastEntry.loadTime,
            'session_engaged': true,
            'metric_name': 'LCP',
            'metric_value': Math.round(lastEntry.renderTime || lastEntry.loadTime)
          });
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch(e) {
        console.log('LCP measurement not supported');
      }
      
      // First Input Delay (FID) / Total Blocking Time (TBT)
      try {
        const fidObserver = new PerformanceObserver(list => {
          list.getEntries().forEach(entry => {
            gtag('event', 'page_view', {
              'metric_name': 'FID',
              'metric_value': Math.round(entry.processingDuration),
              'session_engaged': true
            });
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch(e) {
        console.log('FID measurement not supported');
      }
      
      // Cumulative Layout Shift (CLS)
      try {
        let clsScore = 0;
        const clsObserver = new PerformanceObserver(list => {
          list.getEntries().forEach(entry => {
            if (!entry.hadRecentInput) {
              clsScore += entry.value;
              gtag('event', 'page_view', {
                'metric_name': 'CLS',
                'metric_value': Math.round(clsScore * 100) / 100,
                'session_engaged': true
              });
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch(e) {
        console.log('CLS measurement not supported');
      }
    }
  }
  
  // 3. OPTIMIZE IMAGES ON PAGE LOAD
  function optimizeImages() {
    document.querySelectorAll('img').forEach(img => {
      // Add loading="lazy" if not present
      if (!img.loading) {
        img.loading = 'lazy';
      }
      
      // Add decoding="async" for non-blocking decoding
      if (!img.decoding) {
        img.decoding = 'async';
      }
      
      // Ensure width/height attributes to prevent CLS
      if (!img.width || !img.height) {
        img.style.aspectRatio = '1';
      }
    });
  }
  
  // 4. REDUCE MAIN THREAD BLOCKING
  function deferNonCritical() {
    // Defer analytics
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', measureCoreWebVitals);
    } else {
      measureCoreWebVitals();
    }
    
    // Defer non-critical CSS
    const links = document.querySelectorAll('link[data-defer]');
    links.forEach(link => {
      link.removeAttribute('data-defer');
    });
  }
  
  // 5. OPTIMIZE FONT LOADING
  function optimizeFonts() {
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        document.body.classList.add('fonts-loaded');
        gtag('event', 'fonts_loaded', {
          'timestamp': performance.now()
        });
      });
    }
  }
  
  // 6. PRELOAD CRITICAL RESOURCES
  function preloadCritical() {
    const hero = document.querySelector('[role="banner"] img');
    if (hero && hero.src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = hero.src;
      document.head.appendChild(link);
    }
  }
  
  // 7. DEFER JAVASCRIPT EXECUTION
  function deferScripts() {
    const scripts = document.querySelectorAll('script[data-defer]');
    scripts.forEach(script => {
      script.removeAttribute('data-defer');
    });
  }
  
  // 8. REQUEST IDLE CALLBACK FOR NON-CRITICAL TASKS
  function scheduleIdleTasks() {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        optimizeImages();
        deferNonCritical();
      });
    } else {
      setTimeout(() => {
        optimizeImages();
        deferNonCritical();
      }, 2000);
    }
  }
  
  // 9. MONITOR PAGE PERFORMANCE
  function monitorPerformance() {
    if ('PerformanceNavigationTiming' in window) {
      window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const connectTime = perfData.responseEnd - perfData.requestStart;
        const renderTime = perfData.domComplete - perfData.domLoading;
        
        gtag('event', 'page_performance', {
          'page_load_time': pageLoadTime,
          'connection_time': connectTime,
          'render_time': renderTime,
          'page_title': document.title
        });
      });
    }
  }
  
  // Initialize all optimizations
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      scheduleIdleTasks();
      optimizeFonts();
      preloadCritical();
      monitorPerformance();
    });
  } else {
    scheduleIdleTasks();
    optimizeFonts();
    preloadCritical();
    monitorPerformance();
  }
})();

// CRITICAL RENDERING PATH OPTIMIZATION
// Minimize CSS and JavaScript blocking

// 10. SERVICE WORKER REGISTRATION (Optional - for advanced caching)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(() => {
    // Service worker not available
  });
}
