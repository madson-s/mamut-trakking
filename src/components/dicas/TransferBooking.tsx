'use client';

import { useId, useMemo, useState, type FormEvent } from 'react';
import {
  Button,
  Checkbox,
  Field,
  Heading,
  IconButton,
  Input,
  SegmentedControl,
  Text,
  XIcon,
} from '@/components/ui';
import { MorphingModal } from '@/components/motion/morphing-modal';
import { MESSAGE_LOCALE } from '@/lib/message-locale';
import { formatPrice, type Locale } from '@/lib/site';
import { whatsappText } from '@/lib/whatsapp';
import { STARLINK_ADICIONAL, TRANSFER_BOOKING_LABELS, TRANSFER_MENSAGEM, type CarroId } from './transfer-booking-content';
import { TRANSFER_CONTENT, TRANSFER_DADOS } from './transfer-conteudo';

/** Compara lugares digitados sem acento, caixa ou espaço sobrando ("lencois" = "Lençóis"). */
const norm = (texto: string) => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();

/**
 * Valor "a partir de" do trecho, quando o site publica um: Salvador × Lençóis
 * (por tipo de carro), Salvador × outra cidade da Chapada e Lençóis × destino
 * fora da Chapada (por tipo de carro). A ordem de origem/destino não importa.
 * Sem valor publicado, o painel diz que a equipe confirma.
 */
function estimativa(locale: Locale, origem: string, destino: string, carro: CarroId): number | null {
  const [o, de] = [norm(origem), norm(destino)];
  // "Valença (Morro de São Paulo)" também casa com "Valença" ou "Morro de São Paulo".
  const casa = (digitado: string, lugar: string) =>
    digitado !== '' && (norm(lugar) === digitado || norm(lugar).split(/[()]/).map((parte) => parte.trim()).includes(digitado));
  const par = (a: string, b: string) => (casa(o, a) && casa(de, b)) || (casa(o, b) && casa(de, a));
  const d = TRANSFER_DADOS;
  const porCarro = (economico: number, suv: number) => (carro === 'suv' ? suv : economico);
  // A van só tem valor publicado para Salvador × Lençóis.
  if (par('Salvador', 'Lençóis')) return carro === 'van' ? d.van : porCarro(d.economico, d.suv);
  if (carro === 'van') return null;
  const cidades = TRANSFER_CONTENT[locale].chapada.cidades;
  const i = cidades.findIndex((cidade) => par('Salvador', cidade.nome));
  if (i >= 0) return d.cidades[i];
  const fora = d.fora.find((rota) => par('Lençóis', rota.destino));
  if (fora) return porCarro(fora.hatch, fora.suv);
  return null;
}

/**
 * Botão "Reservar transfer" + painel com origem, destino, data, viajantes e
 * tipo de carro. O envio abre o WhatsApp com tudo preenchido, no idioma da
 * equipe (pt/en/fr; os demais em inglês). Cada botão tem o próprio painel.
 */
export function TransferBooking({
  locale,
  label,
  block,
  className,
}: {
  locale: Locale;
  label: string;
  block?: boolean;
  className?: string;
}) {
  const t = TRANSFER_BOOKING_LABELS[locale];
  const headingId = useId();
  const [aberto, setAberto] = useState(false);
  const [origem, setOrigem] = useState('Salvador');
  const [destino, setDestino] = useState('Lençóis');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [idaEVolta, setIdaEVolta] = useState(false);
  const [dataVolta, setDataVolta] = useState('');
  const [viajantes, setViajantes] = useState(2);
  const [malas, setMalas] = useState('');
  const [carro, setCarro] = useState<CarroId>('economico');
  const [starlink, setStarlink] = useState(false);

  // Sugestões enquanto a pessoa digita: Salvador, Lençóis, as outras cidades
  // da Chapada e os destinos fora dela. Qualquer outro texto vale.
  const lugares = useMemo(
    () => [
      'Salvador',
      'Lençóis',
      ...TRANSFER_CONTENT[locale].chapada.cidades.map((cidade) => cidade.nome),
      ...TRANSFER_DADOS.fora.map((rota) => rota.destino),
    ],
    [locale],
  );

  const mesmoLugar = norm(origem) !== '' && norm(origem) === norm(destino);
  const base = estimativa(locale, origem, destino, carro);
  const valor = base === null ? null : base + (starlink ? STARLINK_ADICIONAL : 0);
  const listaId = `${headingId}-lugares`;
  const hoje = new Date().toISOString().slice(0, 10);

  const enviar = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mesmoLugar) return;
    const m = TRANSFER_MENSAGEM[MESSAGE_LOCALE[locale]];
    const dataBr = (iso: string) => iso.split('-').reverse().join('/');
    const linhas = [
      m.ola,
      '',
      `${m.origem}: ${origem.trim()}`,
      `${m.destino}: ${destino.trim()}`,
      `${m.data}: ${dataBr(data)}${horario ? ` · ${m.horario}: ${horario}` : ''}`,
      `${m.volta}: ${idaEVolta && dataVolta ? dataBr(dataVolta) : m.soIda}`,
      `${m.viajantes}: ${viajantes}${malas ? ` · ${m.malas}: ${malas}` : ''}`,
      `${m.carro}: ${m.carros[carro]}`,
      ...(starlink ? [m.starlink] : []),
      ...(valor ? [`${m.estimativa}: ${formatPrice(valor, 'pt')}`] : []),
    ];
    window.open(whatsappText(linhas.join('\n')), '_blank', 'noopener,noreferrer');
  };

  const lugar = (valor: string, onChange: (v: string) => void) => (
    <Input
      size="md"
      required
      list={listaId}
      autoComplete="off"
      placeholder={t.lugarHint}
      value={valor}
      onChange={(e) => onChange(e.target.value)}
    />
  );

  return (
    <>
      <Button arrow block={block} className={className} onClick={() => setAberto(true)}>
        {label}
      </Button>

      <MorphingModal
        viewId={aberto ? 'transfer' : null}
        onClose={() => setAberto(false)}
        placement="bottom"
        labelledBy={headingId}
        closeLabel={t.fechar}
        className="max-w-98 lg:max-w-130"
      >
        <form onSubmit={enviar} className="flex flex-col gap-4">
          <header className="flex items-center justify-between">
            <Heading id={headingId} as="h2" size="quote">{t.titulo}</Heading>
            <IconButton label={t.fechar} variant="outline" size="sm" onClick={() => setAberto(false)} className="!size-9">
              <XIcon className="size-4" />
            </IconButton>
          </header>

          <div className="grid grid-cols-2 gap-3">
            <Field label={t.origem}>{lugar(origem, setOrigem)}</Field>
            <Field label={t.destino} error={mesmoLugar ? t.mesmoLugar : undefined}>{lugar(destino, setDestino)}</Field>
          </div>
          <datalist id={listaId}>
            {lugares.map((nome) => <option key={nome} value={nome} />)}
          </datalist>

          <div className="grid grid-cols-2 gap-3">
            <Field label={t.data}>
              <Input type="date" size="md" required min={hoje} value={data} onChange={(e) => setData(e.target.value)} />
            </Field>
            <Field label={t.horario}>
              <Input type="time" size="md" value={horario} onChange={(e) => setHorario(e.target.value)} />
            </Field>
          </div>

          <Checkbox label={t.idaEVolta} checked={idaEVolta} onChange={(e) => setIdaEVolta(e.target.checked)} />
          {idaEVolta ? (
            <Field label={t.dataVolta}>
              <Input type="date" size="md" required min={data || hoje} value={dataVolta} onChange={(e) => setDataVolta(e.target.value)} />
            </Field>
          ) : null}

          <div className="grid grid-cols-2 gap-3">
            <Field label={t.viajantes} hint={viajantes > 3 && carro !== 'van' ? t.grupoGrande : undefined}>
              <Input
                type="number"
                size="md"
                inputMode="numeric"
                min={1}
                max={30}
                required
                value={viajantes}
                onChange={(e) => setViajantes(Math.max(1, Number(e.target.value) || 1))}
              />
            </Field>
            <Field label={t.malas}>
              <Input type="number" size="md" inputMode="numeric" min={0} max={40} value={malas} onChange={(e) => setMalas(e.target.value)} />
            </Field>
          </div>

          <div className="flex flex-col gap-2">
            <Text as="span" size="xs" weight="medium" tone="secondary">{t.carro}</Text>
            <SegmentedControl
              label={t.carro}
              variant="chips"
              size="md"
              value={carro}
              onChange={setCarro}
              options={(['economico', 'suv', 'van', 'indiferente'] as const).map((id) => ({ value: id, label: t.carros[id] }))}
            />
          </div>

          <div className="flex items-baseline justify-between gap-3">
            <Checkbox label={t.starlink} checked={starlink} onChange={(e) => setStarlink(e.target.checked)} />
            <Text size="xs" tone="muted" className="shrink-0">{t.starlinkPreco}</Text>
          </div>

          <div className="flex items-center justify-between gap-4 rounded-card border border-line px-4.5 py-3">
            <Text size="sm" weight="light">{t.estimativa}</Text>
            {valor ? (
              <div className="text-right">
                <Heading as="p" size="quote" className="tabular-nums">{formatPrice(valor, locale)}</Heading>
                <Text size="xs" tone="muted">{carro === 'van' ? t.paraAteVan : t.paraAte}</Text>
                {starlink ? <Text size="xs" tone="muted">{t.comStarlink}</Text> : null}
              </div>
            ) : (
              <Text size="xs" tone="muted" className="max-w-56 text-right">{t.semEstimativa}</Text>
            )}
          </div>

          <Button type="submit" size="lg" block arrow disabled={mesmoLugar}>{t.enviar}</Button>
          <Text size="xs" tone="muted" className="text-center">{t.nota}</Text>
        </form>
      </MorphingModal>
    </>
  );
}
