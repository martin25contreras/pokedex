import type { Meta, StoryObj } from "@storybook/react-vite";
import { DropdownInput } from "./DropdownInput";

const meta = {
  title: "Components/DropdownInput",
  component: DropdownInput,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Filtrar por tipo...",
    options: [
      { label: "Normal", value: "normal" },
      { label: "Fuego", value: "fire" },
      { label: "Agua", value: "water" },
      { label: "Planta", value: "grass" },
      { label: "Eléctrico", value: "electric" },
    ],
    onSelect: (value) => console.log("Seleccionaste:", value),
  },
};

export const WithoutPlaceholder: Story = {
  args: {
    options: [
      { label: "Normal", value: "normal" },
      { label: "Fuego", value: "fire" },
      { label: "Agua", value: "water" },
      { label: "Planta", value: "grass" },
      { label: "Eléctrico", value: "electric" },
    ],
    onSelect: (value) => console.log("Seleccionaste:", value),
  },
};
