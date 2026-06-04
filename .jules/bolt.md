## 2026-05-23 - [Render Leak Prevention in Manual Routing]
**Learning:** Manual routing using switch statements in a parent component that holds global state (like playback) causes the entire page subtree to re-instantiate on every parent render. This "render leak" invalidates React.memo in children because their container is always a new instance.
**Action:** Always wrap the routing switch in useMemo and stabilize parent callbacks with useCallback to ensure child memoization is effective.

## 2026-05-23 - [Effective List Item Memoization]
**Learning:** Wrapping list items (like EpisodeCard) in React.memo is only effective if the callbacks passed to them (like onPlay) are stabilized via useCallback in the parent.
**Action:** Always verify that parent callbacks are stable before applying React.memo to list components.
