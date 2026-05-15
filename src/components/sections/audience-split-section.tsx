"use client";

import { ChapterTransition, Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { ChapterDivider } from "@/components/visual/chapter-divider";
import { type Chapter } from "@/data/proposal";

const bullets = (items: string[]) => (
  <Stagger className="space-y-2 text-sm leading-7 text-zinc-200 md:text-base">
    {items.map((item) => (
      <StaggerItem key={item}>
        <li className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-6 rounded-full bg-[var(--color-accent)]" />
          <span>{item}</span>
        </li>
      </StaggerItem>
    ))}
  </Stagger>
);

export function AudienceSplitSection({ chapter, index }: { chapter: Chapter; index: number }) {
  const [overview, professional, home] = chapter.sections ?? [];

  return (
    <section className="space-y-8">
      <ChapterDivider chapter={chapter.englishTitle} index={index} tone="energetic" />
      <ChapterTransition className="space-y-10">
        <Reveal className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">{chapter.englishTitle}</h2>
            {chapter.persianNarrative ? <p className="mt-5 max-w-3xl text-lg leading-9 text-zinc-100/95">{chapter.persianNarrative}</p> : null}
          </div>
          {overview ? (
            <div className="text-right">
              <h3 className="text-xl font-semibold text-zinc-100">{overview.englishHeading}</h3>
              {overview.persianLead ? <p className="mt-3 text-zinc-300">{overview.persianLead}</p> : null}
              <ul className="mt-4">{bullets(overview.bullets)}</ul>
            </div>
          ) : null}
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {[professional, home].map((section, i) =>
            section ? (
              <Reveal
                key={section.englishHeading}
                className={i === 0 ? "min-h-[18rem] border-s-2 border-[var(--color-accent)] ps-6" : "min-h-[18rem] md:pt-10"}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{i === 0 ? "Professional lane" : "Home lane"}</p>
                <h3 className="mt-3 text-2xl font-semibold">{section.englishHeading}</h3>
                {section.persianLead ? <p className="mt-4 text-zinc-300">{section.persianLead}</p> : null}
                <ul className="mt-4">{bullets(section.bullets)}</ul>
              </Reveal>
            ) : null,
          )}
        </div>
      </ChapterTransition>
    </section>
  );
}
