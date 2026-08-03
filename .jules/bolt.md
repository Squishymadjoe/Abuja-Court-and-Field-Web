## 2025-03-03 - [App.tsx Render Optimization]
**Learning:** React re-renders the entire page component tree when parent state (like audio player isPlaying / currentEpisode) changes.
**Action:** Use React.useCallback to stabilize callbacks and React.useMemo with Same Element Reference optimization to prevent unnecessary child page re-renders completely.
