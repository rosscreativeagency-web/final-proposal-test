import type { Chapter } from "@/data/proposal";

export const requiredSectionKeys = [
  "Project Introduction",
  "Why This Project Exists",
  "Brand Overview — SPM",
  "Key Advantages",
  "Target Audience",
  "Professional Users",
  "Home Users",
  "Strategic Foundation",
  "Strategy Structure",
  "Market Research",
  "Audience Analysis",
  "Communication Strategy",
  "Awareness Phase",
  "Public Relations",
  "Social Media",
  "Digital Activities",
  "Positioning Phase",
  "Brand Positioning Goals",
  "Positioning Methods",
  "Collaboration & Endorsement",
  "Campaign Design",
  "Advertising Phase",
  "Media Planning",
  "Advertising Goals",
  "Sell Phase",
  "POS",
  "Sampling & Bundle",
  "Promotion",
  "Budget & KPI",
  "Expected Outcome",
] as const;

export function assertRequiredSectionCoverage(chapters: Chapter[]) {
  const present = new Set<string>();

  for (const chapter of chapters) {
    present.add(chapter.englishTitle);

    for (const section of chapter.sections ?? []) {
      present.add(section.englishHeading);
    }
  }

  const missing = requiredSectionKeys.filter((key) => !present.has(key));

  if (missing.length) {
    throw new Error(`Missing required proposal sections: ${missing.join(", ")}`);
  }
}
