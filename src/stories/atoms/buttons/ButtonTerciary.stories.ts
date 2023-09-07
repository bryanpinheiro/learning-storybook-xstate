import type { Meta, StoryObj } from '@storybook/react';

import { ButtonTerciary } from './ButtonTerciary';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/Buttons/ButtonTerciary',
  component: ButtonTerciary,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof ButtonTerciary>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// https://storybook.js.org/docs/react/api/arg-types#if

export const Default: Story = {
  args: {
    label: 'Continue with Google',
  },
};

export const Loading: Story = {
  args: {
    label: 'Logging you in...',
    loading: true,
  },
};