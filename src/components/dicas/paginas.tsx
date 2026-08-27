import Image from 'next/image';
import { Button, Card, Heading, Text } from '@/components/ui';
import { cn } from '@/lib/cn';
import { SITE, type Locale } from '@/lib/site';
import { TelefonesLista } from './TelefonesLista';
import { DICAS_CONTENT } from './dicas-conteudo';
import { GRUPOS_ORDEM } from './dicas-conteudo';

/** Fecho comum a todas as páginas da seção. */
function Fecho({ locale }: { locale: Locale }) {
  const c = DICAS_CONTENT[locale].cta;

  return (
    <Card
      as="section"
      surface="muted"
      radius="panelLg"
      padding="none"
      className="items-center gap-6 border border-line-strong px-6 py-10 text-center sm:px-10 sm:py-12"
    >
      <div className="flex max-w-[560px] flex-col gap-3">
        <Heading as="h2" size="card" balance>
          {c.titulo.antes} <span className="text-brand-strong">{c.titulo.destaque}</span>
        </Heading>
        <Text size="lg" weight="light" tone="secondary" pretty>{c.texto}</Text>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <Button href={SITE.whatsappUrl} size="lg" arrow>{c.whatsapp}</Button>
        <Button href={c.contatoHref} size="lg" variant="outline">{c.contato}</Button>
      </div>
    </Card>
  );
}

export function ComoChegar({ locale }: { locale: Locale }) {
  const c = DICAS_CONTENT[locale];

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {c.chegada.opcoes.map((opcao) => (
          <Card
            key={opcao.titulo}
            as="article"
            surface="muted"
            padding="none"
            className={cn('gap-3 border p-6 sm:p-8', opcao.destaque ? 'border-brand' : 'border-line-strong')}
          >
            <Heading as="h2" size="quote">{opcao.titulo}</Heading>
            <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>{opcao.texto}</Text>
          </Card>
        ))}
      </div>

      <div className="flex flex-col gap-8">
        <Heading as="h2" size="card">
          {c.estadia.titulo.antes} <span className="text-brand-strong">{c.estadia.titulo.destaque}</span>
        </Heading>
        <div className="grid gap-6 md:grid-cols-2">
          {c.estadia.assuntos.map((assunto) => (
            <Card key={assunto.titulo} as="article" surface="muted" radius="panelLg" padding="none" className="gap-4 px-6 py-8 sm:px-8">
              <Heading as="h3" size="quote">{assunto.titulo}</Heading>
              <div className="flex flex-col gap-3">
                {assunto.paragrafos.map((paragrafo) => (
                  <Text key={paragrafo} size="sm" weight="light" tone="secondary" leading="relaxed" pretty>{paragrafo}</Text>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Fecho locale={locale} />
    </>
  );
}

export function InformacoesGerais({ locale }: { locale: Locale }) {
  const c = DICAS_CONTENT[locale];
  const pagina = c.paginas['informacoes-gerais'];

  return (
    <>
      <div className="flex flex-col gap-6">
        {pagina.perguntas.map((item) => (
          <article key={item.pergunta} className="flex flex-col gap-2 border-b border-line pb-6 last:border-b-0 last:pb-0">
            <Heading as="h2" size="quote">{item.pergunta}</Heading>
            <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>{item.resposta}</Text>
          </article>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {c.estadia.listas.map((lista) => (
          <div key={lista.titulo} className="flex flex-col gap-4">
            <Text as="span" size="xs" weight="semibold" tone="muted" className="tracking-[0.14em] uppercase">{lista.titulo}</Text>
            {lista.nota && (
              <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>{lista.nota}</Text>
            )}
            <ul className="flex flex-col gap-2.5">
              {lista.itens.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="shrink-0 font-semibold text-brand-strong">—</span>
                  <Text size="sm" weight="light" tone="secondary">{item}</Text>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-8">
        <Heading as="h2" size="card">
          {c.telefones.titulo.antes} <span className="text-brand-strong">{c.telefones.titulo.destaque}</span>
        </Heading>
        <Text size="sm" weight="light" tone="secondary" pretty className="-mt-4">{c.telefones.lead}</Text>
        <div className="grid gap-10">
          {GRUPOS_ORDEM.map((grupo) => (
            <TelefonesLista key={grupo} grupo={grupo} titulo={c.telefones.grupos[grupo]} locale={locale} />
          ))}
        </div>
      </div>

      <Fecho locale={locale} />
    </>
  );
}

export function ClassificacaoDeNivel({ locale }: { locale: Locale }) {
  const pagina = DICAS_CONTENT[locale].paginas['classificacao-de-nivel'];

  return (
    <>
      <div className="rounded-control border-l-4 border-brand bg-surface-sunken px-5 py-5 shadow-chip sm:px-6">
        <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>{pagina.aviso}</Text>
      </div>

      {[pagina.esforco, pagina.tecnico].map((grupo) => (
        <div key={grupo.titulo} className="flex flex-col gap-4">
          <Heading as="h2" size="card">{grupo.titulo}</Heading>
          <dl className="overflow-hidden rounded-card border border-line">
            {grupo.niveis.map((nivel) => (
              <div key={nivel.nome} className="flex flex-col gap-1 border-b border-line px-5 py-4 last:border-b-0 sm:flex-row sm:gap-6">
                <dt className="shrink-0 font-body text-sm font-semibold text-content sm:w-44">{nivel.nome}</dt>
                <dd className="font-body text-sm font-light leading-relaxed text-content-secondary">{nivel.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}

      <Fecho locale={locale} />
    </>
  );
}

export function Geologia({ locale }: { locale: Locale }) {
  const pagina = DICAS_CONTENT[locale].paginas.geologia;

  return (
    <>
      {pagina.blocos.map((bloco) => (
        <section key={bloco.titulo} className="flex flex-col gap-4">
          <Heading as="h2" size="card" balance>{bloco.titulo}</Heading>
          {bloco.paragrafos.map((paragrafo) => (
            <Text key={paragrafo} size="base" weight="light" tone="secondary" leading="relaxed" pretty>
              {paragrafo}
            </Text>
          ))}
          {bloco.figuras && (
            <div className="mt-2 grid gap-6 sm:grid-cols-2">
              {bloco.figuras.map((figura) => (
                <figure key={figura.src} className="flex flex-col gap-2">
                  <Image
                    src={figura.src}
                    alt={figura.alt}
                    width={figura.width}
                    height={figura.height}
                    sizes="(min-width: 640px) 340px, 100vw"
                    className="h-auto w-full rounded-card border border-line bg-surface-sunken object-contain"
                  />
                  <figcaption className="font-body text-xs font-light leading-relaxed text-content-muted">
                    {figura.legenda}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          {bloco.itens && (
            <div className="mt-2 grid gap-5 md:grid-cols-2">
              {bloco.itens.map((item) => (
                <Card key={item.titulo} as="article" surface="muted" padding="none" className="gap-2 border border-line-strong p-6">
                  <Heading as="h3" size="quote">{item.titulo}</Heading>
                  <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>{item.texto}</Text>
                </Card>
              ))}
            </div>
          )}
        </section>
      ))}

      {[
        { titulo: pagina.referenciasTitulo, itens: pagina.referencias },
        { titulo: pagina.complementaresTitulo, itens: pagina.complementares },
      ].map((lista) => (
        <div key={lista.titulo} className="flex flex-col gap-3">
          <Text as="span" size="xs" weight="semibold" tone="muted" className="tracking-[0.14em] uppercase">
            {lista.titulo}
          </Text>
          <ul className="flex flex-col gap-2">
            {lista.itens.map((referencia) => (
              <li key={referencia.texto} className="flex gap-3">
                <span aria-hidden className="shrink-0 text-content-muted">—</span>
                {referencia.href ? (
                  <a
                    href={referencia.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-sm font-light text-content-secondary underline decoration-line-strong underline-offset-4 transition-colors hover:text-brand-strong"
                  >
                    {referencia.texto}
                  </a>
                ) : (
                  <Text size="sm" weight="light" tone="secondary">{referencia.texto}</Text>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <Fecho locale={locale} />
    </>
  );
}
