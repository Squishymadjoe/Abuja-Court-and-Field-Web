# Bolt ⚡ Journal

## 2026-02-04 - Optimize EpisodeCard re-renders
**Learning:** In this codebase, clicking 'Play' on an episode causes a re-render of the entire App component. Because 'handlePlayEpisode' is not memoized and 'EpisodeCard' is not a React.memo component, all cards in the list re-render twice (due to two state updates in App).
**Action:** Use useCallback for the play handler and React.memo for the card component to eliminate unnecessary re-renders.
**Baseline:** 12 re-renders for 6 EpisodeCard components during a single 'Play' interaction.
