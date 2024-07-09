import { Meta, StoryFn } from '@storybook/react';
import Input from './input';
import { InputProps } from './input';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    onChange: { action: 'onChange' },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: StoryFn<InputProps> = (args: InputProps) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = {
  label: 'Input Label',
  name: 'input-name',
  value: 'Initial value',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  ...Default.args,
  description: 'This is a description for the input field.',
};
