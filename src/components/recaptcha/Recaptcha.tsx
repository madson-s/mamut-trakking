'use client';

import Script from 'next/script';
import { useCallback } from 'react';
import { Text } from '@/components/ui';
import {
  RECAPTCHA_NOTA,
  RECAPTCHA_SITE_KEY,
  recaptchaLinks,
  type RecaptchaAcao,
} from '@/lib/recaptcha';
import type { Locale } from '@/lib/site';

type Grecaptcha = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, opcoes: { action: string }) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

const ESPERA_MS = 10_000;
const INTERVALO_MS = 100;

async function esperarGrecaptcha(): Promise<Grecaptcha | null> {
  const limite = Date.now() + ESPERA_MS;
  while (Date.now() < limite) {
    if (window.grecaptcha?.execute) return window.grecaptcha;
    await new Promise((resolve) => setTimeout(resolve, INTERVALO_MS));
  }
  return null;
}

export function RecaptchaScript() {
  if (!RECAPTCHA_SITE_KEY) return null;
  return (
    <Script
      id="recaptcha-v3"
      src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
      strategy="afterInteractive"
    />
  );
}

export function useRecaptcha() {
  const obterToken = useCallback(async (acao: RecaptchaAcao): Promise<string | undefined> => {
    if (!RECAPTCHA_SITE_KEY) return undefined;

    const api = await esperarGrecaptcha();
    if (!api) return undefined;

    return new Promise<string | undefined>((resolve) => {
      api.ready(() => {
        api
          .execute(RECAPTCHA_SITE_KEY, { action: acao })
          .then(resolve)
          .catch(() => resolve(undefined));
      });
    });
  }, []);

  const validar = useCallback(
    async (acao: RecaptchaAcao): Promise<boolean> => {
      if (!RECAPTCHA_SITE_KEY) return true;

      const token = await obterToken(acao);
      if (!token) return true;

      try {
        const resposta = await fetch('/api/recaptcha', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token, acao }),
        });
        const corpo = (await resposta.json().catch(() => null)) as { ok?: boolean } | null;
        return resposta.ok && Boolean(corpo?.ok);
      } catch {
        return true;
      }
    },
    [obterToken],
  );

  return { obterToken, validar, ativo: Boolean(RECAPTCHA_SITE_KEY) };
}

export function RecaptchaNota({ locale }: { locale: Locale }) {
  if (!RECAPTCHA_SITE_KEY) return null;

  const nota = RECAPTCHA_NOTA[locale];
  const links = recaptchaLinks(locale);

  return (
    <Text size="xs" tone="subtle">
      {nota.antes}
      <a href={links.privacidade} target="_blank" rel="noopener noreferrer" className="underline">
        {nota.privacidade}
      </a>
      {nota.entre}
      <a href={links.termos} target="_blank" rel="noopener noreferrer" className="underline">
        {nota.termos}
      </a>
      {nota.depois}
    </Text>
  );
}
