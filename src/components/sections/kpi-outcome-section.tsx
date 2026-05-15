"use client";

import { motion } from "framer-motion";
import { ProposalBleed } from "@/components/layout/proposal-shell";
import { ChapterTransition, Reveal } from "@/components/motion/primitives";
import { ChapterDivider } from "@/components/visual/chapter-divider";
import { IconDiagramZonePlaceholder } from "@/components/visual/media-placeholders";
import { type Chapter } from "@/data/proposal";

export function KpiOutcomeSection({ kpi, outcome, index }: { kpi: Chapter; outcome: Chapter; index: number }) {
  const kpiSection = kpi.sections?.[0];
  const outcomeSection = outcome.sections?.[0];

  return (
    <section className="space-y-8">
      <ChapterDivider chapter="Designed KPI Board & Final Outcome" index={index} tone="calm" />
      <ChapterTransition className="space-y-8">
        <Reveal className="space-y-4">
          <h2 className="text-3xl font-semibold md:text-4xl">{kpi.englishTitle} + {outcome.englishTitle}</h2>
          <p className="max-w-4xl text-zinc-100/95">{kpi.persianNarrative}</p>
          <p className="max-w-4xl text-zinc-100/95">{outcome.persianNarrative}</p>
        </Reveal>

        <ProposalBleed className="chapter-overlap-top">
          <div className="grid gap-6 md:grid-cols-[1.35fr_0.8fr]">
            <IconDiagramZonePlaceholder />
            <div className="hidden md:block rounded-[2rem] border border-white/20 bg-white/5" />
          </div>
        </ProposalBleed>

        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
          {kpiSection ? (
            <motion.div initial={{ opacity: 0, rotateX: 10 }} whileInView={{ opacity: 1, rotateX: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }}>
              <h3 className="text-2xl font-semibold">{kpiSection.englishHeading}</h3>
              {kpiSection.persianLead ? <p className="mt-3 text-zinc-300">{kpiSection.persianLead}</p> : null}
              <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
                {kpiSection.bullets.map((metric) => (
                  <div key={metric} className="bg-white/10 px-4 py-5 text-center text-sm font-medium md:text-base">{metric}</div>
                ))}
              </div>
            </motion.div>
          ) : null}

          {outcomeSection ? (
            <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65, ease: "easeOut" }} className="self-end">
              <h3 className="text-2xl font-semibold">{outcomeSection.englishHeading}</h3>
              {outcomeSection.persianLead ? <p className="mt-3 text-zinc-300">{outcomeSection.persianLead}</p> : null}
              <ul className="mt-4 space-y-2 text-sm text-zinc-200 md:text-base">{outcomeSection.bullets.map((bullet) => <li key={bullet}>→ {bullet}</li>)}</ul>
            </motion.div>
          ) : null}
        </div>
      </ChapterTransition>
    </section>
  );
}
