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
          <p className="max-w-4xl leading-10 text-[var(--text-primary)]/95">{kpi.persianNarrative}</p>
          <p className="max-w-4xl leading-10 text-[var(--text-primary)]/95">{outcome.persianNarrative}</p>
        </Reveal>

        <ProposalBleed className="chapter-overlap-top">
          <div className="grid gap-6 md:grid-cols-[1.35fr_0.8fr]">
            <IconDiagramZonePlaceholder />
            <div className="hidden md:block rounded-[2rem] border border-white/20 bg-white/5" />
          </div>
        </ProposalBleed>

        <div className="overflow-hidden py-4">
          <ChapterDivider chapter="Outcome in Numbers" index={index + 1} tone="energetic" />
          <p className="-mt-2 text-5xl font-black uppercase tracking-[0.14em] text-white/12 md:text-7xl">
            Metrics, not motifs
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
          {kpiSection ? (
            <motion.div initial={{ opacity: 0, rotateX: 10 }} whileInView={{ opacity: 1, rotateX: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7 }}>
              <h3 className="text-2xl font-semibold">{kpiSection.englishHeading}</h3>
              {kpiSection.persianLead ? <p className="mt-3 leading-9 text-[var(--text-secondary)]">{kpiSection.persianLead}</p> : null}
              <div className="mt-6 space-y-4">
                {kpiSection.bullets[0] ? (
                  <div className="bg-white/8 py-7">
                    <p className="text-xs uppercase tracking-[0.26em] text-[var(--text-muted)]/85">Hero metric</p>
                    <p className="mt-3 text-3xl font-bold text-[var(--text-kpi)] md:text-4xl">{kpiSection.bullets[0]}</p>
                  </div>
                ) : null}
                {kpiSection.bullets.slice(1).length ? (
                  <div className="space-y-3 border-s border-white/25 ps-4">
                    {kpiSection.bullets.slice(1).map((metric, metricIndex) => (
                      <div key={metric} className="flex items-baseline gap-3 border-b border-white/10 pb-2 last:border-none last:pb-0">
                        <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]/70">{String(metricIndex + 1).padStart(2, "0")}</span>
                        <p className="text-lg font-medium text-[var(--text-kpi)] md:text-xl">{metric}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.div>
          ) : null}

          {outcomeSection ? (
            <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65, ease: "easeOut" }} className="self-end">
              <h3 className="text-2xl font-semibold">{outcomeSection.englishHeading}</h3>
              {outcomeSection.persianLead ? <p className="mt-3 leading-9 text-[var(--text-secondary)]">{outcomeSection.persianLead}</p> : null}
              <ul className="mt-4 space-y-2 text-sm leading-8 text-[var(--text-secondary)] md:text-base">{outcomeSection.bullets.map((bullet) => <li key={bullet}>→ {bullet}</li>)}</ul>
            </motion.div>
          ) : null}
        </div>
      </ChapterTransition>
    </section>
  );
}
