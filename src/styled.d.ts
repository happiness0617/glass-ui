import 'styled-components';

// 导入我们的主题类型
import { colors } from './theme/tokens/colors';
import { typography } from './theme/tokens/typography';
import { spacing } from './theme/tokens/spacing';
import { glass } from './theme/tokens/glass';

type ColorsType = typeof colors & {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  background: string;
  text: string;
  border: string;
};

// 扩展默认主题接口
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
    typography: typeof typography;
    spacing: typeof spacing;
    glass: typeof glass;
    isDark: boolean;
  }
} 