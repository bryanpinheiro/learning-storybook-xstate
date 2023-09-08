import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './link';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Links/Link',
  component: Link,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// https://storybook.js.org/docs/react/api/arg-types#if

export const Default: Story = {
  args: {
    id: 'default',
    text: 'Forgot Password?',
    url: '/forgotpw',
  },
};

export const Outside_App: Story = {
  args: {
    id: 'default',
    text: 'Google',
    url: 'https://www.google.com/',
    outside: true,
  },
};