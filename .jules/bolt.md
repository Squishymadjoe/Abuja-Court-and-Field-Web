## 2025-05-14 - Unnecessary Re-renders in Episode List
**Learning:** The application re-renders the entire list of episode cards (12+ items) every time an episode is played. This is caused by the `handlePlayEpisode` callback being recreated in `App.tsx` on every state change, which breaks the props stability for `EpisodeCard`.
**Action:** Use `useCallback` to stabilize callback props in `App.tsx` and wrap `EpisodeCard` in `React.memo` to skip redundant renders.

## 2025-05-14 - Dependency Boundary Violation
**Learning:** Running `npm install <package>` to set up profiling tools updates `package.json` by default, which violates the "Never modify package.json" boundary.
**Action:** Use `npm install --no-save` or `npx` for temporary tooling to avoid polluting the project's dependency manifest.

## 2025-05-14 - Missing Entry Point in Vite Production Builds
**Learning:** The project's `index.html` lacked a `<script type="module">` tag. While some dev servers might handle this, a Vite production build requires an explicit entry point to bundle the application correctly.
**Action:** Always verify that `index.html` contains the necessary `<script type="module" src="/index.tsx"></script>` tag for the build process.

## 2025-05-14 - CI Failure with Missing Lock File
**Learning:** Enabling `cache: npm` in `actions/setup-node` requires a `package-lock.json` file to be committed. Since the project policy is not to commit the lock file, the CI fails when caching is enabled.
**Action:** Disable npm caching in the CI workflow when no lock file is present in the repository.
