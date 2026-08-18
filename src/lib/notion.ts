// Acesso à API do Notion — roda só no servidor (o token nunca chega ao cliente).
// A base "Reservas" vive dentro da página "📊 Sistema Operacional – Mamut Trekking";
// a integração do NOTION_TOKEN precisa estar conectada a essa página
// (⋯ → Conexões, no Notion) para que a busca a encontre.

const NOTION_API = 'https://api.notion.com/v1';
const NOTION_VERSION = '2022-06-28';
const DATABASE_TITLE = 'Reservas';

export type Reservation = {
  id: string;
  title: string;
  /** Link da página no app do Notion. */
  url: string;
  /** ISO — última edição da página. */
  editedAt: string;
};

export type ReservationsResult =
  | { status: 'ok'; reservations: Reservation[] }
  | { status: 'missing-token' }
  | { status: 'database-not-found' }
  | { status: 'error'; message: string };

type RichText = { plain_text: string };

type NotionProperty = {
  type: string;
  title?: RichText[];
  rich_text?: RichText[];
  number?: number | null;
  select?: { name: string } | null;
  multi_select?: { name: string }[];
  date?: { start: string; end?: string | null } | null;
  checkbox?: boolean;
  url?: string | null;
  email?: string | null;
  phone_number?: string | null;
};

type NotionPage = {
  id: string;
  url: string;
  last_edited_time: string;
  properties: Record<string, NotionProperty>;
};

async function notionFetch(token: string, path: string, body?: unknown) {
  const res = await fetch(`${NOTION_API}${path}`, {
    method: body === undefined ? 'GET' : 'POST',
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${token}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json',
    },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.message ?? `Notion respondeu ${res.status}.`);
  return data;
}

function plain(rich: RichText[] | undefined): string {
  return (rich ?? [])
    .map((t) => t.plain_text)
    .join('')
    .trim();
}

async function findReservasDatabaseId(token: string): Promise<string | null> {
  // ID fixo no .env dispensa a busca por nome — é o caminho confiável quando a
  // busca ainda não indexou a conexão ou quando há bases duplicadas (ex.: import
  // por zip). Cole o ID da URL da base ("Copiar link" no Notion).
  const pinned = process.env.NOTION_RESERVAS_DB_ID;
  if (pinned) return pinned;

  const data = await notionFetch(token, '/search', {
    query: DATABASE_TITLE,
    filter: { value: 'database', property: 'object' },
  });
  const results: { id: string; title?: RichText[] }[] = data.results ?? [];
  const exact = results.find(
    (r) => plain(r.title).toLowerCase() === DATABASE_TITLE.toLowerCase(),
  );
  return (exact ?? results[0])?.id ?? null;
}

function pageTitle(page: NotionPage): string {
  const prop = Object.values(page.properties).find((p) => p.type === 'title');
  return plain(prop?.title) || 'Sem título';
}

/** Valor de qualquer propriedade como texto (o import por zip deixou quase tudo em rich_text). */
function propertyText(prop: NotionProperty): string {
  switch (prop.type) {
    case 'title':
      return plain(prop.title);
    case 'rich_text':
      return plain(prop.rich_text);
    case 'number':
      return prop.number == null ? '' : String(prop.number);
    case 'select':
      return prop.select?.name ?? '';
    case 'multi_select':
      return (prop.multi_select ?? []).map((o) => o.name).join(', ');
    case 'date':
      return prop.date ? [prop.date.start, prop.date.end].filter(Boolean).join(' → ') : '';
    case 'checkbox':
      return prop.checkbox ? 'Sim' : 'Não';
    case 'url':
      return prop.url ?? '';
    case 'email':
      return prop.email ?? '';
    case 'phone_number':
      return prop.phone_number ?? '';
    default:
      return '';
  }
}

/** Pedaço de valor — quando o texto veio como "Nome (https://…)", vira link. */
export type ReservationValuePart = { text: string; url?: string };

export type ReservationField = {
  /** Nome da coluna, já sem os espaços sobrando do import. */
  name: string;
  parts: ReservationValuePart[];
};

// O import por zip serializou relations como "Nome (https://…)", às vezes em
// lista separada por vírgula. Vírgula sem URL (ex.: "R$ 2.500,00") fica intacta.
function parseValueParts(raw: string): ReservationValuePart[] {
  const trimmed = raw.trim();
  if (!trimmed) return [];
  if (!/https?:\/\//.test(trimmed)) return [{ text: trimmed }];
  const links = [...trimmed.matchAll(/([^,()]+?)\s*\((https?:\/\/[^)\s]+)\)/g)];
  if (links.length === 0) return [{ text: trimmed }];
  return links.map((m) => ({ text: m[1].trim(), url: m[2] }));
}

export type ReservationDetail = {
  id: string;
  title: string;
  url: string;
  editedAt: string;
  fields: ReservationField[];
};

export type ReservationDetailResult =
  | { status: 'ok'; reservation: ReservationDetail }
  | { status: 'missing-token' }
  | { status: 'not-found' }
  | { status: 'error'; message: string };

export async function getReservationDetail(pageId: string): Promise<ReservationDetailResult> {
  const token = process.env.NOTION_TOKEN;
  if (!token) return { status: 'missing-token' };

  try {
    const page = (await notionFetch(token, `/pages/${pageId}`)) as NotionPage;
    const fields = Object.entries(page.properties)
      .filter(([, prop]) => prop.type !== 'title')
      .map(([name, prop]) => ({ name: name.trim(), parts: parseValueParts(propertyText(prop)) }));

    return {
      status: 'ok',
      reservation: {
        id: page.id,
        title: pageTitle(page),
        url: page.url,
        editedAt: page.last_edited_time,
        fields,
      },
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (/could not find|object_not_found|failed validation/i.test(message)) {
      return { status: 'not-found' };
    }
    return { status: 'error', message };
  }
}

export async function getReservations(): Promise<ReservationsResult> {
  const token = process.env.NOTION_TOKEN;
  if (!token) return { status: 'missing-token' };

  try {
    const databaseId = await findReservasDatabaseId(token);
    if (!databaseId) return { status: 'database-not-found' };

    const reservations: Reservation[] = [];
    let cursor: string | undefined;
    do {
      const data = await notionFetch(token, `/databases/${databaseId}/query`, {
        page_size: 100,
        sorts: [{ timestamp: 'last_edited_time', direction: 'descending' }],
        ...(cursor ? { start_cursor: cursor } : {}),
      });
      for (const page of data.results as NotionPage[]) {
        reservations.push({
          id: page.id,
          title: pageTitle(page),
          url: page.url,
          editedAt: page.last_edited_time,
        });
      }
      cursor = data.has_more ? data.next_cursor : undefined;
    } while (cursor);

    return { status: 'ok', reservations };
  } catch (error) {
    return {
      status: 'error',
      message: error instanceof Error ? error.message : String(error),
    };
  }
}
