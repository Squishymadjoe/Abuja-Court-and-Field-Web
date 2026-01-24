# Bolt's Journal - Critical Learnings

## 2024-07-25 - Anti-Pattern: CSS Background Images for Content
**Learning:** The codebase frequently uses `style={{ backgroundImage: 'url(...)' }}` on `<div>` elements to display content images, such as episode thumbnails. This is a performance anti-pattern because it prevents the browser from being able to optimize image loading. Specifically, it blocks the use of `loading="lazy"`, which is critical for deferring the download of below-the-fold images and improving initial page load times (LCP/FCP).
**Action:** Proactively replace `div` elements with CSS background images with `<img>` tags. Use `loading="lazy"` for all below-the-fold images and `fetchpriority="high"` for critical above-the-fold images. This will be my primary optimization strategy for image-heavy components in this repository.
