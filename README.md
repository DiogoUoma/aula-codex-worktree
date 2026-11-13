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

## Conteúdo antes da publicação

- Substituir os depoimentos ilustrativos por relatos reais autorizados. Os exemplos estão explicitamente identificados na página.
- Revisar a apresentação, as modalidades, as áreas de atendimento e inserir nome completo, CRN e endereço reais conforme os dados da profissional.
- As imagens são fotografias de alimentos do Unsplash. Não há retrato atribuído à Mari.
- Informações de conteúdo ficam em `src/content.ts`; as seções e os controles têm componentes separados em `src/components`.

## Fotografias

Imagens do Unsplash utilizadas localmente: [salada](https://unsplash.com/photos/IGfIGP5ONV0), [ingredientes](https://unsplash.com/photos/fdlZBWIP0aM). Os arquivos locais em `public/images` podem ser substituídos sem alterar os componentes.
