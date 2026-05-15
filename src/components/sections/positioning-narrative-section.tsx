"use client";

import { motion } from "framer-motion";
import { ChapterTransition, Reveal } from "@/components/motion/primitives";
import { ProposalBleed } from "@/components/layout/proposal-shell";
import { ChapterDivider } from "@/components/visual/chapter-divider";
import { LayeredEditorialStackPlaceholder } from "@/components/visual/media-placeholders";
import { type Chapter } from "@/data/proposal";

export function PositioningNarrativeSection({ chapter, index }: { chapter: Chapter; index: number }) {
  const [phase, goals, methods, endorsement, campaign] = chapter.sections ?? [];

  return (
    <section className="space-y-8">
      <ChapterDivider chapter={chapter.englishTitle} index={index} tone="energetic" />
      <ChapterTransition className="space-y-8">
        <Reveal className="space-y-5">
          <h2 className="text-3xl font-semibold md:text-4xl">{chapter.englishTitle}</h2>
          {chapter.persianNarrative ? <p className="max-w-4xl text-lg leading-10 text-[var(--text-primary)]/95">{chapter.persianNarrative}</p> : null}
          {phase ? <p className="leading-9 text-[var(--text-secondary)]">{phase.persianLead}</p> : null}
        </Reveal>

        <ProposalBleed className="chapter-overlap-top">
          <div className="grid gap-8 md:grid-cols-[1.25fr_1fr_1.1fr]">
            <LayeredEditorialStackPlaceholder />
            {[goals, methods].map((section, idx) =>
              section ? (
                <motion.div
                  key={section.englishHeading}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7 }}
                  className={idx ? "md:mt-14" : ""}
                >
                  <h3 className="text-2xl font-semibold">{section.englishHeading}</h3>
                  {section.persianLead ? <p className="mt-3 leading-9 text-[var(--text-secondary)]">{section.persianLead}</p> : null}
                  <ul className="mt-4 space-y-2 text-sm leading-8 text-[var(--text-secondary)] md:text-base">{section.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul>
                </motion.div>
              ) : null,
            )}
          </div>
        </ProposalBleed>

        <div className="grid gap-4 md:grid-cols-2">
          {[endorsement, campaign].map((section, idx) =>
            section ? (
              <motion.div
                key={section.englishHeading}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ type: "spring", stiffness: 120, damping: 18, delay: idx * 0.12 }}
                className="bg-white/5 p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]/80">Flow block {idx + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold">{section.englishHeading}</h3>
                {section.persianLead ? <p className="mt-3 leading-9 text-[var(--text-secondary)]">{section.persianLead}</p> : null}
                <ul className="mt-4 space-y-2 text-sm leading-8 text-[var(--text-secondary)] md:text-base">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </motion.div>
            ) : null,
          )}
        </div>
      </ChapterTransition>
    </section>
  );
}
