"use client";

import { ProposalContent, ProposalShell } from "@/components/layout/proposal-shell";
import { ChapterTransition, Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { IntroSection } from "@/components/sections/intro-section";
import { ChapterDivider } from "@/components/visual/chapter-divider";
import { proposalChapters } from "@/data/proposal";
import { assertRequiredSectionCoverage } from "@/lib/content-coverage";

if (process.env.NODE_ENV !== "production") {
  assertRequiredSectionCoverage(proposalChapters);
}

const intro = proposalChapters.find((chapter) => chapter.id === "introduction");
const renderChapters = proposalChapters.filter((chapter) => chapter.id !== "introduction");

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
  if (!intro) {
    throw new Error("Introduction chapter is missing from proposal data.");
  }

  return (
    <ProposalShell>
      <IntroSection intro={intro} />
      <ProposalContent>
        {renderChapters.map((chapter, chapterIndex) => (
          <section key={chapter.id} className="space-y-8">
            <ChapterDivider chapter={chapter.englishTitle} index={chapterIndex + 2} tone={chapterIndex % 2 === 0 ? "calm" : "energetic"} />
            <ChapterTransition className="grid gap-6 md:grid-cols-2">
              <Reveal className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-sm backdrop-blur-sm md:col-span-2">
                <h2 className="text-3xl font-semibold">{chapter.englishTitle}</h2>
                {chapter.persianNarrative ? <p className="mt-5 text-lg leading-9 text-zinc-100/95">{chapter.persianNarrative}</p> : null}
              </Reveal>
              {(chapter.sections ?? []).map((section) => (
                <Reveal key={`${chapter.id}-${section.englishHeading}`} className="rounded-3xl border border-white/15 bg-black/25 p-8 text-zinc-100 backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold">{section.englishHeading}</h3>
                  {section.persianLead ? <p className="mt-4 text-zinc-200">{section.persianLead}</p> : null}
                  <ul>{renderBullets(section.bullets)}</ul>
                </Reveal>
              ))}
            </ChapterTransition>
          </section>
        ))}
      </ProposalContent>
    </ProposalShell>
  );
}
