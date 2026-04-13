## 2025-05-14 - Redundant Re-render Cascade in Episode List
**Learning:** In this React 19 SPA, toggling global playback state in the root `App` component triggered a full re-render of the `Episodes` page and all its `EpisodeCard` children (16 renders total due to StrictMode). Simply wrapping `EpisodeCard` in `React.memo` is insufficient if the parent page component re-instantiates or if the `onPlay` callback is unstable.
**Action:** Always synchronize three optimizations: stabilize parent callbacks with `useCallback`, stabilize the page component branch with `useMemo` in the router, and wrap list items in `React.memo`. This combination reduced state-change renders from 16 to 2 (App only).

## 2025-05-14 - Missing Entry Point in Vite index.html
**Learning:** The application's `index.html` was missing a `<script type="module" src="/index.tsx"></script>` tag. While Vite might handle this in some dev environments, it resulted in a production build that was just an empty shell.
**Action:** Ensure `index.html` explicitly references the entry point after the importmap to guarantee both dev and production builds function correctly.
