import type { StoryObj } from "@storybook/react-vite";
import { IllustrativeCard } from "./IllustrativeCard";

const meta = {
  title: "Components/IllustrativeCard",
  component: IllustrativeCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "test-title",
    image: "/test-image.png",
    imageAlt: "ilustracion-test",
  },
};

export const WithDescription: Story = {
  args: {
    title: "test-title",
    image: "/test-image.png",
    imageAlt: "ilustracion-test",
    description: "test-description",
  },
};
