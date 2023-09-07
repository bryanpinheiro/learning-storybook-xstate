import type { Meta, StoryObj } from '@storybook/react';

import { FieldLabel } from './fieldLabel';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Atoms/FieldLabels/FieldLabel',
  component: FieldLabel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof FieldLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// https://storybook.js.org/docs/react/api/arg-types#if

export const Neutral_Label_Only: Story = {
  args: {
    htmlFor: 'username_or_email',
    label: 'Username or Email',
    content: 'label_only',
  },
};
export const Neutral_Label_Text: Story = {
  args: {
    htmlFor: 'username_or_email',
    label: 'Username or Email',
    content: 'label_text',
  },
};

export const Required_Label_Icon: Story = {
  args: {
    htmlFor: 'username_or_email',
    label: 'Username or Email',
    content: 'label_icon',
    major: 'required',
  },
};

export const Required_Label_Text: Story = {
  args: {
    htmlFor: 'username_or_email',
    label: 'Username or Email',
    content: 'label_text',
    major: 'required',
  },
};