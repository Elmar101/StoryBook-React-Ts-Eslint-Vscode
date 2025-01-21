import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "light" }, // Rəng seçici əlavə edir
    size: {
      control: { type: "select", options: ["small", "medium", "large"] }, // Seçim menyusu
    },
    onClick: { action: "clicked" }, // "onClick" hadisəsini izləyir
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: "Click me",
    variant: "solid",
    colorscheme: "primary",
    size: "md"
  },
};

export const Solid: Story = {
  args: {
    children: "Click me",
    variant: "solid",
    colorscheme: "primary",
    size: "md"
  },
};

export const Outline: Story = {
  args: {
    children: "Click me",
    variant: "outline",
    colorscheme: "primary",
    size: "md"
  },
  parameters: {
    backgrounds: { default: "red" }, // Yalnız bu hekayə üçün fərqli arxa fon
  },
};

export const Ghost: Story = {
  args: {
    children: "Click me",
    variant: "ghost",
    colorscheme: "primary",
    size: "md"
  },
};