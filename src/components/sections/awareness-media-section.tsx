import { ChapterTransition } from "@/components/motion/primitives";
import { ChapterDivider } from "@/components/visual/chapter-divider";
import {
  CampaignMockupZonePlaceholder,
  OrganicMaskedPhotoPlaceholder,
  ProductShotZonePlaceholder,
} from "@/components/visual/media-placeholders";
import { type Chapter } from "@/data/proposal";

export function AwarenessMediaSection({ chapter }: { chapter: Chapter }) {
  return (
    <>
      <ChapterDivider chapter={chapter.englishTitle} index={6} tone="energetic" />
      <ChapterTransition className="grid gap-6 md:grid-cols-3">
        <OrganicMaskedPhotoPlaceholder />
        <ProductShotZonePlaceholder />
        <CampaignMockupZonePlaceholder />
      </ChapterTransition>
    </>
  );
}
