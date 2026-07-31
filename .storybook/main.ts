import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-themes'],
  framework: '@storybook/nextjs-vite',
  // Serve /img, /svg e /fonts como o Next serve em dev.
  staticDirs: ['../public'],
  core: { disableTelemetry: true },
};

export default config;
