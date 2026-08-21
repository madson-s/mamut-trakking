/** Scroll vertical animado na curva da marca.
 *
 * O `scroll-behavior: smooth` do navegador tem duração e curva próprias, mais
 * curtas e secas que o resto do site. Aqui a animação é feita à mão para usar
 * o mesmo ritmo do reveal de seção (a "troca de página"): a curva
 * `--ease-brand` do globals.css e uma duração da mesma ordem.
 */

/* Espelho JS de --ease-brand. Mudou no globals.css? Mude aqui. */
const EASE_BRAND = [0.2, 0, 0, 1] as const;

/* .scroll-reveal-section roda em 720ms. Distâncias curtas encurtam a duração
 * proporcionalmente para o movimento não parecer arrastado. */
const DURATION_MAX = 720;
const DURATION_MIN = 380;
const MS_PER_PX = 0.9;

/** Solver de cubic-bezier CSS: acha o parâmetro da curva em X e devolve Y. */
function cubicBezier(x1: number, y1: number, x2: number, y2: number) {
  const axis = (a: number, b: number) => {
    const c = 3 * a;
    const quad = 3 * (b - a) - c;
    return { c, quad, cube: 1 - c - quad };
  };
  const x = axis(x1, x2);
  const y = axis(y1, y2);
  const at = ({ c, quad, cube }: typeof x, t: number) => ((cube * t + quad) * t + c) * t;
  const slopeAt = ({ c, quad, cube }: typeof x, t: number) => (3 * cube * t + 2 * quad) * t + c;

  return (progress: number) => {
    if (progress <= 0) return 0;
    if (progress >= 1) return 1;

    // Newton-Raphson: 8 passos bastam para a precisão de um pixel.
    let t = progress;
    for (let i = 0; i < 8; i += 1) {
      const error = at(x, t) - progress;
      if (Math.abs(error) < 1e-5) break;
      const slope = slopeAt(x, t);
      if (Math.abs(slope) < 1e-6) break;
      t -= error / slope;
    }

    return at(y, t);
  };
}

const ease = cubicBezier(...EASE_BRAND);

/** Anima a janela até `top`. Devolve uma função que cancela a animação. */
export function scrollToBrand(top: number): () => void {
  const start = window.scrollY;
  const target = Math.max(top, 0);
  const distance = target - start;

  if (
    Math.abs(distance) < 1 ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    // 'instant' e não 'auto': 'auto' devolveria o controle ao
    // scroll-behavior: smooth do CSS, que é justamente o que queremos evitar.
    window.scrollTo({ top: target, behavior: 'instant' });
    return () => {};
  }

  const duration = Math.min(DURATION_MAX, Math.max(DURATION_MIN, Math.abs(distance) * MS_PER_PX));
  const started = performance.now();
  let frame = 0;

  const stop = () => {
    if (frame) window.cancelAnimationFrame(frame);
    frame = 0;
    window.removeEventListener('wheel', stop);
    window.removeEventListener('touchstart', stop);
  };

  const step = (now: number) => {
    const progress = Math.min((now - started) / duration, 1);
    // Sem clamp no alvo: o navegador limita cada quadro sozinho, e assim o
    // scroll acompanha a página crescendo ou encolhendo durante a animação.
    window.scrollTo({ top: start + distance * ease(progress), behavior: 'instant' });

    if (progress < 1) {
      frame = window.requestAnimationFrame(step);
      return;
    }
    stop();
  };

  // Um gesto do usuário durante a animação vence a animação.
  window.addEventListener('wheel', stop, { passive: true });
  window.addEventListener('touchstart', stop, { passive: true });
  frame = window.requestAnimationFrame(step);

  return stop;
}
