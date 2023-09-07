import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './textField';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/TextFields/TextField',
  component: TextField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// https://storybook.js.org/docs/react/api/arg-types#if

export const Default: Story = {
  args: {
    id: 'username_or_email',
    name: 'username_or_email',
    type: 'text',
    autoComplete: 'username email',
    required: false,
  },
}

export const Negative: Story = {
  args: {
    id: 'username_or_email',
    name: 'username_or_email',
    type: 'text',
    autoComplete: 'off',
    required: true,
  },
}

export const Password: Story = {
  args: {
    id: 'password',
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
    required: true,
  },
}

