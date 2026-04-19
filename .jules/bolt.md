## 2026-04-19 - Synchronized Callback and Router Memoization
**Learning:** In a manually routed SPA, optimizing list item re-renders requires a three-way synchronization: stabilizing parent callbacks with \`useCallback\`, stabilizing the page instance in the router with \`useMemo\`, and wrapping list items in \`React.memo\`. If the router branch isn't memoized, the entire page re-instantiates on any parent state change, defeating \`React.memo\` on its children.
**Action:** Always check if the routing logic is causing page-level re-mounts/re-renders when applying component-level memoization.
