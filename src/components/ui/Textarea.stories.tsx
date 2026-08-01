import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Field } from './Field';
import { Textarea } from './Textarea';

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Multi-line control on the same shell as `Input` (`controlClasses`), plus a 52px ' +
          'minimum height and vertical resize. Wrap it in `Field` for the label.',
      },
    },
  },
  args: {
    size: 'sm',
    invalid: false,
    rows: 3,
    defaultValue:
      'Uma jornada de resgate das práticas primitivas, no coração do Parque Nacional da Chapada Diamantina.',
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    invalid: { control: 'boolean' },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div className="max-w-md p-6">
      <Textarea {...args} />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-4 p-6">
      <Field label='size="sm" · ferramentas internas (voucher)'>
        <Textarea size="sm" rows={2} defaultValue="Check-in HOTEL · 5:00AM" />
      </Field>
      <Field label='size="md" · formulários de página (contato)'>
        <Textarea size="md" rows={2} defaultValue="Check-in HOTEL · 5:00AM" />
      </Field>
    </div>
  ),
};

export const Invalid: Story = {
  render: () => (
    <div className="max-w-md p-6">
      <Field label="Mensagem" error="Conte em uma linha o que você procura">
        <Textarea invalid rows={3} defaultValue="" />
      </Field>
    </div>
  ),
};
