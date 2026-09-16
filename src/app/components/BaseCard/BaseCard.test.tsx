/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { render, screen } from "@testing-library/react";
import { BaseCard } from "./BaseCard";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({fill, ...props}: unknown) => {
    return <img {...props} />;
  },
}));
describe("BaseCard", () => {

  test("render correctly BaseCard with text and image", () => {
    render(<BaseCard text="Test text" image="test-image.jpg" />);

    expect(screen.getByText("Test text")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Test text" })).toBeInTheDocument();
  });
  test("render correctly BaseCard with image exist and text is not provided", () => {
    render(<BaseCard text="" image="test-image.jpg" />);

    expect(screen.getByText("Pokedex")).toBeInTheDocument();
  });
  test("render correctly BaseCard with text exist and image is not provided", () => {
    render(<BaseCard text="Test text" image="" />);

    expect(screen.getByRole("img", { name: "Test text" })).toHaveAttribute(
      "src",
      "/images/pokeball.jpg",
    );
  });
});
