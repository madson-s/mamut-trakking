# Rastreamento do site antigo (mamut.agency)

Levantado em 22/10/2026 a partir do backup do WordPress (21/10/2026) e do
contêiner publicado do Google Tag Manager (`gtm.js`, versão 13).

## Como estava instalado

Só o **Google Tag Manager**, colado no Elementor Pro em *Custom Code* (nenhum
plugin de analytics; o SEOPress não tinha rastreamento configurado):

- "Tag Manager" — no `<head>`, prioridade 1:

  ```html
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-WTJ39TDZ');</script>
  <!-- End Google Tag Manager -->
  <script async src="https://tally.so/widgets/embed.js"></script>
  ```

- "Tag Manager Body" — logo após `<body>`, prioridade 1:

  ```html
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WTJ39TDZ"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  ```

  (O `tally.so/widgets/embed.js` do primeiro bloco é o embed dos formulários
  Tally, não rastreamento.)

## O que o contêiner GTM-WTJ39TDZ dispara

| Tag | ID | Quando |
|---|---|---|
| Google tag (GA4) | **G-C5F2EQWV32** | todas as páginas |
| Evento GA4 `click_Reservar` | (vai para o GA4 acima) | clique em elemento cujo texto contém "Reservar" |
| Google Ads — remarketing | **AW-10818756615** | todas as páginas |
| Vinculador de conversões (Conversion Linker) | — | todas as páginas (cookies `_gcl`) |
| Pixel da Meta (Facebook) — `PageView` | **663960068295209** | todas as páginas |

## ⚠️ Diferença em relação ao site novo

O site novo foi instalado com o GA4 **G-8B6ZE20HW1**, que **não é** o ID que o
site antigo usava (**G-C5F2EQWV32**, via GTM). E o site novo não tem o
remarketing do Google Ads nem o Pixel da Meta.
