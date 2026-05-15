"use client";

import { motion, useScroll, useSpring, useTime, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

function usePointerOffset() {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const nx = event.clientX / window.innerWidth - 0.5;
      const ny = event.clientY / window.innerHeight - 0.5;
      setPoint({ x: nx, y: ny });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return point;
}

export function AmbientScene() {
  const point = usePointerOffset();
  const sx = useSpring(point.x, { stiffness: 42, damping: 28 });
  const sy = useSpring(point.y, { stiffness: 42, damping: 28 });
  const time = useTime();
  const { scrollYProgress } = useScroll();
  const drift = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const morphA = useTransform(time, (t) => `${42 + Math.sin(t / 4200) * 12}% ${58 - Math.cos(t / 3800) * 8}% ${61 + Math.sin(t / 3500) * 6}% ${39 - Math.cos(t / 3700) * 6}% / ${45 + Math.sin(t / 3900) * 8}%  ${35 + Math.cos(t / 3000) * 8}% ${65 - Math.sin(t / 3300) * 8}% ${55 - Math.cos(t / 4400) * 8}%`);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--background)]">
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 16%, rgba(234,204,192,0.4), transparent 38%), radial-gradient(circle at 78% 12%, rgba(188,210,202,0.36), transparent 42%), radial-gradient(circle at 52% 82%, rgba(217,200,226,0.24), transparent 48%)",
          y: drift,
        }}
      />

      <motion.div
        className="absolute -left-28 top-12 h-96 w-96 bg-[#ffd7c4]/40 blur-[78px]"
        style={{ x: useTransform(sx, (value) => value * -72), y: useTransform(sy, (value) => value * -52) }}
      />
      <motion.div
        className="absolute right-[-8rem] top-1/3 h-[27rem] w-[27rem] bg-[#b8dccf]/35 blur-[84px]"
        style={{ x: useTransform(sx, (value) => value * 84), y: useTransform(sy, (value) => value * 56), borderRadius: morphA }}
      />
      <motion.div className="absolute left-[28%] top-[54%] h-[22rem] w-[22rem] bg-[#cab5da]/25 blur-[92px]" style={{ x: useTransform(sx, (value) => value * 62), y: useTransform(sy, (value) => value * -48), borderRadius: morphA }} />
      <motion.div className="absolute right-[35%] top-[8%] h-[16rem] w-[16rem] rounded-full bg-[#b9d9f0]/24 blur-[72px]" style={{ x: useTransform(sx, (value) => value * -40), y: useTransform(sy, (value) => value * 34) }} />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22),rgba(246,241,232,0.6)_65%)]" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />
      <motion.div className="grain-overlay" animate={{ opacity: [0.1, 0.17, 0.12] }} transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} />
    </div>
  );
}
