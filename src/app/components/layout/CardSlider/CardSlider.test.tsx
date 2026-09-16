import { render, screen } from "@testing-library/react";
import { CardSlider } from "./CardSlider";

describe("CardSlider", () => {
  test("render correctly all cards", () => {
    render(
      <CardSlider
        elements={[
          { id: 1, data: "data1" },
          { id: 2, data: "data2" },
          { id: 3, data: "data3" },
        ]}
        label="test-slider"
        renderItem={(element) => (
          <div data-testid="slider-item">{element.data}</div>
        )}
      />,
    );

    expect(
      screen.getByRole("region", { name: /test-slider/i }),
    ).toBeInTheDocument();

    const items = screen.getAllByTestId("slider-item");
    expect(items).toHaveLength(3);
    expect(screen.getByText("data1")).toBeInTheDocument();
  });
  test("render correctly when the cards are more than 3", () => {
    render(
      <CardSlider
        elements={[
          { id: 1, data: "data1" },
          { id: 2, data: "data2" },
          { id: 3, data: "data3" },
          { id: 3, data: "data3" },
          { id: 3, data: "data3" },
        ]}
        label="test-slider"
        renderItem={(element) => (
          <div data-testid="slider-item">{element.data}</div>
        )}
      />,
    );

    const items = screen.getAllByTestId("slider-item");
    expect(items).toHaveLength(5);
  });
  test("render correctly when the cards are less than 3", () => {
    render(
      <CardSlider
        elements={[{ id: 1, data: "data1" }]}
        label="test-slider"
        renderItem={(element) => (
          <div data-testid="slider-item">{element.data}</div>
        )}
      />,
    );

    const items = screen.getAllByTestId("slider-item");
    expect(items).toHaveLength(1);
  });
  test("does not render the slider when the cards is empty", () => {
    render(
      <CardSlider
        elements={[]}
        label="test-slider"
        emptyMessage="No hay nada"
        renderItem={() => <div />}
      />,
    );
    const items = screen.queryAllByTestId("slider-item");
    expect(items).toHaveLength(0);
    expect(screen.getByText("No hay nada")).toBeInTheDocument();
  });
});
