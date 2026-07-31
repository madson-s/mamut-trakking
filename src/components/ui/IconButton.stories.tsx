import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { IconButton } from './IconButton';
import { CaretDownIcon } from './icons';

const meta = {
  title: 'UI/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Round icon-only button: carousel arrows and controls placed over a photo. ' +
          '`label` is required and becomes the `aria-label`.',
      },
    },
  },
  args: {
    label: 'Próximo roteiro',
    variant: 'primary',
    size: 'md',
    children: <CaretDownIcon className="size-6 -rotate-90" />,
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'outline', 'outlineOnMedia', 'solidOnMedia', 'subtle'],
    },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

/** The pair used to navigate the itineraries carousel, including disabled state. */
export const CarouselNavigation: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div className="flex items-center gap-3 p-6">
      <IconButton label="Roteiro anterior" variant="outline">
        <CaretDownIcon className="size-6 rotate-90" />
      </IconButton>
      <IconButton label="Próximo roteiro" variant="primary">
        <CaretDownIcon className="size-6 -rotate-90" />
      </IconButton>
      <IconButton label="Próximo roteiro" variant="primary" disabled>
        <CaretDownIcon className="size-6 -rotate-90" />
      </IconButton>
    </div>
  ),
};

export const OverPhoto: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div className="flex items-center gap-3 rounded-panel bg-surface-inverse p-8">
      <IconButton label="Explorar" variant="solidOnMedia">
        <CaretDownIcon className="size-6 -rotate-90" />
      </IconButton>
      <IconButton label="Explorar" variant="outlineOnMedia">
        <CaretDownIcon className="size-6 -rotate-90" />
      </IconButton>
    </div>
  ),
};

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div className="flex items-center gap-3 p-6">
      <IconButton label="sm" size="sm">
        <CaretDownIcon className="size-4 -rotate-90" />
      </IconButton>
      <IconButton label="md" size="md">
        <CaretDownIcon className="size-6 -rotate-90" />
      </IconButton>
      <IconButton label="lg" size="lg">
        <CaretDownIcon className="size-7 -rotate-90" />
      </IconButton>
    </div>
  ),
};
