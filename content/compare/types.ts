export type ComparisonSection = {
  heading?: string;
  body: string;
};

export type ComparisonPageContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  sections: ComparisonSection[];
  internalLinks: string[];
  experimentId?: string;
};
