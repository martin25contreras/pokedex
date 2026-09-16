import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "./Accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        title: "¿Cuántos Pokémon existen actualmente?",
        content:
          "Hasta la fecha, existen más de 1000 especies diferentes de Pokémon descubiertas en diversas regiones, desde Kanto hasta Paldea.",
      },
      {
        title: "¿Cuál es la diferencia entre un tipo Fuego y uno Eléctrico?",
        content:
          "Los tipos Fuego son súper efectivos contra los tipo Planta, Bicho, Hielo y Acero. Los tipos Eléctrico destacan por ser súper efectivos contra los tipo Agua y Volador.",
      },
      {
        title: "¿Qué es la evolución Mega?",
        content:
          "Es una transformación temporal introducida en la región de Kalos que permite a ciertos Pokémon superar sus límites en combate, cambiando su apariencia y estadísticas.",
      },
    ],
  },
};
