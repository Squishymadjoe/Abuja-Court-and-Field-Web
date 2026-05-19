## 2026-05-18 - [Render Leak in Routing Switch]
**Learning:** Manual routing via switch statements in a parent component (like App.tsx) creates new component instances on every parent render. This "leaks" re-renders to all children, breaking React.memo optimizations even if their props are stable.
**Action:** Always wrap the routing switch result in useMemo or use a dedicated routing library to ensure stable component instances across renders when global state (like playback) changes.
