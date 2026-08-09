# Revenue OS Action API (Custom GPT)

> Base URL (production): `https://ai-visibility-report-tau.vercel.app`  
> Also reachable via mentionbee rewrite: `https://mentionbee.ai/api/revenue-os/...`

**Auth:** Header `Authorization: Bearer {REVENUE_OS_API_SECRET}` or `x-revenue-os-secret: {REVENUE_OS_API_SECRET}`

No secrets in this document.

---

## GET /api/revenue-os/state

**Purpose:** Current operational snapshot (latest run, notifications, content assets, integration status)

**Permission:** READ

**Response:** `{ status, google, githubPublish, latestRun, notifications, contentAssets }`

---

## GET /api/revenue-os/analytics/summary

**Purpose:** GA4 traffic + funnel metrics for all standard windows

**Permission:** READ

---

## GET /api/revenue-os/analytics/funnel

**Purpose:** Funnel metrics with NOT_TRACKED vs UNKNOWN handling

**Query:** `window=yesterday|last_7_days|previous_7_days|last_28_days|revenue_os_period` (optional)

**Permission:** READ

---

## GET /api/revenue-os/search-console/performance

**Purpose:** GSC queries/pages performance

**Query:** `window`, `dimension=query|page|query_page`

**Permission:** READ

---

## GET /api/revenue-os/search-console/opportunities

**Purpose:** Ranked search opportunities (types A–E)

**Permission:** READ

---

## GET /api/revenue-os/content

**Purpose:** List content assets or single by `?contentId=`

**Permission:** READ

---

## POST /api/revenue-os/content/draft

**Purpose:** Save content draft to Neon (external / Custom GPT drafts)

**Body:** `{ draft: ContentDraftPayload }`

**Permission:** WRITE

---

## POST /api/revenue-os/content/generate

**Purpose:** Server-side autonomous draft generation from a ContentBrief (no Custom GPT required)

**Body:** `{ brief: ContentBrief, force?: boolean }`

**Permission:** EXECUTE

**Behavior:**
- Skips if `brief.priorityScore < 60` unless `force: true`
- Runs research + LLM (or template fallback) + validation
- Stores draft in Neon with status `READY`, `APPROVAL_REQUIRED`, or `PUBLISH_BLOCKED`

---

## POST /api/revenue-os/content/validate

**Purpose:** Run technical + policy validation without publishing

**Body:** `ContentDraftPayload`

**Permission:** WRITE

---

## POST /api/revenue-os/content/publish

**Purpose:** Validate + publish via GitHub (allowlisted paths only), then verify production + notify founder

**Body:** `{ contentId }` or `{ draft }`

**Permission:** EXECUTE (autonomous when validation passes)

**Post-publish:** HTTP/canonical/sitemap verification → GSC sitemap submit → founder email (Resend) only if verification passes

**Blocked when:** unverified facts, approval required, GitHub not configured, validation errors

---

## GET /api/revenue-os/indexing/status?url=

**Purpose:** URL Inspection index status

**Permission:** READ

---

## POST /api/revenue-os/indexing/submit-sitemap

**Purpose:** Submit sitemap via Search Console API

**Body:** `{ sitemapUrl? }` default `https://mentionbee.ai/sitemap.xml`

**Permission:** EXECUTE

---

## POST /api/revenue-os/run

**Purpose:** Trigger observation/strategy run

**Body:** `{ runType: "daily"|"weekly"|"manual" }`

**Permission:** EXECUTE

---

## Recommended first production run

1. Configure Google + `REVENUE_OS_API_SECRET` + GitHub publish + `OPENAI_API_KEY` + `RESEND_API_KEY`
2. `GET /api/revenue-os/search-console/opportunities`
3. `GET /api/revenue-os/analytics/funnel?window=last_7_days`
4. `POST /api/revenue-os/run` with `{ "runType": "manual" }` — observe-only first
5. Or `POST /api/revenue-os/content/generate` with a validated brief for draft-only test
6. Founder review if any `APPROVAL_REQUIRED`
7. `POST /api/revenue-os/content/publish` — **single page only**
8. Verify HTTP 200 + sitemap + indexing status + founder email after deploy

**Do not batch-publish P0 portfolio.**

---

## Example auth header

```
Authorization: Bearer <REVENUE_OS_API_SECRET>
```
