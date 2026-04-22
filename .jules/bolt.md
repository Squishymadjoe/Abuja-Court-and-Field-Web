## 2026-04-22 - Stabilizing Episode List Renders
**Learning:** In this SPA architecture, updating global state (like `isPlaying` in `App.tsx`) caused the entire page branch to re-render because `renderPage` was a function called in the render body. Stabilizing the page with `useMemo` and the callback with `useCallback`, combined with `React.memo` on list items, is necessary to achieve zero re-renders on state toggle.
**Action:** Always check if the router/page-switcher in `App.tsx` is memoized when optimizing sub-component re-renders.

**Learning:** Vite-based projects in this environment require the `index.html` to reference the source entry point (e.g., `/index.tsx`) directly via a script tag for the production build to include the bundled JS.
**Action:** Verify `index.html` has a module script entry point before running production builds.
