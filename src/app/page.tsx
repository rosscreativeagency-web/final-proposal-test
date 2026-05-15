"use client";

import { ProposalContent, ProposalShell } from "@/components/layout/proposal-shell";
import { AwarenessMediaSection } from "@/components/sections/awareness-media-section";
import { ChapterOverviewSection } from "@/components/sections/chapter-overview-section";
import { IntroSection } from "@/components/sections/intro-section";
import { proposalChapters } from "@/data/proposal";

const chapterMap = Object.fromEntries(proposalChapters.map((chapter) => [chapter.id, chapter]));

export default function Home() {
  const intro = chapterMap.introduction;
  const why = chapterMap.why;
  const awareness = chapterMap.awareness;

  return (
    <ProposalShell>
      <IntroSection intro={intro} />
      <ProposalContent>
        <ChapterOverviewSection chapter={why} />
        <AwarenessMediaSection chapter={awareness} />
      </ProposalContent>
    </ProposalShell>
  );
}
