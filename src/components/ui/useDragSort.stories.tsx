import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { cn } from '@/lib/cn';
import { motion } from '@/design/tokens';
import { ArrowDownIcon, ArrowUpIcon, GripIcon } from './icons';
import { IconButton } from './IconButton';
import { Text } from './Text';
import { moveItem, useDragSort } from './useDragSort';

/** Lista reordenável mínima, montada com o hook. */
function SortableDemo() {
  const [trails, setTrails] = useState([
    'Vale do Pati (05 dias)',
    'Cachoeira do Palmital',
    'Trilha Águas Claras',
    'Mosquito + Pai Inácio',
  ]);

  const sort = useDragSort({ items: trails, onReorder: setTrails });

  return (
    <div className="flex max-w-md flex-col gap-2 p-6">
      <Text size="xs" tone="muted">
        Arraste pela alça: a lista se reorganiza antes de soltar e o vão tracejado mostra onde o
        item vai cair.
      </Text>

      {sort.entries.map(({ item, index, isPlaceholder }, position) => (
        <div
          key={item}
          {...sort.getItemProps(index)}
          className={cn(
            'flex items-center gap-2 rounded-control border bg-surface px-3 py-2.5 transition-[border-color,background-color]',
            motion.fast,
            isPlaceholder
              ? 'border-dashed border-brand bg-brand/10 ring-1 ring-brand/40'
              : 'border-line',
          )}
        >
          <div className={cn('flex w-full items-center gap-2', isPlaceholder && 'invisible')}>
            <span
              {...sort.getHandleProps(index)}
              aria-hidden
              title="Arraste para reordenar"
              className="flex size-6 shrink-0 cursor-grab items-center justify-center rounded-control text-content-subtle hover:bg-surface-raised hover:text-content active:cursor-grabbing"
            >
              <GripIcon className="size-4" />
            </span>
            <Text as="span" size="sm" className="flex-1 truncate">
              {item}
            </Text>
            <IconButton
              label={`Mover ${item} para cima`}
              variant="subtle"
              size="sm"
              disabled={position === 0}
              onClick={() => setTrails((list) => moveItem(list, index, index - 1))}
            >
              <ArrowUpIcon className="size-3.5" />
            </IconButton>
            <IconButton
              label={`Mover ${item} para baixo`}
              variant="subtle"
              size="sm"
              disabled={position === trails.length - 1}
              onClick={() => setTrails((list) => moveItem(list, index, index + 1))}
            >
              <ArrowDownIcon className="size-3.5" />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
}

const meta = {
  title: 'UI/useDragSort',
  component: SortableDemo,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Hook for drag-to-reorder built on native HTML5 drag and drop — no extra dependency. ' +
          '`entries` returns the preview order while dragging and flags the dragged item as ' +
          '`isPlaceholder`, so the list rearranges *before* the drop and the gap shows where the ' +
          'item will land. The real array only changes on drop, so dropping outside the list or ' +
          'pressing Esc discards the preview. Dragging is not keyboard accessible — always pair ' +
          'it with up/down buttons, as this demo does.',
      },
    },
  },
} satisfies Meta<typeof SortableDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
