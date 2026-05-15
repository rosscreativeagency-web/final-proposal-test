import { AmbientScene } from "@/components/visual/ambient-scene";
import { motion } from "framer-motion";

export function ProposalShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.main className="relative text-zinc-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <AmbientScene />
      {children}
    </motion.main>
  );
}

export function ProposalContent({ children }: { children: React.ReactNode }) {
  return <section className="mx-auto max-w-6xl px-6 pb-[var(--space-section)]">{children}</section>;
}
