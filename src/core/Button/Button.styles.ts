import styled, { css } from 'styled-components';
import { ButtonProps, ButtonSize, ButtonVariant } from './Button.types';

type StyledButtonProps = {
  $size: ButtonSize;
  $variant: ButtonVariant;
  $loading: boolean;
  $glassEffect: boolean;
  $level: 1 | 2 | 3;
  $block: boolean;
  $borderRadius: string;
};

// 按钮大小样式
const buttonSizeStyles = {
  small: css`
    height: 32px;
    padding: 0 ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  `,
  medium: css`
    height: 40px;
    padding: 0 ${({ theme }) => theme.spacing[4]};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  `,
  large: css`
    height: 48px;
    padding: 0 ${({ theme }) => theme.spacing[6]};
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  `,
};

// 玻璃拟态效果
const glassEffectStyles = css<{ $level: 1 | 2 | 3; theme: any }>`
  ${({ theme, $level }) => {
    const levelStyles = theme.glass.level[$level];
    const isDark = theme.isDark;
    
    return css`
      background-color: ${isDark 
        ? `rgba(40, 45, 55, ${levelStyles.opacity})`
        : `rgba(255, 255, 255, ${levelStyles.opacity})`};
      backdrop-filter: blur(${levelStyles.blur}px);
      -webkit-backdrop-filter: blur(${levelStyles.blur}px);
      border: 1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.15)'};
      box-shadow: 
        0 1px 5px rgba(0, 0, 0, 0.1),
        inset 0 1px 1px rgba(255, 255, 255, 0.25);
    `;
  }}
`;

// 按钮变体样式
const buttonVariantStyles = {
  primary: css`
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primary}cc;
    }
  `,
  secondary: css`
    color: #fff;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
    
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.secondary}cc;
    }
  `,
  success: css`
    color: #fff;
    background-color: ${({ theme }) => theme.colors.success};
    border-color: ${({ theme }) => theme.colors.success};
    
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.success}cc;
    }
  `,
  warning: css`
    color: #fff;
    background-color: ${({ theme }) => theme.colors.warning};
    border-color: ${({ theme }) => theme.colors.warning};
    
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.warning}cc;
    }
  `,
  error: css`
    color: #fff;
    background-color: ${({ theme }) => theme.colors.error};
    border-color: ${({ theme }) => theme.colors.error};
    
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.error}cc;
    }
  `,
  info: css`
    color: #fff;
    background-color: ${({ theme }) => theme.colors.info};
    border-color: ${({ theme }) => theme.colors.info};
    
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.info}cc;
    }
  `,
  ghost: css`
    color: ${({ theme }) => theme.colors.text};
    background-color: transparent;
    border-color: ${({ theme }) => theme.colors.border};
    
    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
    }
  `,
};

// 加载状态样式
const loadingStyles = css`
  opacity: 0.7;
  cursor: progress;
  
  &:hover {
    opacity: 0.7;
  }
`;

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  border-radius: ${({ theme, $borderRadius }) => theme.glass.borderRadius[$borderRadius]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  width: ${({ $block }) => ($block ? '100%' : 'auto')};
  
  /* 应用大小样式 */
  ${({ $size }) => buttonSizeStyles[$size]};
  
  /* 应用变体样式 */
  ${({ $variant }) => buttonVariantStyles[$variant]};
  
  /* 应用玻璃拟态效果 */
  ${({ $glassEffect, $level, theme }) => $glassEffect && glassEffectStyles};
  
  /* 禁用状态 */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  /* 加载状态 */
  ${({ $loading }) => $loading && loadingStyles};
  
  /* 图标样式 */
  .button-left-icon {
    margin-right: ${({ theme }) => theme.spacing[2]};
  }
  
  .button-right-icon {
    margin-left: ${({ theme }) => theme.spacing[2]};
  }
  
  /* 加载图标旋转动画 */
  .button-loading-icon {
    animation: spin 1s linear infinite;
    margin-right: ${({ theme }) => theme.spacing[2]};
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`; 