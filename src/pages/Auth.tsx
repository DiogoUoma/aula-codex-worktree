import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Eye,
  EyeOff,
  Heart,
  LockKeyhole,
} from "lucide-react";
import { Link, NavLink } from "react-router";
import { Brand } from "../components/ui";
import "./auth.css";

function PasswordField({
  confirm = false,
  register = false,
}: {
  confirm?: boolean;
  register?: boolean;
}) {
  const [visible, setVisible] = useState(false);
  const id = confirm ? "confirm-password" : "password";
  return (
    <div className="auth-field">
      <label htmlFor={id}>{confirm ? "Confirmar senha" : "Senha"}</label>
      <div className="auth-password">
        <input
          id={id}
          name={id}
          type={visible ? "text" : "password"}
          autoComplete={
            register || confirm ? "new-password" : "current-password"
          }
          placeholder={confirm ? "Repita sua senha" : "Digite sua senha"}
          required
        />
        <button
          type="button"
          aria-label={`${visible ? "Ocultar" : "Mostrar"} ${confirm ? "confirmação de senha" : "senha"}`}
          aria-pressed={visible}
          aria-controls={id}
          onClick={() => setVisible((current) => !current)}
        >
          {visible ? (
            <EyeOff size={19} aria-hidden="true" />
          ) : (
            <Eye size={19} aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}

export function Auth({ mode }: { mode: "login" | "cadastro" }) {
  const register = mode === "cadastro";
  const [submitted, setSubmitted] = useState(false);

  return (
    <main id="conteudo" tabIndex={-1} className="auth-page">
      <title>{`${register ? "Criar conta" : "Entrar"} | Mari Nutricionista`}</title>
      <header className="auth-header">
        <Brand />
        <Link className="auth-back" to="/">
          <ArrowLeft size={16} aria-hidden="true" /> Voltar ao início
        </Link>
      </header>

      <div className="auth-layout">
        <aside className="auth-story" aria-labelledby="auth-story-title">
          <img src="/images/hero-salad.jpg" alt="" className="auth-photo" />
          <div className="auth-story-content">
            <span className="auth-story-label">
              <span /> Seu espaço de cuidado
            </span>
            <h2 id="auth-story-title">Uma vida mais leve começa com você.</h2>
            <p>
              Nutrição que respeita sua rotina, suas escolhas e o seu tempo.
            </p>
            <ul>
              <li>
                <Check size={16} aria-hidden="true" /> Alimentação sem
                extremismos
              </li>
              <li>
                <Check size={16} aria-hidden="true" /> Cuidado em cada etapa
              </li>
              <li>
                <Check size={16} aria-hidden="true" /> Mais equilíbrio no dia a
                dia
              </li>
            </ul>
          </div>
          <div className="auth-story-note">
            <span>
              <Heart size={21} aria-hidden="true" />
            </span>
            <div>
              <strong>Pequenas escolhas. Novas possibilidades.</strong>
              <p>Um passo de cada vez, do seu jeito.</p>
            </div>
          </div>
        </aside>

        <section className="auth-panel" aria-labelledby="auth-title">
          <nav className="auth-tabs" aria-label="Acesso à área do paciente">
            <NavLink to="/login">Entrar</NavLink>
            <NavLink to="/cadastro">Criar conta</NavLink>
          </nav>
          <div className="auth-heading">
            <h1 id="auth-title">
              {register ? "Seu primeiro passo." : "Que bom ter você aqui."}
            </h1>
            <p>
              {register
                ? "Crie seu espaço para uma rotina com mais cuidado."
                : "Entre no seu espaço de cuidado com a Mari."}
            </p>
          </div>

          <form
            className="auth-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            {register && (
              <div className="auth-field">
                <label htmlFor="name">Nome completo</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  placeholder="Como você se chama?"
                  required
                />
              </div>
            )}
            <div className="auth-field">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="voce@exemplo.com"
                required
              />
            </div>
            <PasswordField register={register} />
            {register && <PasswordField confirm />}
            {register && (
              <label className="auth-consent">
                <input type="checkbox" name="terms" required />
                <span>
                  Li e concordo com os{" "}
                  <Link to="/termos">termos de uso e privacidade</Link>.
                </span>
              </label>
            )}
            <button type="submit" className="button button-lime auth-submit">
              <span>
                {register ? "Criar minha conta" : "Entrar na minha conta"}
              </span>
              <span className="button-arrow">
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </button>
            <p className="auth-preview" role="status">
              <LockKeyhole size={15} aria-hidden="true" />
              <span>
                {submitted
                  ? "Esta é uma prévia. Nenhum dado foi enviado ou salvo. O acesso estará disponível em breve."
                  : "Área em preparação. Login e cadastro estarão disponíveis em breve."}
              </span>
            </p>
          </form>

          <p className="auth-switch">
            {register ? "Já tem uma conta?" : "Ainda não tem uma conta?"}{" "}
            <Link to={register ? "/login" : "/cadastro"}>
              {register ? "Entrar" : "Criar conta"}
            </Link>
          </p>
        </section>
      </div>
      <footer className="auth-footer">
        <span>© {new Date().getFullYear()} Mari Nutricionista</span>
        <Link to="/termos">Termos e privacidade</Link>
      </footer>
    </main>
  );
}
