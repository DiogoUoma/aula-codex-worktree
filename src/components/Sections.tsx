import { useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  HeartHandshake,
  Leaf,
  Minus,
  Plus,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";
import {
  areas,
  benefits,
  faqs,
  problems,
  steps,
  testimonials,
} from "../content";
import { Brand, CTA, Reveal, SectionLabel } from "./ui";

export function Areas({ onSchedule }: { onSchedule: () => void }) {
  return (
    <section id="especialidades" className="section container">
      <Reveal>
        <div className="section-heading">
          <div>
            <SectionLabel>Seu objetivo, nosso ponto de partida</SectionLabel>
            <h2>
              Cada pessoa, um caminho.
              <br />
              Qual é o seu?
            </h2>
          </div>
          <p>
            Da primeira mudança de hábito a um novo objetivo.
            <br />
            Um cuidado que acompanha o seu momento.
          </p>
        </div>
      </Reveal>
      <div className="areas-grid">
        {areas.map(({ title, description, image, alt, icon: Icon }) => (
          <article key={title} className="area-card">
            <div className="area-card-heading">
              <span className="area-icon">
                <Icon size={21} strokeWidth={1.6} />
              </span>
              <h3>{title}</h3>
            </div>
            <p>{description}</p>
            <div className="area-image">
              <img
                src={image}
                alt={alt}
                loading="lazy"
                width="600"
                height="400"
              />
              <button
                onClick={onSchedule}
                aria-label={`Agendar consulta para ${title}`}
              >
                <ArrowUpRight size={20} />
              </button>
            </div>
          </article>
        ))}
      </div>
      <div className="areas-note">
        <HeartHandshake size={18} />
        <p>
          Também para quem busca mais saúde, organização alimentar e equilíbrio
          na rotina corrida.
        </p>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section className="problem-section">
      <div className="container problem-grid">
        <Reveal>
          <SectionLabel>Você se reconhece?</SectionLabel>
          <h2>
            Você tenta.
            <br />A rotina aperta.
            <br />E fica difícil continuar.
          </h2>
          <p>
            Mudar a alimentação pode parecer complicado quando as orientações
            não consideram a sua vida. Ter apoio faz diferença nesse caminho.
          </p>
        </Reveal>
        <ul className="problem-list">
          {problems.map((text) => (
            <li key={text}>
              <span>
                <Plus size={15} />
              </span>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function About({ onSchedule }: { onSchedule: () => void }) {
  return (
    <section id="sobre" className="section container about-grid">
      <Reveal className="about-visual">
        <img
          src="/images/ingredients.jpg"
          alt="Vegetais e ingredientes frescos para preparar refeições no dia a dia"
          loading="lazy"
          width="900"
          height="1000"
        />
        <div className="about-quote">
          <Leaf size={25} />
          <p>
            Comida de verdade.
            <br />
            Cuidado de perto.
          </p>
          <span>Esse é o meu jeito de fazer nutrição.</span>
        </div>
      </Reveal>
      <Reveal className="about-content">
        <SectionLabel>Prazer, sou a Mari</SectionLabel>
        <h2>
          Eu cuido da sua alimentação.
          <br />
          Você continua sendo você.
        </h2>
        <p>
          Acredito que uma alimentação saudável começa com uma boa conversa.
          Quero conhecer sua história, entender sua rotina e descobrir o que
          funciona para você.
        </p>
        <p>
          No meu atendimento, cada escolha tem um porquê. Seu plano é construído
          com escuta, orientação profissional e respeito às suas preferências,
          para que as mudanças façam sentido fora do consultório.
        </p>
        <ul className="check-list">
          {[
            "Escuta e acolhimento, sem julgamentos",
            "Plano alimentar individualizado",
            "Estratégias adaptadas à sua realidade",
          ].map((text) => (
            <li key={text}>
              <Check size={16} />
              {text}
            </li>
          ))}
        </ul>
        <CTA onClick={onSchedule} dark>
          Vamos conversar?
        </CTA>
        <div className="signature">
          Mari<span>Nutricionista</span>
        </div>
      </Reveal>
    </section>
  );
}

export function Process() {
  return (
    <section id="acompanhamento" className="process-section">
      <div className="container">
        <Reveal className="center-heading">
          <SectionLabel light>Simples desde o primeiro passo</SectionLabel>
          <h2>
            Um plano para você.
            <br />
            Uma jornada com apoio.
          </h2>
          <p>
            Você não precisa ter todas as respostas para começar.
            <br />
            Vamos construir esse caminho juntos.
          </p>
        </Reveal>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="step" key={step.title}>
              <span className="step-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section className="section container">
      <Reveal>
        <div className="section-heading">
          <div>
            <SectionLabel>Pequenas mudanças, novas possibilidades</SectionLabel>
            <h2>
              Mais leveza à mesa.
              <br />
              Mais autonomia na vida.
            </h2>
          </div>
          <p>
            O cuidado continua nas escolhas do dia a dia.
            <br />E vai muito além de um plano alimentar.
          </p>
        </div>
      </Reveal>
      <div className="benefits-grid">
        {benefits.map(({ title, text, icon: Icon }) => (
          <article key={title}>
            <span className="benefit-icon">
              <Icon size={25} strokeWidth={1.5} />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Difference({ onSchedule }: { onSchedule: () => void }) {
  return (
    <section className="container difference">
      <div className="difference-photo">
        <img
          src="/images/healthy-meal.jpg"
          alt="Alimentação variada e saborosa em uma mesa"
          loading="lazy"
          width="800"
          height="800"
        />
        <span>
          <Sparkles size={16} /> Equilíbrio também é sentir prazer.
        </span>
      </div>
      <Reveal className="difference-copy">
        <SectionLabel light>O meu compromisso com você</SectionLabel>
        <h2>
          Nutrição de verdade
          <br />
          precisa caber
          <br />
          <span>na sua vida.</span>
        </h2>
        <p>
          Seu plano considera o almoço corrido, a comida de família e os dias
          que saem do planejado. Com ajustes, alternativas e apoio, construímos
          hábitos possíveis de manter.
        </p>
        <CTA onClick={onSchedule}>Quero esse cuidado</CTA>
      </Reveal>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="section container">
      <Reveal className="center-heading">
        <SectionLabel>Histórias que inspiram o primeiro passo</SectionLabel>
        <h2>
          Quando o cuidado faz sentido,
          <br />a rotina ganha outro sabor.
        </h2>
        <p className="testimonial-disclaimer">
          Depoimentos ilustrativos, criados para demonstrar a experiência de
          acompanhamento.
        </p>
      </Reveal>
      <div className="testimonials-grid">
        {testimonials.map((person, index) => (
          <article className="testimonial-card" key={person.name}>
            <div className="testimonial-top">
              <span className="stars" aria-label="5 estrelas">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </span>
              <Quote size={25} strokeWidth={1.2} />
            </div>
            <blockquote>“{person.quote}”</blockquote>
            <div className="testimonial-person">
              <span className={`avatar avatar-${index}`}>
                {person.name.charAt(0)}
              </span>
              <div>
                <strong>{person.name}</strong>
                <span>{person.goal}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function BookingBanner({ onSchedule }: { onSchedule: () => void }) {
  return (
    <section className="booking-banner">
      <div className="container">
        <div>
          <h2>Seu primeiro passo pode ser hoje.</h2>
          <p>Comece a cuidar da sua alimentação com orientação profissional.</p>
        </div>
        <CTA onClick={onSchedule} dark>
          Agendar minha consulta
        </CTA>
      </div>
    </section>
  );
}

export function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section id="duvidas" className="section container faq-grid">
      <Reveal>
        <SectionLabel>Vamos tirar suas dúvidas</SectionLabel>
        <h2>
          Antes de começar,
          <br />
          uma boa conversa.
        </h2>
        <p>
          Reuni aqui as dúvidas mais comuns sobre o acompanhamento nutricional.
        </p>
        <span className="faq-note">
          <HeartHandshake size={24} /> Cuidar de você começa com informação.
        </span>
      </Reveal>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={faq.question}
            className={`faq-item ${active === index ? "faq-active" : ""}`}
          >
            <h3>
              <button
                id={`faq-question-${index}`}
                aria-expanded={active === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setActive(active === index ? null : index)}
              >
                {faq.question}
                <span>
                  {active === index ? <Minus size={17} /> : <Plus size={17} />}
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {active === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.16 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Footer({ onSchedule }: { onSchedule: () => void }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <SectionLabel light>
              Uma rotina mais saudável começa com cuidado
            </SectionLabel>
            <h2>
              Sua alimentação pode
              <br />
              ser mais simples.
              <br />
              <span>Vamos juntos?</span>
            </h2>
            <p>
              Com orientação, você pode construir uma rotina
              <br className="desktop-break" /> mais saudável, leve e possível de
              manter.
            </p>
          </div>
          <CTA onClick={onSchedule}>Agendar minha consulta</CTA>
        </div>
        <div className="footer-bottom">
          <Brand inverse />
          <p>Nutrição com ciência, escuta e vida real.</p>
          <Link to="/#duvidas">
            Dúvidas frequentes <ArrowUpRight size={14} />
          </Link>
          <Link to="/termos">Termos e privacidade</Link>
          <span>© {new Date().getFullYear()} Mari Nutricionista</span>
        </div>
      </div>
    </footer>
  );
}
