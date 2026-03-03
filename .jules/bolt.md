## 2025-01-24 - Stable Element Trees in Switch-based Routing

**Learning:** In a Single Page Application (SPA) where pages are rendered via a switch-like function (e.g., `renderPage()`) in the root component, `React.memo` on page components (like `Home` or `Episodes`) is often bypassed if the root component re-renders. This is because the function returns a fresh element tree every time, which React treats as a new child, triggering a full reconciliation even if props are identical.

**Action:** When using state-driven routing within a single component, always wrap the rendered page output in `useMemo` to stabilize the element reference. This ensures that `React.memo` on the child components can effectively block unnecessary re-renders when global state (like playback status) changes.
