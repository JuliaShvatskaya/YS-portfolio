export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  url?: string;
  role: string;
  summary: string;
  keyFocus: string[];
  impact: string;
  tech: string[];
  image: string;
  color: string;
  period: string;
  longDescription?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface CareerMilestone {
  id: string;
  period: string;
  yearLabel: string;
  role: string;
  organization: string;
  location: string;
  domain: string;
  summary: string;
  highlights: string[];
  outcomeMetric: string;
  outcomeLabel: string;
  stack: string[];
  caseStudyId?: string;
  url?: string;
}