## 2026-05-22 - [Render Leak in Manual Routing]
**Learning:** In a manual routing architecture (using a switch statement in the parent), `React.memo` on child components (like `EpisodeCard`) is ineffective if the page component itself is re-instantiated on every parent render. This "render leak" happens because a new component instance is created, even if the props are stable.
**Action:** Always wrap the manual routing switch statement in `useMemo` to stabilize the page component instance, in addition to using `useCallback` for callbacks and `React.memo` for the leaf components.
