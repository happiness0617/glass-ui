import { InputHTMLAttributes, ReactNode } from 'react';

export type InputSize = 'small' | 'medium' | 'large';
export type InputVariant = 'outline' | 'filled' | 'flushed' | 'unstyled';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * 输入框大小
   * @default 'medium'
   */
  size?: InputSize;
  
  /**
   * 输入框变体
   * @default 'outline'
   */
  variant?: InputVariant;
  
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 是否只读
   * @default false
   */
  readOnly?: boolean;
  
  /**
   * 是否显示错误状态
   * @default false
   */
  isInvalid?: boolean;
  
  /**
   * 错误信息
   */
  errorMessage?: string;
  
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
   * 输入框左侧图标
   */
  leftIcon?: ReactNode;
  
  /**
   * 输入框右侧图标
   */
  rightIcon?: ReactNode;
  
  /**
   * 输入框标签
   */
  label?: string;
  
  /**
   * 输入框占位符
   */
  placeholder?: string;
  
  /**
   * 是否全宽度
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * 圆角大小
   * @default 'md'
   */
  borderRadius?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
} 