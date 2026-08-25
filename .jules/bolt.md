## 2025-05-18 - Prevent render leaks in manual routing switches
**Learning:** In top-level manual routing implementations using `switch(currentPage)`, state updates for orthogonal features (e.g., sticky audio player controls) trigger re-renders of the root component, causing the active page JSX element to be re-instantiated on every render.
**Action:** Stabilize event handler callbacks with `useCallback` and wrap the switch router in `useMemo`. This allows React to leverage its Same Element Reference optimization and bail out of re-rendering active page subtrees.
