
export const usageSummary = {
  totalTokens: 3948,
  tokenLimitPercent: 40,
  apiRequests: 15,
  activeUsers: 1,
  teams: 2,
  mostUsedFeature: "Guided Assess",
};

export const last7Days = [
  { date: "Aug 29", tokens: 0 },
  { date: "Aug 30", tokens: 0 },
  { date: "Aug 31", tokens: 0 },
  { date: "Sep 1", tokens: 1695 },
  { date: "Sep 2", tokens: 0 },
  { date: "Sep 3", tokens: 0 },
  { date: "Sep 4", tokens: 2253 },
];

export type InvestScore = {
  label: string;
  score: number;
  max: number;
  description: string;
};

export const investScores: InvestScore[] = [
  { label: "Independent", score: 1.0, max: 2, description: "Self-contained, minimal dependencies" },
  { label: "Negotiable", score: 1.0, max: 1.5, description: "Flexible scope, allows discussion" },
  { label: "Valuable", score: 2.0, max: 2, description: "Clear business value" },
  { label: "Estimable", score: 1.0, max: 1.5, description: "Clear enough for effort estimation" },
  { label: "Small", score: 0.5, max: 1.5, description: "Sized appropriately for sprint" },
  { label: "Testable", score: 1.0, max: 1.5, description: "Verifiable acceptance criteria" },
];
