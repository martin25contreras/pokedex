import type { StoryObj } from "@storybook/react-vite";
import { InfoCard } from "./InfoCard";

const meta = {
  title: "Components/InfoCard",
  component: InfoCard,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    title: "Texto plano",
    description: "Descripcion completa",
    types: ["Tipo 1", "Tipo 2"],
    stats: [
      { label: "Altura", value: "1.7 m" },
      { label: "Peso", value: "90.5 kg" },
    ],
    abilities: [
      {
        img: "test.png",
        text: "Habilidad 1",
        point: "0",
      },
      {
        img: "test1.png",
        text: "Habilidad 2",
        point: "10",
      },
    ],
  },
};

export const OnlyBaseInformation = {
  args: {
    title: "Texto plano",
    description: "Descripcion completa",
    types: ["Tipo 1", "Tipo 2"],
    stats: [],
    abilities: [],
  },
};
