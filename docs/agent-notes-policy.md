# Formal documents and agent notes

The user distinguishes formal project sources from optional local working notes. The original checkout is `/Users/haixin/Desktop/code/beyond-the-frontend`; do not create or write to the historical `engineer-better` directory based on stale instructions. Use an explicitly assigned worktree when the coordination board specifies one; the current documentation task uses `/tmp/btf-project-docs`, not the frozen theme checkout.

## Formal project sources

Store formal documents in the repository and use the project review/integration process. Being committed does not automatically publish a document on the reading website.

- Writer owns `book/planning/` positioning, outlines and assigned writing stages, with manuscripts and teaching assets under `book/`.
- Developer owns the assigned website/tooling and technical explanations. `site/IMPLEMENTATION.md` preserves the staged proposal; `site/DEVELOPMENT.md` describes implemented behavior and commands. A proposal is not an implemented feature.
- Executors maintain their reports under `docs/handoffs/writer/` and `docs/handoffs/developer/`.
- Coordinator decides shared scope/contracts/status and writes review conclusions under `docs/reviews/`. When assigned, Developer records accepted technical/design/coordination decisions; Writer handles assigned product explanations. Neither executor decides its own acceptance.

Formal sources may contain proposals if clearly marked draft, unresolved or accepted. Cross-role decisions go through Coordinator. Formal technical explanations and active code/design comments are English-first; temporary or secondary handoffs may be Chinese. This does not change the bilingual manuscript plan.

## Optional local notes

Use `.local/notes/writer/` or `.local/notes/developer/` only when useful. The root `.gitignore` excludes them. They can hold temporary ideas, source leads, experiment notes and questions; no task needs a duplicate Markdown log, and formal documents should not have a second maintained copy. Do not store credentials or unnecessary personal information here.

Git exclusion is not access isolation. Other agents with access to the same checkout/account may read these files. Worktrees do not turn them into secret storage. Neither website builds nor public artifacts may contain `.local/`.

## Turning notes into a deliverable

Move useful conclusions into the appropriate formal source with their status and evidence. Other roles must be able to work from formal documents without depending on scratch notes. A handoff must stand on its own and point to actual results and verification.

Preserve existing directories, proposals and reports. This policy does not authorize bulk relocation, deletion or overwriting. If an existing file appears temporary, propose its classification in the owning role's handoff first. This storage rule neither releases a new stage nor independently authorizes installation, Git operations or publication; existing explicit task authorization still applies.

Current priority: finish the assigned documentation upgrade and its review/revisions/integration, then pause for overall project-design discussion. Storage/documentation acceptance does not resume code, manuscripts, E2E or release.
