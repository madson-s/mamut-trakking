import type { Decorator, Preview } from '@storybook/nextjs-vite';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { fontBody, fontDisplay } from '../src/lib/fonts';
import '../src/app/globals.css';

/**
 * Reproduz o shell do site: variáveis das fontes locais + superfície e cor de
 * texto do tema. O `font-body` é redeclarado aqui porque `--font-brutal` passa
 * a existir só a partir deste wrapper.
 */
const withMamutShell: Decorator = (Story) => (
  <div
    className={`${fontBody.variable} ${fontDisplay.variable} font-body min-h-svh bg-surface text-content antialiased`}
  >
    <Story />
  </div>
);

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
      expanded: true,
    },
    options: {
      storySort: { order: ['Theme', 'UI', 'Home'] },
    },
    a11y: { test: 'todo' },
  },
  decorators: [
    withMamutShell,
    // O site é dark-first (a home PT nasce com data-theme="dark").
    withThemeByDataAttribute({
      themes: { dark: 'dark', light: 'light' },
      defaultTheme: 'dark',
      attributeName: 'data-theme',
    }),
  ],
};

export default preview;
