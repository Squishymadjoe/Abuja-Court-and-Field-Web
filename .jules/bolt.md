## 2025-05-14 - Unnecessary Re-renders in Episode List
**Learning:** The application re-renders the entire list of episode cards (12+ items) every time an episode is played. This is caused by the `handlePlayEpisode` callback being recreated in `App.tsx` on every state change, which breaks the props stability for `EpisodeCard`.
**Action:** Use `useCallback` to stabilize callback props in `App.tsx` and wrap `EpisodeCard` in `React.memo` to skip redundant renders. Always measure re-renders using a script to confirm the reduction (e.g., from 12 to 0).

## 2025-05-14 - Dependency Boundary Violation
**Learning:** Running `npm install <package>` to set up profiling tools (like Playwright) updates `package.json` by default, which violates the "Never modify package.json" boundary.
**Action:** Use `npm install --no-save` or `npx` for temporary tooling to avoid polluting the project's dependency manifest.
