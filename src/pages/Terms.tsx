import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const topics = [
  { id: "termos-de-uso", label: "Termos de uso" },
  { id: "agendamento", label: "Agendamento e atendimento" },
  { id: "dados-pessoais", label: "Dados pessoais" },
  { id: "servicos-externos", label: "Cookies e serviços externos" },
  { id: "seus-direitos", label: "Seus direitos" },
  { id: "contato", label: "Contato e atualizações" },
];

export function Terms({ onContact }: { onContact: () => void }) {
  return (
    <main id="conteudo" tabIndex={-1}>
      <title>Termos e privacidade | Mari Nutricionista</title>
      <div className="legal-intro">
        <div className="container">
          <Link className="legal-back" to="/">
            <ArrowLeft size={16} aria-hidden="true" /> Voltar ao início
          </Link>
          <h1>Termos e privacidade</h1>
          <p>
            Conheça as condições de uso deste site e como suas informações são
            tratadas ao entrar em contato com a Mari.
          </p>
          <span className="legal-updated">
            Última atualização:{" "}
            <time dateTime="2026-11-13">13 de novembro de 2026</time>
          </span>
        </div>
      </div>
      <div className="container legal-layout">
        <nav className="legal-index" aria-label="Nesta página">
          <strong>Nesta página</strong>
          {topics.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="legal-content">
          <section id="termos-de-uso" aria-labelledby="termos-heading">
            <h2 id="termos-heading">Termos de uso</h2>
            <p>
              Este site apresenta o acompanhamento da Mari Nutricionista e
              oferece um caminho para solicitar informações sobre consultas. Seu
              conteúdo é informativo e não substitui avaliação nutricional,
              diagnóstico ou orientação individualizada de um profissional de
              saúde.
            </p>
            <p>
              Resultados dependem das necessidades e condições de cada pessoa.
              Depoimentos identificados como ilustrativos são exemplos de
              apresentação, sem promessa de resultados. Utilize o site de forma
              lícita, respeitando seus conteúdos e sem comprometer seu
              funcionamento.
            </p>
          </section>
          <section id="agendamento" aria-labelledby="agendamento-heading">
            <h2 id="agendamento-heading">Agendamento e atendimento</h2>
            <p>
              Ao escolher atendimento online ou presencial, você pode continuar
              para o WhatsApp com uma mensagem pronta. Essa escolha fica apenas
              na memória da página; o site não conclui reservas, recebe
              pagamentos ou cria um cadastro de paciente.
            </p>
            <p>
              Horários, valores, condições de pagamento, cancelamento e
              remarcação são combinados diretamente com a profissional antes da
              confirmação da consulta. Quando o contato ainda não está
              disponível, o site informa que a agenda está em preparação.
            </p>
          </section>
          <section id="dados-pessoais" aria-labelledby="dados-heading">
            <h2 id="dados-heading">Dados pessoais</h2>
            <p>
              Os formulários de login e cadastro são demonstrativos e não enviam
              nem armazenam os dados preenchidos. O site não solicita exames ou
              informações de saúde. Se você iniciar uma conversa no WhatsApp, o
              número, o perfil e as informações que enviar serão utilizados para
              responder ao contato e tratar da solicitação de atendimento.
            </p>
            <p>
              Dados necessários para responder a uma solicitação de consulta
              podem ser tratados para procedimentos preliminares à contratação,
              a seu pedido. Informações de saúde exigem cuidados específicos e
              devem ser solicitadas apenas quando necessárias ao atendimento,
              com a informação sobre a finalidade e a hipótese legal aplicável.
            </p>
            <p>
              O provedor de hospedagem pode registrar dados técnicos, como
              endereço IP, horário de acesso e informações do navegador, para
              entregar e proteger o site. Os prazos de guarda dependem da
              finalidade do tratamento e das obrigações legais aplicáveis. Dados
              de uma consulta e registros profissionais possuem regras próprias,
              que devem ser informadas no atendimento.
            </p>
          </section>
          <section id="servicos-externos" aria-labelledby="servicos-heading">
            <h2 id="servicos-heading">Cookies e serviços externos</h2>
            <p>
              A implementação atual do site não utiliza cookies próprios de
              publicidade, ferramentas de análise de audiência ou armazenamento
              local para acompanhar visitantes. As fotografias são servidas pelo
              próprio site.
            </p>
            <p>
              As fontes são carregadas pelo Google Fonts. Esse carregamento gera
              uma conexão com o Google, que recebe dados técnicos da requisição,
              como o endereço IP. Ao abrir o WhatsApp, você passa a utilizar um
              serviço externo, sujeito às suas próprias condições e práticas de
              privacidade, inclusive quanto ao processamento em outros países.
            </p>
            <p>
              Consulte a{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                política de privacidade do Google
              </a>{" "}
              e a{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                política de privacidade do WhatsApp
              </a>{" "}
              para conhecer o tratamento realizado por esses serviços.
            </p>
          </section>
          <section id="seus-direitos" aria-labelledby="direitos-heading">
            <h2 id="direitos-heading">Seus direitos</h2>
            <p>
              A Lei Geral de Proteção de Dados Pessoais (LGPD) prevê direitos
              sobre suas informações. Conforme a situação e os requisitos
              legais, você pode solicitar confirmação do tratamento, acesso,
              correção, informação sobre compartilhamentos e portabilidade.
              Também pode pedir anonimização, bloqueio ou eliminação de dados,
              além de revogar consentimento quando essa for a base do
              tratamento. A eliminação pode estar sujeita a obrigações legais de
              conservação.
            </p>
            <p>
              Para exercer esses direitos, utilize o canal de contato da
              profissional. Pode ser necessário confirmar sua identidade para
              proteger seus dados. Você também pode consultar as orientações da{" "}
              <a
                href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados"
                target="_blank"
                rel="noopener noreferrer"
              >
                Autoridade Nacional de Proteção de Dados (ANPD)
              </a>
              .
            </p>
          </section>
          <section id="contato" aria-labelledby="contato-heading">
            <h2 id="contato-heading">Contato e atualizações</h2>
            <p>
              Para dúvidas sobre este documento ou sobre seus dados, fale com a
              Mari pelo contato disponibilizado no site. A identificação
              completa da profissional responsável e o canal de privacidade
              serão complementados antes da abertura da agenda.
            </p>
            <button
              className="button button-dark legal-contact"
              onClick={onContact}
            >
              Consultar contato da Mari
            </button>
            <p>
              Este documento pode ser atualizado para refletir mudanças no site
              e no atendimento. A data no início da página indica a versão
              vigente.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
