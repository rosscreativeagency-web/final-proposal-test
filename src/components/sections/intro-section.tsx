import { KineticHeadline } from "@/components/motion/kinetic-headline";
import { ChapterTransition, Magnetic, Parallax } from "@/components/motion/primitives";
import { type Chapter } from "@/data/proposal";

export function IntroSection({ intro }: { intro: Chapter }) {
  return (
    <ChapterTransition className="relative mx-auto min-h-[80vh] max-w-6xl px-6 py-24 md:py-32">
      <Magnetic className="inline-block">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">SPM Proposal</p>
      </Magnetic>
      <KineticHeadline text={intro.englishTitle} className="mt-4 text-4xl font-bold md:text-6xl" />
      <Parallax offset={40}>
        <p className="mt-8 max-w-4xl rounded-2xl border border-white/10 bg-black/20 p-6 text-lg leading-10 text-zinc-100 backdrop-blur-sm">
          {intro.persianNarrative}
        </p>
      </Parallax>
    </ChapterTransition>
  );
}
