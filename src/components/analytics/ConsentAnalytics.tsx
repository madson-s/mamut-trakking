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
 * Google Analytics 4 com Consent Mode v2 no modo BÁSICO: a tag só é carregada
 * depois que se sabe que pode — nada vai ao Google antes disso.
 *
 *   1. Já escolheu (localStorage)? "aceito" carrega; "recusado" não carrega.
 *   2. Ainda não: pergunta o país em `/api/geo` (guardado na sessão).
 *      Fora da Europa → carrega, como antes (LGPD, interesse legítimo).
 *      Europa, ou país desconhecido → mostra o aviso; só carrega no "Aceitar".
 *   3. O link "Cookies" do rodapé reabre o aviso em qualquer país. Recusar
 *      depois de aceitar desliga a tag (`ga-disable-*` + consent update) e
 *      apaga os cookies _ga.
 *
 * Os sinais de anúncio (ad_storage, ad_user_data, ad_personalization) ficam
 * sempre negados: o site não usa publicidade.
 */

type Choice = 'granted' | 'denied';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
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

/** Apaga os cookies do GA (_ga, _ga_XXXX) no domínio atual e no pai. */
function clearAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ['', host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`];
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim();
    if (!name.startsWith('_ga')) return;
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

export function ConsentAnalytics({ locale, measurementId }: { locale: Locale; measurementId: string }) {
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

    const disableKey = `ga-disable-${measurementId}` as const;
    if (choice === 'granted') {
      window[disableKey] = false;
      window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
      setLoad(true);
    } else {
      window[disableKey] = true;
      window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
      clearAnalyticsCookies();
    }
  };

  return (
    <>
      {load ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  analytics_storage: 'granted',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied'
});
gtag('js', new Date());
gtag('config', '${measurementId}');`}
          </Script>
        </>
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
