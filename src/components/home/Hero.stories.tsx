import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Hero } from './Hero';

const meta = {
  title: 'Home/01 · Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    // The hero always sits on a dark photo, so the theme does not change it.
    themes: { themeOverride: 'dark' },
    docs: {
      description: {
        component:
          'Section 01 of the home page. Built from `MediaCard` + `Heading` / `Text` / `Button`; ' +
          'only the absolute positioning from Figma lives in the section file.',
      },
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};
