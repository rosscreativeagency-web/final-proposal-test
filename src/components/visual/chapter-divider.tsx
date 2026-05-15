"use client";

import { motion } from "framer-motion";

export function ChapterDivider({ chapter, index, tone = "calm" }: { chapter: string; index: number; tone?: "calm" | "energetic" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: tone === "energetic" ? 0.7 : 1.1, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative my-18 overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 px-6 py-8 shadow-[0_0_50px_rgba(12,18,45,0.35)] backdrop-blur-md"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.35em] text-zinc-300">CHAPTER {String(index + 1).padStart(2, "0")}</p>
          <motion.h2 className="mt-3 text-2xl font-semibold text-white md:text-4xl" initial={{ letterSpacing: "0.22em" }} whileInView={{ letterSpacing: "0.01em" }} transition={{ duration: 1.1 }}>
            {chapter}
          </motion.h2>
        </div>
        <motion.span className="text-6xl font-black text-white/20" initial={{ rotate: -16, scale: 0.6 }} whileInView={{ rotate: 0, scale: 1 }} transition={{ duration: 0.8 }}>
          {String(index + 1).padStart(2, "0")}
        </motion.span>
      </div>
    </motion.div>
  );
}
