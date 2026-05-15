"use client";

import { motion } from "framer-motion";
import { ChapterTransition, Reveal } from "@/components/motion/primitives";
import { ProposalBleed } from "@/components/layout/proposal-shell";
import { ChapterDivider } from "@/components/visual/chapter-divider";
import { type BulletSection, type Chapter } from "@/data/proposal";

export function StrategyFrameworkSection({ chapter, index }: { chapter: Chapter; index: number }) {
  const [structure, research, analysis, communication] = chapter.sections ?? [];
  const steps: BulletSection[] = [research, analysis, communication].filter(Boolean) as BulletSection[];

  return (
    <section className="space-y-8">
      <ChapterDivider chapter={chapter.englishTitle} index={index} tone="calm" />
      <ChapterTransition className="space-y-8">
        <Reveal className="space-y-5">
          <h2 className="text-3xl font-semibold md:text-4xl">{chapter.englishTitle}</h2>
          {chapter.persianNarrative ? <p className="max-w-4xl text-lg leading-10 text-[var(--text-primary)]/95">{chapter.persianNarrative}</p> : null}
          {structure ? (
            <div className="grid gap-3 text-[var(--text-secondary)] md:grid-cols-2">
              <h3 className="text-xl font-semibold">{structure.englishHeading}</h3>
              <ul className="space-y-2 text-sm md:text-base">
                {structure.bullets.map((bullet) => (
                  <li key={bullet}>— {bullet}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </Reveal>

        <ProposalBleed className="chapter-overlap-bottom">
          <div className="overflow-x-auto pb-2">
            <div className="grid min-w-[920px] items-start gap-5 md:grid-cols-[1.2fr_1fr_1.15fr]">
              {steps.map((step, idx) => (
                <motion.article
                  key={step.englishHeading}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.75, delay: idx * 0.2 }}
                  className={`border-t border-white/25 bg-white/5 p-5 ${idx % 2 ? "md:mt-12" : ""}`}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]/80">Step {idx + 1}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{step.englishHeading}</h3>
                  {step.persianLead ? <p className="mt-3 leading-9 text-[var(--text-secondary)]">{step.persianLead}</p> : null}
                  <ul className="mt-4 space-y-2 text-sm leading-8 text-[var(--text-secondary)] md:text-base">
                    {step.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </ProposalBleed>
      </ChapterTransition>
    </section>
  );
}
