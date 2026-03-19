## 2025-05-22 - Stabilizing the Page Branch in App.tsx

**Learning:** In a single-page application where `App.tsx` handles routing via a `renderPage` function, simply wrapping page components in `React.memo` is not enough to prevent re-renders when the parent `App` component's state changes (like playback status). This is because the function normally returns a fresh JSX element tree on every execution, which React treats as a new set of elements during reconciliation.

**Action:** Use `useMemo` to stabilize the returned JSX element for the current page. By memoizing the element itself based on the current route and stable callbacks, the entire reconciliation for the page can be skipped when unrelated parent state changes. This is a powerful "Same Element Reference" optimization that complements `React.memo` and `useCallback`.
