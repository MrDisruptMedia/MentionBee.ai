"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const FREE_REPORT_API = "https://ai-visibility-report-tau.vercel.app/api/free-report-request";

export function FreeReportForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

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
          marketingConsent,
        }),
      });

      const data = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok || !data.success) {
        setError(typeof data.error === "string" ? data.error : "Etwas ist schiefgelaufen. Bitte versuche es erneut.");
        return;
      }

      setSuccess(true);
    } catch {
      setError("Netzwerkfehler. Bitte prüfe deine Verbindung und versuche es erneut.");
    } finally {
      setIsLoading(false);
    }
  }

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
      ) : (
        <>
          <h2 className="font-heading text-xl font-semibold text-mention-dark">Report anfordern</h2>

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
              Mit dem Absenden akzeptierst du unsere{" "}
              <Link href="/agb" className="font-medium text-primary underline underline-offset-2">
                AGB
              </Link>{" "}
              und{" "}
              <Link href="/datenschutzerklaerung" className="font-medium text-primary underline underline-offset-2">
                Datenschutzerklärung
              </Link>
              .
            </p>

            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-gray-900 shadow-md transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-primary-dark disabled:pointer-events-none disabled:opacity-60"
            >
              {isLoading ? "Wird analysiert..." : "Kostenlosen Report anfordern →"}
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
