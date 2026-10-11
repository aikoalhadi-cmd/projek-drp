export type ScientificStatus = 
  | 'established_physics' 
  | 'theoretical_possibility' 
  | 'speculative_science' 
  | 'fiction';

export interface Reference {
  id: string;
  authorOrInstitution: string;
  title: string;
  publication: string;
  year: number;
  url?: string;
  type: 'journal' | 'book' | 'institutional' | 'review' | 'interview';
  citationNote?: string;
}

export interface EquationItem {
  id: string;
  formula: string;
  name: string;
  description: string;
  variables: { symbol: string; meaning: string; unit: string }[];
}

export interface ScienceDiagram {
  id: string;
  type: 'meissner_levitation' | 'spacetime_curvature' | 'aeolian_saltation' | 'mars_pressure_gradient' | 'custom';
  title: string;
  caption: string;
  credit: string;
  labels: { x: number; y: number; text: string; sub?: string }[];
}

export interface ScienceCalloutData {
  type: 'established' | 'theoretical' | 'speculative' | 'fiction' | 'methodology';
  title: string;
  content: string;
}

export interface ArticleSection {
  id: string;
  index: string; // e.g. "01"
  title: string;
  paragraphs: string[];
  keyQuote?: string;
  callout?: ScienceCalloutData;
  equation?: EquationItem;
  diagram?: ScienceDiagram;
  comparisonItems?: {
    cinematicDepiction: string;
    scientificReality: string;
    verdict: ScientificStatus;
    physicsExplanation: string;
  }[];
}

export interface Article {
  id: string;
  slug: string;
  fieldNoteNumber: string; // e.g. "FIELD NOTE 001"
  title: string;
  subtitle: string;
  film: string;
  filmYear: number;
  director: string;
  category: 'Magnetism' | 'Relativity' | 'Planetary Science' | 'Fluid Dynamics' | 'Astrobiology';
  summary: string;
  readTimeMinutes: number;
  updatedAt: string;
  scientificEditor: string;
  heroImage: {
    src: string;
    alt: string;
    credit: string;
  };
  primaryStatusBadges: ScientificStatus[];
  shortAnswer: {
    mainStatement: string;
    qualifier: string;
  };
  sections: ArticleSection[];
  whatWeKnowVsDont: {
    whatWeKnow: string[];
    whatWeDont: string[];
  };
  references: Reference[];
  relatedArticleSlugs: string[];
}
