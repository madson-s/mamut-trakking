import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from './Badge';
import { Button } from './Button';
import { Card } from './Card';
import { Section } from './Section';
import { SectionHeading } from './SectionHeading';
import { Stat } from './Stat';
import { Text } from './Text';

const meta = {
  title: 'UI/Section',
  component: Section,
  parameters: {
    docs: {
      description: {
        component:
          'Page band: background + vertical rhythm + centered 1216 container. Together with ' +
          '`SectionHeading` it is enough to lay out a new page without writing new CSS.',
      },
    },
  },
  args: { surface: 'page', padding: 'default', bordered: false },
  argTypes: {
    surface: {
      control: 'inline-radio',
      options: ['page', 'muted', 'raised', 'inverse', 'transparent'],
    },
    padding: { control: 'inline-radio', options: ['none', 'band', 'compact', 'default', 'tall'] },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    containerClassName: 'flex flex-col gap-10',
    children: (
      <>
        <SectionHeading
          eyebrow="Inspirados pelos nossos antepassados nômades"
          title="Somos o bando que guia a sua tribo."
          lead="Trekkings guiados por quem é filho da Chapada Diamantina."
          actions={<Button arrow>Escolha a sua trilha</Button>}
        />
        <Card padding="lg">
          <Text>Conteúdo da seção.</Text>
        </Card>
      </>
    ),
  },
};

/** Alternating band with hairlines — the "Escolha seu caminho" pattern. */
export const MutedBand: Story = {
  args: {
    surface: 'muted',
    padding: 'tall',
    bordered: true,
    labelledBy: 'demo-heading',
    containerClassName: 'flex flex-col gap-12',
    children: (
      <SectionHeading
        layout="inline"
        titleId="demo-heading"
        title="Escolha seu caminho"
        actions={
          <Button href="/pt/aventuras" arrow>
            Todos os roteiros
          </Button>
        }
      />
    ),
  },
};

/** Authority bar: `padding="band"` + a grid of `Stat`. */
export const StatsBand: Story = {
  args: {
    surface: 'muted',
    padding: 'band',
    bordered: true,
    containerClassName: 'grid grid-cols-1 place-items-center gap-7 sm:grid-cols-2 lg:grid-cols-5',
    children: (
      <>
        <Stat value="+500" label="aventureiros guiados" />
        <Stat value="Guias" label="brigadistas e nativos" />
        <Stat value="Cadastur" label="regularizado" />
        <Stat value="TripAdvisor" label="Certificado de Excelência" />
        <Stat value="Reserva" label="online garantida" />
      </>
    ),
  },
};

export const CenteredHeading: Story = {
  args: {
    padding: 'default',
    containerClassName: 'flex flex-col items-center gap-12',
    children: (
      <SectionHeading
        align="center"
        size="hero"
        eyebrow={<Badge size="lg">Avaliações verificadas · TripAdvisor</Badge>}
        title={
          <>
            Sua trilha começa
            <br />
            com uma mensagem.
          </>
        }
        lead="Fale com a gente pelo WhatsApp e descubra o seu roteiro ideal."
        maxWidth="max-w-[720px]"
        actions={<Button arrow>Entrar para o bando</Button>}
      />
    ),
  },
};
