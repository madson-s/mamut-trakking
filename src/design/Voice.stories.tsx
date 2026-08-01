import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge, Button, Card, Emphasis, Heading, Stat, Text } from '@/components/ui';
import { Block, Mono, Page, Rule, Rules, SpecTable } from './specimens';

/**
 * The product speaks Brazilian Portuguese first, from inside the group, in
 * plural first person, addressing the reader as *você*. The company is a
 * *bando* and the traveller is invited to join it.
 */
const meta = {
  title: 'Theme/Voice & copy',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Copy is part of the design system: the same button with the wrong label stops being ' +
          'Mamut. Examples below are the real site copy — the Storybook layer around them is in ' +
          'English on purpose.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const APPROVED = [
  'Escolha a sua trilha',
  'Falar com guia',
  'Leia nosso manifesto',
  'Conheça quem guia o bando',
  'Entrar para o bando',
];

const AVOIDED = ['Clique aqui', 'Saiba mais', 'Reserve agora!'];

export const Voice: Story = {
  render: () => (
    <Page>
      <Block
        title="Collective and territorial"
        hint="Written from inside the group: “somos”, “nascemos”, “a gente”. Never a travel agency talking about its clients."
      >
        <div className="flex max-w-[68ch] flex-col gap-5">
          <Heading as="p" size="quote">
            Somos o bando que guia a sua tribo.
          </Heading>
          <Text size="lg" weight="light" pretty>
            Nascidos aqui. Formados pela Chapada. Inspirados pelos nossos antepassados nômades —
            cada trilha é uma <Emphasis>jornada</Emphasis> de volta ao que você é.
          </Text>
          <Text size="sm" tone="muted">
            Guias nativos · Chapada Diamantina · Lençóis, Bahia
          </Text>
        </div>
        <Rules>
          <Rule tone="do">
            Poetic but plainly written — “uma jornada de resgate das práticas primitivas”, “é dessa
            memória que nascemos”.
          </Rule>
          <Rule tone="dont">Never mystical, never luxury travel, never mass-tourism agency.</Rule>
        </Rules>
      </Block>

      <Block title="Mechanics">
        <SpecTable
          rows={[
            {
              name: 'casing',
              value: 'sentence case',
              note: 'caps only on the hero h1 and the footer column labels',
            },
            {
              name: 'middle dot',
              value: '·',
              note: 'separates equal facts — Guias nativos · Chapada Diamantina · Lençóis, Bahia',
            },
            { name: 'em dash', value: '—', note: 'carries the second thought inside a sentence' },
            { name: 'kicker', value: 'one line', note: 'body paragraphs two' },
            { name: 'card description', value: '≤ 160 characters', note: 'longer breaks the card' },
            {
              name: 'line breaks',
              value: '<br />',
              note: 'headings break by hand so the rhythm is authored',
            },
            { name: 'emoji', value: 'never', note: 'not in UI, not in copy' },
          ]}
        />
      </Block>
    </Page>
  ),
};

/** CTAs are invitations, not commands. */
export const CallsToAction: Story = {
  name: 'Calls to action',
  render: () => (
    <Page>
      <Block title="Invitations">
        <div className="flex flex-wrap items-center gap-3">
          {APPROVED.map((label) => (
            <Button key={label} variant="outline" arrow>
              {label}
            </Button>
          ))}
        </div>
      </Block>

      <Block title="Not this">
        <div className="flex flex-wrap items-center gap-3 opacity-60">
          {AVOIDED.map((label) => (
            <Button key={label} variant="ghost">
              {label}
            </Button>
          ))}
        </div>
        <Rules>
          <Rule tone="dont">
            Generic web verbs (<Mono>Clique aqui</Mono>, <Mono>Saiba mais</Mono>) and urgency
            (<Mono>Reserve agora!</Mono>) — the invitation names what is on the other side instead.
          </Rule>
          <Rule tone="do">
            Accessible labels are written in full Portuguese: “Mostrar roteiro anterior”, “Ativar
            tema claro”, “Selecionar idioma”, “Explorar a trilha”.
          </Rule>
        </Rules>
      </Block>

      <Block
        title="Credibility, stated flatly"
        hint="Numbers and certificates carry themselves — no exclamation marks, no superlatives."
      >
        <div className="flex flex-wrap items-center gap-6">
          <Stat value="+500" label="aventureiros guiados" />
          <Stat value="Cadastur" label="regularizado" />
          <Stat variant="chip" value="4,9" label="Certificado de Excelência" />
          <Badge size="lg">Avaliações verificadas · TripAdvisor</Badge>
        </div>
        <Card padding="lg" className="max-w-[68ch] gap-2">
          <Text size="sm" tone="muted">
            #4 no Ranking de atividades ao ar livre em Lençóis
          </Text>
          <Text size="lg" weight="light" pretty>
            Um bando que reúne o mundo inteiro!
          </Text>
          <Text size="xs" tone="subtle">
            The single exclamation mark in the whole site — it belongs to this line.
          </Text>
        </Card>
      </Block>
    </Page>
  ),
};
