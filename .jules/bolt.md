## 2025-03-05 - [Initial setup]
**Learning:** React re-renders can be triggered unnecessarily by parent state updates (such as toggle audio player state), causing manual routing switch-case page components to re-render.
**Action:** Implement "Three-Part Synchronization" (stable callbacks with useCallback, stable routing with useMemo dependencies, and stable children) to fully isolate the manual page component tree from unrelated parent state.
