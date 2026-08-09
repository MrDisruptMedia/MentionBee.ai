"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { INDUSTRY_OPTIONS } from "@/lib/order-onboarding/industry-options";
import { findInvalidCompetitorIndices } from "@/lib/order-onboarding/normalize-competitor";
import {
  defaultQuestionIndices,
  MAX_CUSTOM_QUESTIONS,
  MAX_SELECTED_QUESTIONS,
  REQUIRED_QUESTIONS,
  resolvePrefillWebsiteUrl,
  type QuestionGenerationResult,
} from "@/lib/order-onboarding/question-selection";

type LoadingState = "idle" | "loading-questions" | "submitting";

const ORDER_FORM_STORAGE_KEY = "order-form";

type SavedOrderForm = {
  url?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  industry?: string;
  competitors?: string[];
};

export function OrderCompleteForm() {
  const searchParams = useSearchParams();

  const prefillUrl = resolvePrefillWebsiteUrl(searchParams);
  const prefillEmail = searchParams.get("email") ?? "";

  const [url, setUrl] = useState(prefillUrl);
  const [email, setEmail] = useState(prefillEmail);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [competitors, setCompetitors] = useState(["", "", ""]);
  const [questions, setQuestions] = useState<string[]>([]);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [customQuestions, setCustomQuestions] = useState(["", "", ""]);
  const [loadingState, setLoadingState] = useState<LoadingState>("idle");
  const [error, setError] = useState("");
  const [questionsLoaded, setQuestionsLoaded] = useState(false);
  const [questionGeneration, setQuestionGeneration] = useState<QuestionGenerationResult | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(ORDER_FORM_STORAGE_KEY);
    if (!saved) return;
    try {
      const data = JSON.parse(saved) as SavedOrderForm;
      if (data.url) setUrl(data.url);
      if (data.email) setEmail(data.email);
      if (data.firstName) setFirstName(data.firstName);
      if (data.lastName) setLastName(data.lastName);
      if (data.companyName) setCompanyName(data.companyName);
      if (data.industry) setIndustry(data.industry);
      if (data.competitors) setCompetitors(data.competitors);
    } catch {
      /* ignore invalid saved state */
    }
  }, []);

  useEffect(() => {
    if (prefillUrl) setUrl(prefillUrl);
  }, [prefillUrl]);

  useEffect(() => {
    if (prefillEmail) setEmail(prefillEmail);
  }, [prefillEmail]);

  useEffect(() => {
    localStorage.setItem(
      ORDER_FORM_STORAGE_KEY,
      JSON.stringify({ url, email, firstName, lastName, companyName, industry, competitors }),
    );
  }, [url, email, firstName, lastName, companyName, industry, competitors]);

  async function loadQuestions() {
    if (!url.trim() || !industry) return;
    setLoadingState("loading-questions");
    setQuestionsLoaded(false);
    setSelected(new Set());
    setError("");

    try {
      const checkRes = await fetch("/api/reports/check-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const checkData = (await checkRes.json()) as {
        found: boolean;
        questions?: string[];
        crawledContent?: string;
      };

      if (checkData.found && checkData.questions && checkData.questions.length >= 3) {
        const crawledContent = checkData.crawledContent ?? `Website: ${url.trim()}`;
        const suggestRes = await fetch("/api/suggest-questions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url: url.trim(),
            industry,
            content: crawledContent,
            brandName: companyName.trim() || undefined,
          }),
        });
        const suggestData = (await suggestRes.json()) as {
          success: boolean;
          questions?: string[];
          generation?: QuestionGenerationResult;
        };
        if (suggestData.success && suggestData.questions) {
          setQuestions(suggestData.questions);
          setQuestionGeneration(suggestData.generation ?? null);
          const preselected = new Set<number>();
          suggestData.questions.forEach((q, i) => {
            if (checkData.questions!.includes(q)) preselected.add(i);
          });
          setSelected(
            preselected.size >= 3
              ? preselected
              : new Set(defaultQuestionIndices(suggestData.generation, suggestData.questions.length)),
          );
        }
      } else {
        let crawledContent = "";
        try {
          const crawlRes = await fetch("/api/crawl", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: url.trim() }),
            signal: AbortSignal.timeout(15000),
          });
          const crawlData = (await crawlRes.json()) as { success: boolean; content?: string };
          crawledContent = crawlData.content ?? "";
        } catch {
          crawledContent = `Website: ${url.trim()}`;
        }

        const suggestRes = await fetch("/api/suggest-questions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url: url.trim(),
            industry,
            content: crawledContent,
            brandName: companyName.trim() || undefined,
          }),
        });
        const suggestData = (await suggestRes.json()) as {
          success: boolean;
          questions?: string[];
          generation?: QuestionGenerationResult;
        };
        if (suggestData.success && suggestData.questions) {
          setQuestions(suggestData.questions);
          setQuestionGeneration(suggestData.generation ?? null);
          setSelected(new Set(defaultQuestionIndices(suggestData.generation, suggestData.questions.length)));
        }
      }
      setQuestionsLoaded(true);
    } catch {
      setError("Fragen konnten nicht geladen werden. Bitte versuche es erneut.");
    } finally {
      setLoadingState("idle");
    }
  }

  function toggleQuestion(index: number) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else if (next.size < MAX_SELECTED_QUESTIONS) {
        next.add(index);
      }
      return next;
    });
  }

  function updateCompetitor(index: number, value: string) {
    setCompetitors((prev) => prev.map((v, i) => (i === index ? value : v)));
  }

  function updateCustomQuestion(index: number, value: string) {
    setCustomQuestions((prev) => prev.map((v, i) => (i === index ? value : v)));
  }

  async function handleSubmit() {
    if (!url.trim() || !email.trim() || !firstName.trim() || !lastName.trim() || !companyName.trim() || !industry) {
      setError("Bitte fülle alle Pflichtfelder aus.");
      return;
    }

    const customs = customQuestions.map((q) => q.trim()).filter(Boolean);
    const totalQuestions = selected.size + customs.length;
    if (questionsLoaded && totalQuestions < REQUIRED_QUESTIONS) {
      setError(`Bitte wähle mindestens ${REQUIRED_QUESTIONS} Fragen aus oder gib eigene ein.`);
      return;
    }

    const invalidCompetitorIdx = findInvalidCompetitorIndices(competitors);
    if (invalidCompetitorIdx.length > 0) {
      setError("Bitte korrigiere die markierten Wettbewerber-Felder oder lösche sie.");
      return;
    }

    setLoadingState("submitting");
    setError("");

    const selectedFromSuggested = Array.from(selected)
      .map((i) => questions[i])
      .filter(Boolean);
    const useCustomOnly = customs.length >= REQUIRED_QUESTIONS;

    try {
      const res = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: url.trim(),
          email: email.trim(),
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          companyName: companyName.trim(),
          industry,
          competitors: competitors.map((c) => c.trim()).filter(Boolean),
          questions: useCustomOnly ? customs : selectedFromSuggested,
          custom_question_1: useCustomOnly ? "" : (customs[0] ?? ""),
          custom_question_2: useCustomOnly ? "" : (customs[1] ?? ""),
          custom_question_3: useCustomOnly ? "" : (customs[2] ?? ""),
          questionGeneration: questionGeneration ?? undefined,
        }),
      });

      const data = (await res.json()) as { success: boolean; reportId?: string; error?: string };

      if (!data.success || !data.reportId) {
        setError(data.error ?? "Etwas ist schiefgelaufen.");
        return;
      }

      window.location.assign(`/order/confirmation?reportId=${encodeURIComponent(data.reportId)}`);
    } catch {
      setError("Verbindungsfehler. Bitte versuche es erneut.");
    } finally {
      setLoadingState("idle");
    }
  }

  const isLoadingQuestions = loadingState === "loading-questions";
  const isSubmitting = loadingState === "submitting";
  const invalidCompetitorIdx = findInvalidCompetitorIndices(competitors);

  const inputClassName =
    "w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-mention-dark outline-none placeholder:text-mention-gray/70 focus:border-primary transition";
  const sectionClassName = "rounded-xl border border-zinc-200/90 bg-white px-6 py-6 shadow-sm";

  return (
    <div className="mx-auto w-full max-w-2xl space-y-8">
      <div>
        <p className="mb-1 text-sm text-mention-gray">MentionBee · AI Visibility Report</p>
        <h1 className="font-heading text-2xl font-bold tracking-tight text-mention-dark sm:text-3xl">
          Fast geschafft — noch ein paar Angaben
        </h1>
        <p className="mt-2 text-mention-gray">
          Damit wir deinen Report so präzise wie möglich machen können.
        </p>
      </div>

      <section className={sectionClassName}>
        <h2 className="mb-1 text-base font-semibold text-mention-dark">
          Website-URL <span className="text-red-500">*</span>
        </h2>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://deine-website.ch"
          className={inputClassName}
        />
      </section>

      <section className={sectionClassName}>
        <h2 className="mb-1 text-base font-semibold text-mention-dark">
          E-Mail-Adresse <span className="text-red-500">*</span>
        </h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="deine@email.ch"
          className={inputClassName}
        />
      </section>

      <section className={`${sectionClassName} space-y-4`}>
        <div>
          <h2 className="mb-1 text-base font-semibold text-mention-dark">
            Vorname <span className="text-red-500">*</span>
          </h2>
          <input
            type="text"
            required
            autoComplete="given-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="z.B. Anna"
            className={inputClassName}
          />
        </div>
        <div>
          <h2 className="mb-1 text-base font-semibold text-mention-dark">
            Nachname <span className="text-red-500">*</span>
          </h2>
          <input
            type="text"
            required
            autoComplete="family-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="z.B. Meier"
            className={inputClassName}
          />
        </div>
      </section>

      <section className={sectionClassName}>
        <h2 className="mb-1 text-base font-semibold text-mention-dark">
          Firmenname <span className="text-red-500">*</span>
        </h2>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="z.B. Kiddieland"
          className={inputClassName}
        />
      </section>

      <section className={sectionClassName}>
        <h2 className="mb-1 text-base font-semibold text-mention-dark">
          Branche <span className="text-red-500">*</span>
        </h2>
        <select
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className={inputClassName}
        >
          <option value="" disabled>
            Bitte Branche auswählen
          </option>
          {INDUSTRY_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </section>

      <section className={sectionClassName}>
        <h2 className="mb-1 text-base font-semibold text-mention-dark">
          Wettbewerber <span className="font-normal text-mention-gray">(optional, bis zu 3)</span>
        </h2>
        <p className="mb-3 text-sm text-mention-gray">
          Wir vergleichen wie oft du vs. die Konkurrenz in KI-Antworten erscheinst.
        </p>
        <div className="space-y-3">
          {competitors.map((value, i) => (
            <div key={i}>
              <input
                type="text"
                value={value}
                onChange={(e) => updateCompetitor(i, e.target.value)}
                placeholder={`Wettbewerber ${i + 1} (z.B. konkurrenz.ch)`}
                className={inputClassName}
              />
              {invalidCompetitorIdx.includes(i) ? (
                <p className="mt-1 text-sm text-red-600">
                  Bitte eine gültige Domain eingeben (z.B. kasparconsulting.ch).
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className={sectionClassName}>
        <h2 className="mb-1 text-base font-semibold text-mention-dark">
          Suchfragen an ChatGPT &amp; Co definieren
        </h2>
        <p className="mb-4 text-sm text-mention-gray">
          Diese Fragen stellen wir ChatGPT, Claude, Gemini und Perplexity um zu prüfen ob du erwähnt
          wirst. Wähle 3–5 Fragen aus oder ergänze bis zu 2 eigene.
        </p>

        {!questionsLoaded ? (
          <button
            type="button"
            disabled={!url.trim() || !industry || isLoadingQuestions}
            onClick={() => void loadQuestions()}
            className={`rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition ${
              url.trim() && industry && !isLoadingQuestions
                ? "bg-primary text-mention-dark hover:bg-primary-dark"
                : "cursor-not-allowed bg-zinc-300"
            }`}
          >
            {isLoadingQuestions ? "Fragen werden geladen…" : "Fragen laden"}
          </button>
        ) : (
          <>
            <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {questions.map((question, i) => {
                const isSelected = selected.has(i);
                const isDisabled = !isSelected && selected.size >= MAX_SELECTED_QUESTIONS;
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => toggleQuestion(i)}
                    className={`rounded-lg border px-4 py-3 text-left text-sm transition ${
                      isDisabled
                        ? "cursor-not-allowed border-zinc-100 bg-zinc-50 text-zinc-300"
                        : isSelected
                          ? "border-primary bg-primary text-white"
                          : "border-zinc-200 bg-white text-mention-dark hover:border-primary/50"
                    }`}
                  >
                    <span className={`mr-2 font-bold ${isSelected ? "text-white" : "text-zinc-300"}`}>
                      {isSelected ? "✓" : "○"}
                    </span>
                    {question}
                  </button>
                );
              })}
            </div>

            <div className="space-y-3">
              <p className="text-sm text-mention-gray">
                Eigene Fragen hinzufügen (max. {MAX_CUSTOM_QUESTIONS}, optional)
              </p>
              {customQuestions.map((value, i) => (
                <input
                  key={i}
                  type="text"
                  value={value}
                  onChange={(e) => updateCustomQuestion(i, e.target.value)}
                  placeholder="Eigene Frage eingeben (optional)"
                  className={inputClassName}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => void loadQuestions()}
              className="mt-4 text-sm font-medium text-mention-gray transition hover:text-mention-dark"
            >
              Fragen neu generieren
            </button>
          </>
        )}

        {!url.trim() || !industry ? (
          <p className="mt-3 text-sm text-mention-gray/80">Bitte zuerst URL und Branche ausfüllen.</p>
        ) : null}
      </section>

      {error ? (
        <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => void handleSubmit()}
        disabled={isSubmitting}
        className={`w-full rounded-lg px-8 py-4 font-semibold text-white transition ${
          isSubmitting
            ? "cursor-not-allowed bg-zinc-300"
            : "bg-primary text-mention-dark hover:bg-primary-dark active:scale-[0.99]"
        }`}
      >
        {isSubmitting ? "Report wird erstellt…" : "Report jetzt erstellen →"}
      </button>

      <p className="text-center text-xs text-mention-gray">
        Der Report wird in der Regel innerhalb von 24 Stunden per E-Mail zugestellt.
      </p>
    </div>
  );
}
