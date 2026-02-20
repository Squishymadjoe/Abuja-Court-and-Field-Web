## 2025-05-14 - Stabilizing Root Callbacks for List Rendering
**Learning:** In a centralized state architecture (App.tsx), updating global state (like `isPlaying`) triggers re-renders of the entire page tree. Without memoization and stable callbacks (`useCallback`), this causes linear performance degradation as the number of list items (EpisodeCards) grows.
**Action:** Always wrap root-level handlers passed to lists in `useCallback` and memoize the list items and page containers.

## 2025-05-14 - Missing Entry Point in index.html
**Learning:** Vite builds can appear successful but result in an empty shell if the `index.tsx` module script tag is missing from `index.html`. This prevents any JS from being bundled or executed.
**Action:** Verify `index.html` contains the correct `<script type="module" src="/index.tsx"></script>` tag to ensure proper build and rendering.
