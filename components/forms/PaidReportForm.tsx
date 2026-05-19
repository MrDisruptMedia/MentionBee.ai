"use client";

import { useState } from "react";

const CHECKOUT_API =
  "https://ai-visibility-report-tau.vercel.app/api/create-checkout-session";

export function PaidReportForm() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch(CHECKOUT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          url: website.trim(),
        }),
      });

      let data: { url?: string; error?: string } = {};
      try {
        data = (await res.json()) as { url?: string; error?: string };
      } catch {
        setError("Ungültige Antwort vom Server. Bitte versuche es erneut.");
        return;
      }

      if (!res.ok || !data.url) {
        setError(
          typeof data.error === "string" && data.error.length > 0
            ? data.error
            : "Checkout konnte nicht gestartet werden. Bitte versuche es erneut."
        );
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Netzwerkfehler. Bitte prüfe deine Verbindung und versuche es erneut.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-0 flex flex-col gap-4">
      <div>
        <label htmlFor="paid-email" className="text-sm font-medium text-mention-dark">
          E-Mail <span className="text-red-600">*</span>
        </label>
        <input
          id="paid-email"
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
        <label htmlFor="paid-website" className="text-sm font-medium text-mention-dark">
          Website <span className="text-red-600">*</span>
        </label>
        <input
          id="paid-website"
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

      <button
        type="submit"
        disabled={isLoading}
        className="mt-2 w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-mention-dark shadow-md transition-all duration-200 hover:scale-105 hover:bg-primary-dark hover:shadow-lg disabled:pointer-events-none disabled:opacity-60"
      >
        {isLoading ? "Wird vorbereitet..." : "Jetzt für 199 € bestellen →"}
      </button>

      {error ? (
        <p className="text-center text-sm font-medium text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
