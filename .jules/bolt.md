## 2025-02-23 - Stabilizing centralized state re-renders
**Learning:** In applications where audio player state is centralized in the root `App` component, toggling playback or changing episodes triggers a full-page re-render. This happens because callbacks passed to children (like `onPlay`) are re-created on every render unless stabilized.
**Action:** Always wrap top-level handlers in `useCallback` and memoize primary page components (`Home`, `Episodes`) to ensure that global UI updates (like the player footer) don't impact the performance of the main content area.

## 2025-02-23 - Correct casing for performance hints
**Learning:** React 19 (and earlier) requires camelCase for most DOM attributes. Using `fetchpriority` instead of `fetchPriority` triggers a console warning and may result in the attribute being ignored by the browser.
**Action:** Always use `fetchPriority` (camelCase) for image prioritization in React.
