import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BaseCard } from "./BaseCard";

describe("BaseCard", () => {
  const user = userEvent.setup();

  test("render correctly BaseCard with text and image", () => {
    render(<BaseCard text="Test text" image="test-image.jpg" />);

    expect(screen.getByText("Test text")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Test text" })).toBeInTheDocument();
  });
  test("render correctly BaseCard with image exist and text is not provided", () => {
    render(<BaseCard image="test-image.jpg" />);

    expect(screen.getByText("Pokedex")).toBeInTheDocument();
  });
  test("render correctly BaseCard with text exist and image is not provided", () => {
    render(<BaseCard text="Test text" />);

    expect(
      screen.getByRole("img", { name: "Test text" }),
    ).toHaveAttribute("src", "/images/pokeball.jpg");
  });
});
