import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Field } from './Field';
import { controlClasses, Input } from './Input';
import { Textarea } from './Textarea';

const meta = {
  title: 'UI/Field',
  component: Field,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Label + control + supporting line. It renders a `<label>`, so clicking the text focuses ' +
          'the control without an `id`/`htmlFor` pair. `error` replaces `hint` and turns red — ' +
          'set `invalid` on the control at the same time so the border follows. See `UI/Input` ' +
          'for the control shell itself.',
      },
    },
  },
  // `children` fica no meta para que as stories que só definem `render` não
  // precisem repetir os args obrigatórios do componente.
  args: { label: 'Nº do voucher', children: <Input defaultValue="250102" /> },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: { hint: 'Seis dígitos, sem espaços' },
  render: (args) => (
    <div className="max-w-sm p-6">
      <Field {...args} />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-4 p-6">
      <Field label="Nome do passageiro">
        <Input defaultValue="Marcelo Cabral" />
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

/**
 * A native `select` borrows the same shell through `controlClasses`, so the
 * border, radius and focus ring match the other controls.
 */
export const WithSelect: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-4 p-6">
      <Field label="Roteiro" hint="Os 12 roteiros do inventário">
        <select className={controlClasses('sm', false)} defaultValue="pati-5">
          <option value="palmital">Cachoeira do Palmital · 2 dias</option>
          <option value="pati-3">Vale do Pati · 3 dias</option>
          <option value="pati-5">Vale do Pati · 5 dias</option>
        </select>
      </Field>
      <Field label="Observações">
        <Textarea
          rows={3}
          defaultValue="TRANSFER SSA X LEC + TOURS [PRIVATE] (Check-in HOTEL)"
        />
      </Field>
    </div>
  ),
};
