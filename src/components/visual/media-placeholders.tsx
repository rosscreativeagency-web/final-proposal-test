"use client";

import { motion } from "framer-motion";

type PlaceholderTone = "sage" | "peach" | "sky" | "rose" | "sand";

type PlaceholderProps = {
  title: string;
  persianLabel: string;
  tone: PlaceholderTone;
  kind: "organic" | "editorial" | "campaign" | "product" | "icon";
};

const toneClasses: Record<PlaceholderTone, { shell: string; blobA: string; blobB: string; line: string }> = {
  sage: {
    shell: "border-[#cfdccf] bg-[#f4f8f3]",
    blobA: "bg-[#c8ddc4]/55",
    blobB: "bg-[#dbe9d6]/60",
    line: "stroke-[#7f9c7e]",
  },
  peach: {
    shell: "border-[#ead3c0] bg-[#fdf6ef]",
    blobA: "bg-[#f1d4bc]/55",
    blobB: "bg-[#f6e3d2]/65",
    line: "stroke-[#c99a79]",
  },
  sky: {
    shell: "border-[#cfdde9] bg-[#f2f7fb]",
    blobA: "bg-[#c8dceb]/55",
    blobB: "bg-[#dfeaf2]/65",
    line: "stroke-[#7da0bf]",
  },
  rose: {
    shell: "border-[#e8d4de] bg-[#fdf5f8]",
    blobA: "bg-[#edcfda]/60",
    blobB: "bg-[#f5e1e9]/70",
    line: "stroke-[#b78598]",
  },
  sand: {
    shell: "border-[#dfd6c9] bg-[#faf7f1]",
    blobA: "bg-[#e6dccd]/60",
    blobB: "bg-[#f0e9db]/70",
    line: "stroke-[#9e8d73]",
  },
};

function BasePlaceholder({ title, persianLabel, tone, kind }: PlaceholderProps) {
  const classes = toneClasses[tone];

  return (
    <motion.figure
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      className={`relative isolate overflow-hidden rounded-[2rem] border p-5 text-[#3e3a35] shadow-[0_16px_40px_rgba(137,117,89,0.11)] ${classes.shell}`}
    >
      <div className={`absolute -left-10 top-5 h-32 w-32 rounded-[44%_56%_63%_37%/42%_35%_65%_58%] blur-xl ${classes.blobA}`} />
      <div className={`absolute -bottom-8 right-2 h-36 w-36 rounded-[54%_46%_35%_65%/60%_40%_60%_40%] blur-xl ${classes.blobB}`} />

      <div className="relative rounded-3xl border border-[#ffffff]/70 bg-[#fffdf9]/85 p-4">
        <svg viewBox="0 0 320 180" className="h-48 w-full" role="img" aria-label={persianLabel}>
          {kind === "organic" ? (
            <>
              <path d="M46 120 C48 67, 106 39, 159 45 C220 51, 260 86, 259 128 C258 153, 231 167, 185 168 C114 170, 43 150, 46 120 Z" fill="rgba(255,255,255,0.73)" />
              <path d="M55 116 C65 83, 108 61, 151 63 C199 65, 236 93, 234 125 C231 150, 204 160, 170 160 C115 161, 66 144, 55 116 Z" className={`${classes.line}`} fill="none" strokeWidth="3" />
              <circle cx="96" cy="92" r="12" fill="rgba(255,255,255,0.8)" />
            </>
          ) : null}

          {kind === "editorial" ? (
            <>
              <rect x="72" y="46" width="150" height="98" rx="20" fill="rgba(255,255,255,0.72)" />
              <rect x="98" y="34" width="150" height="98" rx="20" fill="rgba(255,255,255,0.86)" />
              <rect x="120" y="62" width="110" height="10" rx="5" className={`${classes.line}`} fill="currentColor" />
              <rect x="120" y="84" width="92" height="8" rx="4" fill="rgba(98,84,69,0.35)" />
              <rect x="120" y="100" width="74" height="8" rx="4" fill="rgba(98,84,69,0.3)" />
            </>
          ) : null}

          {kind === "campaign" ? (
            <>
              <rect x="42" y="38" width="236" height="124" rx="24" fill="rgba(255,255,255,0.72)" />
              <rect x="58" y="56" width="108" height="84" rx="14" fill="rgba(232,218,201,0.85)" />
              <rect x="178" y="60" width="84" height="14" rx="7" className={`${classes.line}`} fill="currentColor" />
              <rect x="178" y="84" width="68" height="10" rx="5" fill="rgba(98,84,69,0.34)" />
              <rect x="178" y="104" width="54" height="10" rx="5" fill="rgba(98,84,69,0.28)" />
              <circle cx="248" cy="131" r="14" className={`${classes.line}`} fill="currentColor" />
            </>
          ) : null}

          {kind === "product" ? (
            <>
              <ellipse cx="160" cy="146" rx="88" ry="16" fill="rgba(160,141,112,0.2)" />
              <rect x="116" y="52" width="88" height="88" rx="24" fill="rgba(255,255,255,0.86)" />
              <rect x="136" y="38" width="48" height="24" rx="12" className={`${classes.line}`} fill="currentColor" />
              <rect x="130" y="78" width="60" height="42" rx="10" fill="rgba(216,201,181,0.65)" />
            </>
          ) : null}

          {kind === "icon" ? (
            <>
              <circle cx="98" cy="88" r="34" fill="rgba(255,255,255,0.82)" />
              <path d="M84 88 L95 99 L116 76" fill="none" className={`${classes.line}`} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="154" y="56" width="108" height="12" rx="6" className={`${classes.line}`} fill="currentColor" />
              <rect x="154" y="80" width="88" height="10" rx="5" fill="rgba(98,84,69,0.35)" />
              <rect x="154" y="100" width="66" height="10" rx="5" fill="rgba(98,84,69,0.28)" />
            </>
          ) : null}
        </svg>
      </div>

      <figcaption className="relative mt-3 space-y-1">
        <p className="text-xs uppercase tracking-[0.18em] text-[#8f8172]">{title}</p>
        <p className="text-sm font-semibold leading-7 text-[#4c4339]">جایگذاری دارایی: {persianLabel}</p>
      </figcaption>
    </motion.figure>
  );
}

export const OrganicMaskedPhotoPlaceholder = () => (
  <BasePlaceholder title="Organic Masked Area" persianLabel="عکس احساسی مخاطب در فضای واقعی" tone="sage" kind="organic" />
);

export const LayeredEditorialStackPlaceholder = () => (
  <BasePlaceholder title="Layered Editorial Stack" persianLabel="کولاژ کارت‌های پیام برند و تیتر کمپین" tone="peach" kind="editorial" />
);

export const CampaignMockupZonePlaceholder = () => (
  <BasePlaceholder title="Campaign Mockup Zone" persianLabel="موکاپ بنر تبلیغاتی و استوری دیجیتال" tone="sky" kind="campaign" />
);

export const ProductShotZonePlaceholder = () => (
  <BasePlaceholder title="Product-shot Zone" persianLabel="عکس محصول روی پس‌زمینه روشن استودیویی" tone="rose" kind="product" />
);

export const IconDiagramZonePlaceholder = () => (
  <BasePlaceholder title="Icon / Diagram Zone" persianLabel="آیکون‌ها و دیاگرام KPI/نتیجه نهایی" tone="sand" kind="icon" />
);
