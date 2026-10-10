'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  MapPin,
  Minus,
  Mountain,
  Navigation,
  Pause,
  Play,
  Plus,
  Users,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui';
import { SITE } from '@/lib/site';
import { TORUS_DAYS, TORUS_PACKAGES, type TorusPackageKey } from './torus-data';
import styles from './torus.module.css';

// THESIS: Transform a complex New Year trip into one calm, sequential decision instead of a generic event landing page.
// OWN-WORLD: Dark stone surfaces, documentary media, Mergo display type, forest-green actions and fine mineral outlines.
// STORY: Understand the festival, compare the two packages, size the group, inspect every travel day and reserve with context.
// FIRST VIEWPORT: Editorial offer and price on the left; the official Torus film stands tall on the right.
// FORM: User-pinned Mamut Trekking Evento.zip and 01–09 screenshots; every supplied section remains present.
// FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md.

const TICKET_URL = 'https://shotgun.live/pt-br/festivals/torus-festival';
const MAP_URL = 'https://maps.google.com/maps?q=Iramaia%2C%20Bahia';

const STATS = [
  { Icon: CalendarDays, value: '29 dez – 4 jan', label: 'Datas do festival' },
  { Icon: MapPin, value: 'Iramaia, BA', label: 'Local' },
  { Icon: Navigation, value: 'Salvador', label: 'Saída' },
  { Icon: Mountain, value: '504 km', label: 'Salvador → Iramaia' },
  { Icon: Users, value: 'Mín. 2 pessoas', label: 'Por reserva' },
] as const;

function formatPrice(value: number) {
  return `R$ ${value.toLocaleString('pt-BR')}`;
}

function bookingUrl(packageName: string, people: number) {
  const message = `Olá! Quero reservar o pacote ${packageName} para o Festival Torus (Réveillon) · ${people} pessoas.`;
  return `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function TorusFestivalExperience() {
  const [selectedPackage, setSelectedPackage] = useState<TorusPackageKey>('passeios');
  const [people, setPeople] = useState(2);
  const [openFaq, setOpenFaq] = useState<'payment' | 'cancellation' | null>('payment');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentPackage = TORUS_PACKAGES.find((item) => item.key === selectedPackage) ?? TORUS_PACKAGES[1];
  const reserveUrl = bookingUrl(currentPackage.name, people);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncVideo = () => {
      const video = videoRef.current;
      if (!video) return;
      if (query.matches) {
        video.pause();
        setIsVideoPlaying(false);
      } else {
        void video.play().then(() => setIsVideoPlaying(true)).catch(() => setIsVideoPlaying(false));
      }
    };

    syncVideo();
    query.addEventListener('change', syncVideo);
    return () => query.removeEventListener('change', syncVideo);
  }, []);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().then(() => setIsVideoPlaying(true)).catch(() => setIsVideoPlaying(false));
    } else {
      video.pause();
      setIsVideoPlaying(false);
    }
  };

  return (
    <article className={styles.page}>
      <section className={styles.hero} aria-labelledby="torus-title" data-scroll-reveal="off">
        <div className={styles.heroArt} aria-hidden />
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <div className={styles.badges} aria-label="Características do pacote">
              <span data-primary="true">Réveillon 2026</span>
              <span>Iramaia, BA</span>
              <span>Saída de Salvador</span>
              <span>Carro privado</span>
            </div>

            <h1 id="torus-title">Torus Festival<br />Chapada Diamantina.</h1>
            <p className={styles.heroLead}>
              Transfers de ida e volta para o Torus Festival em Iramaia, na Chapada Diamantina.
              Equipamentos de camping e passeios são opcionais.
            </p>

            <ul className={styles.heroFacts}>
              <li><CalendarDays aria-hidden />De segunda, 29 dez, às 10h até domingo, 4 jan 2026, às 10h</li>
              <li><MapPin aria-hidden />Iramaia, BA, 46770-000 · Brasil</li>
            </ul>

            <div className={styles.heroBooking}>
              <div className={styles.heroPrice}>
                <span>A partir de</span>
                <p><strong>R$ 1.500</strong><span>/ pessoa</span></p>
                <small>Mínimo 2 pessoas</small>
              </div>
              <div className={styles.heroActions}>
                <Button href="#pacotes" size="lg" arrow>Escolha o seu pacote</Button>
                <Button href={TICKET_URL} variant="outline" size="lg" external>Comprar ingresso</Button>
              </div>
            </div>
          </div>

          <figure className={styles.heroMedia}>
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/img/torus/torus-flyers.avif"
              aria-label="Vídeo do Torus Festival em Iramaia"
              onPlay={() => setIsVideoPlaying(true)}
              onPause={() => setIsVideoPlaying(false)}
            >
              <source src="/media/torus/torus-festival.mp4" type="video/mp4" />
            </video>
            <div className={styles.mediaShade} aria-hidden />
            <button
              type="button"
              className={styles.videoControl}
              onClick={toggleVideo}
              aria-label={isVideoPlaying ? 'Pausar vídeo do Torus Festival' : 'Reproduzir vídeo do Torus Festival'}
            >
              {isVideoPlaying ? <Pause aria-hidden /> : <Play aria-hidden />}
            </button>
            <figcaption>Torus Festival · Iramaia</figcaption>
          </figure>
        </div>
      </section>

      <section className={`${styles.container} ${styles.stats}`} aria-label="Ficha do evento" data-scroll-reveal="off">
        <dl>
          {STATS.map(({ Icon, value, label }) => (
            <div key={label}>
              <Icon aria-hidden />
              <dt>{value}</dt>
              <dd>{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="pacotes" className={`${styles.container} ${styles.packages}`} aria-labelledby="packages-title" data-scroll-reveal="off">
        <header className={styles.sectionHeading}>
          <h2 id="packages-title">Escolha o pacote ideal para o seu réveillon.</h2>
          <p>Os dois pacotes saem de Salvador em carro privado, com motorista. O ingresso do festival é comprado à parte.</p>
        </header>

        <div className={styles.packageGrid} role="radiogroup" aria-label="Pacotes do Torus Festival">
          {TORUS_PACKAGES.map((item) => {
            const selected = item.key === selectedPackage;
            return (
              <article key={item.key} className={styles.packageCard} data-selected={selected}>
                <label className={styles.packageSelect}>
                  <input
                    className={styles.srOnly}
                    type="radio"
                    name="torus-package"
                    value={item.key}
                    checked={selected}
                    onChange={() => setSelectedPackage(item.key)}
                  />
                  <span className={styles.packageTitle}>
                    <strong>{item.name}</strong>
                    <small>{item.fullName}</small>
                  </span>
                  <span className={styles.radioState}>
                    {selected ? 'Selecionado' : 'Selecionar'}
                    <span className={styles.radio} aria-hidden><span /></span>
                  </span>
                </label>

                <div className={styles.packagePrice}>
                  <span>A partir de</span>
                  <p><strong>{formatPrice(item.price)}</strong><span>por pessoa</span></p>
                  <small>Mínimo 2 pessoas</small>
                </div>

                <div className={styles.packageLists}>
                  <div>
                    <h3>Incluso</h3>
                    <ul>
                      {item.included.map((included) => <li key={included}><Check aria-hidden />{included}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3>Não inclui</h3>
                    <ul>
                      <li><X aria-hidden /><a href={TICKET_URL} target="_blank" rel="noopener noreferrer">Ingresso <ArrowUpRight aria-hidden /></a></li>
                      {item.excluded.map((excluded) => <li key={excluded}><X aria-hidden />{excluded}</li>)}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.bookingSummary} aria-live="polite">
          <div>
            <span>Pacote</span>
            <strong>{currentPackage.name}</strong>
          </div>
          <div className={styles.peoplePicker}>
            <span>Pessoas</span>
            <div>
              <button type="button" onClick={() => setPeople((value) => Math.max(2, value - 1))} disabled={people <= 2} aria-label="Diminuir pessoas"><Minus aria-hidden /></button>
              <strong>{people} pessoas</strong>
              <button type="button" onClick={() => setPeople((value) => Math.min(20, value + 1))} disabled={people >= 20} aria-label="Aumentar pessoas"><Plus aria-hidden /></button>
            </div>
          </div>
          <div className={styles.total}>
            <span>Total estimado</span>
            <strong>{formatPrice(currentPackage.price * people)}</strong>
            <small>{formatPrice(currentPackage.price)} × {people} pessoas</small>
          </div>
          <div className={styles.summaryActions}>
            <Button href={TICKET_URL} variant="outline" size="lg" external>Comprar ingresso</Button>
            <Button href={reserveUrl} size="lg" arrow external>Reservar pacote</Button>
          </div>
        </div>
        <p className={styles.paymentNote}>Valores por pessoa para pagamento em dinheiro, transferência ou boleto. Cartão de crédito e transferência internacional: consulte o atendimento. Respondemos em até 2h · PT · EN · ES</p>
      </section>

      <section className={`${styles.container} ${styles.aboutFestival}`} aria-labelledby="about-torus-title" data-scroll-reveal="off">
        <div className={styles.aboutCopy}>
          <h2 id="about-torus-title">O que é o Torus Festival?</h2>
          <p>O Torus Festival é um evento multicultural que une arte, cultura e sustentabilidade em um cenário natural único, um movimento voltado para o desenvolvimento sociocultural, comunitário, econômico e ambiental da região.</p>
          <p>O sonho de realizar um festival surge de experiências significativas e transformadoras vividas nesse ambiente. Elas criam um sentido mais forte de comunidade, onde todos compartilham o mesmo espaço e constroem conexões que podem continuar muito além do encontro.</p>
          <p>O principal objetivo é criar um movimento artístico que fortaleça as comunidades locais, buscando sempre a preservação da cultura e da natureza.</p>
        </div>
        <figure className={styles.flyer}>
          <Image src="/img/torus/torus-flyers.avif" alt="Flyer oficial do Torus Festival" fill sizes="(max-width: 760px) 100vw, 520px" />
        </figure>
      </section>

      <section className={styles.itineraryBand} aria-labelledby="itinerary-title" data-scroll-reveal="off">
        <div className={`${styles.container} ${styles.itinerary}`}>
          <header>
            <h2 id="itinerary-title">O itinerário do réveillon.</h2>
            <p>Como será a ordem dos transfers para o Torus Festival e dos passeios na Chapada Diamantina.</p>
            <small>O itinerário pode sofrer alterações devido às condições climáticas ou qualquer fator de força maior que os responsáveis julguem importante.</small>
            <small>É possível montar um pacote personalizado para o seu grupo. Fale com nosso atendimento para saber mais.</small>
          </header>

          <ol className={styles.days}>
            {TORUS_DAYS.map((day, index) => (
              <li key={`${day.date}-${day.weekday}`}>
                <div className={styles.dayDate}>
                  <time>{day.date}</time>
                  <span>{day.weekday}</span>
                </div>
                {day.festival ? (
                  <div className={styles.festivalDay}>
                    <strong>Dia {index + 1}</strong>
                    <span>Festival Torus</span>
                    {day.label && <em>{day.label}</em>}
                  </div>
                ) : (
                  <article className={styles.dayCard}>
                    <header>
                      <strong>Dia {index + 1}</strong>
                      <div>{day.facts?.map((fact) => <span key={fact}>{fact}</span>)}</div>
                    </header>
                    <h3>{day.title}</h3>
                    {day.description && <p>{day.description}</p>}
                  </article>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${styles.container} ${styles.location}`} aria-labelledby="location-title" data-scroll-reveal="off">
        <div className={styles.locationCopy}>
          <h2 id="location-title">Onde será o Torus Festival?</h2>
          <p className={styles.address}><MapPin aria-hidden />Iramaia, BA, 46770-000, Brasil</p>
          <p>São 504 km de estrada desde Salvador. O transfer leva o seu grupo em carro privado, com motorista, até o festival.</p>
          <Button href={MAP_URL} variant="outline" size="lg" arrow external>Abrir no Google Maps</Button>
        </div>
        <div className={styles.mapFrame}>
          <iframe
            title="Mapa de Iramaia, Bahia"
            src="https://maps.google.com/maps?q=Iramaia%2C%20Bahia&t=m&z=10&output=embed&iwloc=near"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className={`${styles.container} ${styles.faq}`} aria-labelledby="faq-title" data-scroll-reveal="off">
        <header className={styles.sectionHeading}>
          <h2 id="faq-title">Tudo que você precisa saber.</h2>
          <p>Pagamento e cancelamento antes de garantir o seu lugar no réveillon com o bando Mamut.</p>
        </header>

        <div className={styles.accordions}>
          <article className={styles.accordion}>
            <button type="button" aria-expanded={openFaq === 'payment'} aria-controls="torus-payment" onClick={() => setOpenFaq((value) => value === 'payment' ? null : 'payment')}>
              Formas de pagamento <span aria-hidden>{openFaq === 'payment' ? '−' : '+'}</span>
            </button>
            {openFaq === 'payment' && (
              <div id="torus-payment" className={styles.accordionContent}>
                <p>Sinal de 50% para confirmar a reserva, via transferência, depósito bancário ou boleto. Os 50% restantes são pagos no check-in em dinheiro ou por depósito bancário em até 2 dias úteis antes da atividade.</p>
                <p>Envie o comprovante de pagamento com as datas confirmadas, o nome completo e o CPF de cada participante.</p>
                <p>Cartão: acréscimo de 6%, em até 12x, de acordo com as taxas do PagSeguro, Mercado Pago e similares. Para transferência internacional, consulte o atendimento.</p>
                <p>Condições especiais para grupos estão disponíveis no nosso atendimento.</p>
                <small>Não incluso: hotéis e refeições antes e após o término da atividade; gorjetas referentes a serviços adicionais, como fotos e demais auxílios durante o passeio.</small>
              </div>
            )}
          </article>

          <article className={styles.accordion}>
            <button type="button" aria-expanded={openFaq === 'cancellation'} aria-controls="torus-cancellation" onClick={() => setOpenFaq((value) => value === 'cancellation' ? null : 'cancellation')}>
              Política de cancelamento <span aria-hidden>{openFaq === 'cancellation' ? '−' : '+'}</span>
            </button>
            {openFaq === 'cancellation' && (
              <div id="torus-cancellation" className={styles.accordionContent}>
                <p>O cancelamento pelo passageiro segue a deliberação normativa nº 161/1985 da EMBRATUR:</p>
                <dl className={styles.refunds}>
                  <div><dt>30+ dias antes</dt><dd>devolve 90%</dd></div>
                  <div><dt>21–29 dias</dt><dd>devolve 80%</dd></div>
                  <div><dt>7–20 dias</dt><dd>devolve 50%</dd></div>
                  <div><dt>Menos de 7 dias</dt><dd>sem devolução</dd></div>
                  <div><dt>Durante o pacote</dt><dd>sem reembolso</dd></div>
                </dl>
                <p>Antes de cancelar, você pode indicar um substituto ou deixar o valor em crédito para participar em outra data. Após a confirmação, uma taxa de 10% do roteiro é retida em caso de cancelamento.</p>
                <p>O não comparecimento na data, hora e local combinados implica perda total do valor pago. Quem deixar o grupo durante a viagem assume as despesas decorrentes, sem direito a reembolso.</p>
                <p>A Mamut pode alterar o roteiro quando o clima comprometer a segurança. Não há cancelamento por mau tempo, salvo força maior.</p>
              </div>
            )}
          </article>
        </div>
      </section>

      <section className={`${styles.container} ${styles.contact}`} aria-labelledby="torus-contact-title" data-scroll-reveal="off">
        <div className={styles.contactPanel}>
          <Image
            src="/img/about/hero-lencois.webp"
            alt=""
            fill
            sizes="(max-width: 1216px) 100vw, 1168px"
            quality={92}
          />
          <div className={styles.contactShade} aria-hidden />
          <div className={styles.contactContent}>
            <div>
              <h2 id="torus-contact-title">Seu réveillon começa com uma mensagem.</h2>
              <p>Fale com a gente pelo WhatsApp. Montamos um pacote personalizado para o seu grupo.</p>
            </div>
            <Button href={reserveUrl} size="lg" arrow external>Entrar para o bando</Button>
          </div>
        </div>
      </section>

      <div className={styles.mobileBar} aria-label="Reserva rápida">
        <div><span>A partir de</span><strong>{formatPrice(currentPackage.price)}</strong><small>por pessoa</small></div>
        <Button href={reserveUrl} size="sm" arrow external>Reservar</Button>
      </div>
    </article>
  );
}
