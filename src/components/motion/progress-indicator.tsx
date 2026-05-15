"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ProgressIndicator() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
      <motion.div className="h-full origin-left bg-emerald-400/85" style={{ scaleX }} />
    </div>
  );
}
