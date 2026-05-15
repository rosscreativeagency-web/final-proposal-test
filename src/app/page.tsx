"use client";

import { KineticHeadline } from "@/components/motion/kinetic-headline";
import { ChapterTransition, Magnetic, Parallax, Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { AmbientScene } from "@/components/visual/ambient-scene";
import { ChapterDivider } from "@/components/visual/chapter-divider";
import {
  DigitalCampaignMockupPlaceholder,
  ProductBrandPlaceholder,
  SalesGrowthDiagramPlaceholder,
} from "@/components/visual/media-placeholders";
import { proposalChapters } from "@/data/proposal";
import { motion } from "framer-motion";

const chapterMap = Object.fromEntries(proposalChapters.map((chapter) => [chapter.id, chapter]));

const renderBullets = (items: string[]) => (
  <Stagger className="space-y-2 text-sm leading-7 text-zinc-200 md:text-base">
    {items.map((item) => (
      <StaggerItem key={item}>
        <li className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
          <span>{item}</span>
        </li>
      </StaggerItem>
    ))}
  </Stagger>
);

export default function Home() {
  const intro = chapterMap.introduction;
  const why = chapterMap.why;
  const awareness = chapterMap.awareness;

  return (
    <motion.main className="relative text-zinc-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <AmbientScene />
      <ChapterTransition className="relative mx-auto min-h-[80vh] max-w-6xl px-6 py-24 md:py-32">
        <Magnetic className="inline-block"><p className="text-xs uppercase tracking-[0.3em] text-emerald-200">SPM Proposal</p></Magnetic>
        <KineticHeadline text={intro.englishTitle} className="mt-4 text-4xl font-bold md:text-6xl" />
        <Parallax offset={40}>
          <p className="mt-8 max-w-4xl rounded-2xl border border-white/10 bg-black/20 p-6 text-lg leading-10 text-zinc-100 backdrop-blur-sm">{intro.persianNarrative}</p>
        </Parallax>
      </ChapterTransition>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <ChapterDivider chapter={why.englishTitle} index={1} tone="calm" />
        <ChapterTransition className="grid gap-8 md:grid-cols-2">
          <Reveal className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-sm backdrop-blur-sm">
            <h2 className="text-3xl font-semibold">{why.englishTitle}</h2>
            <p className="mt-5 text-lg leading-9 text-zinc-100/95">{why.persianNarrative}</p>
          </Reveal>
          <Reveal className="rounded-3xl border border-white/15 bg-black/25 p-8 text-zinc-100 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold">{why.sections?.[0]?.englishHeading}</h3>
            <p className="mt-4 text-zinc-200">{why.sections?.[0]?.persianLead}</p>
            <ul className="mt-4">{renderBullets(why.sections?.[0]?.bullets ?? [])}</ul>
          </Reveal>
        </ChapterTransition>

        <ChapterDivider chapter={awareness.englishTitle} index={6} tone="energetic" />
        <ChapterTransition className="grid gap-6 md:grid-cols-3">
          <ProductBrandPlaceholder />
          <SalesGrowthDiagramPlaceholder />
          <DigitalCampaignMockupPlaceholder />
        </ChapterTransition>
      </section>
    </motion.main>
  );
}
