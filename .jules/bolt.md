## 2024-05-20 - Memoization Chain in SPA Routing
**Learning:** In a Single Page Application (SPA) where the router returns a JSX branch (e.g., `renderPage()`), simply wrapping child components in `React.memo` is insufficient if the parent re-renders. The parent's state change causes the function to execute again, creating a new element reference for the child, which React treats as a change regardless of whether the child is memoized.
**Action:** Use `useMemo` to stabilize the JSX branch returned by the router, ensuring the element reference remains the same unless the route changes. This, combined with `useCallback` for event handlers and `React.memo` for the components, completes the memoization chain.

## 2024-05-20 - Missing Entry Point in Vite Build
**Learning:** If `index.html` is missing the `<script type="module" src="/index.tsx"></script>` entry point, Vite's production build will still "succeed" but only transform 2 modules (likely just the HTML) and produce an empty application shell.
**Action:** Always check the module transformation count in the build output. A healthy build for this project should transform ~37 modules.
