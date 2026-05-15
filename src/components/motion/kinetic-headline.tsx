"use client";

import gsap from "gsap";
import SplitType from "split-type";
import { useEffect, useRef } from "react";

export function KineticHeadline({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const split = new SplitType(ref.current, { types: "chars" });
    const chars = split.chars;

    gsap.fromTo(
      chars,
      { yPercent: 110, opacity: 0, filter: "blur(4px)" },
      {
        yPercent: 0,
        opacity: 1,
        filter: "blur(0px)",
        ease: "power3.out",
        duration: 1,
        stagger: 0.03,
      },
    );

    return () => split.revert();
  }, []);

  return (
    <h1 ref={ref} className={className}>
      {text}
    </h1>
  );
}
