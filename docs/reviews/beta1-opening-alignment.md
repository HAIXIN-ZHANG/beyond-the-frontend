# Beta 1 opening orientation — review

- **Date/reviewer:** 2026-11-16, Australia/Perth; Coordinator/Reviewer.
- **Handoff/gate:** [Writer handoff](../handoffs/writer/beta1-opening-alignment.md), ordinary editorial revision of the existing Chinese opening.
- **Reviewed revision:** r1 opening SHA-256 `2195b468a436170071c05d701fad29110e1c6b4625d31d0295798eb08f0dcdef`, compared with main `eb822357b6bf1cafe090508254b1aa6c3e71ce8f` and the current eight-part outline. G01 and F01 are excluded and unchanged.
- **Outcome:** r2 Accepted after affected re-review. Current accepted opening SHA-256: `244c4f7a9ddeb781d8530691d07ba17b9daccf611b9631ea60faa412b87a6d90`.
- **Next boundary:** Writer task closed. Developer must receive a separate scoped contract-metadata update before renderer integration. No new prose scope or translation.

## Actual inspection and evidence

Read the actual opening and full manuscript diff, the eight-part outline, Writer's report and current content contract. The revised entry starts with an AI-assisted working feature, keeps the frontend/backend connection and existing examples, and matches the confirmed eight-part order. The first-person motivation, AI attribution, draft status and G01 link remain. No added experiment, framework assertion or completion promise needs technical research in this edit.

## Findings and closure

| ID | Severity | Location and issue | Impact/evidence | Original owner and acceptance criterion | Closure |
| --- | --- | --- | --- | --- | --- |
| OPEN-01 | Required editorial revision | Reader paragraph ends with a disclaimer about obtaining a job level | Distracts from the practical reading guidance and introduces a promise the paragraph never made | Writer: remove that final sentence; preserve the concrete guidance and all other submitted prose | Closed in r2; exact single-sentence removal independently verified |

Writer's return-message attempt was rejected by automatic approval review. Coordinator independently located the frozen report/source; the missing message does not prevent actual file review and is not a reason to ask the author to relay the handoff.

### r3 outline-status alignment

Coordinator separately assigned Writer the two obsolete opening-status paragraphs in `book/planning/outline.md`, plus the same handoff only. Inspected the complete two-paragraph diff and frozen r3 report: historical W02 and branding acceptance are retained, current r2 editorial acceptance is linked, and pending contract/website integration is distinguished from accepted source. Everything below the opening-status block, including eight parts and 48 working units, is unchanged. Opening source still matches the accepted r2 hash. Referenced local documents exist and `git diff --check` passed. **r3 status alignment Accepted; Writer task closed.** This does not authorize a new chapter or change any manuscript gate.

## Feedback and affected re-review

Sent OPEN-01 directly to Writer. Read the frozen r2 source/report and reconstructed r1 by restoring only the removed sentence: SHA-256 exactly matched the reviewed r1. Independently verified the new hash, unchanged heading sequence, identical pre-orientation attribution/motivation block and identical recurring-example/later block, eight numbered directions and existing local G01 link. All passed. Writer's brief remains an execution record, not self-acceptance. No required revision remains.

### r4 dependency wording and contract alignment

Inspected the final outline sentence and r4 report. Restored the preceding sentence to reconstruct the accepted r3 hash exactly, proving the complete r3-to-r4 difference. Accepted final outline SHA-256 is `8837d97557418ee83905af4478b094c443c1f7ab8ada4c2a720291ff45b16ab2`. It now links the actual current contract instead of claiming its metadata is still pending; implementation/publication gates remain separate. Opening source remains byte-identical to accepted r2. Local links/whitespace checks passed. **r4 Accepted; Writer task closed.** Developer's separately reviewed contract update now identifies this same opening source; no renderer or publication is accepted by the update.

## Git and publication evidence

Accepted source, outline and contract metadata are committed in snapshot `9e11468fd5e3e1ee9742121c7f72dbd88e199d0e`, included in [PR #12](https://github.com/HAIXIN-ZHANG/vibe-coding-then-what/pull/12). Only review/board pointers follow that snapshot. At this checkpoint, final-head cloud checks and merge remain pending; their actual results belong to the PR execution record. Website rendering and deployment remain separate gates; neither was performed.
