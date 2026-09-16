import type { StoryObj } from "@storybook/nextjs-vite";
import { CardSlider } from "./CardSlider";

const meta = {
  title: "Components/CardSlider",
  component: CardSlider,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};
export default meta;

type Story = StoryObj<typeof CardSlider>;

const elements = [
  { id: 1, data: "data1" },
  { id: 2, data: "data2" },
  { id: 3, data: "data3" },
];

export const Default: Story = {
  args: {
    elements,
    label: "component-slider",
    renderItem: (element) => (
      <div data-testid="slider-item">{element.data}</div>
    ),
  },
};

export const LessThanThree: Story = {
  args: {
    elements: [elements[0]],
    label: "component-slider",
    renderItem: (element) => (
      <div data-testid="slider-item">{element.data}</div>
    ),
  },
};

export const EmptyCard: Story = {
  args: {
    elements: [],
    label: "component-slider",
    emptyMessage: "No hay nada",
    renderItem: (element) => <div />,
  },
};
