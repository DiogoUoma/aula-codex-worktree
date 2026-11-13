---
name: react-seo
description: Analisa e implementa SEO em projetos React respeitando as versões instaladas, a arquitetura e as rotas existentes. Use apenas quando o usuário invocar $react-seo ou pedir explicitamente a habilidade react-seo; não ative em pedidos genéricos de SEO, React ou performance.
---

# React SEO

Melhore a capacidade de rastreamento e indexação do projeto, preservando sua interface, seus fluxos e a compatibilidade da stack. Não prometa posição nos resultados nem indexação garantida.

## Ativação e escopo

- Comando de ativação: `$react-seo`.
- Também aceite um pedido explícito para usar a skill `react-seo`. Uma referência incidental ao nome, sem solicitação de uso, não inicia alterações.
- Esta habilidade pertence somente ao projeto que contém esta pasta `.agents/skills/react-seo`. Não a instale globalmente nem copie configurações para outros projetos.
- Ao ser invocada para melhorar SEO, analise e implemente os ajustes sustentados pelas evidências; se o pedido for apenas uma auditoria, entregue o diagnóstico sem editar.
- A invocação não autoriza publicar, alterar infraestrutura, enviar URLs a buscadores ou configurar contas externas.

## Primeiro, entenda a versão e a codebase

Leia `package.json` antes de escolher APIs ou dependências. Confira o lockfile e, quando necessário, a árvore instalada para distinguir o intervalo declarado da versão efetivamente resolvida. Identifique:

- Versões de `react`, `react-dom`, framework, roteador, bundler, TypeScript, bibliotecas de head e ferramentas de build.
- Scripts e gerenciador de pacotes, renderização CSR/SSR/SSG/prerender e configuração de hospedagem disponível no repositório.
- Caminho base de publicação, origem pública, idiomas, fontes de conteúdo e geração de rotas.

Mapeie e leia todo o código de autoria do projeto: cada página, definição de rota, layout e componente, incluindo imports, componentes compartilhados, arquivos HTML, conteúdo, estilos, configuração e recursos públicos que afetam SEO. Exclua dependências, binários, caches e saídas geradas; examine seus metadados quando relevantes. Em uma codebase extensa, trabalhe por grupos mantendo um inventário de cobertura, sem chamar uma amostra de análise completa.

Monte um inventário por URL ou padrão de rota: arquivo responsável, conteúdo principal, renderização, público/indexável ou privado, título, descrição, canonical, status HTTP e links internos. Para rotas dinâmicas, examine a origem dos parâmetros e os estados de sucesso, ausência de conteúdo e erro. Âncoras de seções não são páginas distintas.

Antes de editar, apresente um diagnóstico curto com os problemas encontrados, a versão confirmada e a estratégia compatível escolhida. Diferencie bloqueadores de rastreamento, conteúdo/metadados e melhorias de experiência.

## Implemente conforme a arquitetura encontrada

Consulte documentação oficial atual e compatível com a versão instalada quando precisar confirmar APIs: use Context7 quando disponível ou a documentação oficial pelo navegador. Para critérios de busca e performance, consulte Google Search Central, Schema.org e web.dev conforme necessário. Não presuma que a documentação da versão mais recente se aplica a este projeto.

### Metadados e conteúdo

- Garanta títulos e descrições específicos e coerentes por página indexável. Evite duplicação entre o HTML base, componentes compartilhados e navegação entre rotas.
- Prefira a API de metadados do framework quando disponível. Em React sem framework, use recursos nativos somente se a versão instalada os suportar e eles forem adequados à renderização; em outras versões, preserve a solução compatível existente ou escolha uma alternativa com peer dependencies verificadas. Não adicione bibliotecas de head por padrão.
- Não trate atualizar `document.title` e metatags após a montagem como prova de que o HTML entregue contém metadados. Inspecione a resposta inicial e o DOM renderizado separadamente.
- Revise `lang`, viewport, charset, hierarquia semântica de títulos, landmark principal, texto acessível, alt de imagens e links rastreáveis com `href`. Preserve a linguagem e o sentido do conteúdo.
- Configure canonical absoluto com a origem pública real, respeitando trailing slash, base path e regras existentes de parâmetros. Não canonicalize indiscriminadamente páginas diferentes para a home.
- Use Open Graph e metadados de compartilhamento adequados, com URLs absolutas e imagens reais acessíveis. Previews sociais podem não executar JavaScript; avalie o HTML inicial.
- Use hreflang apenas se existirem versões de idioma reais, com relações recíprocas e canonicals coerentes.

### Rastreamento, renderização e sitemap

- Verifique os recursos existentes e implemente ou corrija `robots.txt` e sitemap XML no local servido pela stack. Inclua no sitemap somente URLs públicas, canônicas, indexáveis e válidas. Não inclua hashes, autenticação, páginas de erro, duplicatas ou rotas inexistentes.
- Para URLs dinâmicas, gere o sitemap a partir da fonte confiável de conteúdo. Use `lastmod` apenas quando houver data real de alteração; não use a data de cada build como substituto.
- Use a origem de produção confirmada em sitemap, canonical, robots e schema. Se ela não existir no repositório nem no pedido, conclua os ajustes independentes e peça o domínio antes de finalizar esses arquivos. Não publique localhost, domínio inventado ou placeholder como configuração válida.
- Revise links internos, status de erro, páginas 404, redirects, assets e comportamento de acesso direto às rotas. Uma tela de erro com HTTP 200 pode ser um soft 404; mudar o componente não corrige o status do servidor.
- `robots.txt` não é controle de acesso e bloquear crawling não equivale a remover uma URL do índice. Não bloqueie os assets necessários para renderizar conteúdo público. Preserve proteções de ambientes privados e de preview.
- Em SPA, confira se o conteúdo principal e os metadados dependem exclusivamente de JavaScript. Se isso limitar a indexação ou os previews necessários, avalie prerender/SSG/SSR compatível com o projeto. Implemente quando viável no escopo; uma migração de framework ou mudança de hospedagem exige alinhar essa ampliação com o usuário. Não declare a limitação resolvida apenas com metatags em runtime.

### Schema markup

- Escolha tipos e propriedades válidos no Schema.org que representem entidades comprovadas e conteúdo visível. Elegibilidade a rich results exige verificar também os requisitos atuais do Google para aquele tipo; schema válido não garante exibição especial.
- Gere JSON-LD serializável, sem duplicar entidades e com identificadores/URLs consistentes. Ao inserir dados em um elemento script, serialize e escape caracteres capazes de encerrar a tag, especialmente `<`; nunca concatene conteúdo não confiável.
- Use somente nome, credenciais, endereço, contatos, serviços e imagens reais confirmados. Não invente registro profissional, preços, avaliações, `aggregateRating`, prêmios ou resultados clínicos. Depoimentos fictícios ou ilustrativos não sustentam marcação de avaliações.
- Não adicione FAQ, breadcrumbs, negócio local ou outros tipos apenas para preencher campos; precisam corresponder ao conteúdo e à estrutura existentes. Verifique a elegibilidade atual de FAQ antes de alegar benefício em resultados de busca.

### Core Web Vitals e experiência

- Avalie LCP, INP e CLS, consultando metas atuais quando for reportá-las. Distinga medições de laboratório de dados reais de campo. Lighthouse isolado não comprova aprovação de Core Web Vitals nem mede INP de campo; TBT não é seu substituto.
- Priorize problemas observados: recurso do LCP, carregamento e dimensões de imagens, formatos responsivos, fontes, trabalho no main thread, scripts, bundles e mudanças de layout.
- Evite lazy loading no recurso principal do LCP; use carregamento tardio para imagens fora da primeira dobra quando apropriado. Preserve dimensões ou aspect ratio para reduzir deslocamentos.
- Preserve responsividade, acessibilidade, navegação, conversão e preferência por movimento reduzido. Não remova conteúdo útil, fotos ou funcionalidades apenas para aumentar uma nota sintética.

## Verifique o resultado

Execute os scripts de build, tipos e verificações pertinentes já disponíveis. Adicione dependências ou testes somente quando necessários ao ajuste e compatíveis com a stack.

Com um preview acessível e Playwright disponível, teste as rotas indexáveis e padrões dinâmicos representativos, incluindo navegação cliente e acesso direto. Verifique:

- HTML inicial versus DOM final, conteúdo principal, unicidade de título/descrição/canonical e atualização correta após transições entre páginas.
- Status HTTP e tipo de conteúdo de páginas, 404, robots e sitemap; URLs e XML válidos, sem domínios de desenvolvimento em artefatos de produção.
- JSON-LD parseável, coerente com o conteúdo e sem dados inventados. Validação sintática sozinha não prova validade semântica ou elegibilidade.
- Links, imagens, console, viewport mobile e desktop e regressões nos fluxos alterados.

Quando houver Lighthouse, medição de performance ou dados de campo disponíveis, compare antes/depois em condições equivalentes e informe ferramenta, rota, viewport e limites da evidência. Não instale ferramentas pesadas sem necessidade nem invente números se a medição estiver indisponível. Se um recurso externo não puder ser verificado, registre a limitação concreta.

Entregue um resumo das alterações com arquivos relevantes, rotas cobertas, versões respeitadas e verificações realmente executadas. Separe pendências de domínio, dados profissionais, renderização, hospedagem e publicação; não declare SEO concluído enquanto houver bloqueadores sem solução ou sem explicação. Atualizações locais de SEO não comprovam indexação nos buscadores.
