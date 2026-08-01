import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from './Badge';
import { Button } from './Button';
import { Heading } from './Heading';
import { MediaCard } from './MediaCard';
import { Text } from './Text';

const IMAGE = '/img/figma/paths/vale-pati-5.png';

const meta = {
  title: 'UI/MediaCard',
  component: MediaCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Background photo + overlay + content. It is the shape of the hero, the itinerary card ' +
          'and the manifesto block. Height comes from `className`; use `media` for art direction ' +
          'and `contentLayer="fill"` when content is anchored to the card edges.',
      },
    },
  },
  args: {
    image: { src: IMAGE, alt: '', sizes: '(min-width: 640px) 406px, 100vw' },
    overlay: 'bottom',
    radius: 'panel',
    className: 'h-[437px] w-full max-w-[406px]',
  },
  argTypes: {
    overlay: { control: 'inline-radio', options: ['none', 'bottom', 'left', 'tint', 'soft'] },
    radius: {
      control: 'select',
      options: ['none', 'chip', 'card', 'cardLg', 'panel', 'panelLg', 'pill'],
    },
    backdrop: { control: 'inline-radio', options: ['sunken', 'media', 'none'] },
    elevation: { control: 'inline-radio', options: ['none', 'chip', 'card', 'float', 'popover'] },
    contentLayer: { control: 'inline-radio', options: ['flow', 'fill'] },
  },
} satisfies Meta<typeof MediaCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    contentLayer: 'fill',
    contentClassName: 'flex items-end p-7',
    children: (
      <Heading size="card" tone="onMedia">
        Vale do Pati (05 dias)
      </Heading>
    ),
  },
};

/** How the itinerary card is composed: chips on top, title and CTA at the bottom. */
export const TrailCard: Story = {
  args: {
    as: 'article',
    radius: 'cardLg',
    zoomOnHover: true,
    contentLayer: 'fill',
    contentClassName: 'flex flex-col justify-between p-7',
    children: (
      <>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outlineOnMedia">5 Dias</Badge>
          <Badge variant="outlineOnMedia">Médio</Badge>
          <Badge variant="outlineOnMedia">78km</Badge>
        </div>
        <div className="flex flex-col gap-5">
          <Heading size="card" tone="onMedia">
            Vale do Pati (05 dias)
          </Heading>
          <Text size="xs" weight="light" tone="onMedia" className="max-w-[320px]">
            Localizado no coração do Parque Nacional da Chapada Diamantina, rodeado por montanhas,
            cachoeiras e grutas.
          </Text>
          <Button variant="outlineOnMedia" size="lg" block justify="between" arrow>
            Explorar a trilha
          </Button>
        </div>
      </>
    ),
  },
};

export const Overlays: Story = {
  render: () => (
    <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
      {(['bottom', 'left', 'tint', 'soft'] as const).map((overlay) => (
        <MediaCard
          key={overlay}
          image={{ src: IMAGE, alt: '' }}
          overlay={overlay}
          radius="card"
          className="h-[220px]"
          contentLayer="fill"
          contentClassName="flex items-end p-5"
        >
          <Text size="sm" weight="semibold" tone="onMedia">
            overlay=&quot;{overlay}&quot;
          </Text>
        </MediaCard>
      ))}
    </div>
  ),
};
