"use client";

import { ProposalBleed, ProposalContent, ProposalShell } from "@/components/layout/proposal-shell";
import { ChapterTransition, Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { AudienceSplitSection } from "@/components/sections/audience-split-section";
import { ConversionPathSection } from "@/components/sections/conversion-path-section";
import { IntroSection } from "@/components/sections/intro-section";
import { KpiOutcomeSection } from "@/components/sections/kpi-outcome-section";
import { PositioningNarrativeSection } from "@/components/sections/positioning-narrative-section";
import { StrategyFrameworkSection } from "@/components/sections/strategy-framework-section";
import { ChapterDivider } from "@/components/visual/chapter-divider";
import { proposalChapters } from "@/data/proposal";
import { assertRequiredSectionCoverage } from "@/lib/content-coverage";

if (process.env.NODE_ENV !== "production") {
  assertRequiredSectionCoverage(proposalChapters);
}

const intro = proposalChapters.find((chapter) => chapter.id === "introduction");
const chapterById = new Map(proposalChapters.map((chapter) => [chapter.id, chapter]));
const customRenderedIds = new Set(["audience", "structure", "positioning", "advertising", "sell", "kpi", "outcome"]);
const defaultChapters = proposalChapters.filter((chapter) => chapter.id !== "introduction" && !customRenderedIds.has(chapter.id));

const renderBullets = (items: string[]) => (
  <Stagger className="mt-4 space-y-2 text-sm leading-7 text-zinc-200 md:text-base">
    {items.map((item) => (
      <StaggerItem key={item}>
        <li className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
          <span>{item}</span>
        </li>
      </StaggerItem>
    ))}
  </Stagger>
);

export default function Home() {
  if (!intro) throw new Error("Introduction chapter is missing from proposal data.");

  const audience = chapterById.get("audience");
  const structure = chapterById.get("structure");
  const positioning = chapterById.get("positioning");
  const advertising = chapterById.get("advertising");
  const sell = chapterById.get("sell");
  const kpi = chapterById.get("kpi");
  const outcome = chapterById.get("outcome");

  return (
    <ProposalShell>
      <IntroSection intro={intro} />
      <ProposalContent>
        {defaultChapters.map((chapter, chapterIndex) => (
          <section key={chapter.id} className="space-y-8 py-2">
            <ChapterDivider chapter={chapter.englishTitle} index={chapterIndex + 2} tone={chapterIndex % 2 === 0 ? "calm" : "energetic"} />
            <ChapterTransition className="space-y-6">
              <Reveal className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-start">
                <div>
                  <h2 className="text-3xl font-semibold">{chapter.englishTitle}</h2>
                  {chapter.persianNarrative ? <p className="mt-5 text-lg leading-9 text-zinc-100/95">{chapter.persianNarrative}</p> : null}
                </div>
              </Reveal>
              <div className="grid gap-8 md:grid-cols-2">
                {(chapter.sections ?? []).map((section, sectionIndex) => (
                  <Reveal key={`${chapter.id}-${section.englishHeading}`} className={sectionIndex % 2 ? "md:pt-8" : ""}>
                    <h3 className="text-2xl font-semibold">{section.englishHeading}</h3>
                    {section.persianLead ? <p className="mt-4 text-zinc-200">{section.persianLead}</p> : null}
                    <ul>{renderBullets(section.bullets)}</ul>
                  </Reveal>
                ))}
              </div>
              {chapter.id === "awareness" ? (
                <ProposalBleed className="chapter-overlap-top">
                  <div className="grid gap-4 rounded-[2rem] border border-white/15 bg-white/5 p-6 md:grid-cols-[1.3fr_0.85fr]">
                    <div className="min-h-36 rounded-[1.25rem] border border-white/15 bg-white/10" />
                    <div className="min-h-28 rounded-[1.25rem] border border-white/15 bg-white/10 md:mt-10" />
                  </div>
                </ProposalBleed>
              ) : null}
            </ChapterTransition>
          </section>
        ))}

        {audience ? <AudienceSplitSection chapter={audience} index={6} /> : null}
        {structure ? <StrategyFrameworkSection chapter={structure} index={7} /> : null}
        {positioning ? <PositioningNarrativeSection chapter={positioning} index={8} /> : null}
        {advertising && sell ? <ConversionPathSection advertising={advertising} sell={sell} index={9} /> : null}
        {kpi && outcome ? <KpiOutcomeSection kpi={kpi} outcome={outcome} index={10} /> : null}
      </ProposalContent>
    </ProposalShell>
  );
}
