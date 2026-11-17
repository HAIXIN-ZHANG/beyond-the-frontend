# Browser Fundamentals / P1.2 — reuse and manuscript-scope review

Date: 2026-11-17 (Australia/Perth). Reviewer: Coordinator. Gate: confirmation of the accepted F01A analysis for this resumed manuscript assignment. **Outcome: Accepted for the bounded manuscript scope below.** This is not manuscript, website-intake or publication acceptance.

## Actual reviewed revision

[Writer checkpoint](../handoffs/writer/F01M.md), r1 submitted SHA-256 `8b65bcc19bbe9fa41ed0fa30413fe5dce1ee674c586e191e18e088a4b39bc887`, over shared `main@95a6bec69e26cbe13fe9f5d9433ee91e07632091`. Read the entire frozen checkpoint and accepted F01 analysis (`abd0c4a77ea3da21db2584b88e544e093eb2693af1f7c499addd0c23719bed52` current English process bytes), F01A review/integration addendum, P1.2 and relevant topic homes, editorial voice guidance, chapter review gates and actual DOC02 acceptance. Checked G01's concluding transition and the opening's explanation/AI-collaboration voice. The current Chinese chapter source hashes independently match the approved identities.

DOC02 accepted the translated analysis in its dated documentation package. Old analysis headers still say pending/paused; those are submission history superseded by later evidence and the current user assignment. Neither that old analysis nor this scope decision accepts unwritten prose.

## Reasoning and source spot-check

No substantive extension is needed: P1.2 explicitly retains F01A's seven-part causal explanation. The writer correctly maps later layout, async UI, rendering strategies, network and cross-layer debugging to their existing topic homes. Cases remain the same fictional course-search page; this is not another system-building project.

Coordinator independently opened these official body sections on 2026-11-17 as focused claim checks, not a repeat of all earlier research:

- [WHATWG script element](https://html.spec.whatwg.org/multipage/scripting.html#the-script-element): external classic script async/defer modes. Fetch and evaluation are different; module/dynamic cases are excluded from the compact comparison.
- [WHATWG event-loop processing](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model): task choice, checkpoints and rendering-opportunity/update filtering. No unconditional frame after each task or universal cross-source FIFO follows.
- [web.dev critical path](https://web.dev/learn/performance/understanding-the-critical-path#render-blocking-resources): applicable head stylesheet rendering dependencies versus continued parsing and speculative loading. Use explicit conditions rather than all-CSS/all-browser-stops claims.
- [web.dev rendering pipeline](https://web.dev/articles/rendering-performance#the_pixel_pipeline): style/geometry/visual work and paths that skip work; not a mandatory complete-engine sequence.
- [MDN async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#description): synchronous work and later continuation do not become parallel CPU work through the keyword.
- [MDN DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event): parsing/deferred-script milestone and stylesheet interactions are not universal feature readiness.

The current standard page displays a16November update; that date is not proof of identical implementation by all engines. No experiment, profiler capture, benchmark or browser behavior test was performed for this gate. Writer's other dated checks remain original evidence and must be reopened if needed for a new claim.

## Accepted writing scope and criteria

No blocking revision exists in the checkpoint. The author has resumed the main plan; Coordinator now explicitly assigns **one Chinese manuscript** at `book/drafts/zh/02-browser-foundations.md`, with continued execution/checks/revisions in the same F01M handoff. Only those two Writer files may change. The approved scope is the retained seven-section path, E1–E3 and D1/D2 narrow original diagrams plus D3 evidence comparison. They are conceptual illustrations with explanatory prose, not measured traces or mandatory runnable labs.

Introduce terms through the observed difficulty; preserve the same example and its assumptions. Connect the normal path, pending/failed setup and busy handling without making every native interaction depend on JavaScript. Explain both standard meaning and reader intuition. Keep qualifications adjacent to the assumption they explain; avoid a warning-heavy or bullet-only technical document. Diagram arrows mean specified dependencies or schematic relative order, not separate dedicated threads or guaranteed paint timing.

A tiny native structure/style example and short explicitly illustrative pseudocode are allowed when they improve understanding. Do not add runnable experiment assets or observed performance claims. New material technical scope or empirical evidence returns to analysis/evidence review; ordinary wording revisions stay in manuscript review. Technical sources must support the precise claims without borrowing third-party continuous prose/code/diagrams. No artificial source/word-count quota is required.

This chapter may end with a concrete optional reflection and explanation; it does not require a quiz, prompt card or capstone. The Chinese draft must be complete without future chapters. Do not link to nonexistent manuscripts or imply English bodies exist.

## Next boundary and review record

Writer should now draft, verify the document and freeze an actual source/hash handoff. Coordinator will conduct a **separate manuscript review** under `F01M.md`, examining technical accuracy/example validity and editorial voice/readability as distinct concerns. Return specific findings to Writer and recheck changed revisions before accepting.

No existing manuscript, analysis, public manifest/contract, code, language adaptation, next chapter, installation, Git write or publication is released. The pending integration of quality r1 remains separate; its accepted implementation is preserved. A reviewed manuscript is still not an allowlist entry or a deployed chapter.
