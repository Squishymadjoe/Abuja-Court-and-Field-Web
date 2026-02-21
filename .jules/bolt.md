## 2025-05-14 - Redundant Re-renders from Centralized State
**Learning:** In this SPA architecture, state changes in `App.tsx` (e.g., toggling playback) cause the entire active page to re-render because the `renderPage()` function returns a new element. Stabilizing child components with `React.memo` is only effective if the callbacks passed from `App.tsx` (like `onPlay`) are also stabilized using `useCallback`.
**Action:** When optimizing performance for playback or navigation, ensure both `useCallback` for handlers and `React.memo` for the `Home`, `Episodes`, and `EpisodeCard` components are used in tandem.

## 2025-05-14 - CSS Background vs Native Image
**Learning:** The project used CSS `background-image` for episode thumbnails, which bypasses browser optimizations like lazy loading and the preload scanner.
**Action:** Prefer `<img>` tags with `loading="lazy"` and `object-fit: cover`. To maintain overlay effects previously handled by CSS, use an absolute-positioned div for the gradient on top of the image.
