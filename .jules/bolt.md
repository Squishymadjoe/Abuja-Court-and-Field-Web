## 2024-07-25 - Anti-Pattern: CSS Background Images for Content

**Learning:** Loading content images via CSS `background-image` is a performance anti-pattern. The browser's preload scanner cannot discover these images, which delays their download until the CSSOM is constructed and CSS is parsed. This is especially harmful for below-the-fold images, as it prevents the use of `loading="lazy"`, leading to unnecessary network requests on initial page load.

**Action:** Always use `<img>` tags for content images. For below-the-fold images, apply `loading="lazy"`. For above-the-fold (hero) images, use `fetchpriority="high"` to prioritize their download. This ensures optimal loading and improves metrics like Largest Contentful Paint (LCP) and First Contentful Paint (FCP).
