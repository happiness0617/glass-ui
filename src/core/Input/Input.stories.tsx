import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Input, InputProps } from './';

export default {
  title: 'Core/Input',
  component: Input,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: '标签',
    },
    placeholder: {
      control: 'text',
      defaultValue: '请输入...',
    },
    variant: {
      control: {
        type: 'select',
        options: ['outline', 'filled', 'flushed', 'unstyled'],
      },
      defaultValue: 'outline',
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
    readOnly: {
      control: 'boolean',
      defaultValue: false,
    },
    isInvalid: {
      control: 'boolean',
      defaultValue: false,
    },
    errorMessage: {
      control: 'text',
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
    fullWidth: {
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

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '用户名',
  placeholder: '请输入用户名',
};

export const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <Input variant="outline" placeholder="轮廓变体" />
    <Input variant="filled" placeholder="填充变体" />
    <Input variant="flushed" placeholder="底线变体" />
    <Input variant="unstyled" placeholder="无样式变体" />
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <Input size="small" placeholder="小输入框" />
    <Input size="medium" placeholder="中输入框" />
    <Input size="large" placeholder="大输入框" />
  </div>
);

export const WithIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <Input
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
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      }
      placeholder="带左侧图标"
    />
    <Input
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
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      }
      placeholder="带右侧图标"
    />
    <Input
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
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      }
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
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      }
      placeholder="带两侧图标"
    />
  </div>
);

export const States = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <Input disabled placeholder="禁用状态" />
    <Input readOnly defaultValue="只读状态" />
    <Input isInvalid errorMessage="输入有误" placeholder="错误状态" />
  </div>
);

export const WithLabel = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <Input label="用户名" placeholder="请输入用户名" />
    <Input label="密码" type="password" placeholder="请输入密码" />
  </div>
);

export const GlassEffectLevels = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <Input level={1} placeholder="玻璃效果 1" />
    <Input level={2} placeholder="玻璃效果 2" />
    <Input level={3} placeholder="玻璃效果 3" />
  </div>
);

export const FullWidth = () => (
  <div style={{ width: '100%' }}>
    <Input fullWidth placeholder="全宽输入框" />
  </div>
);

export const BorderRadiusVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <Input borderRadius="sm" placeholder="sm圆角" />
    <Input borderRadius="md" placeholder="md圆角" />
    <Input borderRadius="lg" placeholder="lg圆角" />
    <Input borderRadius="xl" placeholder="xl圆角" />
    <Input borderRadius="2xl" placeholder="2xl圆角" />
    <Input borderRadius="full" placeholder="full圆角" />
  </div>
); 