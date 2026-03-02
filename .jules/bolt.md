# Bolt's Journal

## 2025-05-14 - Initial Assessment
**Learning:** The application uses a centralized state in `App.tsx` which triggers re-renders of the entire element tree whenever `isPlaying` or `currentEpisode` changes. This is especially noticeable in the episode lists.
**Action:** Implement memoization for the page components and episode cards, and stabilize callbacks using `useCallback`.
