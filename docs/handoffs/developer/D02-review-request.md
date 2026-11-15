# Website Foundation and Bilingual Routing — historical review request

Legacy reference: D02. The request was delivered and feedback returned; actual judgment is in [the review](../../reviews/D02.md). This is the original request translated into English, not a new acceptance or live assignment. Private chat identifiers have been replaced by role names.

The author requested Coordinator review of the foundation in the original Beyond the Frontend checkout. Developer would revise/verify after feedback, then submit only its authorized code/documents; Writer content had a separate review.

## Scope

- Read [D02 handoff](D02.md) and the runtime guide, then inspect actual code rather than rely on the summary.
- Inspect site application/config/styles, package/lock, `.nvmrc`, ESLint/ignore, `scripts/verify-export.mjs` and tests. The implementation proposal is background only.
- Exclude all `book/`, Writer planning/handoffs and shared content research. Do not review/edit/submit Writer files or require cleanup of another owner's unfinished work.
- Foundation only: no chapter integration, search, CI/CD, deployment or whole-repository audit.

## Questions for the reviewer

1. Are root/Pages static exports, direct English/Chinese home/index routes, refresh and default English correct?
2. Do language switches preserve the current page, with correct HTML language/title/accessibility labels and bilingual 404 recovery? One shared static 404 does not imply dynamic language detection.
3. Is the multiple-root-layout experimental global-not-found option acceptable under the pinned documentation/actual builds, without treating its flag alone as a defect?
4. Are dependencies/lock/checks reproducible and preview permissions minimal? Could output expose private notes/repository internals? No prose/backend/publication was connected.
5. Do tests/export assertions omit or conceal critical behavior? Existing dependencies were available for check and both build/verify paths; do not alter dependencies without scope.
6. Where available, use the right-side app browser for desktop/mobile/keyboard/switch/hydration/console checks. Record unavailable evidence; do not substitute the user's personal Safari/Chrome or fabricate screenshots.

## Feedback and revision

Coordinator writes actual accepted/changes-required/insufficient-evidence findings in the D02 review, with severity, location, trigger, impact and revision criteria. Separate submission blockers from later suggestions; if none, say so with actual checks/limits.

Return feedback directly to the existing Developer role. If messaging is unavailable, retain the report and explicitly state delivery failed. Developer freezes during inspection, then submits its own revision/evidence for re-review. The request does not authorize the reviewer to implement, commit, push, merge or deploy.

The historical submission instruction used an exact-file manifest, never `git add .`, excluding Writer/shared unfinished materials. Current Git ownership follows current AGENTS rather than reactivating this old prompt.
