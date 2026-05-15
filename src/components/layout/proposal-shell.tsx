import { AmbientScene } from "@/components/visual/ambient-scene";
import { motion } from "framer-motion";

export function ProposalShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.main className="relative text-[color:var(--foreground)]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <AmbientScene />
      {children}
    </motion.main>
  );
}

export function ProposalContent({ children }: { children: React.ReactNode }) {
  return <section className="mx-auto w-[min(95vw,1600px)] px-5 pb-[var(--space-section)] md:px-8">{children}</section>;
}

export function ProposalBleed({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`proposal-bleed ${className}`.trim()}>{children}</section>;
}
