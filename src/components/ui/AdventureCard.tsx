import Link from 'next/link';
import Image from 'next/image';
import { formatPrice, type Locale } from '@/lib/site';
import { MetaList } from './MetaList';

// Card de aventura usado na Home (destaques) e no hub. Recebe tudo por props —
// nenhum dado é buscado; a página passa o conteúdo inline.
export function AdventureCard({
  href,
  image,
  title,
  level,
  distance,
  summary,
  price,
  fromLabel,
  locale,
}: {
  href: string;
  image: string;
  title: string;
  level: string;
  distance?: string;
  summary: string;
  price?: number;
  fromLabel?: string;
  locale: Locale;
}) {
  const meta = [level, distance].filter((v): v is string => Boolean(v));

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl bg-white/60 shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <MetaList items={meta} />
        <h3 className="mt-1 font-display text-xl">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-mamut-stone">{summary}</p>
        {price != null && fromLabel && (
          <p className="mt-4 text-sm font-medium">
            {fromLabel} {formatPrice(price, locale)}
          </p>
        )}
      </div>
    </Link>
  );
}
