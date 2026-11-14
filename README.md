# Mari Nutricionista

Landing page em React 19, TypeScript, Vite, Tailwind CSS 4 e Framer Motion. Direção visual baseada no `design.md`.

## Executar

```sh
npm install
npm run dev
```

`npm run build` verifica os tipos e gera a versão de produção em `dist`. `npm run preview` serve essa versão localmente.

## Configurar o agendamento

Copie `.env.example` para `.env.local` e preencha `VITE_WHATSAPP_NUMBER` com o número real da profissional, incluindo país e DDD, apenas dígitos. Reinicie o servidor após a alteração. O modal permite escolher atendimento online ou presencial e abre o WhatsApp com uma mensagem pronta. Sem o número, informa que a agenda está em preparação; nenhum agendamento é enviado ou armazenado.

## Rotas

React Router 8 em modo declarativo: `/` apresenta a landing page e `/termos` reúne os termos de uso e a política de privacidade, com acesso pelo rodapé. React e React DOM permanecem na versão 19.3.1, já resolvida no lockfile original e compatível com o requisito do roteador (React 19.2.7 ou superior). Utilize Node 22.22 ou superior.

Na hospedagem de produção, configure o fallback das rotas da SPA para `index.html` (preservando arquivos estáticos existentes), para permitir acesso direto e atualização de `/termos`. O servidor de desenvolvimento e o preview do Vite já oferecem esse fallback.

## Conteúdo antes da publicação

- Substituir os depoimentos ilustrativos por relatos reais autorizados. Os exemplos estão explicitamente identificados na página.
- Revisar a apresentação, as modalidades, as áreas de atendimento e inserir nome completo, CRN e endereço reais conforme os dados da profissional.
- As imagens são fotografias de alimentos do Unsplash. Não há retrato atribuído à Mari.
- Informações de conteúdo ficam em `src/content.ts`; as seções e os controles têm componentes separados em `src/components`.
- Revisar os termos em `src/pages/Terms.tsx` com a identificação completa da responsável, canal de privacidade, provedor de hospedagem, prazos de retenção e práticas efetivas de tratamento antes da publicação. Atualizar a data do documento quando seu conteúdo mudar. O texto atual considera o site sem cadastro, cookies de publicidade ou analytics, com Google Fonts externo e contato pelo WhatsApp. Referência para os direitos: [ANPD — Titular de dados](https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados).

## Fotografias

Imagens do Unsplash utilizadas localmente: [salada](https://unsplash.com/photos/IGfIGP5ONV0), [ingredientes](https://unsplash.com/photos/fdlZBWIP0aM). Os arquivos locais em `public/images` podem ser substituídos sem alterar os componentes.
