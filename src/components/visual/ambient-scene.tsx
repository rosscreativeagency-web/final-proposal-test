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
  const sx = useSpring(point.x, { stiffness: 60, damping: 20 });
  const sy = useSpring(point.y, { stiffness: 60, damping: 20 });
  const { scrollYProgress } = useScroll();
  const drift = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#05070f]">
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.25), transparent 40%), radial-gradient(circle at 70% 10%, rgba(20,184,166,0.2), transparent 45%), radial-gradient(circle at 50% 80%, rgba(244,114,182,0.16), transparent 50%)",
          y: drift,
        }}
      />

      <motion.div
        className="absolute -left-24 top-16 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl"
        style={{ x: useTransform(sx, (value) => value * -120), y: useTransform(sy, (value) => value * -80) }}
      />
      <motion.div
        className="absolute right-[-8rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-400/20 blur-3xl"
        style={{ x: useTransform(sx, (value) => value * 130), y: useTransform(sy, (value) => value * 70) }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),rgba(5,7,15,0.6)_65%)]" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />
    </div>
  );
}
