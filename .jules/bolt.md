## 2025-05-15 - [Scope Creep & Broken Builds]
**Learning:** Fixing structural issues like a missing entry point in `index.html` while working on a performance optimization is considered scope creep and leads to PR rejection, even if the fix is necessary for the app to run.
**Action:** Focus exclusively on the performance improvement. Use temporary local fixes for profiling and verification, but revert them before submission.

## 2025-05-15 - [React 19 Rendering Stabilization]
**Learning:** In React 19, even with stable props, components can re-render if the parent returns a new JSX element (e.g., via a switch statement in the render body). Memoizing the returned element with `useMemo` is required to allow child `React.memo` components to skip re-renders.
**Action:** Always pair `useCallback` (for props) with `useMemo` (for the component branch) in routing or conditional logic to achieve true re-render isolation.
