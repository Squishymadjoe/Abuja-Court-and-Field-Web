# BOLT'S JOURNAL - CRITICAL LEARNINGS ONLY

## 2024-07-18 - CSS Background Images vs. `<img>` Tags

**Learning:** This codebase uses CSS `background-image` properties to load significant content images in components like `Home.tsx`. This is a performance anti-pattern because the browser's preload scanner cannot discover these images, delaying their download until the CSS is parsed. This negatively impacts Largest Contentful Paint (LCP) and initial load times.

**Action:** When encountering images loaded via CSS `background-image`, convert them to standard `<img>` tags. For below-the-fold images, apply the `loading="lazy"` attribute to defer loading. For above-the-fold (hero) images, use attributes like `fetchpriority="high"` to ensure they are loaded eagerly. This allows the browser to prioritize and optimize image loading much more effectively.
