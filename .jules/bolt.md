## 2026-04-12 - [Broken Production Build Due to Missing Entry Point]
**Learning:** The `index.html` was missing a `<script type="module" src="/index.tsx"></script>` tag. In this Vite setup, this resulted in a "successful" build that generated an empty application shell without any JavaScript.
**Action:** Always verify that `index.html` correctly references the main entry point, and verify build output functionality if the build seems suspiciously small or fast.

## 2026-04-12 - [Manual Router Re-render Chain]
**Learning:** In this application's architecture, the `App` component's manual routing (using a switch statement in the render path) causes the entire page tree to re-instantiate on any state change (like toggling playback).
**Action:** Stabilize the routing branch using `useMemo` in the parent and `useCallback` for passed functions, combined with `React.memo` on the child components to achieve zero re-renders on sibling state changes.
