import { Pill } from '@/components/ui/Pill';

const GUIDE = {
  name: 'Marcelo Cabral',
  role: 'Guia & Fundador',
  photo: '/img/session_04_cabral_foto_01.webp',
  bio: '13 anos em Lençóis. Cuida da operação inteira — do primeiro contato ao último passo na trilha. Introduz a Chapada a brasileiros e estrangeiros com a mesma autoridade de quem escolheu essa terra para chamar de lar.',
};

// home_session-04 — "Nascidos aqui. Formados pela Chapada." + cards dos guias.
export function GuidesSection() {
  const guides = Array.from({ length: 4 });
  return (
    <section className="w-full px-6 py-24">
      <div className="mx-auto flex w-full max-w-[1216px] flex-col items-center gap-16">
        <h2 className="text-center font-display text-4xl leading-[1.1] text-gray-950 sm:text-6xl lg:text-[72px]">
          Nascidos aqui.
          <br />
          <span className="inline-flex flex-wrap items-center justify-center gap-x-4">
            Formados pela
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/home_square_right_morro_1_1_5x.webp"
              alt=""
              className="inline-block h-[0.7em] w-[1.7em] rounded-[0.2em] object-cover align-middle"
            />
            Chapada.
          </span>
        </h2>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((_, i) => (
            <article
              key={i}
              tabIndex={0}
              aria-label={`${GUIDE.name}, ${GUIDE.role}`}
              className="group/guide flex flex-col gap-3 rounded-[24px] outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-50"
            >
              <div className="relative h-[386px] w-full overflow-hidden rounded-[24px] bg-gray-300 outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={GUIDE.photo}
                  alt={GUIDE.name}
                  className="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-500 ease-[cubic-bezier(.2,0,0,1)] group-hover/guide:scale-[1.025] group-hover/guide:opacity-0 group-focus-visible/guide:scale-[1.025] group-focus-visible/guide:opacity-0"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/session_04_cabral_foto_01_bw.webp"
                  alt=""
                  className="absolute inset-0 h-full w-full scale-[1.01] object-cover opacity-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(.2,0,0,1)] group-hover/guide:scale-[1.025] group-hover/guide:opacity-100 group-focus-visible/guide:scale-[1.025] group-focus-visible/guide:opacity-100"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/svg/figma/guides/marcelo-hover-line.svg"
                  alt=""
                  className="pointer-events-none absolute -bottom-px -left-[1.5%] h-[42.25%] w-[103%] translate-y-3 opacity-0 blur-[4px] transition-[opacity,filter,transform] duration-500 ease-[cubic-bezier(.2,0,0,1)] group-hover/guide:translate-y-0 group-hover/guide:opacity-100 group-hover/guide:blur-0 group-focus-visible/guide:translate-y-0 group-focus-visible/guide:opacity-100 group-focus-visible/guide:blur-0"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-body text-xl font-semibold text-gray-950">{GUIDE.name}</p>
                  <span className="rounded-[40px] border border-primary-700 px-3 py-2 font-body text-sm text-primary-950">
                    {GUIDE.role}
                  </span>
                </div>
                <p className="font-body text-xs leading-snug text-gray-950">{GUIDE.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <Pill href="/pt/quem-somos">Conheça quem guia o bando</Pill>
      </div>
    </section>
  );
}
