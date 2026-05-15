"use client";

import { motion } from "framer-motion";

function BasePlaceholder({ label, accent }: { label: string; accent: string }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative isolate overflow-hidden rounded-3xl border border-white/20 bg-[#0d1325]/90 p-6 text-zinc-100"
    >
      <div className="absolute -left-14 top-6 h-40 w-40 rounded-[42%_58%_70%_30%/35%_41%_59%_65%] bg-cyan-300/25 blur-2xl" />
      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-[58%_42%_33%_67%/47%_66%_34%_53%] bg-fuchsia-300/20 blur-2xl" />
      <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.08),transparent_30%,rgba(255,255,255,0.02))]" />

      <div className="relative h-52 rounded-2xl border border-white/15 bg-zinc-950/40 p-4">
        <svg viewBox="0 0 300 160" className="h-full w-full" role="img" aria-label={label}>
          <defs>
            <linearGradient id={accent} x1="0" x2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.75)" />
            </linearGradient>
          </defs>
          <path d="M15 120 C60 35, 130 30, 178 90 S265 150, 290 54" fill="none" stroke={`url(#${accent})`} strokeWidth="3" />
          <circle cx="86" cy="66" r="16" fill="rgba(255,255,255,0.15)" />
          <rect x="165" y="44" width="92" height="56" rx="18" fill="rgba(255,255,255,0.09)" />
          <path d="M35 135 L130 80 L212 120" fill="none" stroke="rgba(45,212,191,0.7)" strokeWidth="2" strokeDasharray="4 6" />
        </svg>
      </div>
      <figcaption className="relative mt-4 text-center text-sm font-medium text-zinc-100/95">{label}</figcaption>
    </motion.figure>
  );
}

export function ProductBrandPlaceholder() {
  return <BasePlaceholder label="تصویر پیشنهادی: محصول برند" accent="productAccent" />;
}

export function SalesGrowthDiagramPlaceholder() {
  return <BasePlaceholder label="دیاگرام پیشنهادی: مسیر رشد فروش" accent="salesAccent" />;
}

export function DigitalCampaignMockupPlaceholder() {
  return <BasePlaceholder label="موکاپ پیشنهادی: کمپین دیجیتال" accent="campaignAccent" />;
}
