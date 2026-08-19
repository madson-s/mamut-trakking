import Image from 'next/image';
import {
  Badge,
  Button,
  Card,
  Container,
  Heading,
  JsonLd,
  MediaCard,
  Section,
  Text,
} from '@/components/ui';
import {
  HOME_TESTIMONIALS,
  ScrollFeedbackStack,
} from '@/components/home/ScrollFeedbackStack';
import { cn } from '@/lib/cn';
import { SITE } from '@/lib/site';
import { PatiFaqList, type PatiFaqItem } from './PatiFaqList';
import { PatiBookingTrigger } from './PatiBookingTrigger';
import { PatiHeroGallery } from './PatiHeroGallery';
import { PatiMobileBooking } from './PatiMobileBooking';
import { PatiItinerary } from './PatiItinerary';
import { AssetIcon } from './AssetIcon';

const STATS = [
  ['45 km', 'Distância a pé', '/svg/_icons/icon_03_montain.svg'],
  ['3 dias / 2 noites', 'Duração', '/svg/_icons/icon_11_calendar.svg'],
  ['1.360m', 'Altitude máxima', '/svg/_icons/icon_09_location.svg'],
  ['+1.050m', 'Ganho de elevação', '/svg/_icons/icon_01_3-bars.svg'],
  ['6h00', 'Saída (Lençóis)', '/svg/_icons/icon_11_calendar.svg'],
  ['~19h00', 'Retorno', '/svg/_icons/icon_11_calendar.svg'],
  ['PT · EN · ES', 'Idiomas', '/svg/_icons/icon_16_internet.svg'],
  ['Moderado', 'Dificuldade', '/svg/_icons/icon_03_montain.svg'],
] as const;

const ITINERARY = [
  {
    day: 'Dia 1',
    icon: '/svg/_icons/icon_09_location.svg',
    distance: '12 km',
    level: 'Moderado',
    lead: '6h saída',
    body: ' de Lençóis → 8h Vila do Guiné (2h de carro) → 3h de trilha (1h subida íngreme + 2h plano) até o Mirante da Rampa → +1h30 até as Cachoeiras do Funis, Altina e Bananeiras → 17h hospedagem → 19h jantar.',
    note: 'A subida íngreme é a primeira cobrança do Pati.',
  },
  {
    day: 'Dia 2',
    icon: '/svg/_icons/icon_03_montain.svg',
    distance: '8 km',
    level: 'Alto',
    lead: '8h saída',
    body: ' → Morro do Castelo, subida de +250m até 1.200m de altitude (60–80 min) → 2 mirantes no cume + Gruta da Lapinha, uma das grutas mais raras do mundo → retorno pelo mesmo caminho → cachoeira próxima, se houver tempo.',
    note: 'O dia mais exigente da travessia.',
    alert: 'Dia mais exigente',
  },
  {
    day: 'Dia 3',
    icon: '/svg/_icons/icon_08_send.svg',
    distance: '23 km',
    level: 'Moderado',
    lead: '8h despedida',
    body: ' do Pati → 3h até o Mirante do Cachoeirão (+280m; em época chuvosa, até 16 cascatas ao redor do vale) → lanche → Gerais do Rio Preto → Descida dos Aleixos → transfer de 80km → ~19h em Lençóis.',
  },
] as const;

const LANDMARKS = [
  ['3 pontos de banho', 'Ao longo do roteiro', '/svg/figma/pati-3/landmark-water.svg', 'lg:w-[281px]'],
  ['Gerais do Rio Preto', '', '/svg/figma/pati-3/landmark-river.svg', 'lg:w-[188px]'],
  ['Mirante da Rampa', 'Entrada do Vale', '/svg/figma/pati-3/landmark-view.svg', 'lg:w-[292px]'],
  ['Mirante do Cachoeirão', '280m · até 16 cascatas', '/svg/figma/pati-3/landmark-waterfall.svg', 'lg:w-[280px]'],
  ['Morro do Castelo', '1.200m de altitude', '/svg/figma/pati-3/landmark-mountain.svg', 'lg:w-[280px]'],
  ['Gruta da Lapinha', 'Uma das mais raras do mundo', '/svg/figma/pati-3/landmark-cave.svg', 'lg:w-[280px]'],
  ['Cachoeiras do Funis, Altina e Bananeiras', '', '/svg/figma/pati-3/landmark-waterfall.svg', 'lg:w-[280px]'],
  ['Descida dos Aleixos', '', '/svg/figma/pati-3/landmark-descent.svg', 'lg:w-[188px]'],
] as const;

const PRICES = [
  ['1 pessoa', 'R$ 2.700', 'R$ 2.100'],
  ['2 pessoas', 'R$ 2.200', 'R$ 1.900'],
  ['3 pessoas', 'R$ 2.100', 'R$ 1.700'],
  ['4 pessoas+', 'R$ 1.900', 'R$ 1.500'],
] as const;

const TRIPADVISOR_URL =
  'https://www.tripadvisor.com.br/Attraction_Review-g635725-d23344029-Reviews-Mamut_Agency_Trekking_Chapada_Diamantina-Lencois_State_of_Bahia.html';

const FAQS = [
  {
    type: 'checklist',
    title: 'Checklist — o que levar',
    intro:
      'Itens marcados com * são obrigatórios. A falta de qualquer obrigatório impossibilita a participação — conferimos na reserva e no check-in.',
    requiredColumns: [
      ['Água (1,5L/pessoa)', 'Roupas leves', 'Boné/chapéu', 'Mochila 35L+', 'Protetor solar', 'Higiene pessoal', 'Mochila de ataque'],
      ['Tênis/bota de caminhada', 'Roupas de banho', 'Lanche/fruta extra', 'Capa de chuva (corpo + mochila)', 'Remédios pessoais', 'Documentos', 'Lanterna de cabeça'],
    ],
    recommendedColumns: [
      ['Meias extras', 'Bastão'],
      ['Toalha de secagem rápida', 'Power bank'],
    ],
    note: 'Não quer carregar peso? Há carregadores pessoais (custo adicional).',
  },
  {
    type: 'included',
    title: 'O que está incluso / não incluso',
    included: ['Guia de Montanha APH e bilíngue', 'Rastreador SPOT X via satélite', 'Transfer Lençóis ↔ Guiné (160km ida/volta)', 'Hospedagem 2 noites', 'Seguro aventura', 'Alimentação completa', 'Kit de primeiros socorros', 'Guarda-volumes durante a atividade', 'Banho antes/após', 'Sala de espera'],
    excluded: ['Qualquer item não listado', 'Transfer Salvador ↔ Lençóis (opcional)', 'Café do 1º dia', 'Bebidas extras', 'Equipamento pessoal', 'Evacuação médica', 'Carregadores/mulas (opcional)', 'Hotéis/refeições antes/após (opcional)', 'Gorjetas'],
  },
  {
    type: 'safety',
    title: 'Segurança detalhada e riscos',
    lead: 'O mamute protege o bando. Sempre.',
    body: 'Todos os guias são condutores locais com certificação APH (Atendimento Pré-Hospitalar) e CMC (Competências Mínimas de Condução) conforme ABNT; alguns com WAFA. Todos portam kit de primeiros socorros para áreas remotas. Em operação: radiocomunicadores VHF/UHF + comunicador satélite SPOT X com S.O.S.',
    warning: 'Atividades em ambiente natural envolvem riscos inerentes — terreno irregular, animais peçonhentos, clima. O Vale do Pati é área remota: um resgate pode levar mais de 5 horas para iniciar. Evacuação médica NÃO está inclusa. Há estrutura limitada de remoção por mula (limite 110kg) — consulte o atendimento.',
    footer: 'Seguir as orientações dos guias e portar os itens obrigatórios do checklist é condição para participar.',
  },
  {
    type: 'payment',
    title: 'Formas de pagamento',
    paragraphs: [
      'Sinal de 50% para confirmar a reserva, via transferência, depósito ou boleto. Os 50% restantes no check-in em dinheiro (ou depósito até 2 dias úteis antes).',
      'Envie o comprovante com: data confirmada, nome completo e CPF de cada participante.',
      'Cartão: +5%, em até 12x (PagSeguro). Internacional: consulte o atendimento.',
    ],
  },
  {
    type: 'cancellation',
    title: 'Política de cancelamento',
    intro: 'Cancelamento pelo passageiro segue a deliberação normativa nº 161/1985 da EMBRATUR:',
    refunds: [
      ['30+ dias antes', 'devolve 90%'],
      ['21–29 dias', 'devolve 80%'],
      ['7–20 dias', 'devolve 50%'],
      ['Menos de 7 dias', 'sem devolução'],
      ['Durante o pacote', 'sem reembolso'],
    ],
    paragraphs: [
      'Antes de cancelar: você pode indicar um substituto ou deixar o valor em crédito. Taxa de reserva: 10% em caráter de multa se cancelar após a confirmação.',
      'No-show: não comparecer implica perda total do valor. A Mamut pode alterar o roteiro quando o clima comprometer a segurança; a atividade acontece mesmo em dia de chuva, salvo força maior.',
    ],
  },
  {
    type: 'technical',
    title: 'Ficha técnica completa e documentos',
    facts: [
      ['Categoria', 'Trekking com pernoite'],
      ['Origem', 'Lençóis'],
      ['Percurso de carro', '160 km'],
      ['Idade mínima', '18 anos (menores c/ responsável)'],
    ],
    requirements: ['Condicionamento para subidas/descidas em terreno acidentado', 'Atravessar rios', 'Caminhar longas distâncias por vários dias', 'Informar restrições alimentares e necessidade de quarto privativo na reserva', 'Reservas confirmadas não têm reajuste'],
    documents: [
      ['Termo de Responsabilidade (PDF)', SITE.whatsappUrl],
      ['Classificação de Nível das Atividades', SITE.whatsappUrl],
    ],
  },
] satisfies readonly PatiFaqItem[];

const DIRECTION_CONTRACT = `<!--
THESIS: Uma travessia documental conduzida por quem pertence ao Vale; recusa o catálogo turístico genérico.
OWN-WORLD: Pedra noturna, verde-mata funcional, amarelo ancestral, Mergo editorial, Brutal Milk operacional, fotografia ampla e line art do bando.
STORY: O visitante reconhece o Pati, entende esforço, roteiro, segurança e preço, e conversa com a equipe pelo WhatsApp.
FIRST VIEWPORT: Wordmark, chips, título monumental, galeria assimétrica e card de reserva com caminhantes sobrepostos; CTA permanece visível sem competir com a paisagem.
FORM: Frame Figma aprovado pelo usuário, decisão fixada acima do roll; seed b6829298.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export function PatiThreeDayExperience() {
  return (
    <article className="pati-three-day-page overflow-x-clip pb-[calc(104px+env(safe-area-inset-bottom))] lg:pb-0">
      <span hidden aria-hidden data-design-seed="b6829298" dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT }} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        name: 'Vale do Pati em 3 Dias',
        description: 'A travessia que reorganiza o que você chama de natureza.',
        image: `${SITE.url}/img/vale-do-pati/vale-do-pati-04.webp`,
        touristType: 'Trekking / ecoturismo',
        provider: { '@type': 'TravelAgency', name: SITE.name, url: SITE.url },
        offers: { '@type': 'Offer', price: 1500, priceCurrency: 'BRL', availability: 'https://schema.org/InStock' },
      }} />
      <Hero />
      <Story />
      <Itinerary />
      <Landmarks />
      <Pricing />
      <TrustAndReviews />
      <Faq />
      <FinalCta />
      <PatiMobileBooking />
    </article>
  );
}

function Hero() {
  return (
    <Section padding="none" container={false} className="relative isolate overflow-hidden pt-20 pb-20 lg:pb-24">
      <Image src="/svg/screen_destinos_vale-do-pati-session-01_backgroud.svg" alt="" width={1920} height={880} unoptimized priority className="pati-hero-background pointer-events-none absolute top-55.5 left-1/2 z-0 h-auto w-[1920px] max-w-none -translate-x-1/2 opacity-30" />
      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_316px] lg:items-end">
        <div className="flex min-w-0 flex-col gap-8">
          <header className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <InfoChip><span aria-hidden className="size-3 rounded-full bg-accent-line-art" />Moderado</InfoChip>
              <InfoChip>45 km</InfoChip>
              <InfoChip>Origem: Lençóis</InfoChip>
              <InfoChip>Em grupo</InfoChip>
            </div>
            <Heading as="h1" size="hero" balance className="max-w-218.5 max-lg:text-display-lg lg:text-display-xl!">
              Vale do Pati em <span className="text-brand-strong">3 Dias.</span>
            </Heading>
            <Heading as="p" size="card" balance className="max-w-180">
              A travessia que reorganiza o que você chama de <span className="text-brand-strong">natureza</span>.
            </Heading>
          </header>
          <PatiHeroGallery />
        </div>
        <BookingCard />
        </div>

        <div className="mt-12 flex flex-col items-center gap-8">
        <Heading as="p" size="quote" balance className="text-center">
          Cachoeiras e casas de nativos a 1.000m de altitude. Guiado por quem nasceu aqui.
        </Heading>
        <div className="flex w-full flex-col">
          <dl className="grid w-full overflow-hidden rounded-panel-lg border border-line bg-surface-muted sm:grid-cols-2 lg:grid-cols-4">
            {STATS.slice(0, 4).map(([value, label, icon]) => (
              <div key={label} className="flex min-h-32 flex-col items-center justify-center gap-1.5 border-line px-4 py-6 text-center max-sm:border-b sm:odd:border-r lg:border-r lg:last:border-r-0">
                <AssetIcon src={icon} className="size-5.5" />
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-xl">{value}</dd>
                <Text as="div" size="xs" weight="light" tone="secondary">{label}</Text>
              </div>
            ))}
          </dl>
          <dl className="grid w-full overflow-hidden rounded-panel-lg border border-line bg-surface-muted sm:grid-cols-2 lg:grid-cols-4">
            {STATS.slice(4, 8).map(([value, label, icon]) => (
              <div key={label} className="flex min-h-32 flex-col items-center justify-center gap-1.5 border-line px-4 py-6 text-center max-sm:border-b sm:odd:border-r lg:border-r lg:last:border-r-0">
                <AssetIcon src={icon} className="size-5.5" />
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-xl">{value}</dd>
                <Text as="div" size="xs" weight="light" tone="secondary">{label}</Text>
              </div>
            ))}
          </dl>
        </div>
        <nav aria-label="Atalhos desta aventura" className="flex flex-wrap justify-center gap-2">
          {[
            ['Itinerário', '#itinerario'],
            ['Preço', '#preco'],
            ['Incluso', '#informacoes'],
            ['Antes de reservar', '#duvidas'],
          ].map(([label, href]) => (
            <Button
              key={href}
              href={href}
              variant="outline"
              size="sm"
              className="min-h-11! border-gray-500! px-6! py-3! text-gray-500!"
            >
              {label}
            </Button>
          ))}
        </nav>
        </div>
      </Container>
    </Section>
  );
}

function InfoChip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Badge
      variant="outline"
      size="sm"
      className={cn('min-h-8.5 gap-2 bg-surface-muted px-3.5! py-1.75! text-sm!', className)}
    >
      {children}
    </Badge>
  );
}


function BookingCard() {
  return (
    <div className="relative">
      <Image src="/svg/about/story-walkers.svg" alt="" width={290} height={114} unoptimized className="pointer-events-none absolute left-1/2 -top-23 hidden h-26 w-65.75 -translate-x-1/2 object-contain lg:block" />
      <aside id="pati-booking-card" className="relative rounded-panel-lg border border-line-strong bg-surface-muted p-6">
      <div className="relative flex flex-col gap-6">
        <div className="flex flex-col gap-2 border-b border-line-strong pb-6">
          <Text size="sm" weight="light" tone="secondary">A partir de</Text>
          <div className="flex flex-wrap items-end gap-2">
            <Heading as="p" size="section">R$ 1.500</Heading>
            <Text size="sm" weight="light" tone="secondary" className="pb-1">/ pessoa</Text>
          </div>
        </div>
        <ul className="flex flex-col gap-2.5 text-sm font-light text-content-secondary">
          <li>Saída de Lençóis às 6h00</li>
          <li>TripAdvisor — Certificado de Excelência</li>
          <li>50% de sinal para confirmar reserva</li>
        </ul>
        <PatiBookingTrigger />
        <div className="flex flex-col gap-3 border-t border-line-strong pt-6 text-center">
          <Text size="sm" weight="light" tone="muted">Para grupos de <strong className="font-semibold">4 pessoas</strong> ou mais:</Text>
          <Button href="#preco" variant="outline" block>Ver tabela de preços</Button>
          <Text size="xs" weight="light" tone="subtle">Respondemos em até 2h<br />PT · EN · ES</Text>
        </div>
      </div>
      </aside>
    </div>
  );
}

function Story() {
  return (
    <Section padding="tall" container={false} className="relative isolate overflow-hidden border-t border-line">
      <Image src="/svg/screen_destinos_vale-do-pati-session-03_backgroud.svg" alt="" width={962} height={915} unoptimized className="pati-story-background pointer-events-none absolute top-0 left-1/2 z-0 h-auto w-240.5 max-w-none opacity-12" />
      <Container className="relative z-10 flex flex-col gap-16 lg:gap-20">
      <div className="max-w-3xl">
        <Heading as="h2" size="hero" balance className="max-lg:text-display-lg lg:text-display-xl!">O trek mais famoso<br />da Chapada Diamantina.</Heading>
        <div className="mt-4 flex flex-col gap-4 text-lg font-light leading-relaxed text-content-secondary">
          <p>O Vale do Pati fica a mil metros de altitude e entrega uma diversidade de paisagens rara no Brasil: remanescentes de Mata Atlântica, campos rupestres e os Gerais do Rio Preto. Uma região que abrigou camponeses há dois séculos e ainda guarda, em 14 casas vivas, a memória de quem nunca saiu daqui.</p>
          <p>O terreno é real: sol, chuva, lama, subidas íngremes, travessia de rio. Não é passeio. É travessia — o Pati cobra de quem quer atravessá-lo. Nosso roteiro faz a volta completa pelos pontos mais emblemáticos do Vale.</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Heading as="h3" size="quote">Quando caminhar no Pati?</Heading>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <SeasonCard title="Verão e Outono" months="Jan – Mai" points={['Cachoeiras cheias, volume máximo de água', 'Mais lama nas trilhas']} />
          <SeasonCard title="Inverno e Primavera" months="Jun – Dez" points={['Terreno mais firme e seco', 'Menos volume de água nas cachoeiras']} />
          <EditorialCard title="Mesa farta" body="Café e jantar preparados nos alojamentos, cardápio farto que varia a cada dia. Nas caminhadas, piquenique equilibrado. Café do 1º dia não incluso — tome em Lençóis antes da saída." />
          <EditorialCard title="Hospedagem" body="Hospedagem em casas de nativos, quartos compartilhados. Precisa de quarto privativo? Informe na reserva e verificamos disponibilidade." />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Heading as="h3" size="quote" tone="brand">O Vale também existe em 4 e 5 dias.</Heading>
        <div className="flex flex-wrap gap-5">
          <RelatedTrail href="/pt/aventuras/vale-do-pati-4-dias" image="/img/vale-do-pati/vale-do-pati-14.webp" level="Moderado / Avançado" title="Vale do Pati · 4 Dias" />
          <RelatedTrail href="/pt/aventuras/vale-do-pati-5-dias" image="/img/vale-do-pati/vale-do-pati-20.webp" level="Avançado" title="Vale do Pati · 5 Dias" />
        </div>
      </div>
      </Container>
    </Section>
  );
}

function SeasonCard({ title, months, points }: { title: string; months: string; points: readonly string[] }) {
  return (
    <article className="flex min-h-60 flex-col gap-3 rounded-card border border-line-strong bg-surface-muted p-6">
      <div className="flex items-start justify-between gap-3"><Heading as="h4" size="quote">{title}</Heading><Badge variant="outline" size="sm">{months}</Badge></div>
      <ul className="mt-auto flex flex-col gap-2 text-sm font-light text-content-secondary">
        {points.map((point) => <li key={point} className="flex gap-2"><span aria-hidden className="text-brand-strong">→</span><span>{point}</span></li>)}
      </ul>
    </article>
  );
}

function EditorialCard({ title, body }: { title: string; body: string }) {
  return <article className="flex min-h-60 flex-col justify-center gap-2 rounded-card bg-surface-muted p-6"><Heading as="h4" size="quote">{title}</Heading><Text size="sm" weight="light" tone="secondary" pretty>{body}</Text></article>;
}

function RelatedTrail({ href, image, level, title }: { href: string; image: string; level: string; title: string }) {
  const difficultyEmoji = level.startsWith('Avançado') ? '🔴' : '🟡';
  return (
    <article className="grid h-40 w-full grid-cols-1 items-center gap-5 overflow-hidden rounded-card-lg border border-line bg-surface-muted px-5 sm:w-95.5 sm:grid-cols-[140px_202px] sm:px-0 sm:pr-5">
      <div className="relative hidden h-40 w-35 shrink-0 overflow-hidden rounded-card-lg sm:block"><Image src={image} alt="" fill sizes="140px" className="object-cover" /></div>
      <div className="flex h-30 min-w-0 flex-col items-start justify-center gap-2.5"><Badge variant="soft" size="sm"><span aria-hidden>{difficultyEmoji}</span> {level}</Badge><Heading as="h4" size="quote" className="text-xl/[27px]! whitespace-nowrap">{title}</Heading><Button href={href} size="sm" arrow className="min-h-11 w-full">Explorar essa versão</Button></div>
    </article>
  );
}

function Itinerary() {
  return (
    <Section id="itinerario" padding="tall" containerClassName="flex flex-col gap-8" labelledBy="itinerary-heading">
      <Heading id="itinerary-heading" as="h2" size="section">O itinerário da travessia.</Heading>
      <PatiItinerary items={ITINERARY} />
    </Section>
  );
}

function Landmarks() {
  return (
    <Section padding="tall" container={false} className="relative isolate overflow-hidden">
      <Image
        src="/svg/figma/pati-3/landmarks-background.svg"
        alt=""
        width={1312}
        height={618}
        unoptimized
        className="pati-landmarks-background pointer-events-none absolute right-0 bottom-0 z-0 hidden h-auto w-[72%] max-w-none opacity-75 lg:block"
      />
      <Container className="relative z-10">
        <div className="flex max-w-220.25 flex-col gap-6">
          <Heading as="h2" size="section">Os pontos mais emblemáticos do Vale.</Heading>
          <div className="grid gap-5 sm:grid-cols-2 lg:flex lg:flex-wrap">
            {LANDMARKS.map(([title, label, icon, width]) => (
              <Card
                key={title}
                as="article"
                surface="muted"
                padding="none"
                className={`group/landmark min-h-38 gap-2.5 p-6 transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-brand-ink hover:shadow-card focus-within:-translate-y-1 focus-within:border-brand focus-within:bg-brand focus-within:text-brand-ink motion-reduce:transform-none ${width}`}
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-line-strong transition-colors duration-300 group-hover/landmark:border-brand-ink group-focus-within/landmark:border-brand-ink">
                  <AssetIcon
                    src={icon}
                    className="size-5"
                    colorClassName="bg-content-muted transition-colors duration-300 group-hover/landmark:bg-brand-ink"
                  />
                </span>
                <div className="mt-auto">
                  <Heading as="h3" size="quote" className="text-inherit">{title}</Heading>
                  {label ? <Text size="sm" weight="light" tone="inherit" className="opacity-65">{label}</Text> : null}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Pricing() {
  return (
    <Section id="preco" padding="tall" container="prose" containerClassName="flex !max-w-[1009px] flex-col items-center gap-8 text-center" labelledBy="pricing-heading">
      <Heading id="pricing-heading" as="h2" size="section" className="text-display-sm!">Escolha o formato ideal para o seu grupo.</Heading>
      <div className="grid w-full gap-3 sm:hidden">
        {PRICES.map(([people, privatePrice, groupPrice]) => (
          <article key={people} className="rounded-card border border-line-strong bg-surface-muted p-5 text-left">
            <Heading as="h3" size="quote">{people}</Heading>
            <dl className="mt-4 grid grid-cols-2 gap-4 border-t border-line pt-4">
              <div><dt className="text-xs text-content-secondary">Pacote privado</dt><dd className="font-display text-display-xs">{privatePrice}</dd></div>
              <div><dt className="text-xs text-content-secondary">Em grupo</dt><dd className="font-display text-display-xs text-brand-strong">{groupPrice}</dd></div>
            </dl>
          </article>
        ))}
      </div>
      <div className="hidden w-full overflow-hidden rounded-card border border-line-strong bg-surface-muted sm:block">
        <table className="w-full border-collapse text-center">
          <thead><tr className="border-b border-line text-[11px] font-semibold tracking-[0.08em] text-content-secondary uppercase"><th aria-hidden className="w-[19%]" /><th scope="col" className="px-6 py-3">Nº de pessoas</th><th scope="col" className="px-6 py-3">Pacote privado</th><th scope="col" className="px-6 py-3">Em grupo</th><th aria-hidden className="w-[19%]" /></tr></thead>
          <tbody>{PRICES.map(([people, privatePrice, groupPrice]) => <tr key={people} className="border-b border-line last:border-b-0"><td aria-hidden /><th scope="row" className="px-6 py-3 text-sm font-normal text-content-secondary">{people}</th><td className="px-6 py-3 font-display text-xl">{privatePrice}</td><td className="px-6 py-3 font-display text-xl font-semibold text-brand-strong">{groupPrice}</td><td aria-hidden /></tr>)}</tbody>
        </table>
      </div>
      <Text size="sm" weight="light" tone="secondary" pretty>Dinheiro, transferência ou boleto. <strong className="font-semibold text-content">Cartão: +5%, em até 12x (PagSeguro). Reserva confirmada com 50% de sinal:</strong> restante no check-in. Transferência internacional ou grupo maior: consulte o atendimento.</Text>
      <Button href={SITE.whatsappUrl} arrow>Reservar pelo WhatsApp</Button>
    </Section>
  );
}

const TRUST = [
  ['Guias certificados', 'APH e CMC (ABNT), alguns com WAFA', '/svg/figma/pati-3/trust-guide.svg'],
  ['Comunicação via satélite', 'SPOT X com botão de S.O.S.', '/svg/figma/pati-3/trust-satellite.svg'],
  ['Seguro aventura', 'Kit de primeiros socorros incluso', '/svg/figma/pati-3/trust-insurance.svg'],
  ['Certificado de excelência', 'Avaliações verificadas no TripAdvisor', '/svg/figma/pati-3/trust-certificate.svg'],
] as const;

function TrustAndReviews() {
  return (
    <Section id="informacoes" padding="none" container={false} className="relative isolate overflow-x-clip border-y border-line max-lg:py-12 lg:pt-10">
      <Image
        src="/svg/screen_destinos_vale-do-pati-session-05_backgroud.svg"
        alt=""
        width={1312}
        height={618}
        unoptimized
        className="pati-trust-background pointer-events-none absolute top-[17%] left-[20%] z-0 h-auto w-[80.6%] max-w-none opacity-20"
      />
      <Container className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <div className="relative flex max-w-146.25 flex-col gap-12 lg:sticky lg:top-24 lg:pb-16">
          <div className="flex flex-col items-start gap-6">
            <Badge variant="outline" size="sm">Avaliações verificadas · TripAdvisor</Badge>
            <Heading as="h2" size="hero" balance className="max-lg:text-display-lg">
              Quem já caminhou com a gente <span className="text-brand-strong">confia!</span>
            </Heading>
          </div>

          <div className="grid max-w-96 grid-cols-1 gap-5 sm:grid-cols-2">
            {TRUST.map(([title, body, icon]) => (
              <Card
                key={title}
                as="article"
                surface="muted"
                padding="none"
                className="min-h-0 gap-3 p-6 sm:min-h-51"
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-brand">
                  <AssetIcon src={icon} className="size-5" />
                </span>
                <div className="mt-auto">
                  <Heading as="h3" size="quote">{title}</Heading>
                  <Text size="sm" weight="light" tone="secondary" pretty>{body}</Text>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href={SITE.whatsappUrl} arrow>Reservar pelo WhatsApp</Button>
            <Button href={TRIPADVISOR_URL} variant="outline">Conheça o nosso TripAdvisor</Button>
          </div>
        </div>

        <ScrollFeedbackStack testimonials={HOME_TESTIMONIALS} trailing={false} />
      </Container>
    </Section>
  );
}

function Faq() {
  return (
    <Section id="duvidas" padding="default" container="prose" containerClassName="flex flex-col gap-8" labelledBy="faq-heading">
      <header className="flex flex-col items-center gap-4 text-center"><Heading id="faq-heading" as="h2" size="section">Tudo que você precisa saber.</Heading><Text size="sm" weight="light" tone="secondary" pretty className="max-w-170">Detalhes de execução para tirar suas dúvidas antes de embarcar nesta aventura com o bando Mamut.</Text></header>
      <PatiFaqList faqs={FAQS} />
    </Section>
  );
}

function FinalCta() {
  return (
    <Section padding="none" className="pb-20 lg:pb-27">
      <MediaCard
        as="section"
        overlay="none"
        radius="panelLg"
        backdrop="none"
        className="min-h-100 max-lg:rounded-panel lg:h-116.5 lg:bg-media-backdrop lg:shadow-image-outline"
        contentLayer="flow"
        contentClassName="flex min-h-100 items-center px-7 py-12 sm:px-14 lg:h-full lg:min-h-0 lg:px-22.25 lg:py-0"
        media={
          <>
            <Image
              src="/img/figma/destinations/vale-do-pati-3/cta-morro-do-castelo.png"
              alt="Morro do Castelo cercado por flores no Vale do Pati"
              fill
              sizes="(min-width:1280px) 1216px, 100vw"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-linear-to-r from-black/75 via-black/48 to-black/15" />
          </>
        }
      >
        <div className="relative z-10 flex max-w-154 flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Heading as="h2" size="hero" tone="onMedia" balance className="max-lg:text-[clamp(28px,8.4vw,36px)]">
              Sua trilha começa<br />com uma mensagem.
            </Heading>
            <Text size="sm" weight="light" tone="onMediaSoft" pretty className="max-w-131.5 lg:text-xl">
              Fale com a gente pelo WhatsApp. Descubra qual o seu roteiro ideal para conhecer a Chapada Diamantina e como se preparar.
            </Text>
          </div>
          <Button href={SITE.whatsappUrl} arrow className="self-start max-sm:w-full">Entrar para o bando</Button>
        </div>

        <Image
          src="/svg/humans-assets-yellow.svg"
          alt=""
          width={784}
          height={246}
          unoptimized
          className="pointer-events-none absolute right-6 bottom-0 hidden h-auto w-[42%] max-w-125 lg:block xl:right-10"
        />
      </MediaCard>
    </Section>
  );
}
