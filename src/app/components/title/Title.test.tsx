import React from "react";
import { render, screen } from "@testing-library/react";
import { Title } from "./Title";

describe("Title", () => {
  test("render correctly with text", () => {
    render(<Title text="Texto de prueba" />);

    const textElement = screen.getByText(/Texto de prueba/i);
    expect(textElement).toBeInTheDocument();
  });

  test("render with default text", () => {
    render(<Title text="" />);

    const textElement = screen.getByText(/Pokedex/i);
    expect(textElement).toBeInTheDocument();
  });
});
