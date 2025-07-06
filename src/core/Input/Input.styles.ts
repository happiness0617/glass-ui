import styled, { css } from 'styled-components';
import { InputSize, InputVariant } from './Input.types';

type StyledInputWrapperProps = {
  $size: InputSize;
  $variant: InputVariant;
  $isInvalid: boolean;
  $disabled: boolean;
  $readOnly: boolean;
  $glassEffect: boolean;
  $level: 1 | 2 | 3;
  $fullWidth: boolean;
  $hasLeftIcon: boolean;
  $hasRightIcon: boolean;
  $borderRadius: string;
};

// 输入框大小样式
const inputSizeStyles = {
  small: css`
    height: 32px;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    
    .input-icon {
      font-size: 0.875rem;
    }
  `,
  medium: css`
    height: 40px;
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    
    .input-icon {
      font-size: 1rem;
    }
  `,
  large: css`
    height: 48px;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    
    .input-icon {
      font-size: 1.25rem;
    }
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

// 输入框变体样式
const inputVariantStyles = {
  outline: css<{ $isInvalid: boolean; theme: any }>`
    border: 1px solid ${({ theme, $isInvalid }) => 
      $isInvalid ? theme.colors.error : theme.colors.border};
    background-color: transparent;
    
    &:focus-within {
      border-color: ${({ theme, $isInvalid }) => 
        $isInvalid ? theme.colors.error : theme.colors.primary};
      box-shadow: 0 0 0 1px ${({ theme, $isInvalid }) => 
        $isInvalid ? theme.colors.error : theme.colors.primary};
    }
  `,
  filled: css<{ $isInvalid: boolean; theme: any }>`
    border: 1px solid transparent;
    background-color: ${({ theme }) => 
      theme.isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'};
    
    &:focus-within {
      border-color: ${({ theme, $isInvalid }) => 
        $isInvalid ? theme.colors.error : theme.colors.primary};
      background-color: ${({ theme }) => 
        theme.isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.07)'};
    }
  `,
  flushed: css<{ $isInvalid: boolean; theme: any }>`
    border: none;
    border-bottom: 1px solid ${({ theme, $isInvalid }) => 
      $isInvalid ? theme.colors.error : theme.colors.border};
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;
    background-color: transparent;
    
    &:focus-within {
      border-bottom-color: ${({ theme, $isInvalid }) => 
        $isInvalid ? theme.colors.error : theme.colors.primary};
      box-shadow: 0 1px 0 0 ${({ theme, $isInvalid }) => 
        $isInvalid ? theme.colors.error : theme.colors.primary};
    }
  `,
  unstyled: css`
    border: none;
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
    
    &:focus-within {
      box-shadow: none;
    }
  `,
};

export const InputLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const InputWrapper = styled.div<StyledInputWrapperProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  border-radius: ${({ theme, $borderRadius, $variant }) => 
    $variant === 'flushed' ? '0' : theme.glass.borderRadius[$borderRadius]};
  transition: all 0.2s ease-in-out;
  
  /* 应用大小样式 */
  ${({ $size }) => inputSizeStyles[$size]};
  
  /* 应用变体样式 */
  ${({ $variant, $isInvalid, theme }) => inputVariantStyles[$variant]};
  
  /* 应用玻璃拟态效果 */
  ${({ $glassEffect, $level, theme, $variant }) => 
    $glassEffect && $variant !== 'unstyled' && $variant !== 'flushed' && glassEffectStyles};
  
  /* 禁用状态 */
  ${({ $disabled, theme }) =>
    $disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      
      &:hover {
        border-color: ${theme.colors.border};
      }
    `}
  
  /* 只读状态 */
  ${({ $readOnly }) =>
    $readOnly &&
    css`
      cursor: default;
    `}
    
  /* 图标样式 */
  .input-icon {
    position: absolute;
    color: ${({ theme }) => theme.colors.gray[500]};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .input-left-icon {
    left: ${({ theme }) => theme.spacing[3]};
  }
  
  .input-right-icon {
    right: ${({ theme }) => theme.spacing[3]};
  }
`;

export const StyledInput = styled.input<{ $hasLeftIcon: boolean; $hasRightIcon: boolean; $variant: InputVariant }>`
  width: 100%;
  height: 100%;
  padding-left: ${({ $hasLeftIcon, $variant, theme }) => 
    $variant === 'unstyled' ? '0' : 
    $hasLeftIcon ? theme.spacing[8] : theme.spacing[3]};
  padding-right: ${({ $hasRightIcon, $variant, theme }) => 
    $variant === 'unstyled' ? '0' : 
    $hasRightIcon ? theme.spacing[8] : theme.spacing[3]};
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  border: none;
  outline: none;
  font-family: inherit;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
  
  &:disabled {
    cursor: not-allowed;
  }
  
  &:read-only {
    cursor: default;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`; 