# MentionBee Operating Manual

> **Single Source of Truth** für MentionBee.  
> Langfristiges Unternehmensgedächtnis für Revenue OS und AI-Executives.  
> **Aktueller operativer Zustand:** `docs/business/revenue-os/weekly-state.md`  
> **Operative Verfassung:** `docs/business/revenue-os/system-prompt.md`

---

## Inhaltsverzeichnis

- [0. Information Types & Governance](#0-information-types--governance)
- [1. Vision](#1-vision)
- [2. Mission](#2-mission)
- [3. Positionierung](#3-positionierung)
- [4. Ideal Customer Profile (ICP)](#4-ideal-customer-profile-icp)
- [5. Produkt](#5-produkt)
- [6. Revenue Playbook](#6-revenue-playbook)
- [7. Wettbewerber](#7-wettbewerber)
- [8. Kunden & Case Studies](#8-kunden--case-studies)
- [9. Marketing](#9-marketing)
- [10. Experimente](#10-experimente)
- [11. Revenue Dashboard](#11-revenue-dashboard)
- [12. Decision Journal](#12-decision-journal)
- [13. Offene Fragen](#13-offene-fragen)
- [14. Backlog](#14-backlog)
- [15. Changelog](#15-changelog)

---

## 0. Information Types & Governance

Revenue OS und alle Agents **müssen** Informationen explizit typisieren. Stille Promotion ist verboten.

| Type | Bedeutung |
|------|-----------|
| **FACT** | Direkt belegbare Tatsache |
| **EVIDENCE** | Interne/externe Evidenz, die eine Schlussfolgerung stützt |
| **INFERENCE** | Plausible Interpretation vorhandener Evidenz |
| **HYPOTHESIS** | Noch zu testende Annahme |
| **DECISION** | Explizit getroffene strategische/operative Entscheidung |
| **BACKLOG** | Bewusst nicht aktive Idee |
| **OPEN QUESTION** | Noch unbeantwortete Frage |
| **EXPERIMENT** | Aktiver oder abgeschlossener Test |
| **SUPERSEDED** | Frühere Aussage/Entscheidung, ersetzt durch neuere DECISION |

**Prioritätsregel bei Widersprüchen:**

1. Explizite Decisions im Revenue-OS-Setup / Operating Manual (neueste)
2. Neuere Decisions aus Strategy v1.2 (2026-08-09)
3. Bestehendes Operating Manual
4. Ältere Strategie-/Analyse-Dokumente

**Regel:** `HYPOTHESIS`/`INFERENCE` dürfen niemals stillschweigend zu `FACT` werden.

### 0.1 UNKNOWN Triage (DECISION — DEC-016)

Jedes relevante `UNKNOWN` wird einer Kategorie zugeordnet. UNKNOWNs werden **nicht** automatisch zu Founder-To-dos.

| Kategorie | Bedeutung | Action |
|-----------|-----------|--------|
| **A — AUTONOMOUSLY RESOLVABLE** | Revenue OS kann recherchieren, messen oder aus vorhandenen Systemen beziehen | Revenue OS beschafft selbst |
| **B — FOUNDER DECISION REQUIRED** | Echte Entscheidung, Freigabe oder Founder Knowledge nötig | Kompakt an Olaf eskalieren |
| **C — NON-BLOCKING / DEFER** | Aktuell nicht execution-blocking | UNKNOWN belassen; nicht unnötig eskalieren |

### 0.2 Autonomy Loop (DECISION — DEC-015)

Zielmodell:

`OBSERVE → ANALYZE → PRIORITIZE → EXECUTE WHERE AUTHORIZED → MEASURE → LEARN → UPDATE STATE → CHOOSE NEXT ACTION`

Olaf ist primär **Approval Gate** für: finanzielle Folgen, Strategie, Produktänderungen, Preisänderungen, externe Kommunikation in seinem Namen, reputationskritische Claims, wichtige Kundenbeziehungen.

Routine (Recherche, Analyse, Vorbereitung, Drafting, Monitoring, Dokumentation) soll möglichst **nicht** bei Olaf landen.

**Quellen (Master):**

- Strategy: `docs/business/sources/MentionBee_Master_Strategy_Operating_Context_v1_2.docx` (v1.2, 2026-08-09)
- Extract (Arbeitskopie): `docs/business/sources/_strategy_v1_2_extracted.txt`

---

## 1. Vision

**TYPE:** INFERENCE (abgeleitet aus Strategy v1.2 Master Thesis; keine separate Vision-Marketingprosa im Source)

MentionBee existiert, damit Unternehmen verstehen und entscheiden können:

1. Werden wir bei relevanten AI-Kaufentscheidungen empfohlen?
2. Warum gewinnen Wettbewerber?
3. Was können wir konkret dagegen tun?

MentionBee existiert **nicht**, um möglichst viele AI-Visibility-Metriken, Dashboards oder Scores zu produzieren.

**Was MentionBee langfristig nicht werden will (DECISION / Strategy v1.2):**

- Kleinerer Peec/Profound-Klon
- Enterprise Feature-Race Teilnehmer
- Generic GEO-Content-Maschine

---

## 2. Mission

**TYPE:** DECISION / Strategy framing

MentionBee reduziert Unsicherheit von CEOs und Marketing-Verantwortlichen in Bezug auf AI-vermittelte Discovery: Diagnose → Erklärung → priorisierte Handlung.

**Kernproblem (FACT — Kategorie):** Käufer nutzen zunehmend KI-Systeme zur Shortlist; Marken können fehlen, bevor die Website besucht wird.

**Lösung (FACT — aktuelles Offer):** Einmaliger Paid Deep-Dive Report (**EUR 190**, Backend = Price SoT) mit Wettbewerbsvergleich, Quellen-/Content-/Tech-Findings und priorisiertem Massnahmenplan.

**Nicht-Versprechen (DECISION):** Kein Claim „mehr Website-Traffic aus ChatGPT“ als Primärnutzen — Attribution und Traffic-Evidenz sind dafür zu schwach (siehe Strategy Market Thesis + academic evidence notes).

---

## 3. Positionierung

### 3.1 Produkt vs. Nutzen

| Aspect | Statement | Type |
|--------|-----------|------|
| Kategorie | AI Visibility Diagnosis (einmaliger Audit), nicht Monitoring-SaaS | DECISION |
| Wertkette | DIAGNOSIS + EXPLANATION + ACTION | DECISION |
| Deliverable | Report, den CEO/CMO an Marketing, Content, Entwickler, Agentur oder Umsetzer weitergeben kann | DECISION |
| Nicht | Enterprise Prompt-Monitoring-Dashboard | DECISION |
| Nicht | Garantie, dass ein Schema-Tag / llms.txt eine Empfehlung erzwingt | DECISION |
| Nicht | Generisches SEO-Audit mit „AI“ im Titel | DECISION |

### 3.2 Working Commercial Promise

> “Why does AI recommend your competitors – but not you?  
> MentionBee shows you why and gives you a concrete, prioritized plan to improve it.”

**TYPE:** HYPOTHESIS / WORKING POSITIONING — kein unveränderlicher finaler Claim.

### 3.3 Reason to Buy

**TYPE:** DECISION (Reason to Buy Framework)

Für einen einmaligen Basispreis von **EUR 190** (Backend SoT) erhält der Käufer eine tiefe Diagnose statt eines weiteren Recurring-Dashboards: Wettbewerbs-Sichtbarkeit, Quellen, Website-/Content-/Tech-Findings und priorisierte Actions.

### 3.4 Pasta Principle / USP

**TYPE:** DECISION  
**Name:** PASTA PRINCIPLE  
**Leitsatz:** DIFFERENTIATION MATTERS; UNIQUENESS DOES NOT.

MentionBee braucht keinen magischen White-Space-Feature-USP. MentionBee braucht Reason to Buy, gutes Produkt, Vertrauen, Proof, Positionierung, Distribution, Marke, Wiedererkennbarkeit.

Wettbewerbsanalyse dient Buyer-Alternativen, Pricing, Offers, Positionierung, Marktveränderungen — **nicht** endloser USP-Suche.

### 3.5 Marketing as Moat

**TYPE:** DECISION

OUT-MARKET THE CATEGORY statt OUT-FEATURE THE CATEGORY.

Produkt: sehr gut, konkret, bezahlbar, actionable.  
Marketing: ungewöhnlich, datengetrieben, ehrlich, mutig, wiedererkennbar, nützlich.

Vor jedem Product Build prüfen: Kann dasselbe Ziel besser durch Proof, Distribution, Research, Content, Positionierung, Outreach, PR, Cases oder Vergleichsinhalte erreicht werden?

### 3.6 Botschaften vermeiden

| Vermeiden | Why | Type |
|-----------|-----|------|
| Traffic aus ChatGPT als Primärversprechen | Evidenzlage schwach / überzeichnet | DECISION |
| Score als Hauptnutzen | Scheingenauigkeit; Volume ≠ Outcome | DECISION |
| „150+ Checks / 25 Massnahmen“ als Verkaufskern | Volume ist nicht das gewünschte Outcome | INFERENCE / Strategy due diligence |
| Universelle Überlegenheit vs. Peec/Profound | Buyer usefulness > Self-promotion | DECISION |
| Magische USP-Claims | Pasta Principle | DECISION |

---

## 4. Ideal Customer Profile (ICP)

### 4.1 Zielkunden / Segmente

| Segment | Job | Priority | Type |
|---------|-----|----------|------|
| DACH SME / B2B | Verstehen, warum Wettbewerber in AI-Empfehlungen erscheinen | P0 | DECISION |
| Export-orientierte Swiss SME | Sichtbarkeit nach Markt/Sprache | P0 Experiment | HYPOTHESIS |
| Marketing Lead / CMO | Priorisierte Umsetzungsagenda fürs Team | P0 | DECISION |
| Founder-led Startup / Scale-up | Schnelle Gap-Identifikation | P1 | DECISION |
| Enterprise SEO/AEO Team | Continuous Monitoring | Deprioritize | DECISION |
| Buyer seeking guaranteed rankings | Garantierte Empfehlung | Disqualify | DECISION |

### 4.2 Kauftrigger

**TYPE:** HYPOTHESIS / Strategy list (zu validieren)

- Wettbewerber wird wiederholt empfohlen; eigene Marke fehlt
- Management fragt nach GEO/AEO und will konkrete Antwort
- Website-Relaunch / Content-Programm geplant
- Exporteur vermutet Englisch-Discovery-Vorteil der Konkurrenz
- Agentur/Marketer braucht priorisierten Backlog statt Monitoring-Screen

### 4.3 Einwände (lernen)

**TYPE:** OPEN QUESTION / Learning Agenda

- Warum zahlen, wenn ich ChatGPT selbst fragen kann?
- Wie zuverlässig sind die Messungen?
- Was tue ich danach anders?
- Beweis, dass Empfehlungen Visibility/Leads verbessern?
- Warum MentionBee statt Peec/Profound/Semrush/Ahrefs/Cheap Audit?
- Warum jetzt?

### 4.4 Anti-ICP

Enterprise-Teams mit Monitoring-Bedarf; Buyers, die Garantien verlangen; Feature-Vergleichs-Shopper ohne Decision-Job.

---

## 5. Produkt

### 5.1 Paid Report (Deep-Dive) — Core Offer

| Feld | Wert | Type |
|------|------|------|
| Name | Paid MentionBee Report / AI Visibility Deep-Dive | FACT (Website) |
| Rolle | Core commercial product (90 days) | DECISION |
| **Basispreis** | **EUR 190** | **DECISION (DEC-013)** |
| Price Source of Truth | **Backend** (öffentliche Pricing-API der Report-App). Frontend darf Preise nicht als fachliche Wahrheit hart codieren | DECISION |
| Code Fallback (technisch) | `PRICING_FALLBACK` noch €199 in Website `lib/public-pricing.ts` / `hooks/usePublicPricing.ts` — **nicht** fachliche Wahrheit; Implementation debt | FACT / SUPERSEDED as business truth |
| **Live Backend Verify (2026-08-09)** | `GET https://ai-visibility-report-tau.vercel.app/api/public/pricing` → **deepDivePrice: 190**, currency EUR. DB `settings.price_deep_dive` auf **190** gesetzt; Backend-Code-Defaults auf 190 angeglichen. Website-Fallbacks unverändert (BACKLOG-009). | **FACT / EVIDENCE** |
| CHF Display | Später: aus EUR-Basis abgeleiteter CHF-Preis für CH-Seitenaufrufe | BACKLOG (nicht jetzt) |
| Lieferzeit (Website) | 24–48h | FACT (Website Copy) |
| Checkout | E-Mail + Website → Stripe (via Backend API) | FACT (Code) |
| Product Freeze | Ja, 90 Tage — siehe DEC-002 | DECISION |

#### 5.1.1 Pricing Inventory (Code — Stand 2026-08-09)

**Regel:** Alle sichtbaren Paid-Preise sollen aus Backend/`fetchPublicPricing` bzw. `usePublicPricing` kommen. Keine Architekturänderung in diesem Schritt — nur Bestandsaufnahme.

| Location | Mechanism | Notes |
|----------|-----------|-------|
| `lib/public-pricing.ts` | `fetchPublicPricing()` → `NEXT_PUBLIC_APP_URL/api/public/pricing`; **hardcoded fallback €199 / €299** | SoT path + stale fallback |
| `hooks/usePublicPricing.ts` | Client fetch + **hardcoded initial/fallback €199** | Same debt |
| `lib/apply-pricing-templates.ts` | Replaces `{{DEEP_DIVE_PRICE}}` / `{{DEEP_DIVE_REGULAR}}` | Template bridge |
| `components/marketing/ValueAnchor.tsx` | `pricing.deepDivePriceFormatted` | Homepage |
| `components/marketing/FreeVsPaid.tsx` | `sale` / `regular` from hook; Free „0 €“ hardcoded (OK) | Homepage |
| `components/marketing/ReportPriceBadges.tsx` | Hook | `/report` |
| `components/forms/PaidReportForm.tsx` | Button label from hook | Checkout CTA |
| `components/marketing/SampleReportDeepDiveCta.tsx` | Hook | Sample page |
| `components/marketing/FAQ.tsx` | Schema via `applyPricingTemplates` | Homepage FAQ JSON-LD |
| `app/page.tsx` | `fetchPublicPricing()` → FAQ | Homepage |
| `app/faq/page.tsx` | `fetchPublicPricing` + templates | FAQ page |
| `app/report/page.tsx` | Uses `ReportPriceBadges` (no hard price) | Paid page |
| `content/faq-schema-extensions.ts` | `{{DEEP_DIVE_PRICE}}` placeholder | Good |
| `content/faq-full-page.ts` | `{{DEEP_DIVE_PRICE}}`; Agency anchor text still „CHF 2.500–5.000“ (comparison, not SKU) | Note |
| `app/agb/page.tsx` | „Preise … in EUR“ (currency policy text) | Not SKU amount |
| Stripe Checkout | Created via Backend `/api/create-checkout-session` | Actual charge = Backend |

### 5.2 Free Report / Signal

| Feld | Wert | Type |
|------|------|------|
| Job | „Should I care?“ — Signal / Lead | DECISION |
| Risiko | Kann Paid kannibalisieren, wenn Scope zu nah am Paid liegt | HYPOTHESIS / INFERENCE |
| Regel | Free secondary; Free→Paid Sequence explizit machen | DECISION (Strategy) |

### 5.3 Revenue Architecture

```
SIGNAL → DIAGNOSE → FIX → VERIFY → MONITOR
```

| Layer | Status | Type |
|-------|--------|------|
| Signal / Sample | Existing / tune carefully | FACT / DECISION |
| Paid Deep-Dive | Core Offer heute | DECISION |
| Implementation Support | Hypothesis / manuell / nur bei Customer Pull | HYPOTHESIS |
| Verification / Re-check | Hypothesis / Follow-on | HYPOTHESIS |
| Monitoring | NOT NOW | DECISION |

### 5.4 Product Freeze

**TYPE:** DECISION (DEC-002)

**Nicht bauen (90 Tage):** Report-Neuentwicklung, neue Scoring Engine, grosse Reliability Engine, Dashboard/Monitoring-Plattform, grosse Multilingual-Report-Architektur, Major Report Redesign.

**Erlaubt:** Bugs, faktische Fehler, kleine Low-Effort-Clarity-Fixes, zwingende Paid-Kunden-Anforderungen, wiederholte Customer Evidence für Conversion/Nutzen/Retention.

**Kernregel:** CUSTOMER EVIDENCE → PRODUCT CHANGE. Nicht: PRODUCT SPECULATION → PRODUCT CHANGE.

### 5.5 Reportstruktur (kanonisch, Website/Sample)

**TYPE:** FACT (öffentliche Sample/Site)

Module u. a.: KI-Erwähnungen / AI Visibility, Positionierung & Content, Tech SEO, Schema & E-E-A-T, UX & Conversion, Externe Sichtbarkeit; priorisierte Massnahmen.

Sample: `/sample-report` (Disrupt Media Beispiel).

### 5.6 Roadmap

Nur Demand-Validation + Distribution + Proof. Product builds nur über Freeze-Ausnahmen. Siehe Kapitel 14 Backlog.

---

## 6. Revenue Playbook

### 6.1 90-Day Revenue Contract

**TYPE:** DECISION (DEC-014)  
**Start / Day 1:** 2026-08-10  
**Day 90:** 2026-11-07  

| Metric | Minimum | Target | Stretch / Quality |
|--------|---------|--------|-------------------|
| New paying customers | 2 | **5** | 10 |
| Outside founder network | ≥1 | **≥3 of target 5** | Majority |
| Qualified purchase conversations | 10 | ≥20 | ≥30 |
| New revenue | EUR 380 | **≥ EUR 2,500** | ≥ EUR 5,000 w/ follow-on |
| Buyers implement ≥1 major rec | Track | ≥60% | Outcome evidence |
| Case/testimonial candidates | 1 | ≥2 | ≥3 |
| Repeatable acquisition motion | Signal | 1 credible | 1 scalable + 1 secondary |
| Founder time | Track | **≤ ~5 h/week avg** | Declining founder time / customer |

**Period-start FACT (2026-08-10):** Paying customers = 0; Free Report submissions = 0; MentionBee report revenue = EUR 0.

**SUPERSEDED:** Frühere Formulierung „2 customers in 90 days“ als Hauptziel (u. a. Executive Summary v1.2 Altpassage).  
**Aktuell:** 2 = Minimum Proof; 5 = Target; 10 = Stretch.

**Interpretation rules (DECISION):**

- 2 Freundes-Kunden ≠ skalierbare Demand-Validation
- Einmaliges Consulting ≠ MentionBee-Produkt-Validation
- Traffic ohne Qualified Intent ≠ Success
- Failed Experiment nützlich, wenn klar entschieden + geloggt

### 6.2 Founder-Time Constraint

**TYPE:** DECISION

Olaf ≤ ~5 h/Woche durchschnittlich MentionBee Operating Work.

Prioritätsprüfung jeder Aufgabe:

1. Kann Revenue OS es selbst?
2. Kann Automation es?
3. Kann Cursor/Code es?
4. Braucht es wirklich Olaf?

**Olaf primär:** Calls, Relationships, High-value Outreach, Freigaben, Strategie-/Preis-/Produkt-/Reputations-Entscheidungen.

**Olaf nicht:** Competitive Research, First Content Research, Data Wrangling, KPI Assembly, Experiment Docs, Lead Research, First Drafts, Formatting, Routine Analysis — wenn System es kann.

### 6.3 Customer Journey / Funnel (aktuell bekannt)

**TYPE:** FACT (Website Architecture) + OPEN QUESTION (Performance)

Pfad: Homepage → Sample / Free / `/report` → Checkout (Stripe) → Order Success → Backend Details.

Bekannte CTA-Spannung (INFERENCE aus Due Diligence): Free erscheint stark; FinalCTA historisch Free-lastig; Paid braucht Proof früher.

### 6.4 Growth Thesis

**TYPE:** DECISION / HYPOTHESIS

Out-market via Research-as-Distribution, Honest Comparisons, Unsolicited Evidence, Cases — nicht Feature Breadth.

### 6.5 Operating Principles (Canonical)

**TYPE:** DECISION

1. Sell before rebuilding.
2. Customer evidence before product change.
3. Differentiation matters; uniqueness does not.
4. Out-market the category rather than out-feature it.
5. Trust and proof beat generic AI claims.
6. A report is useful only if it changes action.
7. Do not confuse visibility, traffic, leads and revenue.
8. Protect unit economics at the EUR 190 wedge price (Backend SoT).
9. Use research as distribution, not research as procrastination.
10. Be radically honest in comparisons and methodology.
11. Automate preparation and analysis; reserve founder time for judgment, relationships and high-value selling.
12. Kill weak experiments and retain the learning.
13. Do not build recurring software before recurring customer pull.
14. Keep founder average MentionBee workload ≤ ~5 h/week.
15. Do not repeatedly reopen decided questions without new evidence.

### 6.6 Kill / Pivot Criteria (90 days)

**TYPE:** DECISION / Strategy

- 0 paying customers trotz ≥15 qualified conversations → Segment/Format/Willingness-to-pay revisiten
- Buy but no action → Report redesign Evidence sammeln
- Action + outcomes, aber Acquisition hard → Distribution Problem, nicht Product

---

## 7. Wettbewerber

### 7.0 Index

| Competitor | Cluster | Type | Last reviewed |
|------------|---------|------|---------------|
| Profound | Enterprise / suite | EVIDENCE (public) | 2026-08 (Strategy) |
| Peec AI | AI Search Analytics | EVIDENCE (public) | 2026-08 (Strategy) |
| Visibisy | Simple tracking | EVIDENCE (public) | 2026-08 (Strategy) |
| VisibAI, Flowblinq, Prismark, VisibilityAudit.ai, BroDop, Mirr, LLMOAudit.ch | SMB one-off | EVIDENCE | 2026-08 |
| Loamly, Granite Metrics, Competico, 5W | Deep audit | EVIDENCE | 2026-08 |
| Storyzee, AppSynth, Monprez, Foundus | Audit + implementation | EVIDENCE | 2026-08 |
| Uygen, Prominara, AMPD, jujuGEO | Full-loop | EVIDENCE | 2026-08 |
| OnlineKI, Digital Creators, LLMOAudit.ch, Tout Marketing | DACH/CH | EVIDENCE | 2026-08 |
| Semrush / Ahrefs Brand Radar / HubSpot | Enterprise suite adjacency | EVIDENCE | 2026-08 |

**Public pricing claims are time-sensitive** — vor externer Publikation verifizieren.

### 7.1 Profound

| Feld | Inhalt |
|------|--------|
| Positionierung | Enterprise AI-search / AEO platform |
| Pricing (public claim) | Starter $99/mo, Growth $399/mo, Enterprise custom — **verify before publish** |
| Zielgruppe | Enterprise SEO/AEO |
| Stärken | Capital, integrations, breadth, brand |
| Opening for MentionBee | Too heavy/expensive for many SMEs; decision audit can be simpler |
| Type | EVIDENCE / INFERENCE |

### 7.2 Peec AI

| Feld | Inhalt |
|------|--------|
| Positionierung | AI Search Analytics for marketing teams/agencies |
| Pricing | Subscription / prompt-model tiers — **verify** |
| Stärken | Research brand, accessible UX, growing base |
| Opening | Monitoring-first; one-off diagnosis for non-tool buyers |
| Traffic pattern | Proprietary research as distribution (copy pattern: yes, DACH datasets) |
| Type | EVIDENCE / INFERENCE |

### 7.3 Visibisy

| Feld | Inhalt |
|------|--------|
| Positionierung | „Does AI recommend your company?“ |
| Model | Free + tracking tiers |
| Opening | Less diagnostic depth publicly visible |
| Type | EVIDENCE / INFERENCE |

### 7.4 Category Gap (INFERENCE)

Zwischen Free Checker und €99–€399/mo Monitoring: rigorose, human-readable Diagnosis „what/why/what next?“ — näher an productized advisory als SaaS.

**Capability commodity status (Strategy):** Multi-model checks, competitor benchmark, action plan = commodity. Reliability/paraphrase robustness & multilingual market comparison = rare/uncommon → Research angles, nicht 90-day product builds.

---

## 8. Kunden & Case Studies

### 8.1 MEMS

| Feld | Inhalt | Type |
|------|--------|------|
| Status | Strategisch wichtigster Proof-Kandidat | DECISION |
| Bekanntes Feedback (Founder context) | Externer Blick; Fragen aufgedeckt; Website-Relaunch beschlossen; Weiterempfehlung; 299 CHF als angemessen empfunden | EVIDENCE (internal; Freigabe für externe Nutzung: UNKNOWN) |
| Case-study rule | Kein „MentionBee increased leads“ ohne Kausalität; „changed priorities; after implementation we observed X“ bevorzugen | DECISION |
| Nächster Schritt | Evidence Interview + Implementation Inventory | PLANNED (P0) |
| Website-Nutzung heute | MEMS erscheint **nicht** auf der öffentlichen Marketing-Site | FACT |

### 8.2 Testimonials / Outcomes / Referenzen

Aktuell: UNKNOWN / nicht freigegeben ausser MEMS-intern.

### 8.3 Sample / Self-Report

Disrupt Media Sample Report auf Website = Produktbeweis, kein externer Social Proof (FACT).

---

## 9. Marketing

### 9.1 Growth Strategy

**TYPE:** DECISION — Out-market the category; Research as distribution; Trust Architecture first.

### 9.2 Language Strategy

**TYPE:** DECISION

- DE = primäre DACH-Akquisitionssprache
- EN = schrittweise für internationale Distribution (Homepage, Paid Page, Sample, Core FAQ, starke Cases, Research)
- Nicht alle DE-Blogs übersetzen
- Weitere Sprachen: DEMAND-LED
- **Nicht** = Multilingual Report Engine Rebuild (Product Freeze)

### 9.3 Comparison / Search Portfolio

**P0 (DECISION / planned assets):**

- AI Visibility Audit vs AI Visibility Monitoring
- Best AI Visibility Audits for SMEs
- AI Visibility Tools Without a Subscription

**P1:**

- MentionBee vs Peec AI
- MentionBee vs Profound
- ChatGPT self-test vs professional AI Visibility Audit

**Editorial Rule (DECISION):** MentionBee muss nicht immer gewinnen. Choose Peec if … / Choose Profound if … / Choose MentionBee if … / ggf. kein Tool.

### 9.4 Content / SEO / GEO / LLMO

| Area | Status |
|------|--------|
| Problem pages (Tier 1) | Planned — high commercial intent |
| Evidence/research (Tier 3) | Planned via EXP-002/003/006/008 |
| FAQ cluster | Partially live on site |
| llms.txt / LLMO | Exists in repo (`public/llms.txt`) — performance UNKNOWN |
| Generic GEO blogging | Deprioritized / NOT NOW |

### 9.5 Landingpages (live FACT)

| URL | Purpose | Primary CTA |
|-----|---------|-------------|
| `/` | Marketing home | Deep-Dive + Free |
| `/report` | Paid Deep-Dive | Checkout |
| `/free-report` | Free signal | Free form |
| `/sample-report` | Deliverable proof | Mixed CTAs |
| `/faq` | Objections | Info |

### 9.6 LinkedIn / PR / Reddit / Medium

Rules: founder-led evidence posts; PR via data not product launch; Reddit only genuine expertise; Medium for distribution with canonical on owned domain. Status: mostly PLANNED / UNKNOWN activity metrics.

---

## 10. Experimente

> Umbenannt von „Produkt-Experimente“ → **Experimente** (Growth/Marketing/Sales/Product/Pricing/Research).

### Experiment Protocol (required fields)

ID, Type, Name, Status, Priority, Owner, Founder involvement, Hypothesis, Mechanism, Primary KPI, Guardrail, Founder-time budget, Cash/API budget, Start date, Review date, Scale rule, Kill rule, Results, Learnings.

**Status:** PLANNED | ACTIVE | PAUSED | COMPLETED | KILLED  
**Decision outcomes:** SCALE | CONTINUE | MODIFY | KILL

Unvollständige Experimente (ohne Primary KPI / Review Date / Kill Rule) gelten als unvollständig.

### EXP-001 — Unsolicited Reports

| Feld | Wert |
|------|------|
| Type | SALES / GROWTH |
| Priority | P0 |
| Status | PLANNED |
| Owner | Revenue OS prepares / Founder sends |
| Founder involvement | High-value personal communication, approval, calls |
| Hypothesis | Konkrete Gap-Evidenz vor dem Verkauf erzeugt höhere Reply-/Purchase-Rate als generische Cold Mail |
| Mechanism | Observable AI-Visibility-Gap → Mini-Analyse → Paid Report als nächster Schritt |
| Primary KPI | Qualified reply rate; paid conversions from outreach |
| Guardrail | Founder time; no free consulting scope creep |
| Founder-time budget | UNKNOWN |
| Cash/API budget | UNKNOWN |
| Start date | UNKNOWN |
| Review date | UNKNOWN |
| Scale rule | Scale if qualified reply/purchase rate beats generic outreach |
| Kill rule | Kill if no qualified replies/purchases after agreed sample |
| Results | — |
| Learnings | — |

### EXP-002 — Swiss AI Visibility Index

| Feld | Wert |
|------|------|
| Type | RESEARCH / GROWTH |
| Priority | P0 |
| Status | PLANNED |
| Owner | Revenue OS + automation |
| Founder involvement | Approve method/headline |
| Hypothesis | Bounded Swiss company sample produces reusable assets (benchmark, PR, content, leads, outreach) |
| Mechanism | Pilot dataset → multi-asset distribution |
| Primary KPI | External distribution (links/mentions) OR qualified leads from dataset |
| Guardrail | API/cash budget; no large study before pilot |
| Founder-time / Cash/API / Start / Review | UNKNOWN |
| Scale rule | Scale if dataset produces external distribution or qualified leads |
| Kill rule | Kill if pilot yields no story and no engagement |
| Results / Learnings | — |

### EXP-003 — Invisible Exporters

| Feld | Wert |
|------|------|
| Type | RESEARCH / PR / GROWTH |
| Priority | P0/P1 |
| Status | PLANNED |
| Owner | Revenue OS research / Founder outreach |
| Hypothesis | Swiss firms can be strong in real markets but disappear in English AI purchase queries vs international competitors |
| Mechanism | Small sample → PR/lead story if gap real |
| Primary KPI | Media/association interest + exporter leads |
| Guardrail | Small sample first; Product Freeze (no multilingual engine) |
| Budgets / Dates | UNKNOWN |
| Scale rule | Scale only if meaningful cross-language gap/story |
| Kill rule | Kill if no meaningful gap/story |

### EXP-004 — Radically Honest Comparisons

| Feld | Wert |
|------|------|
| Type | MARKETING / GROWTH |
| Priority | P0 |
| Status | PLANNED |
| Owner | Revenue OS + Cursor (publish after Founder approve) |
| Hypothesis | Fit-based honest comparisons increase trust, high-intent search, AI citations, conversion |
| Mechanism | „Choose X if … Choose MentionBee if …“ |
| Primary KPI | Organic impressions / assisted conversions on comparison pages |
| Guardrail | No false superiority claims |
| Budgets / Dates | UNKNOWN |
| Scale rule | Expand pages that attract qualified intent |
| Kill rule | Kill pages with traffic but no qualified intent/conversion |

### EXP-005 — Open Report / Steal This Report

| Feld | Wert |
|------|------|
| Type | MARKETING / GROWTH |
| Priority | P1 |
| Status | PLANNED |
| Owner | Revenue OS |
| Hypothesis | Largely/fully open real report increases trust more than artificial gating |
| Mechanism | Radical transparency (requires customer permission) |
| Primary KPI | Sample engagement → paid-page visits → purchases |
| Guardrail | Must not cannibalize sales; permission required |
| Budgets / Dates | UNKNOWN |
| Scale rule | Keep if trust↑ without sales cannibalization |
| Kill rule | Kill if engagement without paid lift or clear cannibalization |

### EXP-006 — Anti-Score / Reliability Research

| Feld | Wert |
|------|------|
| Type | RESEARCH |
| Priority | P1/P2 |
| Status | PLANNED |
| Owner | Revenue OS (research only) |
| Hypothesis | Single AI visibility scores create false precision; bounded reliability research can earn brand authority |
| Mechanism | Small publishable sample: paraphrases + repeated runs — **NOT a product rebuild** |
| Primary KPI | Citations / discussion / backlinks OR buyer relevance signal |
| Guardrail | Bounded API budget; Product Freeze |
| Budgets / Dates | UNKNOWN |
| Scale rule | Scale research only if interesting results + resonance OR customer evidence |
| Kill rule | Kill if costly and no external/buyer signal |

### EXP-007 — Recommendation Battles

| Feld | Wert |
|------|------|
| Type | MARKETING / GROWTH |
| Priority | WAVE 2 |
| Status | PLANNED |
| Owner | Automation / Revenue OS |
| Hypothesis | Brand A vs Brand B „Who does AI recommend?“ drives curiosity, shares, leads |
| Mechanism | Lightweight/manual first — no large app |
| Primary KPI | Usage, shares, leads |
| Guardrail | Build cost before validation |
| Budgets / Dates | UNKNOWN |
| Scale rule | Build only after simpler bets show traction |
| Kill rule | Kill if manual version shows no engagement |

### EXP-008 — AI Language Gap

| Feld | Wert |
|------|------|
| Type | RESEARCH / GROWTH |
| Priority | P1/P2 |
| Status | PLANNED |
| Owner | Revenue OS + automation |
| Hypothesis | Multilingual recommendation differences are a publishable research/marketing asset |
| Mechanism | Bounded multilingual sample — **not** multilingual report rebuild |
| Primary KPI | International citations / PR / leads |
| Guardrail | Bounded API; Product Freeze |
| Budgets / Dates | UNKNOWN |
| Scale rule | Scale if publishable story + distribution |
| Kill rule | Kill if no gap / no story within budget |

---

## 11. Revenue Dashboard

### 11.1 KPI Definitions

#### REACH

| KPI | Definition | Current | Source |
|-----|------------|---------|--------|
| Qualified sessions by source | Sessions from relevant sources | UNKNOWN | GA4 |
| Relevant search impressions | Impressions on P0 pages/queries | UNKNOWN | Search Console / UNKNOWN |

#### INTENT

| KPI | Definition | Current |
|-----|------------|---------|
| Paid report page views | `/report` views | UNKNOWN |
| Sample report views | `/sample-report` views | UNKNOWN |
| Qualified replies | Outreach replies meeting quality bar | UNKNOWN |
| Qualified conversations | Purchase-intent conversations | UNKNOWN |

#### CONVERSION

| KPI | Definition | Current |
|-----|------------|---------|
| Checkout starts | Stripe/checkout initiated | UNKNOWN |
| Purchases | Paid Deep-Dive purchases | UNKNOWN |
| Paid conversion rate | Purchases / qualified paid-page sessions | UNKNOWN |

#### REVENUE

| KPI | Definition | Current |
|-----|------------|---------|
| New customers | Paying new customers in period | UNKNOWN |
| Revenue | New MentionBee revenue | UNKNOWN |
| Revenue per customer | Avg revenue / new customer | UNKNOWN |

#### ECONOMICS

| KPI | Definition | Current |
|-----|------------|---------|
| API COGS | API cost per paid report | UNKNOWN |
| Infrastructure COGS | Infra per report | UNKNOWN |
| Acquisition cost | CAC by channel | UNKNOWN |
| Contribution per report | Revenue − COGS | UNKNOWN |

#### CUSTOMER ACTION

| KPI | Definition | Current |
|-----|------------|---------|
| % implementing ≥1 major recommendation | Buyers acting on report | UNKNOWN |

#### EVIDENCE

| KPI | Current |
|-----|---------|
| Case candidates | UNKNOWN (MEMS candidate exists) |
| Testimonials | UNKNOWN |
| Measurable outcome evidence | UNKNOWN |

#### EXPERIMENTS

| KPI | Current |
|-----|---------|
| Active | 0 |
| Killed | 0 |
| Scaled | 0 |
| Completed | 0 |
| Planned | 8 (EXP-001…008) |

#### FOUNDER TIME

| KPI | Definition | Current |
|-----|------------|---------|
| Founder hours/week | Hours on MentionBee ops | UNKNOWN |
| Founder Time per New Customer | Founder hours / new paying customers | UNKNOWN |

### 11.2 Unit Economics Guardrails

**TYPE:** DECISION

- Keine brute-force LLM-Messung nur für Scheinpräzision
- Frage bei Extra-Compute: „Kann dieses Ergebnis wahrscheinlich eine andere geschäftliche Empfehlung erzeugen?“ Wenn nein → nicht priorisieren
- Protect wedge price economics (EUR 190 Backend SoT)

### 11.3 GA4 Baseline Required

**TYPE:** DECISION / P0 Task  
**Window (pre-period):** **2026-05-12 bis einschließlich 2026-08-09**  
**Category:** A — AUTONOMOUSLY RESOLVABLE (when GA4 access exists)  
**Goal:** Belastbarer Vorher-Zustand für die 90-Day-Periode; später möglichst automatisch aus GA4.

Mindestens erfassen:

- Users, Sessions, Source/Medium, Landing Pages, Homepage traffic  
- Paid Report Page Views, Sample Report Views, Free Report Submissions  
- Checkout Starts, Purchases, relevante Conversion Rates  

Keine manuellen/erfundenen Zahlen. Nicht getrackte Metriken = **NOT TRACKED** (nicht als 0 werten).

#### 11.3.1 GA4 / Analytics Readiness (Repo — 2026-08-09)

| Item | Finding | Type |
|------|---------|------|
| Container in Website | Google Tag Manager **`GTM-W25FQX2Z`** in `app/layout.tsx` | FACT |
| GA4 Measurement ID in Repo | **Nicht vorhanden** | FACT |
| Custom Funnel Events in App-Code | **Keine** `dataLayer`/`gtag` Events für Funnel-Steps | FACT |
| paid report page view | Kein Named Event; Pfad `/report` ggf. nur als Pageview falls GTM→GA4 | **NOT TRACKED** as event; pageviews **UNKNOWN** without GA4 UI |
| sample report view | idem `/sample-report` | **NOT TRACKED** as event; pageviews **UNKNOWN** |
| free report submission | `FreeReportForm` ohne Analytics nach Submit | **NOT TRACKED** |
| checkout start | `PaidReportForm` ohne Analytics vor Stripe | **NOT TRACKED** |
| purchase | Order success ohne Analytics-Event | **NOT TRACKED** |
| Users / Sessions / Source/Medium / Landing / Homepage | Nur wenn GA4 hinter GTM konfiguriert | **UNKNOWN** (Container-Inhalt nicht im Repo) |

**Implication:** Baseline für Conversion-Events ist ohne zusätzliche Tracking-Arbeit **nicht zuverlässig** aus dem Repo ableitbar. Page-level Metrics ggf. in GA4 UI prüfbar — Category A wenn Zugang vorhanden.

#### 11.3.2 Measurement Layer v1 (App → dataLayer → GTM)

**TYPE:** FACT  
**Measurable from:** deploy of Measurement Layer v1 (intended **Day 1 = 2026-08-10** once live)

| Event | Trigger in App | Parameters |
|-------|----------------|------------|
| `view_paid_report` | Mount `/report` once | `page_path` |
| `view_sample_report` | Mount `/sample-report` once | `page_path` |
| `free_report_submit` | After successful Free Report API response | optional `website` |
| `begin_checkout` | After checkout session URL received (before redirect) | `value`, `currency`, `product` (from Backend pricing) |
| `purchase` | `/order/success` with `session_id`; sessionStorage dedupe | `transaction_id`, `value`, `currency`, `product` |

**Historical (2026-05-12…2026-08-09):** `free_report_submit`, `begin_checkout`, `purchase` remain **NOT TRACKED**. Business FACTS at period start: 0 customers, EUR 0 revenue, 0 free submissions.

**EXTERNAL CONFIG REQUIRED:** GTM tags/triggers for these `dataLayer` events → GA4. Without GTM mapping, events exist in dataLayer only.

**Consent:** No in-app Consent CMP found. Privacy policy claims Cookie-Banner; GTM already loads unconditionally. Measurement Layer pushes to `dataLayer` (same pattern). GTM Consent Mode gating = EXTERNAL CONFIG / legal follow-up.

---

## 12. Decision Journal

**Schema:** ID | Date | Decision | Context | Reason | Implications | Revisit Trigger | Status

### DEC-001 — Pasta Principle / No Magical USP

| Feld | Wert |
|------|------|
| Date | 2026-08-09 |
| Decision | Stop searching for a magical USP; DIFFERENTIATION MATTERS; UNIQUENESS DOES NOT |
| Context | Crowded category; many close substitutes |
| Reason | Viable market does not require global feature uniqueness |
| Implications | Competitive research = buyer context, not endless white-space hunt |
| Revisit Trigger | New customer evidence or market change justifying deeper USP work |
| Status | ACTIVE |

### DEC-002 — Product Freeze (90 days)

| Feld | Wert |
|------|------|
| Date | 2026-08-09 |
| Decision | Freeze major product/report architecture for 90-day validation |
| Reason | Bottleneck is distribution, proof, sales — not report quality |
| Implications | Only bugs/clarity/customer-necessity/evidence-driven changes |
| Revisit Trigger | End of 90 days OR repeated customer evidence |
| Status | ACTIVE |

### DEC-003 — Reliability = Research First

| Feld | Wert |
|------|------|
| Date | 2026-08-09 |
| Decision | Reliability work is research/brand stance, not report rebuild |
| Reason | Protect time and API economics |
| Revisit Trigger | Reliability becomes repeated purchase objection |
| Status | ACTIVE |

### DEC-004 — Marketing as Central Moat / Out-Market

| Feld | Wert |
|------|------|
| Date | 2026-08-09 |
| Decision | Out-market the category rather than out-feature it |
| Reason | Bootstrapped entrant cannot win feature race |
| Status | ACTIVE |

### DEC-005 — DE + EN Commercial/Research First

| Feld | Wert |
|------|------|
| Date | 2026-08-09 |
| Decision | Bilingual commercial/research assets first; no multilingual report rebuild |
| Revisit Trigger | Significant paid demand for more report languages |
| Status | ACTIVE |

### DEC-006 — White-label Deprioritized

| Feld | Wert |
|------|------|
| Date | 2026-08-09 |
| Decision | White-label/agency product NOT NOW |
| Reason | Founder unconvinced; crowded; non-essential to validation |
| Revisit Trigger | Repeated inbound agency demand |
| Status | ACTIVE |

### DEC-007 — 90-Day Targets

| Feld | Wert |
|------|------|
| Date | 2026-08-09 |
| Decision | Minimum Proof=2; Target=5; Stretch=10; ≥3 of target 5 outside founder network; Revenue ≥ EUR 2,500 |
| Supersedes | „2 customers“ as main success criterion |
| Status | ACTIVE |

### DEC-014 — 90-Day Period Calendar

| Feld | Wert |
|------|------|
| Date | 2026-08-09 |
| Decision | Start/Day 1 = 2026-08-10; Day 90 = 2026-11-07 |
| Implications | Product Freeze & Revenue Contract clock; GA4 baseline = 2026-05-12…2026-08-09 |
| Status | ACTIVE |

### DEC-008 — Founder Time Cap

| Feld | Wert |
|------|------|
| Date | 2026-08-09 |
| Decision | ≤ ~5 founder hours/week average MentionBee operating work |
| Status | ACTIVE |

### DEC-009 — Customer Evidence before Product Change

| Feld | Wert |
|------|------|
| Date | 2026-08-09 |
| Decision | Product changes require customer evidence (or Freeze exceptions) |
| Status | ACTIVE |

### DEC-010 — Diagnosis Positioning (not Monitoring)

| Feld | Wert |
|------|------|
| Date | 2026-08-09 |
| Decision | Position paid product around diagnosis + decisions, not score/dashboard monitoring |
| Status | ACTIVE |

### DEC-011 — Core Offer Price Frame (partially SUPERSEDED)

| Feld | Wert |
|------|------|
| Date | 2026-08-09 |
| Decision | Keep ~190 one-off Deep-Dive as wedge; do not build broad SaaS now |
| Status | ACTIVE (wedge/SaaS part); price currency/source clarified in DEC-013 |

### DEC-013 — Price SoT = Backend EUR 190

| Feld | Wert |
|------|------|
| Date | 2026-08-09 |
| Decision | Basispreis Paid Report = **EUR 190**. Backend is sole Source of Truth. Do not hardcode SKU price in frontend as business truth. All displays (Homepage, Report page, FAQ, Checkout labels, Schema, etc.) must consume Backend pricing. |
| Context | Resolves prior conflict (Strategy CHF/EUR 190 vs code fallback €199). €199 fallback is **not** fachliche Wahrheit. |
| Implications | No price architecture rebuild in documentation step; later align fallback/debt. CHF geo-display = BACKLOG. |
| Revisit Trigger | Price change (Founder-only) or CHF display implementation |
| Status | ACTIVE |
| Supersedes | OQ-013 open conflict; „CHF 190“ as current SKU currency; €199 as business truth |

### DEC-012 — Working Positioning Copy

| Feld | Wert |
|------|------|
| Date | 2026-08-09 |
| Decision | Adopt working commercial promise (competitors recommended / why + plan) as HYPOTHESIS |
| Status | ACTIVE (working) |

### DEC-015 — Autonomy Level

| Feld | Wert |
|------|------|
| Date | 2026-08-09 |
| Decision | Revenue OS works as autonomously as possible: OBSERVE→ANALYZE→PRIORITIZE→EXECUTE WHERE AUTHORIZED→MEASURE→LEARN→UPDATE STATE→CHOOSE NEXT ACTION. Olaf = approval gate for money/strategy/product/price/external-in-name/reputation/key relationships. |
| Status | ACTIVE |

### DEC-016 — UNKNOWN Triage A/B/C

| Feld | Wert |
|------|------|
| Date | 2026-08-09 |
| Decision | Every relevant UNKNOWN triaged as A (autonomous), B (Founder decision), or C (defer). UNKNOWNs are not automatic Founder todos. |
| Status | ACTIVE |

---

## 13. Offene Fragen

| ID | Frage | Bereich | Priority | Status |
|----|-------|---------|----------|--------|
| OQ-001 | GA4 Baseline 2026-05-12…2026-08-09 — welche Metriken sind in GA4 UI verfügbar vs NOT TRACKED (siehe §11.3.1)? | Measurement | P0 | OPEN — **A** (GA4 UI) / **B** if new event tracking must be approved |
| OQ-002 | Welche Reportteile bewerten Käufer nach Erhalt als besonders wertvoll? | Product | P0 | OPEN — **A**/B after customers |
| OQ-003 | Welche Empfehlungen setzen Käufer tatsächlich um? | Product / Action | P0 | OPEN — **B**/A with customers |
| OQ-004 | Welche messbaren Veränderungen folgen der Umsetzung? | Outcomes | P0 | OPEN — **A**/B |
| OQ-005 | Welcher Acquisition Channel erzeugt den höchsten Paid Intent? | Growth | P0 | OPEN — **A** |
| OQ-006 | Wie hoch sind die tatsächlichen COGS pro Report? | Economics | P0 | OPEN — **A** |
| OQ-007 | Wie viel Follow-on-Demand nach Implementation / Re-check entsteht? | Revenue | P1 | OPEN — **C** until pull |
| OQ-008 | Erzeugt englischer Content qualifizierte Nachfrage? | Language | P1 | OPEN — **A** after EN assets |
| OQ-009 | Kann Swiss AI Visibility Index externe Distribution erzeugen? | EXP-002 | P0 | OPEN — **A** via experiment |
| OQ-010 | Funktioniert Invisible Exporters als PR-/Lead-Story? | EXP-003 | P1 | OPEN — **A** via experiment |
| OQ-011 | Welche Purchase Objections wiederholen sich (≥5 Prospects)? | Sales | P0 | OPEN — **A**/B |
| OQ-012 | Was sollte MentionBee bewusst NICHT mehr tun? | Strategy | P1 | OPEN — **B** |
| OQ-013 | Welcher Live-Preis gilt? | Pricing | — | **RESOLVED** → DEC-013 (EUR 190 Backend SoT). Tech debt: €199 fallback remains in code |
| OQ-014 | MEMS: externe Nutzungsfreigabe Name/Logo/Zitat? | Proof | P0 | OPEN — **B** |
| OQ-015 | Wann startet die 90-Day Period formal? | Governance | — | **RESOLVED** → DEC-014 (2026-08-10…2026-11-07) |

---

## 14. Backlog

| ID | Idea | Status | Reason | Revisit Trigger | New Evidence |
|----|------|--------|--------|-----------------|--------------|
| BACKLOG-001 | White-label / Agency Product | NOT NOW | Nicht überzeugend; Markt stark besetzt | Wiederholte konkrete Agentur-Nachfrage | — |
| BACKLOG-002 | Large Reliability Engine | NOT NOW | API-Kosten + Komplexität + unbewiesener Buyer Value | Reliability wiederholt Kaufhindernis | — |
| BACKLOG-003 | Full Multilingual Report Architecture | NOT NOW | Dev-Aufwand vor Nachfrage | Signifikante Nachfrage nach Report-Sprachen | — |
| BACKLOG-004 | SaaS Monitoring Dashboard | NOT NOW | Feature Race + recurring complexity | Wiederholter Pull nach Monitoring | — |
| BACKLOG-005 | Major Report Redesign | FROZEN | Report gut genug für Demand Validation | Customer Evidence zeigt relevantes Problem | — |
| BACKLOG-006 | Large Paid Acquisition | NOT NOW | Conversion/Unit Economics unvalidiert | Offer/Funnel konvertiert; Economics bekannt | — |
| BACKLOG-007 | Large Recommendation Battles Tool | NOT NOW | Zu viel Build vor Validation | Lightweight Version zeigt Traktion | — |
| BACKLOG-008 | CHF price display derived from EUR base (CH visitors) | NOT NOW | Demand/UX later; Basispreis bleibt EUR | CH geo pricing needed / Founder priority | — |
| BACKLOG-009 | Align frontend pricing fallback (€199) to Backend EUR 190 / remove stale hardcodes | TECH DEBT | Documented; no architecture rebuild this step | Authorized small fix / pricing consistency pass | DEC-013 |

---

## 15. Changelog

| Version | Date | Changes | Source | Reason |
|---------|------|---------|--------|--------|
| 0.1.0 | 2026-08-07 | Initial structure (chapters 1–15 empty) | Manual init | Scaffold |
| 1.0.0 | 2026-08-09 | Revenue OS v1 migration: fill chapters from Strategy v1.2 + explicit decisions; rename ch.10 to Experimente; add Information Types; EXP-001…008; Backlog; Decision Journal; KPI defs; Open Questions | Strategy v1.2 + Revenue OS setup prompt | Brain + Memory + Governance |
| **1.1.0** | **2026-08-09** | DEC-013 EUR 190 Backend SoT + pricing inventory; DEC-014 period calendar; period-start FACTS (0/0/€0); GA4 baseline window; UNKNOWN triage A/B/C; Autonomy loop; resolve OQ-013/OQ-015 | Founder decisions | Price conflict closed; period clock set |
| **1.1.1** | **2026-08-09** | Live price verify: Backend was 199 → DB+defaults set to **EUR 190** (API now 190); Website fallbacks unchanged; GA4 readiness inventory (GTM only; funnel events NOT TRACKED) | Live API + repo audit | Finalize operating state |
| **1.1.2** | **2026-08-09** | Measurement Layer v1: dataLayer funnel events (`view_paid_report`, `view_sample_report`, `free_report_submit`, `begin_checkout`, `purchase` + dedupe) | Measurement gap before Day 1 | Funnel measurable from deploy |

---

## Meta

| Feld | Wert |
|------|------|
| Dokument | MentionBee Operating Manual |
| Pfad | `docs/business/mentionbee-operating-manual.md` |
| Companion | `docs/business/revenue-os/system-prompt.md`, `weekly-state.md` |
| Owner | Olaf / Revenue OS |
| Vertraulichkeit | Intern |
