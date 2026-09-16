import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  const mockItems = [
    { title: "¿Qué es un Pokémon?", content: "Es una criatura misteriosa." },
    { title: "¿Cómo se capturan?", content: "Usando Pokéballs." },
  ];

  test("render Accordion component with title and description when hidden at the start", () => {
    render(<Accordion items={mockItems} />);

    expect(screen.getByText("¿Qué es un Pokémon?")).toBeInTheDocument();
    expect(screen.getByText("¿Cómo se capturan?")).toBeInTheDocument();

    expect(screen.queryByText("Es una criatura misteriosa.")).toBeNull();
  });

  test("open the accordeon when user is click in the title", async () => {
    const user = userEvent.setup();
    render(<Accordion items={mockItems} />);

    const button = screen.getByText("¿Qué es un Pokémon?");

    // Hacemos clic en el primer título
    await user.click(button);

    expect(screen.getByText("Es una criatura misteriosa.")).toBeInTheDocument();
  });

  test("close the previous when is click the next option", async () => {
    const user = userEvent.setup();
    render(<Accordion items={mockItems} />);

    await user.click(screen.getByText("¿Qué es un Pokémon?"));
    expect(screen.getByText("Es una criatura misteriosa.")).toBeInTheDocument();

    await user.click(screen.getByText("¿Cómo se capturan?"));
    expect(screen.getByText("Usando Pokéballs.")).toBeInTheDocument();

    expect(screen.queryByText("Es una criatura misteriosa.")).toBeNull();
  });

  test("close the panel when is click the same title", async () => {
    const user = userEvent.setup();
    render(<Accordion items={mockItems} />);

    const button = screen.getByText("¿Qué es un Pokémon?");

    await user.click(button);
    expect(screen.getByText("Es una criatura misteriosa.")).toBeInTheDocument();

    await user.click(button);
    expect(screen.queryByText("Es una criatura misteriosa.")).toBeNull();
  });
});
