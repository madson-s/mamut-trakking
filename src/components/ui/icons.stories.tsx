import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './Button';
import { IconButton } from './IconButton';
import { Text } from './Text';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CaretDownIcon,
  DownloadIcon,
  FacebookIcon,
  GripIcon,
  InstagramIcon,
  PlusIcon,
  StarIcon,
  StarRating,
  XIcon,
} from './icons';

/**
 * The icons exported from the barrel. Everything inherits `currentColor` and
 * takes its size from a `size-*` utility, so an icon never carries a colour of
 * its own. The brand's own 16-icon line set lives in `public/svg/_icons` and is
 * documented in `Theme/Brand`.
 */
const meta = {
  title: 'UI/Icons',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Two marks carry direction and they are not interchangeable: the **caret** is the ' +
          'brand mark, used inside circular controls, card corners and carousel arrows; the ' +
          '**stemmed arrow** is used only beside CTA text, where it nudges 2px on hover.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const INLINE = [
  { name: 'ArrowRightIcon', Icon: ArrowRightIcon },
  { name: 'ArrowUpIcon', Icon: ArrowUpIcon },
  { name: 'ArrowDownIcon', Icon: ArrowDownIcon },
  { name: 'PlusIcon', Icon: PlusIcon },
  { name: 'XIcon', Icon: XIcon },
  { name: 'DownloadIcon', Icon: DownloadIcon },
  { name: 'GripIcon', Icon: GripIcon },
  { name: 'StarIcon', Icon: StarIcon },
  { name: 'InstagramIcon', Icon: InstagramIcon },
  { name: 'FacebookIcon', Icon: FacebookIcon },
];

export const All: Story = {
  render: () => (
    <div className="flex flex-col gap-10 p-6">
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-5">
        {INLINE.map(({ name, Icon }) => (
          <div key={name} className="flex flex-col items-center gap-2 text-center">
            <span className="grid size-14 place-items-center rounded-card border border-line bg-surface-muted">
              <Icon className="size-5" />
            </span>
            <Text as="span" size="xs" tone="muted" className="font-mono">
              {name}
            </Text>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <StarRating />
        <Text size="xs" tone="muted" className="font-mono">
          StarRating · 5 × StarIcon in warning-500
        </Text>
      </div>
    </div>
  ),
};

/**
 * `CaretDownIcon` is the Figma leaf shape drawn as a CSS mask — rotate it for
 * the other three directions instead of drawing a second arrow.
 */
export const Caret: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-6">
      <div className="flex flex-wrap items-center gap-6">
        {[
          { label: 'down', rotation: '' },
          { label: 'left', rotation: 'rotate-90' },
          { label: 'up', rotation: 'rotate-180' },
          { label: 'right', rotation: '-rotate-90' },
        ].map(({ label, rotation }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <span className="grid size-14 place-items-center rounded-card border border-line bg-surface-muted">
              <CaretDownIcon className={`size-6 ${rotation}`} />
            </span>
            <Text as="span" size="xs" tone="muted" className="font-mono">
              {label}
            </Text>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <IconButton label="Mostrar roteiro anterior" variant="outline">
          <CaretDownIcon className="size-4 rotate-90" />
        </IconButton>
        <IconButton label="Mostrar próximo roteiro" variant="primary">
          <CaretDownIcon className="size-4 -rotate-90" />
        </IconButton>
        <Button arrow>Escolha a sua trilha</Button>
      </div>
    </div>
  ),
};

/** Size and colour come from the surrounding text, never from the icon. */
export const InheritsColorAndSize: Story = {
  name: 'Inherits colour and size',
  render: () => (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center gap-6">
        {(['size-4', 'size-5', 'size-6', 'size-8'] as const).map((size) => (
          <ArrowRightIcon key={size} className={`${size} text-content`} />
        ))}
      </div>
      <div className="flex items-center gap-6">
        <ArrowRightIcon className="size-6 text-content" />
        <ArrowRightIcon className="size-6 text-content-muted" />
        <ArrowRightIcon className="size-6 text-brand-strong" />
        <ArrowRightIcon className="size-6 text-error-500" />
      </div>
      <div className="flex items-center gap-6 rounded-panel bg-surface-inverse p-6">
        <ArrowRightIcon className="size-6 text-on-media" />
        <CaretDownIcon className="size-6 -rotate-90 text-on-media" />
      </div>
    </div>
  ),
};
