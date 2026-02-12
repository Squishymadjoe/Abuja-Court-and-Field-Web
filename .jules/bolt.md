## 2025-05-15 - [Initial Journal Entry]
**Learning:** The application uses centralized state in `App.tsx` for `currentPage` and `isPlaying`. This causes the entire component tree to re-render when switching pages or playing an episode.
**Action:** Use `useCallback` for event handlers passed down and `React.memo` for list items to prevent unnecessary re-renders.

## 2025-05-16 - [Background Images vs Native Lazy Loading]
**Learning:** Using `background-image` for content thumbnails prevents the browser's preload scanner from efficiently discovering assets and blocks the use of native `loading="lazy"`.
**Action:** Prefer `<img>` tags with `object-fit: cover` and `loading="lazy"` for list thumbnails to improve initial load performance and reduce off-screen data usage.

## 2025-05-17 - [CI Pipeline Mismatch]
**Learning:** The repository's CI was incorrectly configured for Webpack (`npx webpack`) while the project actually uses Vite. Additionally, Node 18 is incompatible with newer `@vitejs/plugin-react` versions.
**Action:** Always verify the project's build system in `package.json` before assuming CI configuration is correct. Ensure GitHub Actions use supported Node versions (>=20.19.0) for Vite projects.
