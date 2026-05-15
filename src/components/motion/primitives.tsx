"use client";

import { motion, useScroll, useSpring, useTransform, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.2, 0.8, 0.24, 1],
      staggerChildren: 0.12,
      delayChildren: 0.16,
    },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.5 } },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.24, 0.7, 0.3, 1] } },
};

export function Reveal({ children, className }: { children: ReactNode; className?: string }) { return <motion.div className={className} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>{children}</motion.div>; }
export function Stagger({ children, className }: { children: ReactNode; className?: string }) { return <motion.div className={className} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>{children}</motion.div>; }
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) { return <motion.div className={className} variants={itemVariants}>{children}</motion.div>; }

export function Parallax({ children, offset = 28, className }: { children: ReactNode; offset?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return <motion.div ref={ref} style={{ y }} className={className}>{children}</motion.div>;
}

export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const x = useSpring(pos.x, { stiffness: 170, damping: 24, mass: 0.9 });
  const y = useSpring(pos.y, { stiffness: 170, damping: 24, mass: 0.9 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = event.clientX - (rect.left + rect.width / 2);
      const py = event.clientY - (rect.top + rect.height / 2);
      setPos({ x: px * 0.06, y: py * 0.06 });
    };
    const handleLeave = () => setPos({ x: 0, y: 0 });
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);
  return <motion.div ref={ref} className={className} style={{ x, y }}>{children}</motion.div>;
}

export function ChapterTransition({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.section className={className} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.14 }} exit="exit">{children}</motion.section>;
}
