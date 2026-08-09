# Revenue OS Execution Engine v1

> **Runtime host:** AI-Visibility-Report (Backend)  
> **Knowledge layer:** mentionbee-website `docs/business/`  
> **Public site content:** mentionbee-website Git repo (via GitHub API publish)

## Architecture

```
KNOWLEDGE (Operating Manual + weekly-state.md)
        ↓
OBSERVE (GA4 Data API + Search Console API)
        ↓
ANALYZE (funnel metrics + search opportunities)
        ↓
DECIDE (prioritize.ts — revenue-first, not content-first)
        ↓
EXECUTE (content draft / plan / optional publish)
        ↓
VERIFY (validation gates + HTTP/index checks)
        ↓
MEASURE (GA4/GSC on next run)
        ↓
LEARN → update Neon run logs + weekly-state (manual/API)
```

## Layers

| Layer | Location | Responsibility |
|-------|----------|----------------|
| A. Knowledge | `docs/business/*` | Strategy, decisions, experiments |
| B. Observation | `lib/revenue-os/google/*` | GA4 + GSC read |
| C. Decision | `lib/revenue-os/decision/` | Next action selection |
| D. Execution | `lib/revenue-os/content/*`, `publish/*`, `run/*` | Draft, validate, publish, cron |

## Scheduler

| Cron | Schedule | Route |
|------|----------|-------|
| Daily observation | `0 6 * * *` | `GET /api/cron/revenue-os-daily` |
| Weekly strategy | `0 7 * * 1` | `GET /api/cron/revenue-os-weekly` |

Manual: `POST /api/revenue-os/run` with `{ "runType": "manual" }`

## Run limits (v1)

- Max **3** actions per run
- Max **1** content generation/publish attempt per run
- No recursive agent loops
- Escalate on high uncertainty

## Content lifecycle statuses

`IDEA` → `PLANNED` → `DRAFTING` → `REVIEW` → `APPROVAL_REQUIRED` → `READY` → `PUBLISHED` → `MONITORING`

Blocked states: `PUBLISH_BLOCKED`, `KILLED`, `UPDATE_REQUIRED`

## Publishing model

1. Draft stored in `revenue_os_content_assets` (Neon)
2. **Autonomous generation** (`lib/revenue-os/content/generate-draft.ts`) — LLM or template fallback
3. **Fact pipeline** (`lib/revenue-os/content/research.ts`) — optional bounded research
4. Validation (`lib/revenue-os/content/validate.ts`)
5. If pass + GitHub configured → commit **allowlisted paths only** to mentionbee-website
6. **Registry update** — `content/published-routes.ts` merged on publish (dynamic sitemap)
7. Vercel deploy triggered by Git push
8. **Production verification** — HTTP 200, canonical, sitemap presence
9. **Founder email** via Resend (only after successful verification)
10. Notification persisted in `revenue_os_notifications`

**Allowed publish prefixes:** `app/compare/`, `app/blog/`, `content/compare/`, `content/published-routes.ts`, etc.  
**Forbidden:** checkout, pricing, analytics, auth, admin, `next.config.ts`

## Index monitoring

Uses Search Console **URL Inspection API** + sitemap submit.  
Status vocabulary: `PUBLISHED`, `DISCOVERABLE`, `SUBMITTED_VIA_SITEMAP`, `CRAWLED`, `INDEXED`, `NOT_INDEXED`, `UNKNOWN`

Does **not** use Google Indexing API for normal pages.

## Approval gates (Founder)

See Operating Manual + `validate.ts` blocking rules for quantitative claims, unverified competitor facts, reputation risk.

## Storage

Neon Postgres tables (idempotent bootstrap in `lib/revenue-os/db.ts`):

- `revenue_os_runs`
- `revenue_os_content_assets`
- `revenue_os_opportunities`
- `revenue_os_notifications`

## Failure modes

| Mode | Behavior |
|------|----------|
| Google creds missing | APIs return `configured: false` + `GOOGLE SETUP REQUIRED` |
| GitHub creds missing | Publish returns `PUBLISH_BLOCKED` |
| Validation fail | No publish; status `PUBLISH_BLOCKED` or `APPROVAL_REQUIRED` |
| Build fail on website | `PUBLISH_BLOCKED` — Revenue OS does not fix unrelated code |

## Rollback

`lib/revenue-os/publish/github.ts` → `rollbackGithubCommit(parentSha)`  
Only Revenue OS commit hash stored per content asset.

---

# Gap Closure Report (Autonomy v1 — pre-commit)

> Status: implemented locally, **not committed, not deployed, no production content published**

## Autonomous LLM Generation

| Item | Detail |
|------|--------|
| **Provider** | Existing OpenAI integration (`OPENAI_API_KEY`, `OPENAI_SYNTHESIS_MODEL` / optional `REVENUE_OS_CONTENT_MODEL`) |
| **Workflow** | `generateWithFactPipeline()` → optional research → LLM JSON draft → `assembleDraft()` → validation gates |
| **Fallback** | Template draft when no API key or cost limit reached (TEST 17 PASS) |
| **Guardrails** | Editorial system prompt overrides research; no secrets in prompt; max 2 LLM calls/run; draft only when `priorityScore ≥ 60` and decision = `CREATE_CONTENT` |

**Pipeline:** OPPORTUNITY → BRIEF → DRAFT → FACT CHECK → SEO/GEO CHECK → TECHNICAL VALIDATION → PUBLISH

## Research / Fact Verification

| Item | Detail |
|------|--------|
| **Provider** | Existing `OPENAI_MENTION_MODEL` (search-preview) via `researchCompetitorFacts()` |
| **Limits** | Max 1 research call/run; snippets marked UNTRUSTED |
| **Blocking** | Time-variable competitor claims (price, features, models) → `APPROVAL_REQUIRED` / `FACT_CHECK_BLOCKED` if unverified (TEST 19 PASS) |
| **Fallback** | Generic non-time-variable pages allowed; competitor comparisons without verified sources are not auto-published |

No new web-scraping infrastructure. Revenue OS omits claims rather than inventing them.

## Sitemap Automation

| Item | Detail |
|------|--------|
| **Registry** | `mentionbee-website/content/published-routes.ts` |
| **Sitemap** | `app/sitemap.ts` merges static routes + `PUBLISHED_ROUTES` |
| **On publish** | `mergePublishFiles()` updates registry in same GitHub commit as page files |
| **Verification** | `verifyPublishedUrl()` checks HTTP 200, canonical, noindex, URL in live sitemap (TEST 20 PASS) |

## Founder Notification

| Item | Detail |
|------|--------|
| **Channel** | Resend email (`sendRevenueOsPublishedEmail`) → `olaf@disruptmedia.com` |
| **Trigger** | Only after successful publish **and** production verification passes |
| **Failure** | No “published” email on failure; `sendAdminAlertEmail` on verification failure or founder escalation |

## Daily Autonomous Loop

Without Olaf / Custom GPT, a daily cron run can:

1. Read GA4 + GSC
2. Mine opportunities + decide (revenue-first)
3. Skip content if checkout weak or no strong opportunity
4. Generate brief + draft (LLM or template)
5. Fact-check + validate + approval gates
6. Auto-publish (max 1) if daily + all gates pass + GitHub configured
7. Verify production + sitemap
8. Submit sitemap via GSC + URL inspection
9. Email founder + persist notification + log costs

**Run limits:** max 3 major execution actions, max 1 publish, no recursion.

## Custom GPT Role

Custom GPT remains the **interactive cockpit** (read state, manual runs, approvals, strategy). It is **not required** for daily autonomous operation — server runtime is the operator.

## Cost Controls

`RunCostTracker`: max 2 LLM calls, 1 research call, ~$0.75 estimated/run. Logged in run summary. No draft without prioritized opportunity (TEST 18, 24 PASS).

## Security

- LLM has no shell, git paths, or secrets
- Publishing only via allowlist (`allowed-paths.ts`)
- Research content is untrusted; system rules override prompt injection
- Checkout/pricing/analytics/product code remain forbidden

## Additional Files Changed

**AI-Visibility-Report:** `lib/revenue-os/content/generate-draft.ts`, `research.ts`, `run/cost-tracker.ts`, `run/executor.ts`, `publish/registry.ts`, `publish/verify-production.ts`, `app/api/revenue-os/content/generate/route.ts`, `lib/email.ts` (founder email), updated publish route, verify script

**mentionbee-website:** `content/published-routes.ts`, `app/sitemap.ts`, `lib/site-origin.ts`, docs

## Additional Environment Variables

See `env.revenue-os.example`: `OPENAI_API_KEY`, `REVENUE_OS_CONTENT_MODEL` (optional), `RESEND_API_KEY` (plus existing Google/GitHub/Revenue OS secret vars)

## Tests 17–24

| Test | Result |
|------|--------|
| 17 Daily draft without Custom GPT | **PASS** |
| 18 No draft on weak opportunity | **PASS** |
| 19 Unverified competitor claims block publish | **PASS** |
| 20 New page in sitemap registry | **PASS** |
| 21 Founder notification helper | **PASS** |
| 22 No email on failed publish | **PASS** |
| 23 Autonomous run no ChatGPT | **PASS** |
| 24 Cost limits logged | **PASS** |

## Remaining Gaps

- End-to-end production publish not exercised (GitHub/Resend/Google creds not configured in this session)
- Live sitemap verification depends on Vercel deploy propagation after Git push
- Competitor fact verification relies on bounded OpenAI search — not a dedicated fact-check API
- First autonomous comparison page with real competitor names still needs founder approval unless research returns verifiable sources

## Does v1 now satisfy this requirement?

> „Revenue OS kann selbständig erkennen, dass eine neue Vergleichs-/Content-Seite sinnvoll ist, sie erstellen, prüfen, publizieren, Google zur Discovery bereitstellen und Olaf danach nur informieren.“

**Answer: PARTIAL**

**Reason:** The full autonomous pipeline is implemented and smoke-tested locally. Production autonomy requires configured env vars (Google, GitHub, OpenAI, Resend) and one successful live publish cycle. Zeitvariable Wettbewerbervergleiche with unverified claims correctly route to approval rather than silent auto-publish — which is intentional but means not every comparison page completes fully autonomously on first run.

---

## First production run

**Do not auto-publish on deploy.** See `action-api.md` § Recommended first run.
