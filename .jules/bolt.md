## 2025-05-14 - Stabilizing JSX Branches in App Routers
**Learning:** In a Single Page Application (SPA) using a switch-case routing pattern in `App.tsx`, simply wrapping page components in `React.memo` is insufficient if the parent state (like audio playback) changes. Each render of the parent creates a *new* JSX element reference for the page, forcing a full re-render of the child tree regardless of prop stability.
**Action:** Use `useMemo` to stabilize the returned JSX branch for the current page. This allows React to recognize the element reference as identical across parent renders, enabling `React.memo` on child components to successfully bail out of reconciliation.

## 2025-05-14 - React 19 Attribute Naming
**Learning:** React 19 is stricter about DOM attribute naming. Using the lowercase `fetchpriority` on an `<img>` tag triggers a console warning, as React now expects the camelCase `fetchPriority`.
**Action:** Always use `fetchPriority` when optimizing critical above-the-fold images in React 19+ environments.

## 2025-05-14 - GitHub Actions and Interactive NPM Packages
**Learning:** GitHub Action workflows must avoid 'npx' commands that trigger interactive installation prompts (e.g., 'Do you want to install webpack-cli?'), as these block the CI process; ensure all build tools are explicitly listed in devDependencies or use non-interactive flags.
**Action:** Prefer `npm run build` scripts defined in `package.json` over `npx` commands in CI environments.
