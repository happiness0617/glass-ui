import React, { forwardRef } from 'react';
import { InputProps } from './Input.types';
import { InputWrapper, StyledInput, InputLabel, ErrorMessage } from './Input.styles';

/**
 * 输入框组件，支持多种变体和玻璃拟态效果
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'medium',
      variant = 'outline',
      disabled = false,
      readOnly = false,
      isInvalid = false,
      errorMessage,
      glassEffect = true,
      level = 2,
      leftIcon,
      rightIcon,
      label,
      fullWidth = false,
      borderRadius = 'md',
      ...rest
    },
    ref
  ) => {
    const hasLeftIcon = !!leftIcon;
    const hasRightIcon = !!rightIcon;
    const inputId = rest.id || `input-${Math.random().toString(36).substring(2, 9)}`;

    return (
      <div style={{ width: fullWidth ? '100%' : 'auto' }}>
        {label && <InputLabel htmlFor={inputId}>{label}</InputLabel>}
        
        <InputWrapper
          $size={size}
          $variant={variant}
          $isInvalid={isInvalid}
          $disabled={disabled}
          $readOnly={readOnly}
          $glassEffect={glassEffect}
          $level={level}
          $fullWidth={fullWidth}
          $hasLeftIcon={hasLeftIcon}
          $hasRightIcon={hasRightIcon}
          $borderRadius={borderRadius}
        >
          {leftIcon && <span className="input-icon input-left-icon">{leftIcon}</span>}
          
          <StyledInput
            ref={ref}
            id={inputId}
            disabled={disabled}
            readOnly={readOnly}
            $hasLeftIcon={hasLeftIcon}
            $hasRightIcon={hasRightIcon}
            $variant={variant}
            {...rest}
          />
          
          {rightIcon && <span className="input-icon input-right-icon">{rightIcon}</span>}
        </InputWrapper>
        
        {isInvalid && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    );
  }
);

Input.displayName = 'Input'; 