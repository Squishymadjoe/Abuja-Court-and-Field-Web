## 2025-03-08 - [React Re-render Optimization in Abuja Court & Field]
**Learning:** In this SPA, toggling the playback state in the parent `App.tsx` caused the entire episode list on the "Episodes" page to re-render. This happened because:
1. `handlePlayEpisode` was being re-created on every render.
2. The JSX returned by `renderPage()` was being re-created, making `React.memo` on the page components (Home, Episodes) ineffective as they received "new" elements.
3. `EpisodeCard` components lacked memoization.

**Action:**
- Wrap parent callbacks passed as props in `useCallback`.
- Use `useMemo` for the routing/page-rendering logic to stabilize the component instance between re-renders.
- Apply `React.memo` to list items (`EpisodeCard`) and page-level components (`Home`, `Episodes`) to prevent unnecessary subtree updates.
