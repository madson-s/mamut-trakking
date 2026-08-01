'use client';

// Estúdio do voucher: formulário (esquerda) + preview ao vivo do PDF (direita).
// Estado local com auto-save no localStorage; download gera um .pdf de verdade.
//
// Ferramenta interna — a casca visual usa os primitivos de `@/components/ui`,
// então segue o tema (claro/escuro) do resto do site.
import { useEffect, useState, type ReactNode } from 'react';
import dynamic from 'next/dynamic';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  Badge,
  Button,
  Card,
  Checkbox,
  Container,
  DownloadIcon,
  Field,
  GripIcon,
  Heading,
  IconButton,
  Input,
  moveItem,
  PlusIcon,
  SegmentedControl,
  Text,
  Textarea,
  useDragSort,
  XIcon,
  type DragSort,
} from '@/components/ui';
import { motion } from '@/design/tokens';
import { cn } from '@/lib/cn';
import {
  CONTENT,
  defaultVoucherData,
  hydrateVoucherDraft,
  switchVoucherLocale,
  VOUCHER_LOCALES,
  type Participant,
  type PaymentRow,
  type ServiceRow,
  type VoucherData,
  type VoucherLocale,
} from '@/lib/voucher';
import { VOUCHER_LOCALE_NAMES, WHATSAPP_MESSAGE } from '@/lib/voucher-content';

// Preview carregado só no cliente (usa APIs de browser do @react-pdf/renderer).
const VoucherPreview = dynamic(() => import('./VoucherPreview'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center">
      <Text size="sm" tone="muted">
        Carregando preview…
      </Text>
    </div>
  ),
});

const STORAGE_KEY = 'mamut-voucher-draft';
// Regerar o PDF é a operação cara da tela, então o preview só se atualiza
// depois de 1s sem digitação. O rascunho continua salvo a cada tecla.
const PREVIEW_DEBOUNCE_MS = 1_000;

/**
 * Rascunho salvo neste navegador. Só é chamado no cliente — o estúdio é
 * carregado com `ssr: false` (ver VoucherStudioLoader), então dá para ler o
 * localStorage já no primeiro render, sem effect e sem hydration mismatch.
 */
function loadDraft(): VoucherData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return hydrateVoucherDraft(JSON.parse(raw));
  } catch {
    /* rascunho corrompido ou storage indisponível */
  }
  return defaultVoucherData();
}

const LOCALE_OPTIONS = VOUCHER_LOCALES.map((locale) => ({
  value: locale,
  label: VOUCHER_LOCALE_NAMES[locale].short,
  title: VOUCHER_LOCALE_NAMES[locale].name,
}));

/** Campo de texto rotulado — atalho para `Field` + `Input`. */
function TextField({
  label,
  value,
  onChange,
  placeholder,
  list,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  list?: string;
}) {
  return (
    <Field label={label}>
      <Input
        value={value}
        placeholder={placeholder}
        list={list}
        onChange={(e) => onChange(e.target.value)}
      />
    </Field>
  );
}

/** Bloco do formulário: `Card` + título + ação opcional. */
function Panel({
  title,
  children,
  action,
}: {
  title: string;
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <Card as="section" surface="muted" radius="card" padding="md" bordered className="gap-3">
      <div className="flex items-center justify-between gap-3">
        <Heading as="h2" size="label">
          {title}
        </Heading>
        {action}
      </div>
      <div className="flex flex-col gap-3">{children}</div>
    </Card>
  );
}

/**
 * Linha removível (serviço, pagamento). Passando `sort` + `index`, a linha vira
 * arrastável: alça à esquerda do rótulo, setas subir/descer como caminho por
 * teclado (arraste nativo não responde a tabulação).
 *
 * Durante o arraste, a linha que está sendo movida vira o **placeholder**:
 * mantém a altura, ganha contorno tracejado e some o conteúdo, marcando o vão
 * onde ela vai cair. As outras já aparecem na ordem nova.
 */
function Row<T>({
  label,
  onRemove,
  sort,
  index,
  isPlaceholder = false,
  onMove,
  isFirst,
  isLast,
  children,
}: {
  label: string;
  onRemove: () => void;
  /** Estado de arraste compartilhado pela lista (`useDragSort`). */
  sort?: DragSort<T>;
  /** Índice do item no array original. */
  index?: number;
  isPlaceholder?: boolean;
  /** Move a linha uma posição. Omitido = lista sem reordenação. */
  onMove?: (direction: -1 | 1) => void;
  isFirst?: boolean;
  isLast?: boolean;
  children: ReactNode;
}) {
  const sortable = sort !== undefined && index !== undefined;

  return (
    <div
      {...(sortable ? sort.getItemProps(index) : {})}
      className={cn(
        'rounded-control border bg-surface p-3 transition-[border-color,background-color]',
        motion.fast,
        // `ring` reforça o contorno sem alterar a altura (é box-shadow).
        isPlaceholder
          ? 'border-dashed border-brand bg-brand/10 ring-1 ring-brand/40'
          : 'border-line',
      )}
    >
      {/* `invisible` preserva a altura exata da linha no vão do placeholder. */}
      <div className={cn('flex flex-col gap-2', isPlaceholder && 'invisible')}>
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-1.5">
            {sortable && (
              <span
                {...sort.getHandleProps(index)}
                // Decorativa de propósito: quem navega por teclado usa as setas
                // ao lado, que são botões de verdade e têm rótulo.
                aria-hidden
                title="Arraste para reordenar"
                className={cn(
                  'flex size-6 shrink-0 cursor-grab items-center justify-center rounded-control text-content-subtle',
                  'hover:bg-surface-raised hover:text-content active:cursor-grabbing',
                  motion.fast,
                )}
              >
                <GripIcon className="size-4" />
              </span>
            )}
            <Text as="span" size="xs" weight="semibold" tone="secondary" className="truncate">
              {label}
            </Text>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            {onMove && (
              <>
                <IconButton
                  label={`Mover ${label} para cima`}
                  variant="subtle"
                  size="sm"
                  disabled={isFirst}
                  onClick={() => onMove(-1)}
                >
                  <ArrowUpIcon className="size-3.5" />
                </IconButton>
                <IconButton
                  label={`Mover ${label} para baixo`}
                  variant="subtle"
                  size="sm"
                  disabled={isLast}
                  onClick={() => onMove(1)}
                >
                  <ArrowDownIcon className="size-3.5" />
                </IconButton>
              </>
            )}
            <IconButton label={`Remover ${label}`} variant="subtle" size="sm" onClick={onRemove}>
              <XIcon className="size-3.5" />
            </IconButton>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

function AddButton({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return (
    <Button variant="outline" size="sm" onClick={onClick} icon={<PlusIcon className="size-3.5" />}>
      {children}
    </Button>
  );
}

export default function VoucherStudio() {
  const [data, setData] = useState<VoucherData>(loadDraft);
  // Cópia atrasada do estado usada só pelo preview, para não regenerar o PDF
  // a cada tecla. O formulário continua reagindo a `data` imediatamente.
  const [previewData, setPreviewData] = useState<VoucherData>(data);
  const [downloading, setDownloading] = useState(false);
  const previewStale = data !== previewData;

  // Persiste a cada alteração (effect só escreve no sistema externo).
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      /* storage cheio/indisponível */
    }
  }, [data]);

  // Debounce: só atualiza o preview quando o usuário para de digitar.
  useEffect(() => {
    const t = setTimeout(() => setPreviewData(data), PREVIEW_DEBOUNCE_MS);
    return () => clearTimeout(t);
  }, [data]);

  const set = <K extends keyof VoucherData>(key: K, value: VoucherData[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const localeContent = CONTENT[data.locale];

  // ---- participantes ----
  const updateParticipant = (i: number, patch: Partial<Participant>) =>
    setData((d) => ({
      ...d,
      participants: d.participants.map((p, idx) => (idx === i ? { ...p, ...patch } : p)),
    }));
  const addParticipant = () =>
    setData((d) => ({ ...d, participants: [...d.participants, { name: '', age: '', email: '' }] }));
  const removeParticipant = (i: number) =>
    setData((d) => ({
      ...d,
      // Sempre sobra uma linha: o voucher precisa de pelo menos um cliente.
      participants:
        d.participants.length > 1
          ? d.participants.filter((_, idx) => idx !== i)
          : [{ name: '', age: '', email: '' }],
    }));

  // ---- listas ----
  const updateService = (i: number, patch: Partial<ServiceRow>) =>
    setData((d) => ({
      ...d,
      services: d.services.map((r, idx) => (idx === i ? { ...r, ...patch } : r)),
    }));
  const addService = () =>
    setData((d) => ({
      ...d,
      services: [
        ...d.services,
        { date: '', time: '', description: '', total: '', status: 'NOT BOOKED' },
      ],
    }));
  const removeService = (i: number) =>
    setData((d) => ({ ...d, services: d.services.filter((_, idx) => idx !== i) }));
  // A ordem da lista é a ordem impressa na tabela do PDF.
  // Setas movem uma posição; o arraste entrega a lista já reordenada.
  const reorderService = (from: number, to: number) =>
    setData((d) => ({ ...d, services: moveItem(d.services, from, to) }));
  const serviceSort = useDragSort({
    items: data.services,
    onReorder: (services) => set('services', services),
  });

  const updatePayment = (i: number, patch: Partial<PaymentRow>) =>
    setData((d) => ({
      ...d,
      payments: d.payments.map((r, idx) => (idx === i ? { ...r, ...patch } : r)),
    }));
  const addPayment = () =>
    setData((d) => ({
      ...d,
      payments: [
        ...d.payments,
        {
          label: `${d.payments.length + 1}° Payment:`,
          date: '',
          price: '',
          form: 'PENDING',
          status: '',
        },
      ],
    }));
  const removePayment = (i: number) =>
    setData((d) => ({ ...d, payments: d.payments.filter((_, idx) => idx !== i) }));

  const setListItem = (key: 'includes' | 'notIncludes', i: number, value: string) =>
    setData((d) => ({ ...d, [key]: d[key].map((v, idx) => (idx === i ? value : v)) }));
  const addListItem = (key: 'includes' | 'notIncludes') =>
    setData((d) => ({ ...d, [key]: [...d[key], ''] }));
  const removeListItem = (key: 'includes' | 'notIncludes', i: number) =>
    setData((d) => ({ ...d, [key]: d[key].filter((_, idx) => idx !== i) }));

  const toggleCheck = (i: number) =>
    setData((d) => ({
      ...d,
      checklist: d.checklist.map((c, idx) => (idx === i ? { ...c, active: !c.active } : c)),
    }));
  const setCheckLabel = (i: number, label: string) =>
    setData((d) => ({
      ...d,
      checklist: d.checklist.map((c, idx) => (idx === i ? { ...c, label } : c)),
    }));
  const addCheck = () =>
    setData((d) => ({ ...d, checklist: [...d.checklist, { label: '', active: true }] }));
  const removeCheck = (i: number) =>
    setData((d) => ({ ...d, checklist: d.checklist.filter((_, idx) => idx !== i) }));

  const resetAll = () => {
    const language = VOUCHER_LOCALE_NAMES[data.locale].name;
    if (
      confirm(
        `Restaurar todos os campos para o modelo em ${language}? O rascunho atual será perdido.`,
      )
    ) {
      setData(defaultVoucherData(data.locale));
    }
  };

  /**
   * Trocar o idioma reescreve rótulos e texto legal na hora e traduz as listas
   * que ainda estão iguais ao modelo — o que você digitou fica intacto
   * (ver `switchVoucherLocale`).
   */
  const setLocale = (locale: VoucherLocale) =>
    setData((d) => switchVoucherLocale(d, locale));

  const fileName = (d: VoucherData) => `voucher-${d.voucherNumber || 'mamut'}-${d.locale}.pdf`;

  const buildPdfBlob = async (d: VoucherData): Promise<Blob> => {
    const [{ pdf }, { buildVoucherDocument }] = await Promise.all([
      import('@react-pdf/renderer'),
      import('./VoucherDocument'),
    ]);
    return pdf(buildVoucherDocument(d)).toBlob();
  };

  const download = async () => {
    setDownloading(true);
    try {
      const blob = await buildPdfBlob(data);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName(data);
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert('Não foi possível gerar o PDF. Veja o console para detalhes.');
    } finally {
      setDownloading(false);
    }
  };

  const openWhatsApp = () => {
    // Abre o chat no número do formulário com a mensagem pronta, no idioma do
    // voucher. wa.me só leva TEXTO — o link não anexa arquivo; o PDF sai pelo
    // botão "Baixar PDF".
    const digits = data.phone.replace(/\D/g, ''); // só dígitos, com DDI
    const msg = WHATSAPP_MESSAGE[data.locale]({
      name: data.participants[0]?.name.trim() ?? '',
      voucherNumber: data.voucherNumber.trim(),
    });
    const url = `https://wa.me/${digits}?text=${encodeURIComponent(msg)}`;
    // window.open precisa acontecer dentro do gesto do clique (evita bloqueio de pop-up)
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-svh bg-surface">
      {/* Sugestões dos campos de status, no idioma do voucher. */}
      <datalist id="status-service">
        {localeContent.serviceStatus.map((option) => (
          <option key={option} value={option} />
        ))}
      </datalist>
      <datalist id="status-payment">
        {localeContent.paymentStatus.map((option) => (
          <option key={option} value={option} />
        ))}
      </datalist>

      {/* Barra superior */}
      <header className="sticky top-0 z-20 border-b border-line bg-surface/90 backdrop-blur">
        <Container size="wide" className="flex items-center justify-between gap-4 py-3">
          <div className="flex flex-col gap-0.5">
            <Heading as="h1" size="label">
              Gerador de Voucher · Mamut Trekking
            </Heading>
            <Text size="xs" tone="muted">
              Ferramenta interna — preencha os campos e baixe o PDF. Rascunho salvo automaticamente
              neste navegador.
            </Text>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <div className="flex items-center gap-2">
              <Text as="span" size="xs" tone="muted" className="hidden xl:inline">
                Idioma do voucher
              </Text>
              <SegmentedControl
                label="Idioma do voucher"
                options={LOCALE_OPTIONS}
                value={data.locale}
                onChange={setLocale}
              />
            </div>
            <Button variant="ghost" size="sm" onClick={resetAll}>
              Restaurar modelo
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={openWhatsApp}
              title="Abre o WhatsApp no número do formulário com a mensagem pronta (o PDF sai pelo botão ao lado)"
            >
              Abrir WhatsApp
            </Button>
            <Button
              size="sm"
              onClick={download}
              disabled={downloading}
              icon={<DownloadIcon className="size-4" />}
            >
              {downloading ? 'Gerando…' : 'Baixar PDF'}
            </Button>
          </div>
        </Container>
      </header>

      <Container
        size="wide"
        className="grid gap-6 py-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
      >
        {/* -------- Formulário -------- */}
        <div className="flex flex-col gap-4">
          <Panel title="Voucher & Reserva">
            <div className="grid grid-cols-2 gap-3">
              <TextField
                label="Nº do voucher"
                value={data.voucherNumber}
                onChange={(v) => set('voucherNumber', v)}
              />
              <TextField
                label="Data de pagamento (vazio = destacado)"
                value={data.paymentDate}
                onChange={(v) => set('paymentDate', v)}
                placeholder="dd/mm/aaaa"
              />
              <TextField label="Telefone" value={data.phone} onChange={(v) => set('phone', v)} />
              <TextField
                label="Acompanhantes não listados (+ N)"
                value={data.extraPeople}
                onChange={(v) => set('extraPeople', v)}
                placeholder="0"
              />
              <TextField
                label="Check-in"
                value={data.checkIn}
                onChange={(v) => set('checkIn', v)}
                placeholder="dd/mm/aaaa"
              />
              <TextField
                label="Checkout"
                value={data.checkOut}
                onChange={(v) => set('checkOut', v)}
                placeholder="dd/mm/aaaa"
              />
            </div>
          </Panel>

          <Panel
            title="Clientes"
            action={<AddButton onClick={addParticipant}>Participante</AddButton>}
          >
            <Text size="xs" tone="muted">
              Nome, idade e e-mail de cada participante — abrem o voucher numa tabela, uma linha por
              pessoa. Idade em branco sai como travessão.
            </Text>
            {data.participants.map((participant, i) => (
              <Row
                key={i}
                label={`Participante ${i + 1}`}
                onRemove={() => removeParticipant(i)}
              >
                <div className="grid grid-cols-[minmax(0,1fr)_72px] gap-2">
                  <TextField
                    label="Nome"
                    value={participant.name}
                    onChange={(v) => updateParticipant(i, { name: v })}
                  />
                  <TextField
                    label="Idade"
                    value={participant.age}
                    onChange={(v) => updateParticipant(i, { age: v })}
                    placeholder="28"
                  />
                </div>
                <TextField
                  label="E-mail"
                  value={participant.email}
                  onChange={(v) => updateParticipant(i, { email: v })}
                  placeholder="nome@email.com"
                />
              </Row>
            ))}
          </Panel>

          <Panel title="Serviços" action={<AddButton onClick={addService}>Adicionar</AddButton>}>
            <Text size="xs" tone="muted">
              Arraste pela alça (ou use as setas) para mudar a ordem — é a mesma ordem da tabela no
              PDF.
            </Text>
            {/* `entries` vem na ordem de pré-visualização; `index` é a posição
                real no array (usada pelos handlers), `position` é a que o
                operador vê — durante o arraste elas divergem. */}
            {serviceSort.entries.map(({ item: row, index: i, isPlaceholder }, position) => (
              <Row
                key={i}
                label={`Serviço ${position + 1}`}
                onRemove={() => removeService(i)}
                sort={serviceSort}
                index={i}
                isPlaceholder={isPlaceholder}
                onMove={(direction) => reorderService(i, i + direction)}
                isFirst={position === 0}
                isLast={position === data.services.length - 1}
              >
                <div className="grid grid-cols-2 gap-2">
                  <TextField
                    label="Data"
                    value={row.date}
                    onChange={(v) => updateService(i, { date: v })}
                    placeholder="16/08/2026"
                  />
                  <TextField
                    label="Hora"
                    value={row.time}
                    onChange={(v) => updateService(i, { time: v })}
                    placeholder="5:00AM"
                  />
                </div>
                <Field label="Descrição">
                  <Textarea
                    value={row.description}
                    onChange={(e) => updateService(i, { description: e.target.value })}
                  />
                </Field>
                <div className="grid grid-cols-2 gap-2">
                  <TextField
                    label="Total (R$)"
                    value={row.total}
                    onChange={(v) => updateService(i, { total: v })}
                    placeholder="5200"
                  />
                  <TextField
                    label="Status"
                    value={row.status}
                    onChange={(v) => updateService(i, { status: v })}
                    list="status-service"
                  />
                </div>
              </Row>
            ))}
          </Panel>

          <div className="grid gap-4 md:grid-cols-2">
            <Panel
              title="Includes"
              action={<AddButton onClick={() => addListItem('includes')}>Item</AddButton>}
            >
              {data.includes.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Input
                    value={item}
                    onChange={(e) => setListItem('includes', i, e.target.value)}
                    aria-label={`Include ${i + 1}`}
                  />
                  <IconButton
                    label={`Remover include ${i + 1}`}
                    variant="subtle"
                    size="sm"
                    onClick={() => removeListItem('includes', i)}
                  >
                    <XIcon className="size-3.5" />
                  </IconButton>
                </div>
              ))}
            </Panel>

            <Panel
              title="Not Includes"
              action={<AddButton onClick={() => addListItem('notIncludes')}>Item</AddButton>}
            >
              {data.notIncludes.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Input
                    value={item}
                    onChange={(e) => setListItem('notIncludes', i, e.target.value)}
                    aria-label={`Not include ${i + 1}`}
                  />
                  <IconButton
                    label={`Remover not include ${i + 1}`}
                    variant="subtle"
                    size="sm"
                    onClick={() => removeListItem('notIncludes', i)}
                  >
                    <XIcon className="size-3.5" />
                  </IconButton>
                </div>
              ))}
            </Panel>
          </div>

          <Panel title="Operação">
            <TextField
              label="Operation"
              value={data.operation}
              onChange={(v) => set('operation', v)}
            />
          </Panel>

          <Panel title="Pagamentos" action={<AddButton onClick={addPayment}>Adicionar</AddButton>}>
            {data.payments.map((p, i) => (
              <Row key={i} label={`Pagamento ${i + 1}`} onRemove={() => removePayment(i)}>
                <div className="grid grid-cols-2 gap-2">
                  <TextField
                    label="Rótulo"
                    value={p.label}
                    onChange={(v) => updatePayment(i, { label: v })}
                    placeholder="1° Payment:"
                  />
                  <TextField
                    label="Data"
                    value={p.date}
                    onChange={(v) => updatePayment(i, { date: v })}
                  />
                  <TextField
                    label="Preço (R$)"
                    value={p.price}
                    onChange={(v) => updatePayment(i, { price: v })}
                    placeholder="4950"
                  />
                  <TextField
                    label="Forma"
                    value={p.form}
                    onChange={(v) => updatePayment(i, { form: v })}
                    list="status-payment"
                  />
                  <TextField
                    label="Status"
                    value={p.status}
                    onChange={(v) => updatePayment(i, { status: v })}
                    list="status-payment"
                  />
                </div>
              </Row>
            ))}
          </Panel>

          <Panel title="Contato de Emergência">
            <div className="grid grid-cols-3 gap-3">
              <TextField
                label="Nome (vazio = MISSING)"
                value={data.emergencyName}
                onChange={(v) => set('emergencyName', v)}
              />
              <TextField
                label="Parentesco (vazio = MISSING)"
                value={data.emergencyRelation}
                onChange={(v) => set('emergencyRelation', v)}
              />
              <TextField
                label="Telefone"
                value={data.emergencyPhone}
                onChange={(v) => set('emergencyPhone', v)}
                placeholder="+0000000"
              />
            </div>
          </Panel>

          <Panel title="Checklist" action={<AddButton onClick={addCheck}>Item</AddButton>}>
            <Text size="xs" tone="muted">
              Desmarque para riscar o item (não necessário nesta viagem).
            </Text>
            <div className="grid gap-1.5 sm:grid-cols-2">
              {data.checklist.map((c, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Checkbox
                    checked={c.active}
                    onChange={() => toggleCheck(i)}
                    aria-label={`Manter "${c.label}" no checklist`}
                  />
                  <Input
                    value={c.label}
                    onChange={(e) => setCheckLabel(i, e.target.value)}
                    aria-label={`Item ${i + 1} do checklist`}
                    // line-through/opacity não colidem com as classes base do Input
                    className={c.active ? undefined : 'line-through opacity-60'}
                  />
                  <IconButton
                    label={`Remover item ${i + 1}`}
                    variant="subtle"
                    size="sm"
                    onClick={() => removeCheck(i)}
                  >
                    <XIcon className="size-3.5" />
                  </IconButton>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Termo de Responsabilidade">
            <TextField
              label="Assinado por (Sincerely, …)"
              value={data.signatoryName}
              onChange={(v) => set('signatoryName', v)}
            />
            <Text size="xs" tone="muted">
              As políticas de cancelamento, termo de responsabilidade e seguro (páginas 2–4) são
              fixas e já entram no PDF.
            </Text>
          </Panel>
        </div>

        {/* -------- Preview -------- */}
        <div className="lg:sticky lg:top-[76px] lg:h-[calc(100svh-92px)]">
          <div className="relative h-[80vh] overflow-hidden rounded-panel border border-line-strong bg-surface-muted shadow-card lg:h-full">
            {previewStale && (
              <Badge variant="solid" size="sm" className="absolute right-3 top-3 z-10 shadow-chip">
                atualizando…
              </Badge>
            )}
            <VoucherPreview data={previewData} />
          </div>
        </div>
      </Container>
    </div>
  );
}
