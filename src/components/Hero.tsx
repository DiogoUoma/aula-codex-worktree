import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  Check,
  Heart,
  Monitor,
  MapPin,
  Sparkles,
} from "lucide-react";
import { CTA } from "./ui";

export function Hero({ onSchedule }: { onSchedule: () => void }) {
  const reduced = useReducedMotion();
  return (
    <section id="inicio" className="hero-wrap">
      <div className="hero">
        <img
          className="hero-image"
          src="/images/hero-salad.jpg"
          alt="Uma refeição colorida com folhas, legumes e ingredientes frescos"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-grain" />
        <motion.div
          className="hero-content"
          initial={reduced ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="hero-eyebrow">
            <span />
            Nutrição com leveza. Cuidado com você.
          </div>
          <h1>
            Comer bem.
            <br />
            Viver melhor.
            <br />
            <span>Do seu jeito.</span>
          </h1>
          <p>
            Acompanhamento nutricional feito para você,
            <br className="desktop-break" /> sua rotina e seus objetivos. Mais
            saúde e equilíbrio,
            <br className="desktop-break" /> com mudanças que você consegue
            manter.
          </p>
          <div className="hero-buttons">
            <CTA onClick={onSchedule}>Quero meu acompanhamento</CTA>
            <a href="#acompanhamento" className="hero-secondary">
              Conheça o processo <ArrowDown size={15} />
            </a>
          </div>
          <div className="hero-formats">
            <span>
              <Monitor size={15} /> Atendimento online
            </span>
            <span>
              <MapPin size={15} /> e presencial
            </span>
          </div>
        </motion.div>
        <div className="hero-note">
          <span className="note-icon">
            <Heart size={20} />
          </span>
          <div>
            <strong>Sua saúde, em primeiro lugar.</strong>
            <span>Um plano que respeita quem você é.</span>
          </div>
          <Sparkles size={18} className="note-spark" />
        </div>
        <span className="hero-vertical">
          Pequenas escolhas. Novas possibilidades.
        </span>
      </div>
      <div className="trust-bar container">
        {[
          "Alimentação sem extremismos",
          "Plano 100% personalizado",
          "Acolhimento em cada etapa",
        ].map((text) => (
          <span key={text}>
            <Check size={15} />
            {text}
          </span>
        ))}
        <a href="#sobre">
          Conheça a Mari <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
