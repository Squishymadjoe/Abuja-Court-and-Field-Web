## 2026-05-09 - [Render Leak via Manual Routing]
**Learning:** Manual routing using switch statements in a parent component causes the entire page component tree to re-render on every parent state change unless the result of the switch is memoized with useMemo. Combined with useCallback for callbacks passed down, this effectively isolates page-level re-renders from global state changes like playback toggling.
**Action:** Use useMemo for component branches in manual routing patterns to prevent 'render leaks' into page components.
