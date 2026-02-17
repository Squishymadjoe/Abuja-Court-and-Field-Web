## 2025-05-15 - [Centralized State Bottleneck]
**Learning:** The application's centralized state in `App.tsx` (e.g., `isPlaying`, `currentEpisode`) triggers re-renders of the entire component tree, including the large episode list, on every playback toggle.
**Action:** Always wrap playback handlers in `useCallback` and memoize list items (`EpisodeCard`) and page containers (`Episodes`, `Home`) to prevent cascade re-renders.

## 2025-05-15 - [Vite Entry Point Sensitivity]
**Learning:** If the `<script type="module" src="/index.tsx"></script>` entry point is missing from `index.html`, `npm run build` may succeed but generate an empty shell. However, adding it back in a performance PR can be flagged as out-of-scope architectural change.
**Action:** Use diagnostic entry points for measurement but ensure `index.html` is reverted to its original state before submission, unless explicitly asked to fix it.

## 2025-05-15 - [Lockfile Boundary Violations]
**Learning:** Running `npm install` in this environment can generate a `package-lock.json` file which, if committed, violates repository boundaries and can break CI if the project expects `pnpm` or has no lockfile strategy.
**Action:** Always check for and remove `package-lock.json` before submission. Use `npm install --no-save` or `npx` where possible for diagnostic tools.
