import type { Meta, StoryObj } from '@storybook/react';

import { ButtonSecondary } from './ButtonSecondary';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Buttons/ButtonSecondary',
  component: ButtonSecondary,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof ButtonSecondary>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// https://storybook.js.org/docs/react/api/arg-types#if

export const Medium: Story = {
  args: {
    id: 'default',
    type: 'button',
    label: 'Log in',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    id: 'default',
    type: 'button',
    label: 'Log in',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    id: 'default',
    type: 'button',
    label: 'Log in',
    size: 'small',
  },
};