## 2026-05-18 - [Manual Routing Render Leaks]
**Learning:** Manual switch-case routing in a root component causes the entire page tree to be re-instantiated on every parent render. This breaks `React.memo` in child components because the child is always a "new" instance from React's perspective.
**Action:** Use 'Three-Part Synchronization': 1) Stabilize parent callbacks with `useCallback`, 2) Wrap the switch-case result in `useMemo` (excluding global state), and 3) Wrap child components in `React.memo`.

## 2026-05-18 - [Playwright Python Syntax]
**Learning:** Python does not support inline regex literals like `/pattern/`. Using them in `get_by_role(name=...)` results in a SyntaxError.
**Action:** Use `re.compile("pattern")` when performing fuzzy or multi-match text lookups in Playwright Python scripts.
