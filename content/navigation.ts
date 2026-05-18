export type NavItem = {
  label: string;
  href: string;
};

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
