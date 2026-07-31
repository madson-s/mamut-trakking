import { Pill } from '@/components/ui/Pill';

// home_session-06 — CTA final.
export function FinalCta() {
  return (
    <section className="w-full px-6 py-24">
      <div className="mx-auto flex max-w-[1216px] flex-col items-center gap-12 text-center">
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-display text-4xl leading-[1.1] text-gray-950 sm:text-6xl lg:text-[72px]">
            Sua trilha começa
            <br />
            com uma mensagem.
          </h2>
          <p className="max-w-[526px] font-body text-lg text-gray-500 sm:text-xl">
            Fale com a gente pelo WhatsApp. Descubra qual o seu roteiro ideal para conhecer a
            Chapada Diamantina e como se preparar.
          </p>
        </div>
        <Pill href="/pt/contato">Entrar para o bando</Pill>
      </div>
    </section>
  );
}
