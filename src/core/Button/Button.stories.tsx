import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './';

export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: '按钮',
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'ghost'],
      },
      defaultValue: 'primary',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      defaultValue: 'medium',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
    },
    glassEffect: {
      control: 'boolean',
      defaultValue: true,
    },
    level: {
      control: {
        type: 'select',
        options: [1, 2, 3],
      },
      defaultValue: 2,
    },
    block: {
      control: 'boolean',
      defaultValue: false,
    },
    borderRadius: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
      },
      defaultValue: 'md',
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '默认按钮',
};

export const Variants = () => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    <Button variant="primary">主要按钮</Button>
    <Button variant="secondary">次要按钮</Button>
    <Button variant="success">成功按钮</Button>
    <Button variant="warning">警告按钮</Button>
    <Button variant="error">错误按钮</Button>
    <Button variant="info">信息按钮</Button>
    <Button variant="ghost">幽灵按钮</Button>
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
    <Button size="small">小按钮</Button>
    <Button size="medium">中按钮</Button>
    <Button size="large">大按钮</Button>
  </div>
);

export const GlassEffectLevels = () => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <Button level={1} variant="primary">
      玻璃效果 1
    </Button>
    <Button level={2} variant="primary">
      玻璃效果 2
    </Button>
    <Button level={3} variant="primary">
      玻璃效果 3
    </Button>
  </div>
);

export const WithIcons = () => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    <Button
      leftIcon={
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
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      }
    >
      左侧图标
    </Button>
    <Button
      rightIcon={
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
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      }
    >
      右侧图标
    </Button>
  </div>
);

export const States = () => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    <Button disabled>禁用按钮</Button>
    <Button loading>加载按钮</Button>
  </div>
);

export const BlockButton = () => (
  <div style={{ width: '100%', maxWidth: '500px' }}>
    <Button block>块级按钮</Button>
  </div>
);

export const BorderRadiusVariants = () => (
  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
    <Button borderRadius="sm">sm圆角</Button>
    <Button borderRadius="md">md圆角</Button>
    <Button borderRadius="lg">lg圆角</Button>
    <Button borderRadius="xl">xl圆角</Button>
    <Button borderRadius="2xl">2xl圆角</Button>
    <Button borderRadius="full">full圆角</Button>
  </div>
); 