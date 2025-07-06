import React, { forwardRef } from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styles';

/**
 * 按钮组件，支持多种变体和玻璃拟态效果
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = 'medium',
      variant = 'primary',
      disabled = false,
      loading = false,
      glassEffect = true,
      level = 2,
      block = false,
      borderRadius = 'md',
      leftIcon,
      rightIcon,
      ...rest
    },
    ref
  ) => {
    // 简单的加载图标
    const LoadingIcon = () => (
      <span className="button-loading-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      </span>
    );

    return (
      <StyledButton
        ref={ref}
        disabled={disabled || loading}
        $size={size}
        $variant={variant}
        $loading={loading}
        $glassEffect={glassEffect}
        $level={level}
        $block={block}
        $borderRadius={borderRadius}
        {...rest}
      >
        {loading && <LoadingIcon />}
        {!loading && leftIcon && <span className="button-left-icon">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="button-right-icon">{rightIcon}</span>}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button'; 