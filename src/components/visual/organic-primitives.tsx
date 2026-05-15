"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { type ReactNode } from "react";

export function ClayBlob({ className = "", tone = "peach", parallax = 24 }: { className?: string; tone?: "peach" | "lavender" | "mint"; parallax?: number }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -parallax]);

  const tones: Record<string, string> = {
    peach: "from-rose-200/55 via-orange-100/45 to-amber-100/30",
    lavender: "from-violet-200/50 via-fuchsia-100/40 to-indigo-100/25",
    mint: "from-emerald-200/55 via-teal-100/45 to-cyan-100/25",
  };

  return (
    <motion.div
      aria-hidden
      className={`absolute rounded-[42%_58%_55%_45%/38%_35%_65%_62%] bg-gradient-to-br blur-2xl ${tones[tone]} ${className}`}
      style={{ y }}
    />
  );
}

export function SoftMask({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] ${className}`}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.5),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 border border-white/40" />
      {children}
    </div>
  );
}

export function AiryLayer({ className = "" }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const drift = useTransform(scrollYProgress, [0, 1], [0, -32]);
  const y = useSpring(drift, { stiffness: 40, damping: 24 });

  return (
    <motion.div
      aria-hidden
      className={`absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.45),rgba(255,255,255,0)_45%,rgba(255,255,255,0.28))] ${className}`}
      style={{ y }}
    />
  );
}
