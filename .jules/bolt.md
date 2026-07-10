# Bolt Performance Journal
## 2026-07-10 - [App Routing Render Leak Fix]
**Learning:** Manual routing using a switch statement in a parent component (like App.tsx) can cause entire page component trees to re-render on every parent state change (e.g., audio player playback toggle).
**Action:** Use 'Same Element Reference' optimization by wrapping the routing logic in `useMemo`. This, combined with stabilizing callbacks via `useCallback`, prevents unnecessary child re-renders without needing `React.memo` on every page component.
