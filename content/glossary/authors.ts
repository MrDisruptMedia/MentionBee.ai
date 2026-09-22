/** Editorial authors for glossary publication metadata. */
export const glossaryAuthors = {
  "olaf-kunz": {
    id: "olaf-kunz",
    name: "Olaf Kunz",
    role: "Founder, MentionBee",
  },
} as const;

export function getGlossaryAuthor(authorId: string) {
  return glossaryAuthors[authorId as keyof typeof glossaryAuthors] ?? null;
}
