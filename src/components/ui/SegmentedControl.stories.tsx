import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { SegmentedControl } from './SegmentedControl';
import { Text } from './Text';

const LOCALES = [
  { value: 'pt', label: 'PT', title: 'Português' },
  { value: 'en', label: 'EN', title: 'English' },
  { value: 'es', label: 'ES', title: 'Español' },
];

function Demo({ size }: { size?: 'sm' | 'md' }) {
  const [value, setValue] = useState('pt');

  return (
    <div className="flex flex-col items-start gap-3 p-6">
      <SegmentedControl
        label="Voucher language"
        options={LOCALES}
        value={value}
        onChange={setValue}
        size={size}
      />
      <Text size="xs" tone="muted">
        selected: {value}
      </Text>
    </div>
  );
}

const meta = {
  title: 'UI/SegmentedControl',
  component: Demo,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Single-choice pill group — same language as the theme switcher. For 2–4 short ' +
          'options where the current value must stay visible; above that use a `select`. ' +
          'Buttons carry `aria-pressed` and the group is named by `label`.',
      },
    },
  },
} satisfies Meta<typeof Demo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Demo size="sm" />
      <Demo size="md" />
    </div>
  ),
};
