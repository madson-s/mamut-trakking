import Image from 'next/image';
import Link from 'next/link';
import { Check, X } from 'lucide-react';
import { Button, Card, Heading, Text } from '@/components/ui';
import { cn } from '@/lib/cn';
import type { Locale } from '@/lib/site';
import { TelefonesLista } from './TelefonesLista';
import { DICAS_CONTENT } from './dicas-conteudo';
import { GRUPOS_ORDEM } from './dicas-conteudo';
import { whatsappLink } from '@/lib/whatsapp';
import { ADVENTURE_ROUTES } from '@/lib/routes';
import { ADVENTURE_SEGMENT, formatPrice } from '@/lib/site';
import { dicasHref } from './dicas-rotas';
import { TRANSFER_CONTENT, TRANSFER_DADOS } from './transfer-conteudo';
import { TransferBooking } from './TransferBooking';

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
        <Button href={whatsappLink(locale)} size="lg" arrow>{c.whatsapp}</Button>
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
            {opcao.link ? (
              <Link
                href={opcao.link.href}
                className="mt-1 inline-flex items-center gap-1.5 self-start font-body text-sm font-medium text-brand-strong underline underline-offset-4 transition-colors ease-brand hover:text-content"
              >
                {opcao.link.label} <span aria-hidden>→</span>
              </Link>
            ) : null}
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

/** Link para um roteiro pelo id do manifesto de rotas, no idioma da página. */
function roteiroHref(locale: Locale, id: string) {
  const rota = ADVENTURE_ROUTES.find((r) => r.id === id);
  const hub = `/${locale}/${ADVENTURE_SEGMENT[locale]}`;
  return rota ? `${hub}/${rota[locale]}` : hub;
}

/** Transfer Salvador × Lençóis (conteúdo em `transfer-conteudo.ts`). */
export function Transfer({ locale }: { locale: Locale }) {
  const c = TRANSFER_CONTENT[locale];
  const d = TRANSFER_DADOS;
  const preco = (valor: number) => formatPrice(valor, locale);
  const rotulo = 'tracking-[0.14em] uppercase';

  return (
    <>
      <div className="flex max-w-[720px] flex-col gap-4">
        {c.intro.map((paragrafo) => (
          <Text key={paragrafo} weight="light" tone="secondary" leading="relaxed" pretty>{paragrafo}</Text>
        ))}
      </div>

      {/* Rota + foto */}
      <div className="grid items-stretch gap-5 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="relative aspect-[3/2] overflow-hidden rounded-panel bg-surface-sunken">
          <Image
            src={d.imagem}
            alt={c.imagemAlt}
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover"
          />
        </div>
        <Card as="section" surface="muted" radius="panelLg" padding="none" className="justify-between gap-6 border border-line-strong p-6 sm:p-8">
          <Heading as="h2" size="card">{c.rota.titulo}</Heading>
          <dl className="grid grid-cols-3 gap-4">
            {[
              [c.rota.distancia, `${d.distanciaKm} km`],
              [c.rota.duracao, `${d.duracaoHoras} h`],
              [c.rota.servico, c.rota.privado],
            ].map(([rotuloStat, valor]) => (
              <div key={rotuloStat} className="flex flex-col gap-1">
                <Text as="span" size="xs" tone="muted">{rotuloStat}</Text>
                <dd><Heading as="span" size="quote">{valor}</Heading></dd>
              </div>
            ))}
          </dl>
          <TransferBooking locale={locale} label={c.reservar} block />
        </Card>
      </div>

      {/* Preços */}
      <section aria-labelledby="transfer-precos" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Heading as="h2" id="transfer-precos" size="card">{c.precos.titulo}</Heading>
          <Text size="sm" weight="light" tone="secondary" pretty>{c.precos.nota}</Text>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { nome: c.precos.economico.nome, detalhe: c.precos.economico.carros, valor: d.economico },
            { nome: c.precos.suv.nome, detalhe: null, valor: d.suv },
          ].map((opcao) => (
            <Card key={opcao.nome} as="article" surface="muted" padding="none" className="gap-2 border border-line-strong p-6 sm:p-8">
              <Heading as="h3" size="quote">{opcao.nome}</Heading>
              {opcao.detalhe ? <Text size="sm" tone="muted">{opcao.detalhe}</Text> : null}
              <Text size="sm" tone="secondary" className="mt-3">{c.precos.aPartirDe}</Text>
              <Heading as="p" size="section" className="text-brand-strong">{preco(opcao.valor)}</Heading>
              <Text size="sm" tone="secondary">{c.precos.paraAte}</Text>
            </Card>
          ))}
        </div>
        <ul className="flex flex-wrap gap-2">
          {c.precos.descontos.map((desconto) => (
            <li key={desconto} className="rounded-pill border border-brand px-4 py-1.5">
              <Text as="span" size="sm" tone="brand">{desconto}</Text>
            </li>
          ))}
        </ul>
      </section>

      {/* Incluso / não incluso */}
      <div className="grid gap-5 md:grid-cols-2">
        {[
          { titulo: c.incluso.titulo, itens: c.incluso.itens, Icone: Check, cor: 'text-brand-strong' },
          { titulo: c.naoIncluso.titulo, itens: c.naoIncluso.itens, Icone: X, cor: 'text-content-muted' },
        ].map(({ titulo, itens, Icone, cor }) => (
          <Card key={titulo} as="section" surface="muted" radius="panelLg" padding="none" className="gap-4 px-6 py-8 sm:px-8">
            <Heading as="h2" size="quote">{titulo}</Heading>
            <ul className="flex flex-col gap-3">
              {itens.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Icone aria-hidden className={cn('size-4 shrink-0', cor)} />
                  <Text size="sm" weight="light" tone="secondary">{item}</Text>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      {/* Outras cidades da Chapada */}
      <section aria-labelledby="transfer-chapada" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Heading as="h2" id="transfer-chapada" size="card">{c.chapada.titulo}</Heading>
          <Text size="sm" weight="light" tone="secondary" pretty>{c.chapada.lead}</Text>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {c.chapada.cidades.map((cidade, i) => (
            <Card key={cidade.nome} as="article" surface="muted" padding="none" className="gap-3 border border-line-strong p-6">
              <Heading as="h3" size="quote">{cidade.nome}</Heading>
              <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>{cidade.texto}</Text>
              {cidade.roteiros ? (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                  {cidade.roteiros.map((roteiro) => (
                    <li key={roteiro.id}>
                      <Link
                        href={roteiroHref(locale, roteiro.id)}
                        className="font-body text-sm text-brand-strong underline underline-offset-4 transition-colors ease-brand hover:text-content"
                      >
                        {roteiro.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
              <Text size="sm" tone="secondary" className="mt-auto pt-2">
                {cidade.preco} <span className="font-medium text-content">{preco(d.cidades[i])}</span>
              </Text>
            </Card>
          ))}
        </div>
        <Text size="sm" weight="light" tone="secondary" pretty>{c.chapada.chapadaVelha}</Text>
        <Card as="section" surface="muted" padding="none" className="gap-2 border border-brand p-6 sm:p-8">
          <Heading as="h3" size="quote">{c.chapada.personalizado.titulo}</Heading>
          <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>{c.chapada.personalizado.texto}</Text>
        </Card>
      </section>

      {/* Fora da Chapada */}
      <section aria-labelledby="transfer-fora" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Heading as="h2" id="transfer-fora" size="card">{c.fora.titulo}</Heading>
          <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>{c.fora.texto}</Text>
        </div>
        <Card as="section" surface="muted" padding="none" className="gap-2 border border-brand p-6 sm:p-8">
          <Heading as="h3" size="quote">{c.fora.valenca.titulo}</Heading>
          <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>{c.fora.valenca.texto}</Text>
        </Card>
        {/* No mobile a tabela rola na horizontal dentro do próprio quadro. */}
        <div className="overflow-x-auto rounded-card border border-line-strong">
          <table className="w-full min-w-[520px] border-collapse text-left font-body text-sm">
            <thead className="bg-surface-muted">
              <tr>
                {[c.fora.colunas.destino, c.fora.colunas.hatch, c.fora.colunas.suv, c.fora.colunas.tempo].map((coluna) => (
                  <th key={coluna} scope="col" className={cn('px-4 py-3 text-xs font-semibold text-content-muted', rotulo)}>{coluna}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {d.fora.map((rota) => (
                <tr key={rota.destino} className="border-t border-line">
                  <th scope="row" className="px-4 py-3 font-medium text-content">{rota.destino}</th>
                  <td className="px-4 py-3 text-content-secondary">{preco(rota.hatch)}</td>
                  <td className="px-4 py-3 text-content-secondary">{preco(rota.suv)}</td>
                  <td className="px-4 py-3 text-content-secondary">{rota.horas} {c.fora.horas} · {rota.km} km</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <TransferBooking locale={locale} label={c.reservar} className="self-start max-sm:w-full" />
      </section>

      {/* Como chegar */}
      <section aria-labelledby="transfer-como-chegar" className="flex max-w-[720px] flex-col gap-3">
        <Heading as="h2" id="transfer-como-chegar" size="quote">{c.comoChegar.titulo}</Heading>
        <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>
          {c.comoChegar.antes}{' '}
          <Link href={dicasHref(locale, 'como-chegar')} className="text-brand-strong underline underline-offset-4 hover:text-content">
            {c.comoChegar.link}
          </Link>
          {c.comoChegar.depois}
        </Text>
      </section>

      <Fecho locale={locale} />
    </>
  );
}

