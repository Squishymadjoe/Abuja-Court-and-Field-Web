## 2025-03-25 - Stabilizing JSX branches with useMemo
**Learning:** In this SPA architecture, wrapping child components with React.memo is insufficient if the parent (App.tsx) re-instantiates the entire page component tree on every state change. Using useMemo to stabilize the result of the routing logic (renderPage) is critical to allow React.memo to work on child components.
**Action:** Always check if the routing logic in the root component returns fresh JSX elements on every render and stabilize it with useMemo when global state (like audio playback) causes frequent parent updates.
