# BOLT'S JOURNAL - CRITICAL LEARNINGS ONLY

## 2025-05-22 - Global State Re-render Cascade
**Learning:** Toggling centralized state in `App.tsx` (e.g., audio player status) triggers a full re-render of the active page component. In pages like `Episodes`, this results in all `EpisodeCard` items re-rendering even if they haven't changed.
**Action:** Always pair `useCallback` for event handlers passed from `App` with `React.memo` for list items to ensure stable references and skip redundant reconciliation.
