'use client';

import Script from 'next/script';

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

const EMBED_SCRIPT = 'https://tally.so/widgets/embed.js';

// Mesmo comportamento do snippet oficial do Tally: o iframe nasce só com
// `data-tally-src` e o embed.js preenche o `src` e passa a ajustar a altura
// (dynamicHeight). Se o script não carregar (adblock), o `src` é copiado à mão —
// o formulário aparece, só sem a altura dinâmica.
function carregarEmbeds() {
  if (window.Tally) {
    window.Tally.loadEmbeds();
    return;
  }
  document.querySelectorAll<HTMLIFrameElement>('iframe[data-tally-src]:not([src])').forEach((iframe) => {
    iframe.src = iframe.dataset.tallySrc ?? '';
  });
}

/**
 * Formulário do Tally embutido. O conteúdo do iframe é de outro domínio, então
 * o CSS do site não alcança os campos: fonte, cores e botões vêm do tema do
 * próprio formulário no painel do Tally. Aqui fica só a moldura — fundo
 * transparente (`transparentBackground`) para herdar a superfície do card e
 * título escondido (`hideTitle`), porque a página já tem o seu `h1`.
 */
export function TallyEmbed({ formId, title }: { formId: string; title: string }) {
  const src = `https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

  return (
    <>
      <iframe
        data-tally-src={src}
        loading="lazy"
        width="100%"
        // Altura inicial do snippet; o embed.js corrige assim que o form carrega.
        height={3871}
        title={title}
        className="block w-full border-0"
      />
      <Script src={EMBED_SCRIPT} strategy="lazyOnload" onReady={carregarEmbeds} onError={carregarEmbeds} />
    </>
  );
}
