import { ReactNode, ButtonHTMLAttributes } from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'ghost';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 按钮内容
   */
  children: ReactNode;
  
  /**
   * 按钮大小
   * @default 'medium'
   */
  size?: ButtonSize;
  
  /**
   * 按钮变体
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 是否显示加载状态
   * @default false
   */
  loading?: boolean;
  
  /**
   * 是否应用玻璃拟态效果
   * @default true
   */
  glassEffect?: boolean;
  
  /**
   * 玻璃拟态效果级别
   * @default 2
   */
  level?: 1 | 2 | 3;
  
  /**
   * 是否为块级按钮（宽度100%）
   * @default false
   */
  block?: boolean;
  
  /**
   * 圆角大小
   * @default 'md'
   */
  borderRadius?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  
  /**
   * 左侧图标
   */
  leftIcon?: ReactNode;
  
  /**
   * 右侧图标
   */
  rightIcon?: ReactNode;
} 