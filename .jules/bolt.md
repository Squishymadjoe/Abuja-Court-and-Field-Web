## 2025-05-15 - Episode List Re-render Bottleneck
**Learning:** In a single-page application (SPA) where global state like audio playback is managed at the root `App` level, every playback toggle causes a re-render of the current page's entire component tree. This happens because the `renderPage()` function returns a fresh JSX element each time, even if the routing hasn't changed.
**Action:** Stabilize the returned JSX branch using `useMemo` in the router logic and ensure all leaf components (like `EpisodeCard`) are wrapped in `React.memo` while their callbacks (like `onPlay`) are stabilized with `useCallback` in the parent.

## 2025-05-15 - Node 18 Incompatibility and CI Build Correctness
**Learning:** Modern Vite plugins (like `@vitejs/plugin-react@5.2.0`) explicitly require Node.js 20 or 22. CI workflows using Node 18 will fail during dependency installation. Additionally, ensure CI scripts use `npm run build` instead of incorrect tool calls (like `npx webpack`) to match the project's build system.
**Action:** Always verify the project's build command in `package.json` and ensure GitHub Actions matrix aligns with dependency engine requirements.
