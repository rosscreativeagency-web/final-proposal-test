"use client";

import { motion } from "framer-motion";

export function ChapterDivider({ chapter, index, tone = "calm" }: { chapter: string; index: number; tone?: "calm" | "energetic" }) {
  const chapterNo = String(index + 1).padStart(2, "0");

  return (
    <motion.section
      initial={{ opacity: 0, y: 56, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: tone === "energetic" ? 0.8 : 1.15, ease: [0.19, 1, 0.22, 1] }}
      className="chapter-divider proposal-bleed"
    >
      <div className="chapter-divider__wash" />
      <motion.span className="chapter-divider__number" initial={{ x: 70, opacity: 0.2 }} whileInView={{ x: 0, opacity: 0.5 }} transition={{ duration: 1.1 }}>
        {chapterNo}
      </motion.span>
      <motion.div className="chapter-divider__ticker" initial={{ x: "20%", opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1.05 }}>
        <span>ROSS CREATIVE DIRECTION · CINEMATIC FLOW ·</span>
        <span>{chapter.toUpperCase()} ·</span>
      </motion.div>

      <div className="chapter-divider__content bidi-ltr" dir="ltr">
        <p className="chapter-divider__label">CHAPTER {chapterNo}</p>
        <motion.h2 className="chapter-divider__title" initial={{ y: 18, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.08, duration: 0.8 }}>
          {chapter}
        </motion.h2>
      </div>
    </motion.section>
  );
}
