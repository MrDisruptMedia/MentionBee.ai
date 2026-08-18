export type NavItem = {
  label: string;
  href: string;
};

/** Header-Hauptnavigation (Desktop) */
export const headerNavigation: NavItem[] = [
  { label: "So funktioniert's", href: "/#so-funktionierts" },
  { label: "Beispielreport", href: "/sample-report" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

export const mainNavigation: NavItem[] = [
  { label: "Gratis-Check", href: "/free-report" },
  { label: "Report bestellen", href: "/report" },
  { label: "Beispielreport", href: "/sample-report" },
];

export const legalNavigation: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "AGB", href: "/agb" },
  { label: "Datenschutz", href: "/datenschutzerklaerung" },
];
