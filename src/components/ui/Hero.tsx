import Link from 'next/link';
import { Container } from '../layout/Container';

// Bloco principal da Home. O <h1> da página vive aqui.
export function Hero({
  kicker,
  title,
  subtitle,
  cta,
}: {
  kicker: string;
  title: string;
  subtitle: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="text-center">
      <Container className="py-24">
        <p className="text-sm uppercase tracking-widest text-mamut-clay">{kicker}</p>
        <h1 className="mx-auto mt-4 max-w-4xl font-display text-5xl leading-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-mamut-stone">{subtitle}</p>
        {cta && (
          <Link
            href={cta.href}
            className="mt-10 inline-block rounded-full bg-mamut-moss px-8 py-3 text-mamut-sand transition hover:bg-mamut-ink"
          >
            {cta.label}
          </Link>
        )}
      </Container>
    </section>
  );
}
