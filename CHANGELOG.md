# 更新日志

所有项目的显著变更都将记录在此文件中。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
并且本项目遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [未发布]

### 新增

- 核心组件开发
  - Button 按钮组件
    - 支持多种变体：primary, secondary, success, warning, error, info, ghost
    - 支持三种尺寸：small, medium, large
    - 支持玻璃拟态效果和三种效果级别
    - 支持图标、加载状态和禁用状态
  - Input 输入框组件
    - 支持多种变体：outline, filled, flushed, unstyled
    - 支持三种尺寸：small, medium, large
    - 支持标签、错误提示、图标
    - 支持玻璃拟态效果和三种效果级别

## [0.1.0] - 2023-07-07

### 新增

- 项目初始化
- 主题系统设计与实现
  - 支持亮色/暗色主题切换
  - 玻璃拟态效果定义
  - 颜色、排版、间距等基础设计标记
- 项目基础结构搭建
  - Rollup 构建配置
  - TypeScript 类型定义
  - 组件目录结构规范

### 即将实现

- 核心组件开发（Button, Input等）
- 数据展示组件开发（Table, Tree等）
- 反馈组件开发（Alert, Dialog等）
- Storybook文档系统 