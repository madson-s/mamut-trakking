import { SITE } from '@/lib/site';

// Rodapé burro: dados de contato vêm das constantes do site; os rótulos
// (idioma da página) vêm por props.
export function SiteFooter({
  tagline,
  contactLabel,
  rightsLabel,
}: {
  tagline: string;
  contactLabel: string;
  rightsLabel: string;
}) {
  return (
    <footer className="mt-24 border-t border-black/5 bg-white/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2">
        <div>
          <p className="font-display text-lg">{SITE.name}</p>
          <p className="mt-2 max-w-sm text-sm text-mamut-stone">{tagline}</p>
          <p className="mt-4 text-sm text-mamut-stone">{SITE.location}</p>
        </div>
        <div className="text-sm">
          <p className="font-medium">{contactLabel}</p>
          <ul className="mt-2 space-y-1 text-mamut-stone">
            <li>
              <a href={SITE.whatsappUrl} className="transition hover:text-mamut-ink">
                WhatsApp {SITE.whatsapp}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="transition hover:text-mamut-ink">
                {SITE.email}
              </a>
            </li>
            <li>Cadastur {SITE.cadastur}</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-8 text-xs text-mamut-stone">
        © {SITE.name}. {rightsLabel}
      </div>
    </footer>
  );
}
