import type { Meta, StoryObj } from '@storybook/react';

import { HelpText } from './helpText';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/HelpTexts/HelpText',
  component: HelpText,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof HelpText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// https://storybook.js.org/docs/react/api/arg-types#if

export const Default: Story = {
  args: {
    text: 'Password must be at least 8 characters.',
  },
};

export const Content_Icon_Label: Story = {
  args: {
    text: 'indicates a required field.',
    content: 'icon_label',
  },
};

export const Negative: Story = {
  args: {
    text: 'An email or username is required to log in.' + ' ' +
      'You can also log in with Google.',
    content: 'label_only',
    variant: 'negative',
  },
};