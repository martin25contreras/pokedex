import type { Meta, StoryObj } from "@storybook/react";
import { BaseCard } from "./BaseCard";

const meta = {
  title: "Components/BaseCard",
  component: BaseCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof BaseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variante 1: Uso normal
export const Default: Story = {
  args: {
    text: "Pokedex",
    image: "images/pokeball.jpg",
  },
};

// Variante 2: Título largo para probar cómo responde el diseño
export const LongTitle: Story = {
  args: {
    text: "Pikachu con gorra de Ash Ketchum",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
};
