import React from 'react';
import { ThemeProvider } from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: '全局主题',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: '亮色主题' },
        { value: 'dark', icon: 'circle', title: '暗色主题' },
      ],
      showName: true,
    },
  },
}; 