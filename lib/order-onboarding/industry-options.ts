export const INDUSTRY_OPTIONS = [
  "E-Commerce",
  "SaaS/Software",
  "Industrie/B2B",
  "Messtechnik/Engineering",
  "Medizintechnik",
  "Logistik/Transport",
  "Beratung/Coaching",
  "Agentur/Marketing",
  "Gastronomie",
  "Gesundheit/Medizin",
  "Bildung/Kita/Schule",
  "Immobilien",
  "Handwerk/Bau",
  "Hotel/Tourismus",
  "Finanz/Versicherung",
  "Rechtsberatung/Kanzlei",
  "Sonstiges",
] as const;

export type IndustryOption = (typeof INDUSTRY_OPTIONS)[number];
