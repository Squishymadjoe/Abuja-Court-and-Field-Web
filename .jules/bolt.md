# Bolt's Performance Journal

## 2025-05-14 - EpisodeCard Re-render Optimization
**Learning:** In this codebase, the centralized state in `App.tsx` (like `isPlaying` or `currentEpisode`) causes the entire application to re-render whenever the user interacts with the audio player. Without memoization, all `EpisodeCard` components in the "Archive" page re-render, even if their data hasn't changed.
**Action:** Always pair `useCallback` for event handlers in parent components with `React.memo` for list items to ensure stable props and skipped re-renders.

## 2025-05-14 - React 19 memo Typing
**Learning:** Wrapping components with both `React.FC` and `memo` in this React 19 environment can lead to TypeScript inference issues.
**Action:** The preferred pattern is to type props directly in the function arguments: `React.memo(({ prop1, prop2 }: Props) => { ... })`.

## 2025-05-14 - Repository Hygiene
**Learning:** Running `npm install` creates a `package-lock.json` file which should NOT be committed to this repository as it might conflict with the intended package manager or workflow.
**Action:** Always delete `package-lock.json` before submitting if it was generated during development/verification.

## 2025-05-14 - Vite CI Build Issues
**Learning:** The project's CI was originally configured for Webpack (`webpack.yml`) despite the project being built with Vite. Additionally, `@vitejs/plugin-react` (v5.1.2+) is incompatible with Node.js 18.
**Action:** Ensure CI workflows use `npm run build` for Vite projects and target Node.js >= 20. Rename legacy CI files (e.g., `webpack.yml` to `build.yml`) to reflect the actual build system.
