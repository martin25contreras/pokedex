import type { StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text",
    buttonText: "Submit",
    onAction: (value: string) => console.log(value),
  },
};

export const Suscribe: Story = {
  args: {
    placeholder: "Enter your email",
    buttonText: "Subscribe",
    onAction: (value: string) => alert(`Suscrito con: ${value}`),
  },
};
