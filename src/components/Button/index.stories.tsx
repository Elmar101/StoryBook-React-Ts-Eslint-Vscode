import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
};

export const Ghost: Story = {
  args: {
    children: "Click me",
    variant: "ghost",
    colorscheme: "primary",
    size: "md"
  },
};