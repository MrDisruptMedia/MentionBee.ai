"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

import { trackFreeReportSubmit } from "@/lib/analytics/data-layer";

const FREE_REPORT_API = "https://ai-visibility-report-tau.vercel.app/api/free-report-request";
const FREE_REPORT_PIN_API = "https://ai-visibility-report-tau.vercel.app/api/free-report-pin";
const FREE_REPORT_FOCUS_API = "https://ai-visibility-report-tau.vercel.app/api/free-report-focus";
const FREE_REPORT_START_API = "https://ai-visibility-report-tau.vercel.app/api/free-report-start";
const FREE_REPORT_RESULT = "https://app.mentionbee.ai/report";

const FREE_REPORT_STEPS = ["angaben", "pin", "fokus"] as const;

export function FreeReportForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [queryLanguage, setQueryLanguage] = useState<"" | "de" | "en">("");
  const [targetMarket, setTargetMarket] = useState<"" | "CH" | "DE" | "AT" | "INTL">("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState<(typeof FREE_REPORT_STEPS)[number]>("angaben");
  const [reportId, setReportId] = useState("");
  const [pin, setPin] = useState("");
  const [resendIn, setResendIn] = useState(0);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [focus, setFocus] = useState("");
  const [place, setPlace] = useState("");
  const [normalizedOffer, setNormalizedOffer] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch(FREE_REPORT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          website: website.trim(),
          queryLanguage,
          targetMarket,
          marketingConsent,
        }),
      });

      const data = (await res.json()) as {
        success?: boolean;
        error?: string;
        reportId?: string;
        suggestions?: string[];
        suggestedPlace?: string | null;
      };

      if (!res.ok || !data.success || !data.reportId) {
        setError(typeof data.error === "string" ? data.error : "Etwas ist schiefgelaufen. Bitte versuche es erneut.");
        return;
      }

      setReportId(data.reportId);
      setPin("");
      setResendIn(60);
      setStep("pin");
    } catch {
      setError("Netzwerkfehler. Bitte prüfe deine Verbindung und versuche es erneut.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handlePin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const res = await fetch(FREE_REPORT_PIN_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reportId, code: pin }),
      });
      const data = (await res.json()) as { success?: boolean; error?: string };
      if (!res.ok || !data.success) {
        setError(typeof data.error === "string" ? data.error : "Der Code stimmt nicht.");
        return;
      }
      setStep("fokus");
      setFocus("");
      setSuggestions([]);
      window.setTimeout(() => void loadFocus(), 300);
    } catch {
      setError("Netzwerkfehler. Bitte prüfe deine Verbindung und versuche es erneut.");
    } finally {
      setIsLoading(false);
    }
  }

  async function loadFocus() {
    if (!reportId) return;
    try {
      const res = await fetch(`${FREE_REPORT_FOCUS_API}?reportId=${encodeURIComponent(reportId)}`, { cache: "no-store" });
      const data = (await res.json()) as { suggestions?: string[]; suggestedPlace?: string | null; ready?: boolean };
      if (Array.isArray(data.suggestions)) setSuggestions(data.suggestions.filter((item) => typeof item === "string"));
      if (typeof data.suggestedPlace === "string") setPlace(data.suggestedPlace);
      if (!data.ready) window.setTimeout(() => void loadFocus(), 2000);
    } catch {
      window.setTimeout(() => void loadFocus(), 2000);
    }
  }

  async function resendPin() {
    if (resendIn > 0) return;
    setError("");
    const res = await fetch(FREE_REPORT_PIN_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reportId, resend: true }),
    });
    const data = (await res.json()) as { success?: boolean; error?: string };
    if (!res.ok || !data.success) {
      setError(typeof data.error === "string" ? data.error : "Der Code konnte nicht erneut gesendet werden.");
      return;
    }
    setResendIn(60);
  }

  async function handleStart(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const res = await fetch(FREE_REPORT_START_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reportId,
          focus: focus.trim(),
          place: place.trim(),
          confirmNormalized: normalizedOffer !== null && focus.trim() === normalizedOffer,
        }),
      });
      const data = (await res.json()) as { success?: boolean; error?: string; needsConfirmation?: boolean; normalizedFocus?: string };
      if (data.needsConfirmation && typeof data.normalizedFocus === "string") {
        setNormalizedOffer(data.normalizedFocus);
        setFocus(data.normalizedFocus);
        return;
      }
      if (!res.ok || !data.success) {
        setError(typeof data.error === "string" ? data.error : "Der Check konnte nicht gestartet werden.");
        return;
      }
      trackFreeReportSubmit({ website: website.trim() });
      window.location.href = `${FREE_REPORT_RESULT}/${reportId}`;
    } catch {
      setError("Netzwerkfehler. Bitte prüfe deine Verbindung und versuche es erneut.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (resendIn <= 0) return;
    const timer = window.setTimeout(() => setResendIn((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearTimeout(timer);
  }, [resendIn]);

  const stepNumber = FREE_REPORT_STEPS.indexOf(step) + 1;

  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-zinc-100">
      {success ? (
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="size-16 shrink-0 text-green-500" strokeWidth={1.5} aria-hidden />
          <h2 className="mt-6 font-heading text-2xl font-bold text-mention-dark">
            Report wird erstellt! <span aria-hidden>🐝</span>
          </h2>
          <p className="mt-4 max-w-md text-mention-gray leading-relaxed">
            Wir analysieren gerade deine Website. Du erhältst das Ergebnis in wenigen Minuten per E-Mail.
          </p>
          <p className="mt-4 text-sm text-mention-gray">Bitte prüfe auch deinen Spam-Ordner.</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-3 cursor-pointer border-0 bg-transparent p-0 text-sm text-mention-gray underline"
          >
            Weiteren Report anfordern
          </button>
        </div>
      ) : step === "pin" ? (
        <>
          <p className="text-sm font-medium text-mention-gray">Schritt {stepNumber} von {FREE_REPORT_STEPS.length}</p>
          <h2 className="mt-2 font-heading text-xl font-semibold text-mention-dark">Code aus der E-Mail</h2>
          <p className="mt-2 text-sm text-mention-gray">Wir bereiten inzwischen die Vorschläge für dein Angebot vor.</p>
          <form onSubmit={handlePin} className="mt-6 flex flex-col gap-4">
            <label htmlFor="pin" className="text-sm font-medium text-mention-dark">
              Sechsstelliger Code
            </label>
            <input
              id="pin"
              name="pin"
              inputMode="numeric"
              autoComplete="one-time-code"
              required
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-mention-dark outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="submit"
              disabled={isLoading || pin.replace(/\D/g, "").length !== 6}
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-gray-900 disabled:opacity-60"
            >
              {isLoading ? "Prüft..." : "Weiter"}
            </button>
            <button
              type="button"
              disabled={resendIn > 0}
              onClick={() => void resendPin()}
              className="text-sm text-mention-gray underline disabled:no-underline disabled:opacity-60"
            >
              {resendIn > 0 ? `Code erneut senden in ${resendIn}s` : "Code erneut senden"}
            </button>
            {error ? <p className="text-center text-sm font-medium text-red-600" role="alert">{error}</p> : null}
          </form>
        </>
      ) : step === "fokus" ? (
        <>
          <p className="text-sm font-medium text-mention-gray">Schritt {stepNumber} von {FREE_REPORT_STEPS.length}</p>
          <h2 className="mt-2 font-heading text-xl font-semibold text-mention-dark">
            Wofür sollen KIs dich empfehlen?
          </h2>
          <form onSubmit={handleStart} className="mt-6 flex flex-col gap-4">
            {suggestions.length > 0 ? (
              <div className="flex flex-col gap-2">
                {suggestions.map((suggestion) => {
                  const selected = focus.trim().toLowerCase() === suggestion.toLowerCase();
                  return (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => {
                        setFocus(suggestion);
                        setNormalizedOffer(null);
                      }}
                      className={
                        selected
                          ? "rounded-xl border border-primary bg-primary/10 px-4 py-2.5 text-left text-sm font-medium text-mention-dark"
                          : "rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-left text-sm text-mention-dark hover:border-primary/40"
                      }
                    >
                      {suggestion}
                    </button>
                  );
                })}
              </div>
            ) : null}
            <div>
              <label htmlFor="focus" className="text-sm font-medium text-mention-dark">
                {suggestions.length > 0 ? "Oder selbst eintragen" : "Angebot"}
              </label>
              <input
                id="focus"
                name="focus"
                type="text"
                required={suggestions.length === 0}
                value={focus}
                onChange={(e) => {
                  setFocus(e.target.value);
                  if (normalizedOffer && e.target.value.trim() !== normalizedOffer) setNormalizedOffer(null);
                }}
                className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-mention-dark outline-none ring-zinc-200 transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              />
            </div>
            {normalizedOffer ? (
              <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-mention-dark">
                Für die Messung verwenden wir «{normalizedOffer}». Prüfe die Formulierung und starte dann den Check.
              </p>
            ) : null}
            <div>
              <p className="text-sm font-medium text-mention-dark">Wo möchtest du empfohlen werden?</p>
              <p className="mt-1 text-sm text-mention-gray">
                {targetMarket === "DE" ? "Deutschland" : targetMarket === "AT" ? "Österreich" : targetMarket === "INTL" ? "International" : "Schweiz"}
              </p>
              <label htmlFor="place" className="mt-3 block text-sm font-medium text-mention-dark">
                Suchgebiet
              </label>
              <input
                id="place"
                name="place"
                type="text"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-mention-dark outline-none ring-zinc-200 transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              />
              <p className="mt-1.5 text-sm text-mention-gray">
                Dieses Suchgebiet steht in jeder Frage. Du kannst es anpassen.
              </p>
            </div>
            <button
              type="submit"
              disabled={isLoading || focus.trim().length < 2}
              className="mt-2 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-gray-900 shadow-md transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-primary-dark disabled:pointer-events-none disabled:opacity-60"
            >
              {isLoading ? "Check startet..." : "Check starten"}
            </button>
            {error ? (
              <p className="text-center text-sm font-medium text-red-600" role="alert">
                {error}
              </p>
            ) : null}
          </form>
        </>
      ) : (
        <>
          <p className="text-sm font-medium text-mention-gray">Schritt {stepNumber} von {FREE_REPORT_STEPS.length}</p>
          <h2 className="mt-2 font-heading text-xl font-semibold text-mention-dark">Report anfordern</h2>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <div>
              <label htmlFor="firstName" className="text-sm font-medium text-mention-dark">
                Vorname <span className="text-red-600">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-mention-dark outline-none ring-zinc-200 transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="text-sm font-medium text-mention-dark">
                Nachname
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-mention-dark outline-none ring-zinc-200 transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-mention-dark">
                E-Mail <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-mention-dark outline-none ring-zinc-200 transition focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label htmlFor="website" className="text-sm font-medium text-mention-dark">
                Website <span className="text-red-600">*</span>
              </label>
              <input
                id="website"
                name="website"
                type="url"
                inputMode="url"
                autoComplete="url"
                required
                placeholder="https://www.example.com"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-mention-dark outline-none ring-zinc-200 transition placeholder:text-mention-gray focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <p className="mb-2 text-sm text-mention-gray">
                In welcher Sprache und aus welchem Land fragen deine Kunden die KI?
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="queryLanguage" className="text-sm font-medium text-mention-dark">
                    Abfragesprache <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="queryLanguage"
                    name="queryLanguage"
                    required
                    value={queryLanguage}
                    onChange={(e) => setQueryLanguage(e.target.value as typeof queryLanguage)}
                    className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-mention-dark outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="" disabled>Bitte auswählen</option>
                    <option value="de">Deutsch</option>
                    <option value="en">English</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="targetMarket" className="text-sm font-medium text-mention-dark">
                    Zielmarkt <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="targetMarket"
                    name="targetMarket"
                    required
                    value={targetMarket}
                    onChange={(e) => setTargetMarket(e.target.value as typeof targetMarket)}
                    className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-mention-dark outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="" disabled>Bitte auswählen</option>
                    <option value="CH">Schweiz</option>
                    <option value="DE">Deutschland</option>
                    <option value="AT">Österreich</option>
                    <option value="INTL">International</option>
                  </select>
                </div>
              </div>
            </div>

            <label className="flex cursor-pointer gap-3 text-sm leading-snug text-mention-gray">
              <input
                type="checkbox"
                checked={marketingConsent}
                onChange={(e) => setMarketingConsent(e.target.checked)}
                className="mt-0.5 size-4 shrink-0 rounded border-zinc-300 text-primary focus:ring-primary/30"
              />
              <span>Ich möchte weitere Tipps &amp; Updates zu AI Visibility erhalten.</span>
            </label>

            <p className="text-xs leading-relaxed text-mention-gray">
              Mit Weiter akzeptierst du unsere{" "}
              <Link href="/agb" className="font-medium text-mention-dark underline underline-offset-2">
                AGB
              </Link>{" "}
              und{" "}
              <Link href="/datenschutzerklaerung" className="font-medium text-mention-dark underline underline-offset-2">
                Datenschutzerklärung
              </Link>
              .
            </p>

            <button
              type="submit"
              disabled={isLoading || !queryLanguage || !targetMarket}
              className="mt-2 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-gray-900 shadow-md transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-primary-dark disabled:pointer-events-none disabled:opacity-60"
            >
              {isLoading ? "Wird gelesen..." : "Weiter"}
            </button>

            {error ? (
              <p className="text-center text-sm font-medium text-red-600" role="alert">
                {error}
              </p>
            ) : null}
          </form>
        </>
      )}
    </div>
  );
}
