import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Leaf } from "lucide-react";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      className={`brand ${inverse ? "brand-inverse" : ""}`}
      href="#inicio"
      aria-label="Mari Nutricionista, início"
    >
      <span className="brand-symbol">
        <Leaf size={27} strokeWidth={1.7} />
      </span>
      <span>
        <strong>
          mari<span className="brand-dot">.</span>
        </strong>
        <small>nutricionista</small>
      </span>
    </a>
  );
}

export function CTA({
  onClick,
  children = "Agendar consulta",
  dark = false,
  className = "",
}: {
  onClick: () => void;
  children?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`button ${dark ? "button-dark" : "button-lime"} ${className}`}
    >
      <span>{children}</span>
      <span className="button-arrow">
        <ArrowUpRight size={17} />
      </span>
    </button>
  );
}

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span className={`section-label ${light ? "label-light" : ""}`}>
      <span />
      {children}
    </span>
  );
}
