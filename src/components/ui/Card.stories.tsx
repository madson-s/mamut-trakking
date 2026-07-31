import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card } from './Card';
import { Heading } from './Heading';
import { StarRating } from './icons';
import { Text } from './Text';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Content box on a theme surface (no background media). For a card with a photo ' +
          'behind the content, use `MediaCard`.',
      },
    },
  },
  args: { surface: 'raised', radius: 'card', padding: 'md', bordered: true, elevation: 'none' },
  argTypes: {
    surface: { control: 'inline-radio', options: ['raised', 'muted', 'outline'] },
    radius: {
      control: 'select',
      options: ['none', 'chip', 'card', 'cardLg', 'panel', 'panelLg', 'pill'],
    },
    padding: { control: 'inline-radio', options: ['none', 'sm', 'md', 'lg'] },
    elevation: { control: 'inline-radio', options: ['none', 'chip', 'card', 'float', 'popover'] },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    className: 'max-w-[490px] gap-3',
    children: (
      <>
        <Heading as="h3" size="quote">
          Cachoeira do Palmital
        </Heading>
        <Text size="sm" tone="muted">
          Dois dias de trilha entre campos de altitude e paredões.
        </Text>
      </>
    ),
  },
};

/** Review card from the home page (`radius="panelLg"` + `elevation="card"`). */
export const Review: Story = {
  args: {
    surface: 'muted',
    radius: 'panelLg',
    padding: 'lg',
    elevation: 'card',
    className: 'max-w-[490px] gap-4',
    children: (
      <>
        <div className="flex flex-col gap-0.5">
          <Text size="xl" weight="semibold">
            Paola Bertoncello
          </Text>
          <Text size="base" tone="secondary">
            Marau, RS — Casal
          </Text>
        </div>
        <div className="flex items-center gap-2">
          <StarRating />
          <Text as="span" size="xl" weight="semibold">
            5.0
          </Text>
        </div>
        <Text size="base">
          “Nosso guia tinha muito conhecimento da região, era atencioso e apaixonado pelo Pati.”
        </Text>
      </>
    ),
  },
};
