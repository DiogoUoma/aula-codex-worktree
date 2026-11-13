# Design System

Design system extraído visualmente do layout de referência de uma landing page para personal trainer/fitness.  
Os valores de cores, tamanhos, espaçamentos e radius são aproximados e devem ser refinados durante a implementação com inspeção no navegador.

---

## 1. Visão geral do estilo visual

O layout segue uma estética **premium, editorial e esportiva**, com forte contraste entre áreas claras, blocos verde-escuros e acentos em verde-limão neon. A interface mistura fotografia realista de academia com componentes minimalistas, criando uma sensação de marca moderna, confiante e focada em performance.

A linguagem visual transmite:

- **Energia e ação**, principalmente pelo uso do verde-limão em CTAs, preços e palavras-chave.
- **Confiança profissional**, por meio de bastante espaço em branco, grid organizado e fotografia de alta qualidade.
- **Sofisticação acessível**, sem excesso de efeitos, sombras pesadas ou elementos decorativos complexos.
- **Clareza comercial**, com hierarquia bem definida para hero, serviços, autoridade, depoimentos, planos, resultados e FAQ.

O contraste é um dos pilares do layout. O verde-escuro profundo cria áreas de impacto e sensação premium, enquanto o fundo branco mantém leitura limpa. O verde neon funciona como ponto focal para ações, números importantes e destaques de marca.

A hierarquia visual é construída com:

- Títulos grandes e densos.
- Palavras destacadas em verde neon.
- Cards claros com imagens na base.
- Seções amplas e bem espaçadas.
- CTAs pequenos em formato pill.
- Blocos escuros usados pontualmente para aumentar impacto.

A personalidade da marca é **direta, física, motivacional e especializada**, mas sem parecer agressiva. O design sugere um profissional de fitness experiente, confiável e moderno.

---

## 2. Paleta de cores

### Cores principais

| Nome semântico | HEX aproximado | Onde é usada | Função visual |
|---|---:|---|---|
| `background-page` | `#FFFFFF` | Fundo geral da página | Base limpa, amplia a sensação de espaço e melhora a leitura |
| `background-soft` | `#F5F7EF` | Cards de serviços, cards de preços claros, blocos secundários | Cria contraste suave sem pesar visualmente |
| `background-soft-warm` | `#EBE6DF` | Alguns fundos claros e áreas de suporte visual | Traz leve aquecimento para o layout sem sair da estética clean |
| `brand-dark` | `#063434` | Hero, footer, card escuro de preço, blocos institucionais | Cor premium principal da marca; gera profundidade e contraste |
| `brand-dark-strong` | `#04292A` | Sobreposições escuras, áreas mais densas do hero/footer | Aumenta contraste sobre imagens e reforça peso visual |
| `brand-dark-muted` | `#183132` | Texto decorativo em fundo escuro, sombras internas e overlays | Cria camadas sem competir com o conteúdo principal |
| `accent-lime` | `#B8FE22` | Palavra “fitness”, botões principais, preço em destaque, ícones ativos | Ponto focal da marca, energia, ação e conversão |
| `accent-lime-hover` | `#A6EA1F` | Hover de botões e elementos ativos | Mantém o CTA vivo com feedback perceptível |
| `text-primary` | `#0B1111` | Títulos, textos principais em fundo claro | Legibilidade alta e presença forte |
| `text-secondary` | `#5E6864` | Parágrafos, descrições, textos auxiliares | Reduz peso visual e melhora hierarquia |
| `text-inverse` | `#FFFFFF` | Textos em hero, footer e cards escuros | Contraste em fundos escuros |
| `text-inverse-muted` | `#C4CBC3` | Descrições sobre fundos escuros | Texto secundário sem perder legibilidade |
| `border-soft` | `#E5E9DE` | Bordas de cards, botões secundários e FAQ | Separação discreta entre componentes |
| `border-dark-soft` | `#244B49` | Divisores em blocos escuros | Delimitação sutil sem quebrar a estética premium |

### Cores de botões

| Tipo | Fundo | Texto | Uso |
|---|---:|---:|---|
| Primário | `#B8FE22` | `#061514` | CTA principal, compra, agendamento, “book a demo” |
| Secundário claro | `#FFFFFF` ou transparente | `#061514` | Ações secundárias em fundo claro |
| Secundário escuro | `#063434` | `#FFFFFF` | Botões em cards claros quando precisa de maior contraste |
| Ícone circular | `#061514` | `#FFFFFF` | Setas, ações compactas e botões anexos ao CTA |

### Estados visuais

| Estado | Cor aproximada | Aplicação |
|---|---:|---|
| Hover primário | `#A6EA1F` | Botão lime com leve escurecimento |
| Active primário | `#8FD31A` | Pressionado/clicado |
| Disabled | `#DDE4D3` | Botões inativos |
| Texto disabled | `#8C968D` | Texto em componentes desabilitados |
| Focus ring | `#B8FE22` com opacidade 35% | Inputs, botões e links acessíveis |

---

## 3. Tipografia

A fonte do layout não pode ser identificada com precisão apenas pela imagem. O estilo visual sugere uma sans-serif moderna, geométrica e limpa.

### Fonte recomendada

Use uma destas opções:

```css
font-family: "Inter", "Satoshi", "Manrope", "Geist", system-ui, sans-serif;
```

A recomendação principal é **Satoshi** ou **Manrope** para uma aparência mais editorial/premium. **Inter** ou **Geist** funcionam melhor quando o foco for implementação prática e legibilidade digital.

### Hierarquia tipográfica

| Nível | Tamanho desktop | Tamanho mobile | Peso | Line-height | Letter-spacing | Uso recomendado |
|---|---:|---:|---:|---:|---:|---|
| `display/hero` | 56–72px | 40–48px | 800 | 0.92–1.0 | -0.04em | Título principal do hero |
| `heading-xl` | 42–52px | 32–38px | 750–800 | 1.0–1.08 | -0.035em | Títulos de seções principais |
| `heading-lg` | 32–40px | 28–32px | 700–800 | 1.08–1.15 | -0.03em | Blocos de autoridade, CTA e preço |
| `heading-md` | 24–28px | 22–26px | 700 | 1.15–1.25 | -0.02em | Títulos de cards e subseções |
| `heading-sm` | 18–22px | 18–20px | 700 | 1.25 | -0.01em | Títulos internos de cards |
| `body-lg` | 17–18px | 16–17px | 400–500 | 1.55–1.65 | 0 | Parágrafos de destaque |
| `body-md` | 15–16px | 15–16px | 400–500 | 1.55–1.7 | 0 | Texto padrão |
| `body-sm` | 13–14px | 13–14px | 400–500 | 1.45–1.6 | 0 | Descrições, cards, FAQ |
| `caption` | 11–12px | 11–12px | 600–700 | 1.3–1.4 | 0.02em | Labels, microtextos e tags |
| `button` | 13–14px | 13–14px | 700 | 1 | 0 | CTAs e ações |
| `nav` | 12–13px | 13–14px | 600 | 1 | 0 | Links do menu |

### Observações de uso

- Títulos devem usar **peso alto e tracking negativo leve**.
- Parágrafos devem ser curtos, com largura limitada para leitura confortável.
- O destaque em verde-limão deve ser usado em palavras específicas, não em frases longas.
- Textos sobre fotos precisam de overlay escuro suficiente para manter contraste.
- Evite fontes muito condensadas ou muito arredondadas. O layout pede uma sans-serif moderna, mas sóbria.

---

## 4. Espaçamentos

O layout usa bastante respiro, com seções amplas e cards compactos. A sensação geral vem da combinação de grandes espaços verticais entre seções e paddings internos moderados nos componentes.

### Escala de espaçamento

| Token | Valor aproximado | Uso |
|---|---:|---|
| `space-2xs` | 4px | Micro gaps, ícones pequenos, ajustes finos |
| `space-xs` | 8px | Espaço entre label e título, itens de lista compactos |
| `space-sm` | 12px | Gap interno de botões, pequenos agrupamentos |
| `space-md` | 16px | Padding de cards menores, gaps entre textos |
| `space-lg` | 24px | Padding padrão de cards, gap entre blocos internos |
| `space-xl` | 32px | Separação entre título e grupos de cards |
| `space-2xl` | 48px | Espaço entre blocos dentro da mesma seção |
| `space-3xl` | 64px | Padding vertical de seções menores |
| `space-4xl` | 88px | Espaçamento entre seções principais |
| `space-5xl` | 120px | Seções premium/hero em desktop |

### Aplicações práticas

| Elemento | Espaçamento aproximado |
|---|---:|
| Padding lateral do container desktop | 40–64px |
| Padding lateral do container tablet | 32px |
| Padding lateral do container mobile | 20px |
| Espaçamento entre seções | 88–120px desktop / 64–80px mobile |
| Padding interno de cards de serviço | 20–24px |
| Padding interno de cards de preço | 28–32px |
| Padding interno de FAQ | 18–22px horizontal, 14–18px vertical |
| Gap entre cards em grid | 24px |
| Gap entre título e parágrafo | 12–16px |
| Gap entre parágrafo e CTA | 24px |
| Gap entre header de seção e conteúdo | 32–48px |
| Altura visual do hero | 560–680px desktop |
| Padding interno do hero | 72–96px vertical / 64px horizontal |

### Largura máxima

| Contexto | Valor aproximado |
|---|---:|
| Container principal | 1120–1200px |
| Container largo para galeria | 1280–1440px |
| Texto de parágrafo | 520–620px |
| FAQ | 620–760px |
| Cards de preço | 320–360px cada |

---

## 5. Grid e layout

### Estrutura geral

O layout é construído sobre um grid centralizado, com container máximo e seções empilhadas verticalmente. O uso de colunas varia conforme a seção:

- Header: logo à esquerda, navegação central, CTA à direita.
- Hero: imagem de fundo full-card com texto alinhado à esquerda e pessoa à direita.
- Serviços: carrossel ou grid horizontal de cards.
- Sobre: grid de 2 colunas, imagem à esquerda e texto à direita.
- Missão/vídeo: bloco de 2 colunas, imagem/vídeo à esquerda e painel escuro à direita.
- Depoimentos: texto à esquerda e avatares em composição visual à direita.
- Preços: 3 cards centralizados, com card do meio em destaque.
- Transformações: galeria em grid horizontal com imagens.
- FAQ: coluna única centralizada.
- Footer: grid de 4 colunas.

### Grid recomendado

```css
.container {
  width: min(100% - 40px, 1180px);
  margin-inline: auto;
}

.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;
}
```

### Desktop

- Usar container de 1120–1200px.
- Hero em card grande com radius alto.
- Seções principais com `padding-block: 88px`.
- Grids de 2 colunas para conteúdo institucional.
- Cards de preço em 3 colunas.
- Footer em 4 colunas.
- Galerias podem exceder levemente a largura visual para criar sensação editorial.

### Tablet

- Container com 32px de margem lateral.
- Grids de 3–4 cards podem virar 2 colunas.
- Seções com imagem + texto devem virar 1 coluna ou 40/60 dependendo do espaço.
- Header pode manter navegação se houver largura, mas deve preparar versão compacta.

### Mobile

- Container com 20px de margem lateral.
- Header deve virar menu compacto.
- Hero deve manter texto no topo e imagem/figura com overlay escuro suficiente.
- Cards de serviço em carrossel horizontal ou 1 coluna.
- Bloco sobre, missão, depoimentos e preços devem virar coluna única.
- FAQ permanece centralizado em largura total.
- Footer deve virar 1 ou 2 colunas.

### Padrões de alinhamento

- Conteúdo principal alinhado à esquerda.
- Títulos de seções podem alternar entre esquerda e centro, dependendo do contexto.
- Cards devem manter alinhamento interno à esquerda.
- Preços devem ter destaque visual forte no valor.
- Elementos circulares de ação devem ficar próximos ao CTA, não isolados.

---

## 6. Bordas e radius

O layout usa radius alto, principalmente em imagens e cards. Isso suaviza o visual sem perder a sensação premium.

| Elemento | Radius aproximado |
|---|---:|
| Hero card | 20–28px |
| Cards de serviço | 14–18px |
| Cards de preço | 18–22px |
| Imagens grandes | 18–24px |
| Imagens pequenas/galeria | 14–18px |
| Botões pill | 999px |
| Botões circulares | 50% |
| FAQ items | 10–14px |
| Inputs/footer | 10–14px |
| Footer/section escura | 0px ou 24px quando em bloco interno |

### Bordas

| Uso | Valor |
|---|---|
| Borda padrão clara | `1px solid #E5E9DE` |
| Borda sobre fundo escuro | `1px solid rgba(255,255,255,0.12)` |
| Borda de botão secundário | `1px solid rgba(6, 52, 52, 0.18)` |
| Divisores internos | `1px solid rgba(0,0,0,0.06)` |

### Observações

- Evite bordas muito escuras em cards claros.
- Use radius consistente entre imagens e cards.
- Botões devem ser bem arredondados para manter o padrão pill.
- Cards escuros devem usar borda quase invisível ou nenhuma borda.

---

## 7. Sombras e profundidade

O layout é predominantemente **flat premium**, com profundidade criada por contraste, fotografia, sobreposição escura e radius, não por sombras fortes.

### Sombra recomendada

```css
--shadow-soft: 0 10px 30px rgba(6, 52, 52, 0.08);
--shadow-card-hover: 0 16px 40px rgba(6, 52, 52, 0.12);
--shadow-dark: 0 24px 60px rgba(0, 0, 0, 0.24);
```

### Onde aplicar

- Cards de preço em hover.
- Cards de serviço em hover.
- Dropdowns ou menus mobile.
- Imagens grandes apenas se precisarem se destacar do fundo.

### Onde evitar

- Hero principal: a imagem e o overlay já criam profundidade.
- Footer: manter chapado e sólido.
- FAQ: usar borda e background, não sombra pesada.
- Galeria de imagens: não aplicar sombra forte para não poluir.

### Overlays e gradientes

O hero usa uma camada escura sobre fotografia para garantir contraste no texto.

```css
.hero-overlay {
  background:
    linear-gradient(
      90deg,
      rgba(4, 41, 42, 0.92) 0%,
      rgba(4, 41, 42, 0.74) 42%,
      rgba(4, 41, 42, 0.20) 100%
    );
}
```

Também há uso de texto decorativo grande em fundo escuro, com baixa opacidade:

```css
.decorative-text {
  color: rgba(255, 255, 255, 0.08);
}
```

---

## 8. Botões e CTAs

Os botões têm formato pill, são compactos e diretos. A interface usa bastante combinação entre texto curto e ícone circular de seta.

### Botão primário

| Propriedade | Valor |
|---|---|
| Background | `#B8FE22` |
| Texto | `#061514` |
| Padding | `12px 18px` |
| Radius | `999px` |
| Fonte | 13–14px, peso 700 |
| Line-height | 1 |
| Ícone opcional | Círculo escuro de 28–32px com seta branca |
| Hover | Background `#A6EA1F`, leve translateY(-1px) |
| Active | Background `#8FD31A`, translateY(0) |
| Disabled | Background `#DDE4D3`, texto `#8C968D`, cursor not-allowed |

Uso recomendado: ações principais como agendar, comprar, enviar mensagem, ver planos.

```css
.button-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 42px;
  padding: 12px 18px;
  border-radius: 999px;
  border: 0;
  background: #B8FE22;
  color: #061514;
  font-size: 14px;
  font-weight: 700;
}
```

### Botão secundário claro

| Propriedade | Valor |
|---|---|
| Background | `#FFFFFF` ou transparente |
| Texto | `#061514` |
| Borda | `1px solid rgba(6,52,52,0.18)` |
| Padding | `11px 18px` |
| Radius | `999px` |
| Hover | Background `#F5F7EF` |
| Uso | Ações de menor prioridade em áreas claras |

### Botão secundário escuro

| Propriedade | Valor |
|---|---|
| Background | `#063434` |
| Texto | `#FFFFFF` |
| Padding | `12px 18px` |
| Radius | `999px` |
| Hover | Background `#04292A` |
| Uso | Cards claros que precisam de contraste mais forte |

### Botão ghost/link

| Propriedade | Valor |
|---|---|
| Background | Transparente |
| Texto | `#061514` ou `#FFFFFF` no escuro |
| Padding | `8px 0` |
| Radius | 0 |
| Hover | Sublinhado curto ou mudança para `#B8FE22` |
| Uso | Navegação, links de footer, ações discretas |

### Botões circulares

| Propriedade | Valor |
|---|---|
| Tamanho | 28–36px |
| Background claro | `#FFFFFF` |
| Background escuro | `#061514` |
| Ícone | 12–16px |
| Radius | 50% |
| Uso | Setas de carrossel, play/pause, ação anexada ao CTA |

---

## 9. Cards e blocos de conteúdo

### Cards de serviço

| Propriedade | Valor |
|---|---|
| Background | `#F5F7EF` |
| Padding | 20–24px |
| Radius | 16–18px |
| Borda | `1px solid rgba(6,52,52,0.06)` |
| Sombra | Nenhuma por padrão |
| Imagem | Na parte inferior, full width, radius 12–14px |
| Hover | Leve elevação, borda mais visível, imagem com zoom sutil |

Hierarquia interna:

1. Título pequeno em negrito.
2. Descrição curta.
3. Imagem relacionada.
4. Botão circular pequeno no canto inferior direito da imagem.

### Card de preço claro

| Propriedade | Valor |
|---|---|
| Background | `#F5F7EF` |
| Padding | 28–32px |
| Radius | 20px |
| Borda | `1px solid #E5E9DE` |
| Sombra | Opcional, muito suave |
| Preço | Grande, preto, peso 800 |
| Lista | Ícones de check pequenos em verde escuro ou lime |

### Card de preço destacado

| Propriedade | Valor |
|---|---|
| Background | `#063434` |
| Texto | `#FFFFFF` |
| Preço | `#B8FE22` |
| Radius | 20px |
| Borda | `1px solid rgba(255,255,255,0.10)` |
| CTA | Botão claro ou contorno claro |
| Destaque | Tag lime no topo |

Este card deve ser visualmente dominante, usado para o plano recomendado.

### Bloco institucional com imagem

| Propriedade | Valor |
|---|---|
| Layout | 2 colunas |
| Imagem | Radius 20–24px |
| Texto | Alinhado à esquerda |
| Destaque numérico | Verde-limão, grande, peso 800 |
| Lista | Ícones pequenos e texto compacto |

### FAQ

| Propriedade | Valor |
|---|---|
| Background item | `#F5F7EF` ou `#FFFFFF` |
| Radius | 10–14px |
| Borda | `1px solid #E5E9DE` |
| Padding | 16–20px |
| Título | 14–15px, peso 700 |
| Ícone | `+` ou `x`, alinhado à direita |
| Estado aberto | Mais altura, texto secundário abaixo |

---

## 10. Imagens, ícones e elementos visuais

### Imagens

As imagens são fundamentais para o layout. O tratamento deve seguir uma linha realista, fitness e premium.

Diretrizes:

- Usar fotos reais de treino, academia, coaching e transformação.
- Priorizar iluminação dramática ou natural com contraste moderado.
- Aplicar radius consistente entre 14px e 24px.
- Evitar imagens muito saturadas ou com aparência genérica de banco de imagem.
- Em áreas com texto sobre imagem, aplicar overlay escuro.
- Manter enquadramentos com pessoas em ação, não apenas poses estáticas.
- Usar proporções consistentes por seção.

Proporções recomendadas:

| Uso | Proporção |
|---|---|
| Hero | 16:9 ou 21:9 em desktop |
| Cards de serviço | 4:3 ou 3:2 |
| Imagem institucional | 4:5 |
| Vídeo/bloco missão | 16:9 |
| Galeria de resultados | 3:4 ou 4:5 |

### Ícones

O layout usa ícones pequenos, simples e funcionais.

Diretrizes:

- Estilo outline ou filled minimalista.
- Tamanho entre 14px e 18px.
- Em botões circulares, usar setas simples.
- Para listas de benefícios, usar check ou ícone circular pequeno.
- Em redes sociais, usar ícones sólidos em lime ou branco.
- Evitar ícones complexos, coloridos ou ilustrativos demais.

### Avatares

Os avatares dos depoimentos aparecem em composição orgânica, com círculos de tamanhos variados.

Diretrizes:

- Usar formato circular.
- Tamanhos entre 48px e 88px.
- Algumas imagens podem ser em escala de cinza para reduzir ruído visual.
- Avatar ativo/destaque pode usar borda ou fundo lime.
- Distribuição pode ser assimétrica, mas precisa parecer intencional.

### Elementos decorativos

O layout usa decoração de forma discreta:

- Texto gigante em baixa opacidade no hero e blocos escuros.
- Ícones circulares pequenos em CTAs.
- Tags pequenas para destacar planos ou categorias.
- Gradientes escuros sobre imagens.
- Fundo verde-escuro sólido em footer e blocos de missão.

Evite:

- Muitos glows.
- Sombras coloridas exageradas.
- Gradientes muito chamativos.
- Elementos 3D.
- Ilustrações que conflitem com a fotografia realista.

---

## Tokens CSS sugeridos

```css
:root {
  /* Colors */
  --color-background-page: #FFFFFF;
  --color-background-soft: #F5F7EF;
  --color-background-soft-warm: #EBE6DF;

  --color-brand-dark: #063434;
  --color-brand-dark-strong: #04292A;
  --color-brand-dark-muted: #183132;

  --color-accent-lime: #B8FE22;
  --color-accent-lime-hover: #A6EA1F;
  --color-accent-lime-active: #8FD31A;

  --color-text-primary: #0B1111;
  --color-text-secondary: #5E6864;
  --color-text-inverse: #FFFFFF;
  --color-text-inverse-muted: #C4CBC3;

  --color-border-soft: #E5E9DE;
  --color-border-dark-soft: #244B49;

  /* Typography */
  --font-sans: "Satoshi", "Manrope", "Inter", "Geist", system-ui, sans-serif;

  --font-size-display: clamp(2.5rem, 5vw, 4.5rem);
  --font-size-h1: clamp(2.25rem, 4vw, 3.5rem);
  --font-size-h2: clamp(2rem, 3vw, 3rem);
  --font-size-h3: clamp(1.5rem, 2vw, 2rem);
  --font-size-body: 1rem;
  --font-size-small: 0.875rem;
  --font-size-caption: 0.75rem;

  /* Spacing */
  --space-2xs: 4px;
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 88px;
  --space-5xl: 120px;

  /* Layout */
  --container-md: 960px;
  --container-lg: 1180px;
  --container-xl: 1320px;
  --container-padding-desktop: 48px;
  --container-padding-tablet: 32px;
  --container-padding-mobile: 20px;

  /* Radius */
  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-pill: 999px;
  --radius-full: 50%;

  /* Shadows */
  --shadow-soft: 0 10px 30px rgba(6, 52, 52, 0.08);
  --shadow-card-hover: 0 16px 40px rgba(6, 52, 52, 0.12);
  --shadow-dark: 0 24px 60px rgba(0, 0, 0, 0.24);
}
```

---

## Componentes base recomendados

### Container

```css
.container {
  width: min(100% - 40px, var(--container-lg));
  margin-inline: auto;
}

@media (max-width: 768px) {
  .container {
    width: calc(100% - 40px);
  }
}
```

### Section

```css
.section {
  padding-block: var(--space-4xl);
}

@media (max-width: 768px) {
  .section {
    padding-block: var(--space-3xl);
  }
}
```

### Card

```css
.card {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border-soft);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
}

.card-interactive {
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease;
}

.card-interactive:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-card-hover);
  border-color: rgba(6, 52, 52, 0.16);
}
```

### Hero

```css
.hero {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-xl);
  min-height: 620px;
  background: var(--color-brand-dark);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 560px;
  padding: 88px 64px;
}

.hero-title {
  font-size: var(--font-size-display);
  line-height: 0.95;
  letter-spacing: -0.04em;
  font-weight: 800;
  color: var(--color-text-inverse);
}

.hero-title .accent {
  color: var(--color-accent-lime);
}
```

---

## Regras de consistência

1. Use o verde-limão apenas para ações, destaques numéricos e palavras-chave.
2. Não use mais de uma área verde-escura muito próxima da outra sem respiro branco entre elas.
3. Cards claros devem ser suaves, com borda discreta e sombra mínima.
4. Imagens precisam ter tratamento consistente de radius e proporção.
5. Títulos devem ser curtos, fortes e com peso alto.
6. Parágrafos devem ser compactos e com contraste secundário.
7. O card de preço recomendado deve ser o único card escuro na seção de planos.
8. Botões devem manter formato pill em toda a interface.
9. Evite excesso de animações; use movimentos sutis de hover.
10. A interface deve parecer fitness premium, não aplicativo genérico de academia.
