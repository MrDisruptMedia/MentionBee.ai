# MentionBee Revenue OS – Weekly State

> **Nur aktueller operativer Zustand.**  
> Definitionen, Decisions, Experiment-Specs → `docs/business/mentionbee-operating-manual.md`  
> Regeln → `docs/business/revenue-os/system-prompt.md`

---

**Last updated:** 2026-08-09  
**90-day period:** 2026-08-10 → 2026-11-07  
**Day 1:** 2026-08-10  
**Day 90:** 2026-11-07  
**Current day:** Pre-start (Last updated before Day 1)  
**Current phase:** 90-Day Revenue Contract locked; baseline + execution prep  

---

## North Star Progress

| Metric | Value |
|--------|-------|
| Minimum (customers) | 2 |
| Target (customers) | 5 |
| Stretch (customers) | 10 |
| Outside-network requirement | ≥3 of target 5 |
| Revenue target | ≥ EUR 2,500 |
| Current paying customers | **0** (FACT, period start) |
| Revenue | **EUR 0** (FACT, MentionBee report sales) |
| Outside-network customers | 0 |
| Qualified conversations | UNKNOWN |
| Case/testimonial candidates | UNKNOWN (MEMS = candidate; external release UNKNOWN) |
| Implementation rate | UNKNOWN |
| Founder hours this week | UNKNOWN |
| Founder Time per New Customer | UNKNOWN (no customers yet) |

---

## Funnel Snapshot

| Metric | Value |
|--------|-------|
| Users | UNKNOWN |
| Sessions | UNKNOWN |
| Paid report page views | App event `view_paid_report` from Measurement Layer v1 (after deploy); historical **NOT TRACKED** |
| Sample report views | App event `view_sample_report` from Measurement Layer v1 (after deploy); historical **NOT TRACKED** |
| Free report submissions | Business FACT **0** at period start; Analytics: `free_report_submit` from Measurement Layer v1 (after deploy); historical **NOT TRACKED** |
| Checkout starts | App event `begin_checkout` from Measurement Layer v1 (after deploy); historical **NOT TRACKED** |
| Purchases | Business FACT **0**; App event `purchase` from Measurement Layer v1 (after deploy); historical **NOT TRACKED** |
| Paid conversion rate | UNKNOWN |

---

## Pricing Live Verify

| Item | Value |
|------|-------|
| Backend SoT | `settings.price_deep_dive` + `GET /api/public/pricing` on `ai-visibility-report-tau.vercel.app` |
| Before | deepDivePrice **199** |
| After | deepDivePrice **190**, currency **EUR** (verified live) |
| Website fallbacks | Still €199 hardcode — **BACKLOG-009** (unchanged) |

---

## Active Experiments

| ID | Status | Current Signal | Next Review |
|----|--------|----------------|-------------|
| EXP-001 Unsolicited Reports | PLANNED | — | UNKNOWN |
| EXP-002 Swiss AI Visibility Index | PLANNED | — | UNKNOWN |
| EXP-003 Invisible Exporters | PLANNED | — | UNKNOWN |
| EXP-004 Radically Honest Comparisons | PLANNED | — | UNKNOWN |
| EXP-005 Open Report / Steal This Report | PLANNED | — | UNKNOWN |
| EXP-006 Anti-Score / Reliability Research | PLANNED | — | UNKNOWN |
| EXP-007 Recommendation Battles | PLANNED (WAVE 2) | — | UNKNOWN |
| EXP-008 AI Language Gap | PLANNED | — | UNKNOWN |

---

## Current Top 3 Priorities

1. **EXTERNAL:** Configure GTM tags for Measurement Layer v1 events → GA4 (before/on Day 1)
2. MEMS evidence interview + implementation inventory (Founder) + Revenue OS prep pack
3. Prepare first Unsolicited Mini-Audits / Target Accounts (EXP-001)

---

## Founder Actions Required

| Action | Why Founder Required | Category | Estimated Time | Deadline |
|--------|----------------------|----------|----------------|----------|
| MEMS evidence interview (or schedule) | Relationship / Founder Knowledge | B | 45–90 min | UNKNOWN |
| Approve first honest comparison thesis before publish | Reputation / public claims | B | 20–40 min | UNKNOWN |
| Configure GTM tags for Measurement Layer v1 → GA4 | EXTERNAL CONFIG (no code) | B | 20–40 min | Day 1 (2026-08-10) |

---

## Blockers

- **GTM→GA4 mapping** for Measurement Layer v1 dataLayer events still **EXTERNAL CONFIG REQUIRED** (app fires events; GA4 empty until GTM tags exist)
- Historical conversion baseline 2026-05-12…2026-08-09 remains **NOT TRACKED**
- MEMS external usage rights UNKNOWN (Category B)
- Frontend pricing fallback still €199 (display risk if Backend down) — BACKLOG-009, non-blocking while Backend healthy

---

## New Evidence

- **FACT:** Live Backend pricing API returned 199; DB updated to **190**; live API now returns **190**
- **FACT:** Measurement Layer v1 implemented — App → `dataLayer` funnel events; measurable from deploy / Day 1 intent
- **FACT:** No in-app Consent CMP; privacy policy mentions Cookie-Banner (gap); GTM already loads unconditionally

---

## Decisions Needed

1. Whether MEMS feedback may be used publicly — Category **B**
2. GTM tag mapping for Measurement Layer events → GA4 — **EXTERNAL CONFIG** (Founder/ops)

---

## P0 UNKNOWN Triage (current)

| UNKNOWN | Category | Owner | Notes |
|---------|----------|-------|-------|
| GA4 page metrics 2026-05-12…2026-08-09 | **A** | Revenue OS | Pull from GA4 UI if access; else escalate access as B |
| Funnel conversion events in GA4 (pre–Day 1) | **NOT TRACKED** | — | Historical window stays NOT TRACKED; forward path = GTM config |
| MEMS public usage rights | **B** | Founder | Compact decision ask |
| COGS per report | **A** / **C** short-term | Revenue OS | When production data exists |
| Founder hours this week | **B** light | Founder | Scorecard only |

---

## Revenue OS Autonomous Work Queue

### P0

1. Pull whatever **is** available in GA4 for 2026-05-12…2026-08-09 (Users/Sessions/Source/Landings/page paths) — mark rest NOT TRACKED
2. MEMS Evidence Interview prep pack (Founder conducts)
3. Research 30 Target Accounts with observable AI-Visibility Gap
4. Prepare first 5 Unsolicited Mini-Audits (EXP-001)
5. Prepare first Radically Honest Comparison Page draft (EXP-004)

### P1

6. DE Core Sales Copy package (Founder approves)
7. EN Core Commercial Pages
8. Swiss AI Visibility Index Pilot design (EXP-002)
9. High-Intent Problem Page draft
10. BACKLOG-009 when authorized: align Website €199 fallback → 190

### P2

11. Bounded Anti-Score plan (EXP-006)
12. Invisible Exporters / Language Gap go/no-go (EXP-003 / EXP-008)

---

## Notes

- Fachliche Preiswahrheit: **EUR 190 Backend** (live verified).
- NOT TRACKED ≠ 0.
- Durable knowledge → Operating Manual; live counters → this file.
