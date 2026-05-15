"use client";

import { KineticHeadline } from "@/components/motion/kinetic-headline";
import { ChapterTransition, Magnetic, Parallax, Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { proposalChapters } from "@/data/proposal";
import { motion } from "framer-motion";

const chapterMap = Object.fromEntries(proposalChapters.map((chapter) => [chapter.id, chapter]));

const renderBullets = (items: string[]) => (
  <Stagger className="space-y-2 text-sm leading-7 text-zinc-700 md:text-base">
    {items.map((item) => (
      <StaggerItem key={item}>
        <li className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
          <span>{item}</span>
        </li>
      </StaggerItem>
    ))}
  </Stagger>
);

export default function Home() {
  const intro = chapterMap.introduction;
  const why = chapterMap.why;

  return (
    <motion.main className="bg-zinc-950 text-zinc-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <ChapterTransition className="mx-auto min-h-[80vh] max-w-6xl px-6 py-24 md:py-32">
        <Magnetic className="inline-block"><p className="text-xs uppercase tracking-[0.3em] text-emerald-400">SPM Proposal</p></Magnetic>
        <KineticHeadline text={intro.englishTitle} className="mt-4 text-4xl font-bold md:text-6xl" />
        <Parallax offset={40}>
          <p className="mt-8 max-w-4xl text-lg leading-10 text-zinc-200">{intro.persianNarrative}</p>
        </Parallax>
      </ChapterTransition>

      <ChapterTransition className="grid gap-8 bg-zinc-100 px-6 py-20 text-zinc-900 md:grid-cols-2 md:px-12">
        <Reveal className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">{why.englishTitle}</h2>
          <p className="mt-5 text-lg leading-9">{why.persianNarrative}</p>
        </Reveal>
        <Reveal className="rounded-3xl bg-zinc-900 p-8 text-zinc-100">
          <h3 className="text-2xl font-semibold">{why.sections?.[0]?.englishHeading}</h3>
          <p className="mt-4 text-zinc-300">{why.sections?.[0]?.persianLead}</p>
          <ul className="mt-4">{renderBullets(why.sections?.[0]?.bullets ?? [])}</ul>
        </Reveal>
      </ChapterTransition>
    </motion.main>
  );
}
