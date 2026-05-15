import { ChapterDivider } from "@/components/visual/chapter-divider";
import { ChapterTransition, Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import { type Chapter } from "@/data/proposal";

const renderBullets = (items: string[]) => (
  <Stagger className="space-y-2 text-sm leading-7 text-zinc-200 md:text-base">
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
      <ChapterTransition className="grid gap-8 md:grid-cols-2">
        <Reveal className="rounded-3xl border border-white/15 bg-white/10 p-8 shadow-sm backdrop-blur-sm">
          <h2 className="text-3xl font-semibold">{chapter.englishTitle}</h2>
          <p className="mt-5 text-lg leading-9 text-zinc-100/95">{chapter.persianNarrative}</p>
        </Reveal>
        <Reveal className="rounded-3xl border border-white/15 bg-black/25 p-8 text-zinc-100 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold">{chapter.sections?.[0]?.englishHeading}</h3>
          <p className="mt-4 text-zinc-200">{chapter.sections?.[0]?.persianLead}</p>
          <ul className="mt-4">{renderBullets(chapter.sections?.[0]?.bullets ?? [])}</ul>
        </Reveal>
      </ChapterTransition>
    </>
  );
}
