import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Emphasis, Text } from './Text';

const meta = {
  title: 'UI/Text',
  component: Text,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Body copy: paragraph, kicker, caption and label. `leading` replaces the default ' +
          'line-height of the size instead of stacking with it.',
      },
    },
  },
  args: {
    children: 'Trekkings guiados por quem é filho da Chapada Diamantina.',
    size: 'base',
    weight: 'normal',
    tone: 'default',
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['xs', 'sm', 'base', 'lg', 'xl'] },
    weight: { control: 'inline-radio', options: ['light', 'normal', 'medium', 'semibold'] },
    tone: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'muted',
        'subtle',
        'brand',
        'onMedia',
        'onMediaSoft',
        'onMediaMuted',
      ],
    },
    leading: { control: 'inline-radio', options: ['tight', 'snug', 'normal', 'relaxed'] },
    font: { control: 'inline-radio', options: ['body', 'display'] },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** Hero kicker, section lead and caption — the three most common roles. */
export const Roles: Story = {
  render: () => (
    <div className="flex max-w-[560px] flex-col gap-6 p-6">
      <Text size="lg" weight="light" tone="secondary">
        Guias nativos · Chapada Diamantina · Lençóis, Bahia
      </Text>
      <Text size="xl" weight="light" tone="muted" pretty>
        Fale com a gente pelo WhatsApp. Descubra qual o seu roteiro ideal para conhecer a Chapada
        Diamantina e como se preparar.
      </Text>
      <Text size="xs" tone="subtle">
        Cadastur 43500583000122
      </Text>
    </div>
  ),
};

/** Mergo mixed into body copy — the brand's typographic signature. */
export const WithDisplayEmphasis: Story = {
  render: () => (
    <div className="max-w-[640px] p-6 text-center">
      <Text size="xl" weight="light" tone="muted">
        Do <Emphasis tone="default">caminhante</Emphasis> de fim de semana ao{' '}
        <Emphasis tone="default">aventureiro de longa data</Emphasis> — aqui tem o ritmo certo para
        você.
      </Text>
    </div>
  ),
};
