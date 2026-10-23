# Design System: Mamut Trekking — superfície de transfer

## Overview

**Direção registrada: “Mamut road service”.** A página de transfer combina fotografia editorial de paisagem, geometria de rotas e um único fluxo protegido de solicitação. Ela pertence ao sistema visual existente da Mamut: não cria uma paleta, tipografia, escala de espaçamento ou biblioteca paralela.

A experiência alterna descoberta e decisão. O conteúdo explica o serviço em blocos editoriais amplos; os pontos de ação abrem o mesmo planejador; o pedido termina no WhatsApp, onde a equipe confirma valor e embarque. Preços na página são estimativas iniciais, nunca disponibilidade ou confirmação em tempo real.

Características duráveis:

- superfícies e texto sempre usam aliases semânticos que se resolvem em light/dark;
- fotografias da Chapada e traços de rota dão contexto sem competir com a tarefa;
- o conjunto de destaque do hero combina recorte do veículo, mosaico de viagem, faixa de confiança e conversão com uso concentrado do âmbar canônico `#f59e0b`;
- o planejador é um modal focado que se apresenta como bottom sheet no mobile;
- a hierarquia de CTA separa “montar o pedido” de “falar diretamente no WhatsApp”;
- a interface não recebe pagamento nem promete confirmação imediata.

## Colors

A superfície de transfer consome apenas os tokens semânticos de `src/app/globals.css` e os presets de `src/design/tokens.ts`. Componentes novos devem usar utilitários como `bg-surface`, `text-content`, `border-line` e `bg-brand`; não devem referenciar `gray-*`, `primary-*` ou `secondary-*` diretamente.

| Alias semântico | Light | Dark | Uso na superfície |
| --- | --- | --- | --- |
| `--surface` | `#fafafa` | `#1c1c1c` | fundo da página e controles |
| `--surface-muted` | `#f4f4f4` | `#1f1f1f` | faixas alternadas, busca e modal |
| `--surface-raised` | `#e8e8e8` | `#303030` | estados de hover, chips e resumo de preço |
| `--content` | `#1c1c1c` | `#fafafa` | texto principal |
| `--content-secondary` | `#444444` | `#d4d4d4` | texto explicativo |
| `--content-muted` | `#808080` | `#808080` | rótulos e apoio |
| `--line` | `#e8e8e8` | `#303030` | divisores e bordas discretas |
| `--line-strong` | `#ababab` | `#5c5c5c` | limites de campos, painéis e modal |
| `--line-contrast` | `#1c1c1c` | `#fafafa` | outlines de alto contraste |
| `--brand` | `#f59e0b` | `#f59e0b` | CTA primário e estado selecionado desta superfície |
| `--brand-hover` | `#d97706` | `#d97706` | hover do CTA primário; derivação funcional da mesma família |
| `--brand-soft` | mistura 18% | mistura 18% | fundos de ícones e seleção suave sobre a superfície atual |
| `--brand-strong` | `#b45309` | `#f59e0b` | texto e ícones com contraste adequado ao tema |
| `--brand-ink` | `#0a0a0a` | `#fafafa` | conteúdo sobre `brand-soft` |
| `--brand-contrast` | `#0a0a0a` | `#0a0a0a` | conteúdo sobre o âmbar-base; contraste AA |
| `--accent` | `#f59e0b` | `#f59e0b` | ênfase editorial, marcadores e preço |

Sobre fotografia, permanecem invariantes `--on-media: #ffffff`, `--on-media-soft: #f8f5f0`, `--on-media-muted: #e2dfdc` e `--media-backdrop: #101716`; nesta superfície `--brand-on-media` usa o mesmo âmbar canônico. A arte linear usa `--accent-line-art: #f59e0b`, eliminando o antigo amarelo paralelo. Os mesmos SVGs de rota servem aos dois temas; `.transfer-route-art` e `.transfer-route-map` recebem inversão no tema escuro para manter legibilidade. Na rota de transfer, header, menus associados e footer também usam o preto institucional invariável com texto `on-media`; ações, hovers e estados ativos usam o mesmo âmbar `highlight`. Esse remapeamento é limitado por `body:has(.transfer-page)` e não altera o chrome das demais páginas.

## Typography

A página reutiliza `Heading` e `Text`: Mergo (`font-display`) para títulos e números de destaque; Brutal Milk No 2 (`font-body`) para corpo, rótulos e controles. Os presets existentes `hero`, `section`, `card` e `quote` definem a hierarquia responsiva. Valores, durações e contagens usam `tabular-nums`.

O preço grande do hero (`clamp(54px, 8vw, 74px)`) é uma composição específica dessa superfície, não um novo token tipográfico. Textos longos permanecem leves, com tom `secondary` ou `onMediaSoft`, e limitados por largura para leitura editorial.

## Layout

A sequência editorial da página é estável:

1. hero com badges de contexto, promessa, busca de origem/destino e arte de rota;
2. card composto inspirado no Figma, com recorte do veículo em sobreposição, mosaico de viagem, sinais de confiança, estimativa em laranja e duas saídas de ação;
3. processo em quatro passos;
4. comparação visual entre “somente trajeto” e “trajeto + aventuras”;
5. benefícios ao lado de um resumo de reserva sticky apenas em desktop;
6. explorador de rotas com mapa quadrado à esquerda e lista vertical à direita;
7. painel em fotografia monocromática com formulário compacto;
8. carrossel de paradas opcionais no caminho;
9. FAQ;
10. CTA de mensagem compacto, sem ilustração de fundo, e prova social compartilhada com a home.

O esqueleto usa `Section` e `Container` do sistema, normalmente com o grid de `1216px` e respiro `tall` (`py-20 lg:py-[108px]`). Seções `surface="muted"` podem receber filetes `border-line` para marcar mudança de assunto.

No mobile, controles e CTAs ocupam a largura disponível, mas a busca do hero mantém origem e destino lado a lado para reduzir altura; grids editoriais voltam a uma coluna; o mapa esquemático precede a lista de rotas e preserva apenas linhas que terminam em destinos reais. Depois que o hero sai da viewport, um dock de reserva com safe area aparece junto à base e abre o mesmo planejador. No desktop, o modal se centraliza e o resumo de reserva pode ficar sticky em `top-25`.

## Elevation & Depth

A profundidade combina camadas tonais, bordas e os tokens já existentes:

- `shadow-chip`: `0 1px 2px rgba(0, 0, 0, 0.08)` para cards compactos e controles;
- `shadow-card`: `0 18px 48px rgba(0, 0, 0, 0.08)` para o resumo de reserva;
- `shadow-float`: `0 18px 48px rgba(0, 0, 0, 0.18)` para o grande card de mídia do hero;
- `shadow-popover`: `0 8px 24px rgba(0, 0, 0, 0.18)` para o modal;
- `shadow-image-outline`: filete óptico de 1px que alterna preto/branco a 10% conforme o tema.

Não generalize o `drop-shadow` do recorte do jeep como elevação de componentes; ele pertence à composição dessa imagem.

## Shapes

A linguagem mantém os raios existentes: controles em `12px`, chips em `20px`, cards em `24px`, cards grandes em `28px`, painéis em `32px`, painéis grandes em `40px` e CTAs/seletores em pílula (`9999px`). Painéis de mídia recortam a fotografia; listas de campos e opções compartilham uma borda externa e divisores internos.

O bottom sheet usa `rounded-card-lg`; cards editoriais maiores usam `rounded-panel` ou `rounded-panel-lg`. Não introduza raios específicos para transfer.

## Components

### Hero e card composto

O hero aproxima a implementação da composição de referência do Figma sem criar uma linguagem paralela: headline centralizada com ênfase em `accent`, busca em superfície clara e grande card escuro `on-media`. O recorte de `hero-jeep.png` atravessa o limite superior do card; abaixo dele, uma faixa translúcida reúne os quatro sinais de confiança e a área principal equilibra mosaico de três fotografias com estimativa e ações.

A ênfase do título usa `--headline-accent`: `highlight-strong` no tema claro para preservar contraste e `highlight` no escuro. A cor-base `#f59e0b` é a única referência cromática para destaques, checks, preço, arte linear e ações; hover, fundo suave e texto são derivações funcionais dessa mesma família. A página inteira remapeia `brand` para o destaque canônico, eliminando a disputa visual com o verde institucional nesta linha de serviço.

### Busca do hero

`TransferHeroSearch` é uma entrada resumida, não um formulário completo. Origem e destino abrem diretamente a subview correspondente do planejador; a ação circular/total no fim abre a reserva completa. A seleção feita no modal retorna para a busca por evento e atualiza os dois rótulos. Em telas pequenas, origem e destino formam uma linha compacta de duas colunas com rótulos curtos e a ação final ocupa toda a largura logo abaixo.

### Modal e bottom sheet de reserva

`TransferBookingModal` reutiliza `MorphingModal` com `placement="bottom"`, largura máxima `max-w-155` e três views: `booking`, `origin` e `destination`. No mobile, fica ancorado à base com margem de safe area e um indicador visual; em `lg`, é centralizado. O painel tem altura máxima `calc(100dvh - 64px)`, scroll interno, `bg-surface-muted`, `border-line-strong`, `rounded-card-lg` e `shadow-popover`.

`TransferMobileBookingDock` reaproveita o padrão da página Vale do Pati: fica oculto enquanto o hero está presente, aparece somente abaixo de `lg` depois que o hero cruza o topo da viewport e oferece estimativa mais CTA direto. O dock não cria um segundo formulário; dispara o evento do `TransferBookingModal` e preserva a área segura do dispositivo.

A view principal agrupa rota, data opcional, viajantes de 1 a 8, formato em grupo/privativo, inclusão opcional de aventura e estimativa. As listas de local são agrupadas por região; o local já escolhido no outro campo fica indisponível; escolher uma opção retorna à view principal. Apenas uma rota conhecida, em grupo e sem aventura mostra preço por pessoa; os demais casos exibem “Orçamento personalizado”.

O fechamento acontece por botão explícito, backdrop ou `Escape`. Ao abrir, o foco vai ao primeiro elemento acionável; `Tab` fica contido no painel; ao fechar, o foco retorna ao acionador. O `MorphingModal` bloqueia o scroll do `body`, usa `role="dialog"`, `aria-modal="true"` e liga o nome acessível ao título por `aria-labelledby`.

### Card de orçamento

`TransferQuoteCard` é um resumo funcional, não uma simulação estática. Os controles em pílula alternam entre “Em grupo” e “Privativo”, permitem ativar ou remover “+ aventura”, expõem o estado com `aria-pressed` e atualizam preço, descrição, categoria e texto do CTA no próprio card. Todo estado selecionado usa o âmbar canônico (`brand`) com texto preto de alto contraste; `accent` aponta para a mesma cor-base nos destaques editoriais.

Ao acionar o CTA, o card envia `format` e `adventure` para o mesmo `TransferBookingModal`. O modal aplica esses valores ao abrir, de modo que a escolha feita no card chega pré-preenchida no planejador e segue para a mensagem final de WhatsApp.

### Explorador de rotas

O explorador mantém um mapa esquemático quadrado no mobile e, no desktop, estende o mapa até a mesma altura da lista completa de rotas à direita. Destinos e linhas são selecionáveis; foco ou hover em um destino destaca simultaneamente o trajeto e a linha correspondente. O halo âmbar acompanha o ponteiro atrás da camada de vidro, sem substituir a informação das rotas. Apenas linhas com destino rotulado permanecem no SVG; nós ativos, trajeto, faixa “Rota em destaque” e hover dos botões usam o token editorial `highlight`, compartilhado com a arte linear e o restante dos destaques.

A lista substitui numeração por ícones de veículo integrados ao início de cada card. Os cards de rota usam `surface-muted`, com borda `line-strong` e conteúdo semântico, acompanhando o cinza padrão do design system em light e dark; o botão permanece preto e recebe amarelo somente em `hover`/`active`. A informação operacional deixa de ser uma frase corrida: duração aproximada ocupa um selo compacto com relógio e notação `~`, com rótulo acessível por extenso, enquanto o preço usa Mergo, `tabular-nums` e `brand-strong`, com “a partir de” e “por pessoa” em apoio. Em telas menores o mapa precede a lista; nenhuma informação depende apenas da geometria cartográfica.

### Formulário compacto e carrossel de paradas

`TransferCompactForm` fica sobre um painel fotográfico em preto e branco. Ele reduz o início do pedido a trajeto e formato, repassando a escolha para o planejador completo. O contraste vem de uma camada escura sobre a imagem e de um card semântico `surface-raised`, que acompanha light/dark. O painel usa altura natural no mobile; conteúdo e formulário permanecem no fluxo, sem recorte por altura fixa.

`TransferStopsCarousel` reaproveita o vocabulário e a mesma quantidade de sete opções da home: trilho horizontal com snap, controles anterior/próximo, arraste por mouse, indicadores de posição, `MediaCard`, badges sobre mídia e CTA primário. A rolagem nativa continua disponível por toque e trackpad; duas lâminas formam o enquadramento desktop e o encerramento oferece acesso direto a todas as aventuras.

O FAQ usa itens independentes em duas colunas no desktop e uma coluna no mobile. `TransferFaqList` replica a mecânica consolidada do Vale do Pati: um painel aberto por vez, transição por `grid-template-rows`, foco visível e correção de scroll ao alternar perguntas.

### CTA de mensagem e prova social

`MessageCta` preserva a estrutura aberta de mensagem em uma faixa compacta, sem ilustração de fundo ou caixa elevada adicional. A seção final de confiança não mantém uma implementação própria: a página renderiza `ReviewsSection` da home com `locale="pt"`, herdando conteúdo, métricas, cartões e comportamento responsivo desse componente compartilhado, mas oculta o CTA redundante do TripAdvisor por propriedade explícita. O painel principal do hero usa o preto institucional invariável `--brand-black`, enquanto `--media-backdrop` continua reservado ao carregamento de mídia.

### CTAs e handoff para WhatsApp

- `TransferBookingTrigger` é o CTA primário recorrente para montar ou pré-preencher o pedido. Ele pode carregar origem, destino e a intenção de incluir aventura.
- `Button` primário é reservado para a ação principal; `outlineOnMedia` é a alternativa sobre fotografia; `outline` é a alternativa sobre superfícies do tema; `ghost` serve apenas a ações discretas como “Incluir no caminho”.
- No fechamento do planejador, “Pedir disponibilidade” abre o WhatsApp com mensagem pré-preenchida contendo origem, destino, data (ou “data a combinar”), número de viajantes, formato e intenção de aventura.
- Links absolutos de WhatsApp abrem em nova aba com `noopener noreferrer`, como definido por `Button`.
- A microcopy deve continuar explícita: não há pagamento online; o valor final e o embarque são confirmados no atendimento. Nunca apresente estimativa como preço fechado ou o envio como reserva confirmada.

### Ativos da superfície

Todos os ativos ficam locais e mantêm geometria estável por dimensões, `fill` com contêiner dimensionado ou proporção explícita. Fotografias informativas recebem `alt` descritivo; linhas e mapas puramente decorativos usam `alt=""`.

| Ativo | Papel atual |
| --- | --- |
| `public/img/transfer/hero-jeep.png` | recorte do veículo sobre o card principal |
| `public/img/transfer/jeep-road.png` | imagem principal do mosaico e Open Graph da rota |
| `public/img/transfer/chapada-road.png` | apoio do mosaico de estrada |
| `public/img/transfer/group-arrival.png` | apoio do mosaico de chegada |
| `public/img/transfer/only-transfer.png` | card “Somente trajeto” |
| `public/img/transfer/transfer-adventure.png` | card “Trajeto + aventuras” |
| `public/img/transfer/pai-inacio.png` | fundo monocromático do formulário compacto e parada editorial |
| `public/img/transfer/waterfall-road.png` | parada opcional no caminho |
| `public/svg/transfer/hero-route-line.svg` | paisagem linear decorativa do hero |
| `public/svg/transfer/hero-card-line.svg` | detalhe linear decorativo do card principal |
| `public/svg/transfer/route-map.svg` | base cartográfica do painel quadrado de Lençóis e Chapada Diamantina |
| `public/svg/session-05_backgroud-people-01.svg` | ilustração institucional herdada apenas pela seção compartilhada de avaliações da home |

`public/img/transfer/paola-betancolle.png`, `public/svg/transfer/route-map-marker.svg`, `public/svg/transfer/tripadvisor.svg` e `public/svg/transfer/journey-line.svg` estão disponíveis no diretório, mas não são referenciados pela implementação atual; não atribua função a eles sem uma decisão de produto.

### Motion

Interações usam os presets existentes: `motion.fast` (`150ms`) para seleção e ícones, `motion.base` (`300ms`) para botões, `motion.reveal` (`700ms`) para zoom sutil de imagem e `press` (`active:scale-[0.96]`) para superfícies acionáveis. Seções abaixo do hero participam do `ScrollExperience`: deslocamento vertical de `24px`, fade de `720ms` e easing `cubic-bezier(0.2, 0, 0, 1)`; o hero opta por `data-scroll-reveal="off"`.

O modal usa `SPRING_PANEL` na entrada e saída e `EASE_OUT` nas trocas de view. Com `prefers-reduced-motion`, remove deslocamento, escala e blur, preservando apenas fades curtos; o scroll reveal fica imediatamente visível e o scroll suave global é desativado. Movimento nunca pode ser requisito para entender estado ou concluir a solicitação.

### Accessibility

- Seções com título são nomeadas por `aria-labelledby`; ícones decorativos usam `aria-hidden`.
- Botões somente com ícone possuem rótulos explícitos e área acionável ampliada; linhas decorativas e o mapa sem conteúdo adicional ficam fora da leitura por texto alternativo vazio.
- Opções do formato formam um grupo nomeado e expõem `aria-pressed`; controles de viajantes expõem ações “Adicionar” e “Remover” e respeitam estados `disabled`.
- O foco visível usa `focus.onSurface`, `focus.onMedia` ou `focus.control`, sempre com anel semântico de marca e offset adequado à superfície.
- Imagens de serviço, veículo, paisagem e pessoas recebem descrições contextuais; imagens decorativas não repetem conteúdo adjacente.
- O modal mantém nome, foco contido, retorno de foco, fechamento por teclado e scroll interno; essas garantias fazem parte do padrão, não são opcionais.

## Do's and Don'ts

### Do

- **Use** os aliases semânticos e componentes existentes para que a página acompanhe light/dark automaticamente.
- **Mantenha** um único planejador compartilhado por todos os CTAs, passando apenas o contexto necessário para pré-preenchimento.
- **Mantenha** o remapeamento local de `brand` para o âmbar canônico; o verde institucional continua reservado ao restante do site.
- **Reutilize** `ReviewsSection` para a prova social final em vez de duplicar avaliações, métricas ou comportamento.
- **Rotule** preços como estimativa ou “a partir de” e deixe a confirmação final para o atendimento.
- **Preserve** a progressão editorial: contexto, formatos, cuidado, rotas, opções, dúvidas, mensagem e confiança.
- **Respeite** `prefers-reduced-motion`, foco visível, navegação por teclado, safe area e alvos de toque amplos.

### Don't

- **Não crie** cores, raios, sombras, easings ou variantes de botão exclusivos para transfer quando já existir um token semântico.
- **Não misture** CTAs verdes, amarelos e laranjas dentro da superfície de transfer; ação e seleção usam a família canônica de destaque de modo consistente.
- **Não transforme** o mapa ou a arte de rota em conteúdo obrigatório: cards e texto carregam a informação funcional.
- **Não abra** seletores de origem/destino fora do modal nem permita origem e destino idênticos.
- **Não sugira** disponibilidade ao vivo, pagamento no site, preço final ou reserva instantaneamente confirmada.
- **Não use** ativos sem referência atual como se tivessem papel aprovado.
