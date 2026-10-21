'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Casca do header, em todas as páginas do site: ele volta ao rolar para cima.
 *
 * - Até sair da primeira dobra, o header fica no lugar de sempre (no fluxo, sobre
 *   a foto do hero) e some com a rolagem, como em qualquer página.
 * - Passada a dobra, vira `fixed`, escondido acima da tela: rolar para cima o faz
 *   descer; rolar para baixo o recolhe de novo.
 * - De volta ao topo (scrollY 0) ele retoma o lugar no fluxo — mesma posição na
 *   tela, então a troca não salta.
 *
 * A casca tem a altura do header (h-20) para o conteúdo não subir quando o
 * header sai do fluxo. Os estados vão em data-attributes; o visual (fundo,
 * cores do tema, transição) fica no globals.css, em `.site-header-shell`.
 */

type Mode = 'static' | 'fixed';

/** Rolagem mínima para contar como mudança de direção (evita tremer no trackpad). */
const DELTA = 6;

export function HeaderShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mode, setMode] = useState<Mode>('static');
  const [visible, setVisible] = useState(false);
  // A transição só liga um quadro depois de virar `fixed`: senão o header
  // animaria de onde estava (visível) até escondido, piscando na tela.
  const [animate, setAnimate] = useState(false);
  const state = useRef({ mode: 'static' as Mode, visible: false, lastY: 0 });

  useEffect(() => {
    let frame = 0;
    const s = state.current;
    s.lastY = window.scrollY;

    const apply = (mode: Mode, visible: boolean) => {
      if (mode !== s.mode) {
        s.mode = mode;
        setMode(mode);
        setAnimate(false);
        if (mode === 'fixed') requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      }
      if (visible !== s.visible) {
        s.visible = visible;
        setVisible(visible);
      }
    };

    const update = () => {
      frame = 0;
      const y = Math.max(window.scrollY, 0);
      const delta = y - s.lastY;
      const fold = window.innerHeight;

      if (y <= 0) {
        s.lastY = y;
        apply('static', false);
        return;
      }
      if (Math.abs(delta) < DELTA) return;
      s.lastY = y;

      // Ainda na primeira dobra e sem ter virado fixo: segue no fluxo.
      if (s.mode === 'static' && y < fold) return;

      apply('fixed', delta < 0);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
      // Trocando de rota, volta ao estado inicial.
      s.mode = 'static';
      s.visible = false;
      setMode('static');
      setVisible(false);
      setAnimate(false);
    };
  }, [pathname]);

  return (
    <div
      className="site-header-shell relative z-20 h-20"
      data-mode={mode}
      data-visible={visible ? 'true' : 'false'}
      data-animate={animate ? 'true' : 'false'}
    >
      {children}
    </div>
  );
}
