# Bolt Performance Journal
## 2026-07-10 - [App Routing Render Leak Fix]
**Learning:** Manual routing using a switch statement in a parent component (like App.tsx) can cause entire page component trees to re-render on every parent state change (e.g., audio player playback toggle).
**Action:** Use 'Same Element Reference' optimization by wrapping the routing logic in `useMemo`. This, combined with stabilizing callbacks via `useCallback`, prevents unnecessary child re-renders without needing `React.memo` on every page component.
## 2026-07-10 - [CI Workflow Misconfiguration]
**Learning:** CI failures occurred because the existing workflow was using legacy `npx webpack` and `npm install` for a project that actually uses Vite and pnpm. Additionally, Node.js 18.x is incompatible with the project's Vite React plugin.
**Action:** Updated `.github/workflows/webpack.yml` to use `pnpm/action-setup@v4`, Node.js 20/22, and the correct `pnpm run build` command. Always verify the actual build system before relying on existing CI files.
