import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Field } from './Field';
import { Input } from './Input';
import { Textarea } from './Textarea';

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Form control on the theme surface. `Input`, `Textarea` and `select` share the same ' +
          'shell (`controlClasses`), so a form never hand-rolls border, radius or focus ring. ' +
          'Wrap it in `Field` to get a label.',
      },
    },
  },
  args: { size: 'sm', placeholder: 'Cachoeira do Palmital', invalid: false },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    invalid: { control: 'boolean' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div className="max-w-sm p-6">
      <Input {...args} />
    </div>
  ),
};

/** With label, hint and error — the three states of `Field`. */
export const WithField: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-4 p-6">
      <Field label="Nº do voucher">
        <Input defaultValue="250102" />
      </Field>
      <Field label="Check-in" hint="Formato dd/mm/aaaa">
        <Input placeholder="16/08/2026" />
      </Field>
      <Field label="E-mail" error="Campo obrigatório">
        <Input invalid defaultValue="" />
      </Field>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-4 p-6">
      <Field label='size="sm" · formulários densos (voucher)'>
        <Input size="sm" defaultValue="5:00AM" />
      </Field>
      <Field label='size="md" · formulários de página (contato)'>
        <Input size="md" defaultValue="5:00AM" />
      </Field>
    </div>
  ),
};

export const WithTextarea: Story = {
  render: () => (
    <div className="max-w-sm p-6">
      <Field label="Descrição">
        <Textarea defaultValue="TRANSFER SSA X LEC + TOURS [PRIVATE] (Check-in HOTEL)" />
      </Field>
    </div>
  ),
};
