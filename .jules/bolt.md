## 2025-03-05 - Same Element Reference (SER) Optimization
**Learning:** Wrapping manual routing/switch-case in `useMemo` leverages React's Same Element Reference (SER) optimization, which bypasses child component re-renders completely when the parent state changes (e.g. background audio playback status). This makes redundant `React.memo` wraps unnecessary.
**Action:** When facing render leaks from high-frequency global state changes, always check if manual routing/render switch-cases can be memoized using `useMemo` to enforce referential identity of the element tree.
