export type ServiceCard = {
  id: string;
  ariaLabel: string;
  variant: string;
  number: string;
  tag: string;
  title: string;
  description: string;
  keywords: readonly string[];
  image: {
    src: string;
    width: number;
    height: number;
  };
  whatsappMessage: string;
  schemaName: string;
  schemaDescription: string;
};

export type ProcessStep = {
  id: string;
  title: string;
  description: string;
  icon: "contact" | "evaluation" | "execution" | "guidance";
};

export type ResultItem = {
  id: string;
  number: string;
  category: string;
  badge: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export type Review = {
  id: string;
  author: string;
  relativeDate: string;
  rating: 5;
  quote: string;
  sourceUrl: string;
  image: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type NavItem = {
  id: string;
  label: string;
  href: `#${string}`;
};
