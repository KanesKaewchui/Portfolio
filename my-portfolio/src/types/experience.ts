export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  employmentType: string;
  period: string;
  startDate: string;
  endDate?: string;
  summary: string;
  responsibilities: readonly string[];
  skills: readonly string[];
  current?: boolean;
};
