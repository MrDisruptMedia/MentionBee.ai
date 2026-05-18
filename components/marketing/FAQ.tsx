import { faqEntries } from "@/content/faq";

export function FAQ() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-b border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-900/40"
    >
      <div className="mx-auto max-w-5xl px-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Placeholder: FAQ</p>
        <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          {faqEntries.map((entry) => (
            <li key={entry.id}>{entry.question}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
