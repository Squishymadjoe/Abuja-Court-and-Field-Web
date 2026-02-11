## 2025-05-15 - [Preventing Unnecessary Re-renders in Lists]
**Learning:** The application's centralized state in `App.tsx` (e.g., `isPlaying`) triggers re-renders of the entire component tree, including the episode list, whenever the audio player is toggled. Even if props appear stable, child components like `EpisodeCard` re-render because their callbacks (e.g., `onPlay`) are recreated on every parent render.
**Action:** Always pair `useCallback` for event handlers in `App.tsx` with `React.memo` for list items to successfully skip re-renders. Use `memo` without `React.FC` to avoid TypeScript inference issues in React 19.

## 2025-05-15 - [Scoped Changes and Build Integrity]
**Learning:** Modifying `index.html` to fix a missing entry point, while necessary for the app to function/build correctly in the sandbox, is flagged as "scope creep" in this repository's performance PRs.
**Action:** Keep performance PRs strictly limited to optimization logic (e.g., memoization). Document measurement results from the sandbox environment even if the final PR reverts the build-fix.
