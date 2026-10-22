'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { AnimatePresence, motion as m, useReducedMotion } from 'motion/react';
import { Button, Heading, Text } from '@/components/ui';
import { PRIVACIDADE_HREF } from '@/components/privacidade/privacidade-content';
import type { Locale } from '@/lib/site';
import {
  CONSENT_CONTENT,
  CONSENT_COUNTRIES,
  CONSENT_PREVIEW_PARAM,
  CONSENT_STORAGE_KEY,
  GEO_STORAGE_KEY,
  OPEN_CONSENT_EVENT,
} from './consent-content';

/**
 * Google Tag Manager do site antigo (GA4, Google Ads e Pixel da Meta) com
 * Consent Mode v2 no modo BÁSICO: o contêiner só é carregado depois que se
 * sabe que pode — nada vai ao Google nem à Meta antes disso.
 *
 *   1. Já escolheu (localStorage)? "aceito" carrega; "recusado" não carrega.
 *   2. Ainda não: pergunta o país em `/api/geo` (guardado na sessão).
 *      Fora da Europa → carrega, como antes (LGPD, interesse legítimo).
 *      Europa, ou país desconhecido → mostra o aviso; só carrega no "Aceitar".
 *   3. O link "Cookies" do rodapé reabre o aviso em qualquer país. Recusar
 *      depois de aceitar desliga as tags (consent update negado, `ga-disable-*`
 *      e `fbq('consent', 'revoke')`) e apaga os cookies do Google e da Meta.
 *
 * Carregado, o contêiner recebe todos os sinais de consentimento como
 * concedidos (analytics e anúncios): ele só chega a carregar com permissão.
 * O que ele dispara (GA4, remarketing do Google Ads, Pixel) se edita no
 * painel do GTM — ver migracao/rastreamento-site-antigo.md.
 */

type Choice = 'granted' | 'denied';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

function readStorage(storage: 'localStorage' | 'sessionStorage', key: string) {
  try {
    return window[storage].getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(storage: 'localStorage' | 'sessionStorage', key: string, value: string) {
  try {
    window[storage].setItem(key, value);
  } catch {
    // Navegação anônima/armazenamento bloqueado: a escolha vale só nesta página.
  }
}

/** Cookies do GA (_ga*), do Google Ads (_gcl*) e da Meta (_fbp, _fbc). */
const TRACKING_COOKIE = /^(_ga|_gcl|_fbp|_fbc)/;

/** Apaga os cookies de rastreamento no domínio atual e no pai. */
function clearTrackingCookies() {
  const host = window.location.hostname;
  const domains = ['', host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`];
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim();
    if (!TRACKING_COOKIE.test(name)) return;
    domains.forEach((domain) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ''}`;
    });
  });
}

/** Precisa de consentimento? Pergunta o país uma vez por sessão. */
async function needsConsent(): Promise<boolean> {
  const preview = new URLSearchParams(window.location.search).get(CONSENT_PREVIEW_PARAM);
  if (preview === 'eu') return true;

  let country = readStorage('sessionStorage', GEO_STORAGE_KEY);
  if (country === null) {
    try {
      const response = await fetch('/api/geo', { cache: 'no-store' });
      const data = (await response.json()) as { country: string | null };
      country = data.country ?? '';
      writeStorage('sessionStorage', GEO_STORAGE_KEY, country);
    } catch {
      // Sem resposta, não dá para saber de onde é: na dúvida, pergunta.
      return true;
    }
  }
  // País vazio = sem cabeçalho de geolocalização (fora da Vercel): pergunta.
  return country === '' || CONSENT_COUNTRIES.has(country);
}

export function ConsentAnalytics({
  locale,
  gtmId,
  ga4Id,
}: {
  locale: Locale;
  gtmId: string;
  /** GA4 configurado dentro do contêiner — usado só para desligá-lo na recusa. */
  ga4Id: string;
}) {
  const c = CONSENT_CONTENT[locale];
  const reduce = useReducedMotion();
  const [load, setLoad] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const decide = async () => {
      const stored = readStorage('localStorage', CONSENT_STORAGE_KEY) as Choice | null;
      if (stored === 'granted') return setLoad(true);
      if (stored === 'denied') return;
      const ask = await needsConsent();
      if (cancelled) return;
      if (ask) setShowBanner(true);
      else setLoad(true);
    };
    void decide();

    const reopen = () => setShowBanner(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => {
      cancelled = true;
      window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
    };
  }, []);

  const choose = (choice: Choice) => {
    writeStorage('localStorage', CONSENT_STORAGE_KEY, choice);
    setShowBanner(false);

    const disableKey = `ga-disable-${ga4Id}` as const;
    const signals = (value: Choice) => ({
      analytics_storage: value,
      ad_storage: value,
      ad_user_data: value,
      ad_personalization: value,
    });
    if (choice === 'granted') {
      window[disableKey] = false;
      window.gtag?.('consent', 'update', signals('granted'));
      window.fbq?.('consent', 'grant');
      setLoad(true);
    } else {
      window[disableKey] = true;
      window.gtag?.('consent', 'update', signals('denied'));
      window.fbq?.('consent', 'revoke');
      clearTrackingCookies();
    }
  };

  return (
    <>
      {load ? (
        // Consentimento antes do contêiner, e depois o snippet oficial do GTM
        // (o mesmo que o site antigo tinha no Elementor). O <noscript> do GTM
        // fica de fora: sem JavaScript não há como perguntar o consentimento.
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  analytics_storage: 'granted',
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted'
});
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
      ) : null}

      <AnimatePresence>
        {showBanner ? (
          <m.div
            role="dialog"
            aria-modal="false"
            aria-labelledby="cookie-consent-title"
            aria-describedby="cookie-consent-text"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
            className="fixed inset-x-4 bottom-4 z-60 flex flex-col gap-4 rounded-card border border-line-strong bg-surface-muted p-5 text-content shadow-popover sm:right-auto sm:left-6 sm:max-w-md"
          >
            <div className="flex flex-col gap-2">
              <Heading as="h2" id="cookie-consent-title" size="label">
                {c.titulo}
              </Heading>
              <div id="cookie-consent-text">
                <Text size="sm" tone="secondary" leading="relaxed" pretty>
                  {c.texto}{' '}
                  <Link href={PRIVACIDADE_HREF[locale]} className="underline underline-offset-2 hover:text-brand-strong">
                    {c.politica}
                  </Link>
                </Text>
              </div>
            </div>
            {/* Mesmo tamanho e mesma ordem de leitura: recusar tem de ser tão
                fácil quanto aceitar. */}
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" size="sm" onClick={() => choose('denied')}>
                {c.recusar}
              </Button>
              <Button size="sm" onClick={() => choose('granted')}>
                {c.aceitar}
              </Button>
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

/** Link do rodapé que reabre o aviso. */
export function CookieSettingsButton({ label, className }: { label: string; className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
      className={className}
    >
      {label}
    </button>
  );
}
