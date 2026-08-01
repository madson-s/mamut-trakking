import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card } from './Card';
import { Heading } from './Heading';
import { Placeholder } from './Placeholder';
import { Text } from './Text';

const meta = {
  title: 'UI/Placeholder',
  component: Placeholder,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Deliberately visible marker for content or an asset the handoff did not include. It ' +
          'holds the space and says what is missing, in the status warning colour — never a ' +
          'brand colour, so it can never be mistaken for finished UI. Nothing here invents ' +
          'content: no stock photo, no lorem ipsum.',
      },
    },
  },
  args: { label: 'Foto do guia — não encontrada no handoff' },
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div className="max-w-sm p-6">
      <Placeholder {...args} />
    </div>
  ),
};

/** In place: the review card renders the marker instead of a stock avatar. */
export const InCard: Story = {
  render: () => (
    <div className="p-6">
      <Card padding="lg" radius="panelLg" elevation="card" className="max-w-96 gap-4">
        <div className="flex items-center gap-3">
          <Placeholder label="Avatar" className="size-12 shrink-0" />
          <div className="flex flex-col">
            <Text size="sm" weight="medium">
              Avaliação verificada
            </Text>
            <Text size="xs" tone="muted">
              TripAdvisor
            </Text>
          </div>
        </div>
        <Heading as="p" size="quote">
          Voltamos outra pessoa.
        </Heading>
      </Card>
    </div>
  ),
};
