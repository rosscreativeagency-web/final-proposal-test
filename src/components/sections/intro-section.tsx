import { KineticHeadline } from "@/components/motion/kinetic-headline";
import { ChapterTransition, Magnetic, Parallax } from "@/components/motion/primitives";
import { AiryLayer, ClayBlob, SoftMask } from "@/components/visual/organic-primitives";
import { type Chapter } from "@/data/proposal";

export function IntroSection({ intro }: { intro: Chapter }) {
  return (
    <ChapterTransition className="relative mx-auto min-h-[80vh] max-w-6xl overflow-hidden px-6 py-24 md:py-32">
      <ClayBlob tone="peach" className="-right-20 top-16 h-64 w-64 opacity-80" parallax={18} />
      <ClayBlob tone="mint" className="left-0 top-1/2 h-56 w-56 opacity-70" parallax={14} />
      <AiryLayer className="opacity-60" />

      <Magnetic className="relative z-10 inline-block rounded-full border border-[var(--color-accent-soft)]/70 bg-white/50 px-4 py-2">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">SPM Proposal</p>
      </Magnetic>
      <KineticHeadline text={intro.englishTitle} className="relative z-10 mt-6 text-4xl font-bold text-[#2f2a26] md:text-6xl" />
      <Parallax offset={18}>
        <SoftMask className="relative z-10 mt-8 max-w-4xl bg-[var(--color-surface)]/75 p-7 shadow-[0_8px_40px_rgba(138,120,109,0.12)] backdrop-blur-sm">
          <p className="text-lg leading-10 text-[color:var(--foreground)]">{intro.persianNarrative}</p>
        </SoftMask>
      </Parallax>
    </ChapterTransition>
  );
}
