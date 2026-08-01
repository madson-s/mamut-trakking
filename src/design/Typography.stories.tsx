import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Emphasis, Heading, Text } from '@/components/ui';
import { Block, Mono, Page, Rule, Rules, SpecTable } from './specimens';

/**
 * Two families only. Mergo Regular 400 carries display; Brutal Milk No 2
 * carries everything else, Light 300 by default, 500/600 reserved for CTAs.
 */
const meta = {
  title: 'Theme/Typography',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Mergo has a single weight in the handoff — never faux-bold it, never use it for body ' +
          'copy. Brutal Milk ships nine weights but the design uses four. The house move is ' +
          'swapping one word inside a Brutal Milk sentence to Mergo (`Emphasis`).',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const DISPLAY = [
  { size: 'hero', spec: '40 → 60 → 72 · 1.1', sample: 'Mamut guia. Você só precisa aproveitar.' },
  { size: 'section', spec: '40 → 48 · 1.15', sample: 'Escolha seu caminho' },
  { size: 'card', spec: '30 · 1.25', sample: 'Vale do Pati (05 dias)' },
  { size: 'quote', spec: '24 · 1.3', sample: 'É dessa memória que nascemos.' },
  { size: 'label', spec: '18 · snug', sample: 'Dados do voucher' },
] as const;

const BODY = [
  { size: 'xl', spec: '20 · 1.5', note: 'eyebrow and section lead' },
  { size: 'lg', spec: '18 · 1.5', note: 'long copy' },
  { size: 'base', spec: '16 · 1.5', note: 'default paragraph and CTA label' },
  { size: 'sm', spec: '14 · 1.45', note: 'navigation, card description' },
  { size: 'xs', spec: '12 · 1.4', note: 'caption, chip, footnote' },
] as const;

export const Display: Story = {
  render: () => (
    <Page>
      <Block
        title="Display · Mergo"
        hint="One h1 per page. The tag comes from `as`, the scale from `size` — a section h2 can be set at hero size without stealing the h1."
      >
        <div className="flex flex-col gap-8">
          {DISPLAY.map(({ size, spec, sample }) => (
            <div key={size} className="flex flex-col gap-1.5">
              <Mono className="text-content-muted">
                size=&quot;{size}&quot; · {spec}
              </Mono>
              <Heading as="p" size={size} balance>
                {sample}
              </Heading>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Rules">
        <Rules>
          <Rule tone="do">
            Break long headings by hand with <Mono>&lt;br /&gt;</Mono> so the line rhythm is
            authored, and keep <Mono>balance</Mono> on for two- and three-line titles.
          </Rule>
          <Rule tone="do">
            Caps are a display device reserved for the hero h1 and the footer column labels.
            Everything else is sentence case.
          </Rule>
          <Rule tone="dont">
            No bold Mergo (there is no second weight), and no Mergo for paragraphs.
          </Rule>
        </Rules>
      </Block>
    </Page>
  ),
};

export const Body: Story = {
  render: () => (
    <Page>
      <Block
        title="Body · Brutal Milk No 2"
        hint="Sizes carry their own line-height; the `leading` prop replaces it rather than stacking a second utility."
      >
        <div className="flex flex-col gap-6">
          {BODY.map(({ size, spec, note }) => (
            <div key={size} className="flex flex-col gap-1">
              <Mono className="text-content-muted">
                size=&quot;{size}&quot; · {spec} · {note}
              </Mono>
              <Text size={size}>
                Trekkings guiados por quem é filho da Chapada Diamantina.
              </Text>
            </div>
          ))}
        </div>
      </Block>

      <Block
        title="Weights"
        hint="The family ships 100–900; the design uses four. Light is the default voice of the site, 500/600 belong to CTAs and labels."
      >
        <div className="flex flex-wrap items-baseline gap-8">
          {(['light', 'normal', 'medium', 'semibold'] as const).map((weight) => (
            <div key={weight} className="flex flex-col gap-1">
              <Mono className="text-content-muted">{weight}</Mono>
              <Text size="lg" weight={weight}>
                Entrar para o bando
              </Text>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Wrapping">
        <SpecTable
          rows={[
            { name: 'balance', value: 'text-wrap: balance', note: 'headings of two or three lines' },
            { name: 'pretty', value: 'text-wrap: pretty', note: 'long copy — kills the orphan' },
          ]}
        />
      </Block>
    </Page>
  ),
};

/**
 * `Emphasis` swaps a single word to Mergo inside a Brutal Milk sentence. It is
 * the brand's only mixing move — do not build an emphasis out of weight or
 * colour instead.
 */
export const Mixing: Story = {
  render: () => (
    <Page>
      <Block title="One word in Mergo">
        <div className="flex max-w-[64ch] flex-col gap-8">
          <Text size="xl" weight="light">
            Do <Emphasis>caminhante</Emphasis> de fim de semana ao{' '}
            <Emphasis>aventureiro de longa data</Emphasis>.
          </Text>
          <div className="flex flex-col gap-2">
            {(['sm', 'quote', 'card'] as const).map((size) => (
              <Text key={size} size="lg" weight="light">
                <Mono className="text-content-muted">size=&quot;{size}&quot;</Mono> — cada trilha é
                uma <Emphasis size={size}>jornada</Emphasis> de volta ao que você é.
              </Text>
            ))}
          </div>
        </div>
        <Rules>
          <Rule tone="do">One or two words per sentence, on the word that carries the idea.</Rule>
          <Rule tone="dont">
            Never a whole sentence in Mergo inside body copy, and never colour as the emphasis.
          </Rule>
        </Rules>
      </Block>
    </Page>
  ),
};
