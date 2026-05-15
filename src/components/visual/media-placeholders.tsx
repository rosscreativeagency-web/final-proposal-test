"use client";

import { motion } from "framer-motion";

type PlaceholderTone = "sage" | "peach" | "sky" | "rose" | "sand";

type PlaceholderProps = {
  title: string;
  persianLabel: string;
  tone: PlaceholderTone;
  kind: "organic" | "editorial" | "campaign" | "product" | "icon";
};

const toneClasses: Record<PlaceholderTone, { shell: string; glowA: string; glowB: string; ink: string }> = {
  sage: { shell: "from-[#f0f6ee] via-[#e5f0df] to-[#dcead4]", glowA: "bg-[#bfd9b7]/50", glowB: "bg-[#dde9d3]/80", ink: "#3f5d45" },
  peach: { shell: "from-[#fbf1e8] via-[#f9e7d8] to-[#eed5c2]", glowA: "bg-[#edc6a9]/50", glowB: "bg-[#f2dac8]/75", ink: "#6f4b33" },
  sky: { shell: "from-[#ecf3f8] via-[#dae7f2] to-[#d2e0ed]", glowA: "bg-[#b7d0e4]/55", glowB: "bg-[#dce8f1]/80", ink: "#35506a" },
  rose: { shell: "from-[#f9edf2] via-[#f1dce5] to-[#ead1de]", glowA: "bg-[#e7bdd0]/50", glowB: "bg-[#f2dce8]/75", ink: "#654055" },
  sand: { shell: "from-[#f7f1e8] via-[#eee5d7] to-[#e5dac8]", glowA: "bg-[#daccb3]/55", glowB: "bg-[#efe4d4]/80", ink: "#635542" },
};

function BasePlaceholder({ title, persianLabel, tone, kind }: PlaceholderProps) {
  const t = toneClasses[tone];

  return (
    <motion.figure
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -10, rotate: -0.3, scale: 1.01 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative isolate overflow-visible border border-white/40 bg-gradient-to-br p-4 shadow-[0_22px_70px_rgba(129,100,76,0.2)] ${t.shell}`}
      style={{ clipPath: "polygon(0 8%, 100% 0, 98% 100%, 3% 96%)" }}
    >
      <div className={`absolute -left-10 top-2 h-28 w-28 blur-2xl ${t.glowA}`} />
      <div className={`absolute -bottom-12 right-0 h-36 w-36 blur-2xl ${t.glowB}`} />
      <div className="absolute -right-8 top-8 h-px w-24 bg-[#fff8ef]/85" />
      <div className="absolute -left-10 bottom-12 h-px w-20 bg-[#5f4b3b]/20" />

      <div className="relative overflow-hidden border border-white/55 bg-[#fffdf8]/70 p-4 backdrop-blur-sm">
        <svg viewBox="0 0 320 180" className="h-44 w-full" role="img" aria-label={persianLabel}>
          <rect x="12" y="12" width="296" height="156" fill="rgba(255,255,255,0.45)" />
          {kind === "organic" && <path d="M30 122 C46 79, 118 43, 184 50 C242 56, 290 95, 282 136 C274 160, 233 168, 156 166 C96 165, 48 154, 30 122 Z" fill={t.ink} opacity="0.28" />}
          {kind === "editorial" && <path d="M48 134 L102 46 L174 124 L244 32 L285 134 Z" fill={t.ink} opacity="0.23" />}
          {kind === "campaign" && <rect x="48" y="52" width="224" height="88" fill={t.ink} opacity="0.24" />}
          {kind === "product" && <ellipse cx="168" cy="136" rx="88" ry="15" fill={t.ink} opacity="0.2" />}
          {kind === "icon" && <circle cx="100" cy="88" r="34" fill={t.ink} opacity="0.24" />}
          <line x1="48" y1="40" x2="280" y2="40" stroke={t.ink} strokeOpacity="0.35" strokeWidth="3" />
          <line x1="130" y1="92" x2="265" y2="92" stroke={t.ink} strokeOpacity="0.5" strokeWidth="5" />
          <line x1="130" y1="116" x2="235" y2="116" stroke={t.ink} strokeOpacity="0.4" strokeWidth="4" />
        </svg>
      </div>

      <figcaption className="relative mt-3 space-y-1">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#7e6856]">{title}</p>
        <p className="text-sm font-semibold leading-7 text-[#4e3e32]">{persianLabel}</p>
      </figcaption>
    </motion.figure>
  );
}

export const OrganicMaskedPhotoPlaceholder = () => <BasePlaceholder title="Organic Masked Area" persianLabel="عکس احساسی مخاطب در فضای واقعی" tone="sage" kind="organic" />;
export const LayeredEditorialStackPlaceholder = () => <BasePlaceholder title="Layered Editorial Stack" persianLabel="کولاژ کارت‌های پیام برند و تیتر کمپین" tone="peach" kind="editorial" />;
export const CampaignMockupZonePlaceholder = () => <BasePlaceholder title="Campaign Mockup Zone" persianLabel="موکاپ بنر تبلیغاتی و استوری دیجیتال" tone="sky" kind="campaign" />;
export const ProductShotZonePlaceholder = () => <BasePlaceholder title="Product-shot Zone" persianLabel="عکس محصول روی پس‌زمینه روشن استودیویی" tone="rose" kind="product" />;
export const IconDiagramZonePlaceholder = () => <BasePlaceholder title="Icon / Diagram Zone" persianLabel="آیکون‌ها و دیاگرام KPI/نتیجه نهایی" tone="sand" kind="icon" />;
