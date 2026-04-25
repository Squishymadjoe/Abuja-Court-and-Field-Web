## 2026-04-12 - The Three-Part Stabilization Pattern
**Learning:** In this architecture, preventing re-renders of the episode list during playback state changes requires three concurrent optimizations: stabilizing parent callbacks with `useCallback`, stabilizing the router's branch with `useMemo`, and memoizing the child components with `React.memo`. Missing any one of these allows the render signal to leak through.
**Action:** Always verify that the entire chain from state owner to terminal component is stable when optimizing list renders.
