import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DropdownInput } from "./DropdownInput";

describe("DropdownInput", () => {
  const mockOptions = [
    { label: "Fuego", value: "fire" },
    { label: "Agua", value: "water" },
    { label: "Planta", value: "grass" },
  ];

  test("render correctly dropdown and open of the list", async () => {
    const user = userEvent.setup();
    const handleSelect = jest.fn();

    render(
      <DropdownInput
        placeholder="Selecciona un tipo"
        options={mockOptions}
        onSelect={handleSelect}
      />,
    );

    const input = screen.getByPlaceholderText(/selecciona un tipo/i);

    expect(screen.queryByRole("listbox")).toBeNull();

    await user.click(input);

    const listbox = screen.getByRole("listbox");
    expect(listbox).toBeInTheDocument();

    const option = screen.getByText("Fuego");
    await user.click(option);

    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(handleSelect).toHaveBeenCalledWith("fire");
  });

  test("render correctly dropdown and open of the list with the placeholder for default", async () => {
    const user = userEvent.setup();
    const handleSelect = jest.fn();

    render(
      <DropdownInput
        options={mockOptions}
        onSelect={handleSelect}
      />,
    );

    const input = screen.getByPlaceholderText(/Selecciona una opción.../i);

    expect(screen.queryByRole("listbox")).toBeNull();

    await user.click(input);

    const listbox = screen.getByRole("listbox");
    expect(listbox).toBeInTheDocument();

    const option = screen.getByText("Fuego");
    await user.click(option);

    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(handleSelect).toHaveBeenCalledWith("fire");
  });
});
