// home_session-02 — "Somos o bando que guia a sua tribo" + card do manifesto.
export function ManifestoSection() {
  return (
    <section className="w-full px-6 py-24">
      <div className="mx-auto flex w-full max-w-[1216px] flex-col items-center gap-12">
        {/* Título */}
        <div className="flex flex-col items-center gap-8 text-center sm:gap-12">
          <p className="font-body text-xl font-light leading-[1.5] text-gray-900">
            Inspirados pelos nossos antepassados nômades
          </p>
          <h2 className="max-w-[672px] text-balance font-display text-4xl leading-[1.1] text-gray-950 sm:text-6xl lg:text-[72px]">
            <span className="inline-flex flex-wrap items-center justify-center gap-x-2 sm:flex-nowrap sm:gap-x-4">
              Somos o
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/mamut_logo_pren_morro-1.webp"
                alt=""
                className="inline-block h-[46px] w-[81px] shrink-0 object-contain align-middle sm:h-[66px] sm:w-[116px] lg:h-[82px] lg:w-[145px]"
              />
              bando
            </span>
            <br />
            que guia a sua tribo.
          </h2>
        </div>

        {/* Card do manifesto */}
        <div className="relative min-h-[520px] w-full overflow-hidden rounded-[32px] sm:min-h-[420px] sm:rounded-[40px] lg:h-[284px] lg:min-h-0">
          <picture className="contents">
            <source media="(min-width: 640px)" srcSet="/img/session_02_saqure_text_crop.webp" />
            <img
              src="/img/session-02_saqure-text_no-crop.webp"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </picture>
          <div className="absolute inset-0 bg-[rgba(29,29,29,0.68)]" />

          <div className="relative z-10 flex h-full flex-col items-start px-8 py-10 sm:px-12 sm:py-11 lg:px-20 lg:py-[42px]">
            <div className="flex max-w-[428px] flex-col gap-6 text-white">
              <div className="flex flex-col gap-3">
                <p className="text-pretty font-body text-lg font-light leading-relaxed sm:text-xl">
                  Na imensidão dos mega continentes, os mamutes caminhavam em grandes grupos —
                  marcando sua existência para sempre.
                </p>
                <p className="font-display text-2xl leading-snug">É dessa memória que nascemos.</p>
              </div>
              <a
                href="/pt/manifesto"
                className="group inline-flex items-center gap-2 self-start rounded-full border border-white bg-transparent px-5 py-2.5 font-body text-base font-semibold text-white transition-[background-color,border-color,transform] duration-300 ease-out hover:border-primary-500 hover:bg-primary-500 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Leia nosso manifesto
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path d="M3.5 8h9m0 0L8.5 4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

          </div>

          {/* Figuras caminhando (yellow line-art), ancoradas à borda inferior do card. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/svg/humans-assets-yellow.svg"
            alt=""
            className="pointer-events-none absolute bottom-0 right-[-12%] z-10 h-auto w-[min(112vw,485px)] max-w-none sm:right-[-3%] sm:w-[420px] lg:right-0 lg:h-[192px] lg:w-[485px]"
          />
        </div>
      </div>
    </section>
  );
}
