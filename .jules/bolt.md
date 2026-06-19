## 2026-06-19 - Prevent render leaks in manual routing
**Learning:** Manual routing using a switch statement in a parent component that holds volatile state (e.g., audio playback) triggers full-page re-renders on every state change, even if the page content is independent.
**Action:** Stabilize page rendering with `useMemo`, wrap child callbacks in `useCallback`, and use `React.memo` for page-level components to isolate them from unrelated parent state updates.
