export type NavItem = {
  label: string;
  href: string;
};

/** Header-Hauptnavigation (Desktop) */
export const headerNavigation: NavItem[] = [
  { label: "Free Report", href: "/free-report" },
  { label: "Deep-Dive Report", href: "/report" },
  { label: "Beispielreport", href: "/sample-report" },
  { label: "Methodik", href: "/#methodik" },
  { label: "FAQ", href: "/#faq" },
];

export const mainNavigation: NavItem[] = [
  { label: "Kostenloser Report", href: "/free-report" },
  { label: "Report", href: "/report" },
  { label: "Beispielreport", href: "/sample-report" },
];

export const legalNavigation: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "AGB", href: "/agb" },
  { label: "Datenschutz", href: "/datenschutzerklaerung" },
];
