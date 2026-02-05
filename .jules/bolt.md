## 2026-02-05 - [Critical: Missing Entry Point in index.html]
**Learning:** In some Vite-based React templates, the `<script type="module" src="/index.tsx"></script>` entry point may be missing from `index.html`. This prevents the application from loading and makes it impossible to measure performance in a live browser environment.
**Action:** Always verify that `index.html` has a valid module entry point before attempting to profile or measure performance.

## 2026-02-05 - [CI Failure: Legacy Webpack Command]
**Learning:** The GitHub Actions workflow (`.github/workflows/webpack.yml`) was using a legacy `npx webpack` command which is incompatible with this Vite-based project. Additionally, the Node.js 18.x environment is incompatible with the project's Vite plugins.
**Action:** Update CI workflows to use `npm run build` and ensure Node.js versions are >= 20.19.0 to maintain compatibility with modern Vite plugins.
