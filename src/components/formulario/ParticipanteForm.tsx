'use client';

import { useState, type FormEvent } from 'react';
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Field,
  Heading,
  Input,
  SegmentedControl,
  Text,
  Textarea,
} from '@/components/ui';
import { SITE, type Locale } from '@/lib/site';
import { PARTICIPANTE_CONTENT, type Campo } from './participante-conteudo';

const CAMPO_VAZIO = '—';

function formatarData(iso: string) {
  if (!iso) return CAMPO_VAZIO;
  const [ano, mes, dia] = iso.split('-');
  return `${dia}/${mes}/${ano}`;
}

type CampoId = keyof (typeof PARTICIPANTE_CONTENT)['pt']['campos'];
type Dados = Record<CampoId, string>;

/**
 * O site é estático (sem backend): como no formulário de contato, em vez de um
 * POST o formulário monta o documento e abre o canal escolhido — e-mail, que é
 * o que aguenta um texto deste tamanho, ou WhatsApp. A validação é a nativa do
 * browser, via `required`.
 */
export function ParticipanteForm({ locale }: { locale: Locale }) {
  const c = PARTICIPANTE_CONTENT[locale];

  const [dados, setDados] = useState<Dados>(() => {
    const inicial = Object.fromEntries(
      (Object.keys(c.campos) as CampoId[]).map((id) => [id, '']),
    ) as Dados;
    return { ...inicial, pagamento: c.pagamentos[0] };
  });
  const [medicas, setMedicas] = useState<Record<string, string>>(() =>
    Object.fromEntries(c.perguntasMedicas.map((p) => [p.id, ''])),
  );
  const [nada, setNada] = useState(c.simNao.sim);
  const [gravidez, setGravidez] = useState(c.simNao.nao);
  const [aceite, setAceite] = useState(false);

  const set = (campo: CampoId) => (valor: string) =>
    setDados((atual) => ({ ...atual, [campo]: valor }));

  const linha = (campo: CampoId, valor?: string) =>
    `${c.campos[campo].label}: ${valor || dados[campo] || CAMPO_VAZIO}`;

  const montarDocumento = () =>
    [
      c.documento.titulo,
      '',
      `— ${c.documento.pessoais} —`,
      linha('nome'),
      linha('nascimento', formatarData(dados.nascimento)),
      linha('documento'),
      linha('idade'),
      linha('nacionalidade'),
      linha('profissao'),
      linha('telefone'),
      linha('email'),
      linha('altura'),
      linha('peso'),
      linha('endereco'),
      linha('cidade'),
      '',
      `— ${c.documento.passeio} —`,
      linha('inicio', formatarData(dados.inicio)),
      linha('pagamento'),
      linha('hospedagem'),
      '',
      `— ${c.documento.medicas} —`,
      `${c.sabeNadar} ${nada}`,
      ...c.perguntasMedicas.map((p) => `${p.label} ${medicas[p.id] || CAMPO_VAZIO}`),
      `${c.gravidez} ${gravidez}`,
      '',
      `— ${c.documento.emergencia} —`,
      linha('emergenciaNome'),
      linha('emergenciaTelefone'),
      linha('emergenciaParentesco'),
      '',
      `— ${c.documento.termos} —`,
      aceite ? c.documento.aceitos : c.documento.naoAceitos,
    ].join('\n');

  const enviar = (canal: 'email' | 'whatsapp') => {
    const texto = montarDocumento();
    if (canal === 'whatsapp') {
      window.open(`${SITE.whatsappUrl}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
      return;
    }
    const assunto = encodeURIComponent(
      `${c.documento.assunto} — ${dados.nome || c.documento.semNome}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${assunto}&body=${encodeURIComponent(texto)}`;
  };

  const simNao = [
    { value: c.simNao.sim, label: c.simNao.sim },
    { value: c.simNao.nao, label: c.simNao.nao },
  ];

  /** Campo de texto simples — o caso da maioria. */
  const texto = (id: CampoId, extra?: Partial<Campo> & Record<string, unknown>) => {
    const campo = c.campos[id];
    return (
      <Field key={id} label={campo.label} hint={campo.hint} className={extra?.className as string}>
        <Input
          required
          value={dados[id]}
          onChange={(e) => set(id)(e.target.value)}
          placeholder={campo.placeholder}
          {...(extra?.input as object)}
        />
      </Field>
    );
  };

  return (
    <Card
      as="section"
      surface="muted"
      radius="panelLg"
      padding="none"
      className="gap-8 px-6 py-8 sm:px-10 sm:py-10"
    >
      <form
        className="flex flex-col gap-8"
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          enviar('email');
        }}
      >
        <Bloco titulo={c.blocos.pessoais}>
          <div className="grid gap-5 sm:grid-cols-2">
            {texto('nome', { className: 'sm:col-span-2', input: { autoComplete: 'name' } })}

            <Field label={c.campos.nascimento.label}>
              <Input required type="date" value={dados.nascimento} onChange={(e) => set('nascimento')(e.target.value)} autoComplete="bday" />
            </Field>
            <Field label={c.campos.idade.label}>
              <Input required type="number" min={0} max={120} value={dados.idade} onChange={(e) => set('idade')(e.target.value)} placeholder={c.campos.idade.placeholder} />
            </Field>

            {/* text e não number: CPF e passaporte têm pontuação, letras e
                zeros à esquerda que um input numérico descartaria. */}
            {texto('documento')}
            {texto('nacionalidade')}
            {texto('profissao')}
            {texto('telefone', { input: { type: 'tel', autoComplete: 'tel' } })}
            {texto('email', { className: 'sm:col-span-2', input: { type: 'email', autoComplete: 'email' } })}

            <Field label={c.campos.altura.label} hint={c.campos.altura.hint}>
              <Input required type="number" min={50} max={250} value={dados.altura} onChange={(e) => set('altura')(e.target.value)} placeholder={c.campos.altura.placeholder} />
            </Field>
            <Field label={c.campos.peso.label} hint={c.campos.peso.hint}>
              <Input required type="number" min={20} max={250} value={dados.peso} onChange={(e) => set('peso')(e.target.value)} placeholder={c.campos.peso.placeholder} />
            </Field>

            {texto('endereco', { className: 'sm:col-span-2', input: { autoComplete: 'street-address' } })}
            {texto('cidade', { className: 'sm:col-span-2' })}
          </div>
        </Bloco>

        <Divider />

        <Bloco titulo={c.blocos.passeio}>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={c.campos.inicio.label}>
              <Input required type="date" value={dados.inicio} onChange={(e) => set('inicio')(e.target.value)} />
            </Field>
            {texto('hospedagem')}
          </div>

          <div className="flex flex-col gap-3">
            <Text as="span" size="sm" tone="secondary">{c.campos.pagamento.label}</Text>
            <SegmentedControl
              label={c.campos.pagamento.label}
              options={c.pagamentos.map((p) => ({ value: p, label: p }))}
              value={dados.pagamento}
              onChange={set('pagamento')}
              variant="chips"
              size="md"
            />
          </div>
        </Bloco>

        <Divider />

        <Bloco titulo={c.blocos.medicas} apoio={c.blocos.medicasApoio}>
          <div className="flex flex-col gap-3">
            <Text as="span" size="sm" tone="secondary">{c.sabeNadar}</Text>
            <SegmentedControl label={c.sabeNadar} options={simNao} value={nada} onChange={setNada} variant="chips" size="md" />
          </div>

          {c.perguntasMedicas.map((pergunta) => (
            <Field key={pergunta.id} label={pergunta.label}>
              <Textarea
                required
                rows={3}
                value={medicas[pergunta.id] ?? ''}
                onChange={(e) =>
                  setMedicas((atual) => ({ ...atual, [pergunta.id]: e.target.value }))
                }
                placeholder={pergunta.placeholder}
              />
            </Field>
          ))}

          <div className="flex flex-col gap-3">
            <Text as="span" size="sm" tone="secondary">{c.gravidez}</Text>
            <SegmentedControl
              label={c.gravidez}
              options={simNao}
              value={gravidez}
              onChange={setGravidez}
              variant="chips"
              size="md"
            />
          </div>
        </Bloco>

        <Divider />

        <Bloco titulo={c.blocos.emergencia}>
          <div className="grid gap-5 sm:grid-cols-2">
            {texto('emergenciaNome', { className: 'sm:col-span-2' })}
            {texto('emergenciaTelefone', { input: { type: 'tel' } })}
            {texto('emergenciaParentesco')}
          </div>
        </Bloco>

        <Divider />

        <Bloco titulo={c.blocos.termos}>
          <ul className="flex flex-col gap-3">
            {c.termos.map((termo) => (
              <li key={termo} className="flex gap-3">
                <span aria-hidden className="shrink-0 font-semibold text-brand-strong">—</span>
                <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>
                  {termo}
                </Text>
              </li>
            ))}
          </ul>

          <Checkbox
            required
            checked={aceite}
            onChange={(e) => setAceite(e.target.checked)}
            label={c.aceite}
          />
        </Bloco>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="submit" arrow className="max-sm:w-full">
            {c.acoes.email}
          </Button>
          {/* type="button": não submete o form — só valida e abre o WhatsApp. */}
          <Button
            type="button"
            variant="outline"
            onClick={(event) => {
              if (!event.currentTarget.form?.reportValidity()) return;
              enviar('whatsapp');
            }}
            className="max-sm:w-full"
          >
            {c.acoes.whatsapp}
          </Button>
        </div>

        <Text size="xs" tone="subtle">{c.acoes.nota}</Text>
      </form>
    </Card>
  );
}

function Bloco({
  titulo,
  apoio,
  children,
}: {
  titulo: string;
  apoio?: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="flex flex-col gap-5">
      <legend className="mb-1">
        <Heading as="span" size="quote">{titulo}</Heading>
      </legend>
      {apoio && <Text size="sm" weight="light" tone="muted" pretty>{apoio}</Text>}
      {children}
    </fieldset>
  );
}
