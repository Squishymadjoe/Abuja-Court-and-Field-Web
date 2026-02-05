## 2026-02-05 - [Critical: Missing Entry Point in index.html]
**Learning:** In some Vite-based React templates, the `<script type="module" src="/index.tsx"></script>` entry point may be missing from `index.html`. This prevents the application from loading and makes it impossible to measure performance in a live browser environment.
**Action:** Always verify that `index.html` has a valid module entry point before attempting to profile or measure performance.
