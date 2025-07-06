export const glass = {
  // 玻璃拟态效果的级别
  level: {
    1: {
      opacity: 0.1,
      blur: 5,
      border: 'rgba(255, 255, 255, 0.05)',
      shadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    },
    2: {
      opacity: 0.15,
      blur: 10,
      border: 'rgba(255, 255, 255, 0.1)',
      shadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    3: {
      opacity: 0.2,
      blur: 15,
      border: 'rgba(255, 255, 255, 0.15)',
      shadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    },
  },
  
  // 特殊效果
  effects: {
    // 内部光晕效果
    innerGlow: {
      light: 'inset 0 1px 1px rgba(255, 255, 255, 0.3)',
      dark: 'inset 0 1px 1px rgba(0, 0, 0, 0.3)',
    },
    // 边缘高光效果
    edgeHighlight: {
      light: '0 0 0 1px rgba(255, 255, 255, 0.2) inset',
      dark: '0 0 0 1px rgba(255, 255, 255, 0.05) inset',
    },
  },
  
  // 圆角
  borderRadius: {
    sm: '0.25rem',   // 4px
    md: '0.5rem',    // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
    '2xl': '1.5rem', // 24px
    full: '9999px',
  },
}; 