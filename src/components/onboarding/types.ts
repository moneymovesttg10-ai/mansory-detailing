export type WorkPrefs = {
  location: string;
  commitment: string;
  company: string;
  salaryMin: number;
  salaryMax: number;
  industries: string[];
};

export type LifestylePrefs = {
  environment: string;
  outdoor: boolean;
  animals: boolean;
  booksCalm: boolean;
  flexible: boolean;
  commute: number;
};

export type OnboardingState = {
  resumeName: string | null;
  parsed: boolean;
  work: WorkPrefs;
  lifestyle: LifestylePrefs;
  skills: string[];
};

export const initialState: OnboardingState = {
  resumeName: null,
  parsed: false,
  work: {
    location: "Remote",
    commitment: "Full Time",
    company: "Startup",
    salaryMin: 80,
    salaryMax: 140,
    industries: [],
  },
  lifestyle: {
    environment: "Quiet",
    outdoor: false,
    animals: false,
    booksCalm: false,
    flexible: true,
    commute: 30,
  },
  skills: [
    "TypeScript",
    "React",
    "Product Strategy",
    "Systems Design",
    "User Research",
    "Design Systems",
  ],
};