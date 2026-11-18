# Existing source intake — Coordinator review

Date: 2026-11-18 Australia/Perth. **Accepted and closed after the r2 documentation recheck.**

Reviewed the frozen Developer [handoff](../handoffs/developer/existing-source-intake.md) r1 at SHA-256 `554001c06a7e00b96dcc02e4d42529a9f92e8c36b57482ed59459ece2b65b0b2`, in `/private/tmp/vctw-m2-v2-reader` on `codex/m2-v2-reader@5141823`. Compared the actual implementation against the intake snapshot. All 14 implementation digests and all five source digests match. Only the 14 named implementation files and the handoff changed, with 235 other snapshot files preserved.

The three manifest entries pin the canonical bytes accepted by the [Writer refresh review](existing-manuscripts-refresh.md). Independently loaded the book and extracted the actual indexes: three chapters, 28 Chinese sections, zero English sections and 14 literal signup matches. The compatibility entry resolves to a real heading, rejects collisions, and renders a native focus target without modifying the manuscript, canonical URLs or indexed sections.

Reviewed the final command logs: lint, strict types, 50 Node tests, both static exports and 21 Playwright cases per base path passed. Separately served the Pages export from loopback and used the existing Chromium runner to verify the old fragment, Tab to the retained heading link, Enter to the canonical H2, and distinct approved locale descriptions with no page errors. All six combinations of JS on/off and 1440/390/320px passed. At the narrow widths the heading was 85px from the top, with 24px clearance below the measured toolbar. Tested Chromium on this host. Physical devices, Safari, Firefox and assistive technology remain unverified. These results are local to the named revision.

## Review finding

- SOURCE-DOC-01: `site/DEVELOPMENT.md:165` still states nineteen current browser cases. Update the existing paragraph to reflect twenty-one, with the two added JS-on/off intake variants. The Developer owns that sentence and the matching handoff update. Runtime needs no change. Requested at the r1 review gate.

## Closure

SOURCE-DOC-01 closed. Verified the exact guide-only sentence correction against the r1 guide digest and checked all 19 payload/source digests. The final handoff is SHA-256 `ec1511f9b843cf3469fd9648e0194634ed900e4ad2fbee1a575de931eca75c75`. The guide correctly records 21 cases. The tested runtime source and earlier browser evidence carry forward byte-for-byte. The next assignment is the V2 reader and chapter navigation in the existing isolated Developer workspace.

## Writer status alignment

Accepted the six status passages submitted in the Writer handoff at SHA-256 `6eae0bd06a320e4e9bef66678a6dd75a92b88f11bef3ead6de28280f1a08283a`. Read the incremental diff and matched the six final file digests. The earlier scope rows preserve the prior review decision and link the verified local revision. Counts remain five reviewed originals, three local reader entries, two in the last verified public edition and zero English bodies. Copied only these reviewed documents and the Writer handoff into the integration worktree after verifying their target baselines.
