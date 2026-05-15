"use client";

import { motion, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

export function Parallax({ children, offset = 60, className }: { children: ReactNode; offset?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const x = useSpring(pos.x, { stiffness: 250, damping: 18 });
  const y = useSpring(pos.y, { stiffness: 250, damping: 18 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = event.clientX - (rect.left + rect.width / 2);
      const py = event.clientY - (rect.top + rect.height / 2);
      setPos({ x: px * 0.1, y: py * 0.1 });
    };

    const handleLeave = () => setPos({ x: 0, y: 0 });

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <motion.div ref={ref} className={className} style={{ x, y }}>
      {children}
    </motion.div>
  );
}

export function ChapterTransition({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      className={className}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      exit="exit"
    >
      {children}
    </motion.section>
  );
}
