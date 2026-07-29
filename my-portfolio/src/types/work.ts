export type WorkLinkType = "website" | "prototype" | "behance" | "line";

export type WorkLink = {
  label: string;
  href: string;
  type: WorkLinkType;
};

type BaseWorkProject = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  projectType: string;
  role: string;
  year: string;
  cover: string;
  coverAlt: string;
  services: readonly string[];
  featured: boolean;
  links?: readonly WorkLink[];
};

export type CaseStudyProject = BaseWorkProject & {
  caseStudy: true;
  overview: string;
  challenge: string;
  responsibilities: readonly string[];
};

export type OtherWorkProject = BaseWorkProject & {
  caseStudy: false;
  overview?: never;
  challenge?: never;
  responsibilities?: never;
};

export type WorkProject = CaseStudyProject | OtherWorkProject;
