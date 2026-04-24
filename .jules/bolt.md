## 2026-04-24 - [Routing Optimization with useMemo]
**Learning:** In a React application with a manual routing pattern (switch statement), state changes in the root App component (like media playback progress) can cause the entire page component tree to be re-instantiated on every render if the route branch is not stabilized.
**Action:** Use 'useMemo' to wrap the routing logic, ensuring the page component reference remains stable unless the current page actually changes. Combined with 'React.memo' on child components and 'useCallback' for parent handlers, this completely eliminates unnecessary re-renders in the view hierarchy.

## 2026-04-24 - [React 19 Prop Naming]
**Learning:** React 19 now expects 'fetchPriority' (camelCase) for the image loading priority attribute. Using 'fetchpriority' (lowercase) triggers console warnings and may fail to apply correctly.
**Action:** Always use camelCase for 'fetchPriority' in JSX when targeting React 19+.
