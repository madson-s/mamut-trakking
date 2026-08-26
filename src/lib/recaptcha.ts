import type { Locale } from '@/lib/site';

export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';

export const RECAPTCHA_ACOES = {
  contato: 'contato',
  participante: 'formulario_participante',
} as const;

export type RecaptchaAcao = (typeof RECAPTCHA_ACOES)[keyof typeof RECAPTCHA_ACOES];

const GOOGLE_HL: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en',
  es: 'es',
};

export function recaptchaLinks(locale: Locale) {
  const hl = GOOGLE_HL[locale];
  return {
    privacidade: `https://policies.google.com/privacy?hl=${hl}`,
    termos: `https://policies.google.com/terms?hl=${hl}`,
  };
}

export const RECAPTCHA_NOTA: Record<
  Locale,
  { antes: string; privacidade: string; entre: string; termos: string; depois: string }
> = {
  pt: {
    antes: 'Este site é protegido por reCAPTCHA: aplicam-se a ',
    privacidade: 'Política de Privacidade',
    entre: ' e os ',
    termos: 'Termos de Serviço',
    depois: ' do Google.',
  },
  en: {
    antes: 'This site is protected by reCAPTCHA — the Google ',
    privacidade: 'Privacy Policy',
    entre: ' and ',
    termos: 'Terms of Service',
    depois: ' apply.',
  },
  es: {
    antes: 'Este sitio está protegido por reCAPTCHA: se aplican la ',
    privacidade: 'Política de Privacidad',
    entre: ' y los ',
    termos: 'Términos de Servicio',
    depois: ' de Google.',
  },
};
