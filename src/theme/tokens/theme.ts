import { DefaultTheme } from 'styled-components';
import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { glass } from './glass';

export const lightTheme: DefaultTheme = {
  colors: {
    ...colors,
    primary: '#007aff',
    secondary: '#5856d6',
    success: '#34c759',
    warning: '#ff9500',
    error: '#ff3b30',
    info: '#5ac8fa',
    background: '#f2f2f7',
    text: '#000000',
    border: 'rgba(0, 0, 0, 0.1)',
  },
  typography,
  spacing,
  glass,
  isDark: false,
};

export const darkTheme: DefaultTheme = {
  colors: {
    ...colors,
    primary: '#0a84ff',
    secondary: '#5e5ce6',
    success: '#30d158',
    warning: '#ff9f0a',
    error: '#ff453a',
    info: '#64d2ff',
    background: '#1c1c1e',
    text: '#ffffff',
    border: 'rgba(255, 255, 255, 0.2)',
  },
  typography,
  spacing,
  glass,
  isDark: true,
}; 