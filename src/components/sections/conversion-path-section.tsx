"use client";

import { motion } from "framer-motion";
import { ProposalBleed } from "@/components/layout/proposal-shell";
import { ChapterTransition, Reveal } from "@/components/motion/primitives";
import { ChapterDivider } from "@/components/visual/chapter-divider";
import { CampaignMockupZonePlaceholder, ProductShotZonePlaceholder } from "@/components/visual/media-placeholders";
import { type Chapter } from "@/data/proposal";

export function ConversionPathSection({ advertising, sell, index }: { advertising: Chapter; sell: Chapter; index: number }) {
  const adSections = advertising.sections ?? [];
  const sellSections = sell.sections ?? [];

  return (
    <section className="space-y-8">
      <ChapterDivider chapter="Advertising → Sell Conversion Path" index={index} tone="energetic" />
      <ChapterTransition className="space-y-8">
        <Reveal className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">{advertising.englishTitle}</h2>
            <p className="mt-4 text-zinc-100/95">{advertising.persianNarrative}</p>
          </div>
          <div className="md:pt-8">
            <h2 className="text-3xl font-semibold">{sell.englishTitle}</h2>
            <p className="mt-4 text-zinc-100/95">{sell.persianNarrative}</p>
          </div>
        </Reveal>

        <ProposalBleed>
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.9fr]">
            <CampaignMockupZonePlaceholder />
            <div className="md:pt-12">
              <ProductShotZonePlaceholder />
            </div>
          </div>
        </ProposalBleed>

        <motion.div className="grid gap-4 md:grid-cols-2" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {adSections.map((section, idx) => (
            <motion.article
              key={`ad-${section.englishHeading}`}
              variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="border-s border-white/25 ps-5"
            >
              <h3 className="text-xl font-semibold">{section.englishHeading}</h3>
              {section.persianLead ? <p className="mt-3 text-zinc-300">{section.persianLead}</p> : null}
              <ul className="mt-3 space-y-2 text-sm text-zinc-200 md:text-base">{section.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul>
            </motion.article>
          ))}
          {sellSections.map((section, idx) => (
            <motion.article
              key={`sell-${section.englishHeading}`}
              variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="md:ps-8"
            >
              <h3 className="text-xl font-semibold">{section.englishHeading}</h3>
              {section.persianLead ? <p className="mt-3 text-zinc-300">{section.persianLead}</p> : null}
              <ul className="mt-3 space-y-2 text-sm text-zinc-200 md:text-base">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            </motion.article>
          ))}
        </motion.div>
      </ChapterTransition>
    </section>
  );
}
