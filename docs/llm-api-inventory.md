# MentionBee LLM API inventory

Last audited: 2026-05-24

## Scope

This repository is the public MentionBee website (`MentionBee.ai`). It does not contain the
AI Visibility Report core application code that is hosted at
`https://ai-visibility-report-tau.vercel.app`.

The audit searched the repository for direct Anthropic, OpenAI, Gemini and Perplexity SDK/API
usage, model names and common call patterns (`messages.create`, `chat.completions`,
`generateContent`, provider SDK imports, provider API hosts).

Run `npm run audit:llm` to repeat the repository scan and to fail if future local finished-report
pages contain direct LLM provider usage.

## Direct LLM API calls

No direct Anthropic, OpenAI, Gemini or Perplexity LLM API calls exist in this repository.

| File | Function | Provider | Model | Approx. input tokens | Trigger |
| --- | --- | --- | --- | --- | --- |
| _None found_ | - | - | - | - | - |

Because there are no direct LLM call sites here, token usage, output tokens and provider cost
logging cannot be attached inside this repository. The logging and 50,000-input-token guard must
be implemented at the actual provider call sites in the core report app.

## Indirect external calls

These calls may reach the core report app, but the provider/model/prompt are not visible in this
repository.

| File | Function | Destination | Model | Approx. payload size | Trigger |
| --- | --- | --- | --- | --- | --- |
| `components/forms/FreeReportForm.tsx` | `handleSubmit` | `POST https://ai-visibility-report-tau.vercel.app/api/free-report-request` | Unknown; not in this repo | Small form payload, typically `< 250` chars / `< 100` tokens before any server enrichment | `free_report` form submit |
| `components/forms/PaidReportForm.tsx` | `handleSubmit` | `POST /api/create-checkout-session`, proxied by `next.config.ts` to the core app | No local LLM model visible; appears to prepare checkout | Small form payload, typically `< 250` chars / `< 100` tokens | `paid_report` checkout submit |
| `app/order/success/page.tsx` | `OrderSuccessContent` redirect effect | `https://ai-visibility-report-tau.vercel.app/order/success` | Unknown; not in this repo | URL parameters only | Paid order success page |
| `lib/public-pricing.ts` | `fetchPublicPricing` | `GET {NEXT_PUBLIC_APP_URL}/api/public/pricing` | None; pricing/settings fetch | No prompt payload | Server page render (`/`, `/faq`) |
| `hooks/usePublicPricing.ts` | `usePublicPricing` effect | `GET {NEXT_PUBLIC_APP_URL}/api/public/pricing` | None; pricing/settings fetch | No prompt payload | Client-side page view where pricing UI mounts |
| `next.config.ts` | `redirects` | `/report/:uuid` -> core app `/report/:uuid` | Unknown; not in this repo | No local prompt payload | Finished report URL visit |
| `next.config.ts` | `rewrites` | `/api/:path*` -> core app `/api/:path*` | Unknown; not in this repo | Depends on proxied route | Any proxied API request |

## Finished report page check

The requested local files do not exist in this repository:

- `app/report/[id]/page.tsx`
- `app/report-outreach/[token]/page.tsx`

Current behavior for UUID report URLs is a Next.js redirect in `next.config.ts` to the core app.
That means this repository performs no local LLM calls on finished report page views. Whether the
core app only performs DB reads for those pages must be verified in the core app source.

## Required core-app implementation checklist

At each real LLM provider call site in the core report app:

1. Count or estimate input tokens before the call.
2. If input tokens exceed `50,000`, log `console.error` with provider, model, report ID and trigger;
   abort the call unless a deliberate override is passed.
3. Execute the LLM call.
4. Read output token usage from provider response metadata where available; otherwise estimate.
5. Estimate cost from provider/model pricing.
6. Persist one row to `api_logs` or `report_logs` with:
   - timestamp
   - provider (`anthropic`, `openai`, `gemini`, `perplexity`)
   - model
   - input tokens
   - output tokens
   - estimated USD cost
   - report ID, if present
   - trigger (`free_report`, `paid_report`, `admin`, `cron`, `unknown`)

