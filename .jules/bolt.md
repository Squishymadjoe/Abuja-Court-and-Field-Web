## 2026-04-18 - [React 19 Re-render Stabilization]
**Learning:** In a React 19 SPA with a global audio player state, toggling playback causes the entire page content to re-render if the page instances are not memoized. Stabilization requires a three-pronged approach: `useCallback` for parent-to-child callbacks, `useMemo` for the component tree in the router, and `React.memo` for the leaf components.
**Action:** Always verify if a root-level state change (like a player toggle) is causing unnecessary re-renders in static lists, and apply the callback/routing/component memoization pattern.

## 2026-04-18 - [Vite Production Build Entry Point]
**Learning:** In this Vite environment, the `index.html` was missing a `<script type="module" src="/index.tsx">` tag. This resulted in an empty production build, even though `npm run build` completed successfully.
**Action:** Ensure `index.html` has a direct reference to the source entry point when working with Vite to ensure the bundle is correctly generated and loaded.
