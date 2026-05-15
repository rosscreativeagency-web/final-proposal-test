"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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
  const { scrollYProgress } = useScroll();
  const drift = useTransform(scrollYProgress, [0, 1], [0, -90]);

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
        className="absolute -left-20 top-12 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl"
        style={{ x: useTransform(sx, (value) => value * -72), y: useTransform(sy, (value) => value * -52) }}
      />
      <motion.div
        className="absolute right-[-7rem] top-1/3 h-[24rem] w-[24rem] rounded-full bg-emerald-200/28 blur-3xl"
        style={{ x: useTransform(sx, (value) => value * 84), y: useTransform(sy, (value) => value * 56) }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22),rgba(246,241,232,0.6)_65%)]" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />
    </div>
  );
}
