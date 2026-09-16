/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { render, screen } from "@testing-library/react";
import { InfoCard } from "./InfoCard";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: unknown) => {
    return <img {...props} />;
  },
}));
describe("InfoCard", () => {
  const mockStats = [
    { label: "Altura", value: "1.7 m" },
    { label: "Peso", value: "90.5 kg" },
  ];

  const mockTypes = ["Test", "Test1"];

  const mockAbility = [
    {
      img: "test.png",
      text: "test data",
      point: "0",
    },
    {
      img: "test1.png",
      text: "data test1",
      point: "10",
    },
  ];

  test("render InfoCard with title and description", () => {
    render(
      <InfoCard
        title="test"
        description="test description"
        types={mockTypes}
        abilities={mockAbility}
        stats={mockStats}
      />,
    );

    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("test description")).toBeInTheDocument();
  });
  test("render InfoCard with different types", () => {
    render(
      <InfoCard
        title="test"
        description="test description"
        types={mockTypes}
        abilities={mockAbility}
        stats={mockStats}
      />,
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.getByText("Test1")).toBeInTheDocument();
  });
  test("render InfoCard with ability and stats", () => {
    render(
      <InfoCard
        title="test"
        description="test description"
        types={mockTypes}
        abilities={mockAbility}
        stats={mockStats}
      />,
    );

    const img1 = screen.getByRole("img", { name: /test1/i });
    expect(img1.getAttribute('src')).toContain(encodeURIComponent('test1.png'));
    expect(screen.getByText("data test1")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
