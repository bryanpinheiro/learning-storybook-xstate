import type { Meta, StoryObj } from '@storybook/react';

import { InLineAlert } from './inlineAlert';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/InLineAlerts/InLineAlert',
  component: InLineAlert,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof InLineAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// https://storybook.js.org/docs/react/api/arg-types#if

export const Neutral: Story = {
  args: {
    title: 'Payment Information',
    description: 'This is an alert.',
    variant: 'neutral',
  },
};

export const Negative: Story = {
  args: {
    title: 'Incorrect Payment Information - Error',
    description: 'This is an alert.',
    variant: 'negative',
  },
};

export const Informative: Story = {
  args: {
    title: 'About Payment Information',
    description: 'This is an alert.',
    variant: 'informative',
  },
};
