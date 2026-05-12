## 2026-05-19 - [Render Leak in Manual Routing]
**Learning:** Manual routing using switch statements in React components (like `App.tsx`) is a major source of 'render leaks'. Even if the page component is not re-instantiated by React's reconciliation, the execution of the switch statement during parent re-renders can trigger re-renders down the tree if callbacks are unstable or if the result of the switch isn't memoized.
**Action:** Always wrap the results of manual routing in `useMemo` and ensure all parent-provided callbacks (like `onPlay`) are stabilized with `useCallback`. This is critical for preventing unnecessary re-renders of large lists (e.g., `EpisodeCard` lists) during global state changes like audio playback toggling.

## 2026-05-19 - [React 19 Memoization Persistence]
**Learning:** In React 19, `React.memo` remains highly effective for list items, but its performance benefits are easily negated if the parent component "leaks" renders by unstable references in props.
**Action:** When optimizing lists, prioritize a three-part synchronization: 1. `useCallback` for parent handlers, 2. `useMemo` for the route/list container branch, and 3. `React.memo` for the list item component itself.
