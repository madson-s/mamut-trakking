'use client';

import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState, type ReactNode } from 'react';
import { Button, Heading, Text } from '@/components/ui';

/**
 * Mensagem da 404 girando entre português, inglês e espanhol.
 *
 * A 404 global não sabe de que idioma veio a URL (não recebe props nem
 * pathname), então em vez de escolher um, ela passa pelos três. O botão
 * acompanha: leva para a home do idioma que está na tela.
 *
 * Cuidados:
 * - Sem salto de layout: cada linha empilha as três versões no mesmo grid
 *   (invisíveis) para reservar a altura da mais longa; a visível gira por cima.
 * - Leitor de tela: a parte que gira é decorativa (`aria-hidden`); o anúncio é
 *   uma cópia estável em português, com a h1 real da página.
 * - Pausa ao passar o mouse ou focar o botão — o rótulo não pode trocar no
 *   instante do clique, e conteúdo que se atualiza sozinho precisa de pausa.
 * - "Reduzir movimento" ligado no sistema: nada gira, fica em português.
 */

const INTERVALO_MS = 3000;

const MENSAGENS = [
  {
    lang: 'pt',
    eyebrow: 'Erro 404',
    titulo: { antes: 'Essa trilha', destaque: 'não leva a lugar nenhum.' },
    texto: 'A página que você procurou não existe ou mudou de endereço.',
    cta: 'Voltar para o início',
    href: '/pt',
  },
  {
    lang: 'en',
    eyebrow: 'Error 404',
    // Cabe numa linha só e ficaria mais baixo que pt/es: a quebra forçada
    // iguala as duas linhas e evita o vão sob o título.
    titulo: { antes: 'This trail', destaque: 'leads nowhere.', quebra: true },
    texto: 'The page you were looking for doesn’t exist or has moved.',
    cta: 'Back to home',
    href: '/en',
  },
  {
    lang: 'es',
    eyebrow: 'Error 404',
    titulo: { antes: 'Este sendero', destaque: 'no lleva a ningún lado.' },
    texto: 'La página que buscabas no existe o cambió de dirección.',
    cta: 'Volver al inicio',
    href: '/es',
  },
] as const;

/**
 * Uma linha que gira. As três versões ficam empilhadas e invisíveis só para
 * dar a altura; a atual entra girando no eixo X e a anterior sai por cima.
 */
function Girar({
  indice,
  ordem,
  versoes,
}: {
  indice: number;
  /** Posição da linha: atrasa o giro em cascata, de cima para baixo. */
  ordem: number;
  versoes: readonly ReactNode[];
}) {
  return (
    <span aria-hidden className="grid [perspective:800px]">
      {versoes.map((versao, i) => (
        <span key={i} className="invisible [grid-area:1/1]">{versao}</span>
      ))}
      <AnimatePresence initial={false}>
        <motion.span
          key={indice}
          className="[grid-area:1/1] [backface-visibility:hidden] origin-[50%_50%_-0.5em]"
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: ordem * 0.07 }}
        >
          {versoes[indice]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function NotFoundMessage() {
  const reduzir = useReducedMotion();
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    if (reduzir || pausado) return;
    const id = window.setInterval(() => setIndice((i) => (i + 1) % MENSAGENS.length), INTERVALO_MS);
    return () => window.clearInterval(id);
  }, [reduzir, pausado]);

  const atual = MENSAGENS[indice];
  const pausar = () => setPausado(true);
  const retomar = () => setPausado(false);

  return (
    <div
      className="flex flex-col items-start gap-7"
      onMouseEnter={pausar}
      onMouseLeave={retomar}
      onFocusCapture={pausar}
      onBlurCapture={retomar}
    >
      {/* O que o leitor de tela anuncia: estável, em português. */}
      <div className="sr-only">
        <h1>Página não encontrada — erro 404</h1>
        <p>{MENSAGENS[0].texto}</p>
      </div>

      <Text as="span" size="sm" tone="muted" className="tracking-[0.14em] uppercase">
        <Girar indice={indice} ordem={0} versoes={MENSAGENS.map((m) => m.eyebrow)} />
      </Text>

      <Heading as="div" size="hero" balance className="max-w-190">
        <Girar
          indice={indice}
          ordem={1}
          versoes={MENSAGENS.map((m) => (
            <span key={m.lang} lang={m.lang}>
              {m.titulo.antes}
              {'quebra' in m.titulo && m.titulo.quebra ? <br /> : ' '}
              <span className="text-brand-strong">{m.titulo.destaque}</span>
            </span>
          ))}
        />
      </Heading>

      <Text as="div" size="base" tone="secondary" pretty className="max-w-148">
        <Girar
          indice={indice}
          ordem={2}
          versoes={MENSAGENS.map((m) => <span key={m.lang} lang={m.lang}>{m.texto}</span>)}
        />
      </Text>

      <Button href={atual.href} arrow lang={atual.lang}>
        <Girar indice={indice} ordem={3} versoes={MENSAGENS.map((m) => m.cta)} />
        <span className="sr-only">{atual.cta}</span>
      </Button>
    </div>
  );
}
