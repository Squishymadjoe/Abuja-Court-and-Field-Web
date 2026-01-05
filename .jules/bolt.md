## 2024-09-06 - Playwright Verification Unreliable in Headless Environment
**Learning:** Frontend verification using Playwright in the provided headless browser environment is unreliable. The React application consistently fails to render, resulting in a black screenshot, even when the development server is running correctly.
**Action:** Do not spend excessive time debugging Playwright scripts. If the server is confirmed to be running and the screenshot is black, note the verification failure and proceed with the submission, relying on code correctness and static analysis.

## 2024-09-06 - Accidental Lockfile Addition
**Learning:** Running `npm install` can create a `package-lock.json` file if one doesn't exist. Committing this file is an out-of-scope, repository-altering change that can be rejected in code review.
**Action:** Always check the git status before submitting and ensure no lockfiles (`package-lock.json`, `pnpm-lock.yaml`, etc.) have been accidentally created or modified. Add lockfiles to `.gitignore` if they are consistently being generated and are not desired in the repository.
