import { Meta, StoryFn } from '@storybook/react';
import Button1, { Button1Props } from './button';

export default {
  title: 'Atoms/Button',
  component: Button1,
  argTypes: {
    text: { control: 'text' },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
    },
  },
  parameters: {
    layout: "centered"
  },
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<Button1Props> = (args) => <Button1 {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Button',
  size: 'medium',
  onClick: () => { alert('Button clicked!'); } // Contoh fungsi onClick
};
