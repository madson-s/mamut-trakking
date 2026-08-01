import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from './Badge';
import { Button } from './Button';
import { MediaCard } from './MediaCard';
import { SectionHeading } from './SectionHeading';
import { Emphasis, Text } from './Text';

const meta = {
  title: 'UI/SectionHeading',
  component: SectionHeading,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Eyebrow + title + lead + actions, with the spacing and the tones already decided, so ' +
          'every section starts the same way. Strings are wrapped in `Text` automatically; pass ' +
          'JSX when the line needs a manual break or an `Emphasis`. Pair `titleId` with ' +
          '`Section labelledBy` so the band is named for assistive tech.',
      },
    },
  },
  args: {
    eyebrow: 'Inspirados pelos nossos antepassados nômades',
    title: 'Somos o bando que guia a sua tribo.',
    lead: 'Trekkings guiados por quem é filho da Chapada Diamantina.',
    align: 'left',
    layout: 'stack',
    size: 'section',
  },
  argTypes: {
    align: { control: 'inline-radio', options: ['left', 'center'] },
    layout: { control: 'inline-radio', options: ['stack', 'inline'] },
    spacing: { control: 'inline-radio', options: ['default', 'loose'] },
    size: { control: 'select', options: ['hero', 'section', 'card', 'quote', 'label'] },
    as: { control: 'inline-radio', options: ['h1', 'h2', 'h3'] },
  },
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { actions: <Button arrow>Escolha a sua trilha</Button> },
};

/** `layout="inline"` puts the title and the action on one line — the hub pattern. */
export const Inline: Story = {
  args: {
    layout: 'inline',
    eyebrow: undefined,
    lead: undefined,
    title: 'Escolha seu caminho',
    actions: (
      <Button href="/pt/aventuras" arrow>
        Todos os roteiros
      </Button>
    ),
  },
};

/** Centred, with a badge as the eyebrow and a hand-broken title. */
export const Centered: Story = {
  args: {
    align: 'center',
    size: 'hero',
    eyebrow: <Badge size="lg">Avaliações verificadas · TripAdvisor</Badge>,
    title: (
      <>
        Sua trilha começa
        <br />
        com uma mensagem.
      </>
    ),
    lead: 'Fale com a gente pelo WhatsApp e descubra o seu roteiro ideal.',
    maxWidth: 'max-w-[720px]',
    actions: <Button arrow>Entrar para o bando</Button>,
    className: 'mx-auto',
  },
};

/**
 * Over a photograph the tone switches to `onMedia`, which also dims the eyebrow
 * and the lead to the off-white levels.
 */
export const OverMedia: Story = {
  render: () => (
    <MediaCard
      image={{ src: '/img/home_backgroud/home_backgroud_02_no_crop_1x.webp', alt: '' }}
      overlay="left"
      radius="panel"
      backdrop="media"
      className="min-h-96"
      contentClassName="flex flex-col justify-end p-10"
    >
      <SectionHeading
        tone="onMedia"
        size="hero"
        eyebrow="Vale do Pati · 5 dias"
        title={
          <>
            Mamut guia.
            <br />
            Você só precisa aproveitar.
          </>
        }
        lead={
          <Text size="xl" weight="light" tone="onMediaMuted" pretty className="max-w-[46ch]">
            Cada trilha é uma <Emphasis>jornada</Emphasis> de volta ao que você é.
          </Text>
        }
        actions={
          <Button variant="outlineOnMedia" size="lg" arrow>
            Explorar a trilha
          </Button>
        }
      />
    </MediaCard>
  ),
};
