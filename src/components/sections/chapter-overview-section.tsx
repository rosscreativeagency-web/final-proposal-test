import { ChapterTransition, Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { ChapterDivider } from "@/components/visual/chapter-divider";
import { AiryLayer, ClayBlob, SoftMask } from "@/components/visual/organic-primitives";
import { type Chapter } from "@/data/proposal";

const renderBullets = (items: string[]) => (
  <Stagger className="space-y-3 text-sm leading-7 text-[#5f5953] md:text-base">
    {items.map((item) => (
      <StaggerItem key={item}>
        <li className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]" />
          <span>{item}</span>
        </li>
      </StaggerItem>
    ))}
  </Stagger>
);

export function ChapterOverviewSection({ chapter }: { chapter: Chapter }) {
  return (
    <>
      <ChapterDivider chapter={chapter.englishTitle} index={1} tone="calm" />
      <ChapterTransition className="relative overflow-hidden rounded-[2.5rem] px-4 py-6 md:px-8">
        <ClayBlob tone="lavender" className="-left-16 top-10 h-52 w-52 opacity-65" parallax={22} />
        <AiryLayer className="opacity-55" />

        <div className="relative z-10 grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <Reveal className="space-y-6">
            <h2 dir="ltr" className="bidi-ltr max-w-2xl text-3xl font-semibold text-[#36302b] md:text-4xl">
              {chapter.englishTitle}
            </h2>
            <p className="max-w-3xl border-s-2 border-[var(--color-accent-soft)] ps-5 text-lg leading-9 text-[#57514b]">
              {chapter.persianNarrative}
            </p>
          </Reveal>

          <Reveal>
            <SoftMask className="bg-white/55 p-7 shadow-[0_8px_32px_rgba(117,104,96,0.16)] backdrop-blur-md">
              <h3 dir="ltr" className="bidi-ltr text-2xl font-semibold text-[#2f2b27]">
                {chapter.sections?.[0]?.englishHeading}
              </h3>
              <p className="mt-4 text-[#69625c]">{chapter.sections?.[0]?.persianLead}</p>
              <ul className="mt-5">{renderBullets(chapter.sections?.[0]?.bullets ?? [])}</ul>
            </SoftMask>
          </Reveal>
        </div>
      </ChapterTransition>
    </>
  );
}
