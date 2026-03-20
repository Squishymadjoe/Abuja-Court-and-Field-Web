## 2025-05-15 - [React Router Re-renders with Global State]
**Learning:** In this SPA, the custom routing pattern in `App.tsx` (using a `switch` inside `renderPage()`) causes the entire page content to be re-instantiated whenever the parent `App` component's state (like `isPlaying`) changes. This happens because the routing function returns new JSX elements on every call, which bypasses `React.memo` on the child components since the element reference itself is new.
**Action:** Always stabilize the active page's JSX branch with `useMemo` in `App.tsx` and ensure all passed callbacks (like `onPlay`) are stabilized with `useCallback` to allow `React.memo` to effectively skip re-renders.

## 2025-05-15 - [Vite Production Build & Missing Entry Point]
**Learning:** A Vite production build can "succeed" even if the `index.html` is missing the `<script type="module" src="...">` entry point, but it will only transform ~2 modules and result in an empty application shell. A healthy build for this project should transform approximately 37 modules.
**Action:** If a build transforms significantly fewer modules than expected, verify the `index.html` entry point script. However, be cautious about including this fix in a performance-focused PR as it may be flagged as scope creep if not directly requested.
