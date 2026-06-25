## 2025-05-15 - [Redundant Memoization]
**Learning:** Wrapping every component in React.memo is often redundant if the parent already memoizes the rendered element tree using useMemo. React bails out of rendering subtrees if the element reference is stable.
**Action:** Prioritize stabilizing component references in the parent router/layout before applying React.memo to every child component.
