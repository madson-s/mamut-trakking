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
import { montarDocumento, type ParticipantePayload } from '@/lib/participante-envio';
import { PARTICIPANTE_CONTENT, type Campo } from './participante-conteudo';

type CampoId = keyof (typeof PARTICIPANTE_CONTENT)['pt']['campos'];
type Dados = Record<CampoId, string>;
type Envio = 'idle' | 'enviando' | 'enviado' | 'erro';

/**
 * Dois canais para o mesmo documento: o e-mail vai por POST para
 * `/api/formulario-participante`, que envia pela Resend; o WhatsApp abre o app
 * com a mensagem pronta, sem passar pelo servidor. A validação de campo é a
 * nativa do browser, via `required`.
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
  const [envio, setEnvio] = useState<Envio>('idle');
  const [erro, setErro] = useState('');
  // Campo-isca: fica fora do fluxo visual e do tab; robô preenche, humano não.
  const [website, setWebsite] = useState('');

  const set = (campo: CampoId) => (valor: string) =>
    setDados((atual) => ({ ...atual, [campo]: valor }));

  const montarPayload = (): ParticipantePayload => ({
    locale,
    dados,
    medicas,
    sabeNadar: nada,
    gravidez,
    aceite,
    website,
  });

  const abrirWhatsapp = () => {
    const texto = montarDocumento(montarPayload());
    window.open(`${SITE.whatsappUrl}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
  };

  const enviarEmail = async () => {
    setEnvio('enviando');
    setErro('');

    try {
      const resposta = await fetch('/api/formulario-participante', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(montarPayload()),
      });
      const corpo = await resposta.json().catch(() => null);

      if (!resposta.ok || !corpo?.ok) {
        setErro(corpo?.error ?? c.acoes.erro);
        setEnvio('erro');
        return;
      }
      setEnvio('enviado');
    } catch {
      setErro(c.acoes.erro);
      setEnvio('erro');
    }
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
        className="relative flex flex-col gap-8"
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          void enviarEmail();
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

        {/* Isca: escondida da vista, do leitor de tela e do tab. */}
        <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
          <label>
            Website
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </label>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="submit" arrow disabled={envio === 'enviando'} className="max-sm:w-full">
            {envio === 'enviando' ? c.acoes.enviando : c.acoes.email}
          </Button>
          {/* type="button": não submete o form — só valida e abre o WhatsApp. */}
          <Button
            type="button"
            variant="outline"
            onClick={(event) => {
              if (!event.currentTarget.form?.reportValidity()) return;
              abrirWhatsapp();
            }}
            className="max-sm:w-full"
          >
            {c.acoes.whatsapp}
          </Button>
        </div>

        {envio === 'enviado' ? (
          <div
            role="status"
            className="rounded-control border-l-4 border-brand bg-surface-sunken px-5 py-4"
          >
            <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>
              {c.acoes.sucesso}
            </Text>
          </div>
        ) : null}

        {envio === 'erro' ? (
          <div role="alert" className="rounded-control border-l-4 border-error-500 bg-surface-sunken px-5 py-4">
            <Text size="sm" weight="light" tone="secondary" leading="relaxed" pretty>
              {erro} {c.acoes.erroFallback}
            </Text>
          </div>
        ) : null}

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
