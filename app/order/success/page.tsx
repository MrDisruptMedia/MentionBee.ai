"use client";

import { Suspense, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";

const CORE_ORDER_SUCCESS = "https://ai-visibility-report-tau.vercel.app/order/success";

function buildCoreRedirectUrl(sessionId: string, websiteUrl: string, email: string): string {
  const u = new URL(CORE_ORDER_SUCCESS);
  u.searchParams.set("session_id", sessionId);
  if (websiteUrl) u.searchParams.set("website_url", websiteUrl);
  if (email) u.searchParams.set("email", email);
  return u.toString();
}

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id") ?? "";
  const websiteUrl = searchParams.get("website_url") ?? "";
  const email = searchParams.get("email") ?? "";

  const targetUrl = sessionId ? buildCoreRedirectUrl(sessionId, websiteUrl, email) : "";

  useEffect(() => {
    if (!targetUrl) return;
    const id = window.setTimeout(() => {
      window.location.href = targetUrl;
    }, 3000);
    return () => window.clearTimeout(id);
  }, [targetUrl]);

  return (
    <div className="mx-auto max-w-lg px-4 pt-24 pb-16 text-center">
      <CheckCircle className="mx-auto size-16 text-green-500" strokeWidth={1.5} aria-hidden />
      <h1 className="mt-6 font-heading text-3xl font-bold tracking-tight text-mention-dark sm:text-4xl">
        Zahlung erfolgreich! <span aria-hidden>🐝</span>
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-mention-gray">
        Vielen Dank für deine Bestellung. Wir richten deinen Report jetzt ein.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-mention-gray">
        Du wirst in wenigen Sekunden weitergeleitet um noch ein paar Details anzugeben...
      </p>
      {targetUrl ? (
        <p className="mt-10 text-sm text-mention-gray">
          <Link
            href={targetUrl}
            className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            Hier klicken falls du nicht weitergeleitet wirst →
          </Link>
        </p>
      ) : null}
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto flex min-h-[50vh] max-w-lg items-center justify-center px-4 pt-24">
          <p className="text-sm text-mention-gray">Wird geladen…</p>
        </div>
      }
    >
      <OrderSuccessContent />
    </Suspense>
  );
}
