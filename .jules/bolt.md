## 2026-03-22 - Stabilizing React Route Rendering

**Learning:** In Single Page Applications (SPAs) where the routing logic is handled by a switch-case or conditional function within a parent component (like `App.tsx`), returning JSX directly from the function (e.g., `return <Home />`) causes the entire page component tree to be re-instantiated on every parent render. This bypasses `React.memo` optimizations on the page components because the element reference is always new.

**Action:** Wrap the routing result in `useMemo`, keyed to the current route/page state. This stabilizes the component tree reference, allowing `React.memo` on the page components (and their children) to effectively skip re-renders when global state (like an audio player) updates in the parent.

## 2026-03-22 - Python Playwright for Re-render Measurement

**Learning:** When browser-based React DevTools are unavailable, component re-renders can be precisely measured by instrumenting components with `useEffect` console logs and using a Python Playwright script to intercept and count these logs during automated interactions.

**Action:** Use `page.on("console", ...)` in Playwright to track specific log patterns (e.g., "[RENDER] ComponentName") to create quantitative performance baselines and verify optimizations.
