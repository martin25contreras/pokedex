import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  const user = userEvent.setup();

  test("render correctly input with placeholder and button with text", () => {
    render(
      <Input
        placeholder="Enter text"
        buttonText="Submit"
        onAction={jest.fn()}
      />,
    );

    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });
  test("render correctly input and button with text when placeholder is not provided", () => {
    render(
      <Input
        buttonText="Submit"
        onAction={jest.fn()}
      />,
    );

    expect(screen.getByPlaceholderText("Escribe aquí...")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });
  test("call a function when the button is clicked", async () => {
    const handleAction = jest.fn();
    render(
      <Input
        placeholder="Enter text"
        buttonText="Submit"
        onAction={handleAction}
      />,
    );

    const input = screen.getByPlaceholderText("Enter text");
    const button = screen.getByRole("button", { name: "Submit" });

    await user.type(input, "Test input");
    await user.click(button);

    expect(handleAction).toHaveBeenCalledTimes(1);
    expect(handleAction).toHaveBeenCalledWith("Test input");
  });

  test("does not call the function when the input is empty", async () => {
    const handleAction = jest.fn();
    render(
      <Input
        placeholder="Enter text"
        buttonText="Submit"
        onAction={handleAction}
      />,
    );

    const button = screen.getByRole("button", { name: "Submit" });

    await user.click(button);

    expect(handleAction).not.toHaveBeenCalled();
  });

  test("does not call the function when the input is only whitespace", async () => {
    const handleAction = jest.fn();
    render(
      <Input
        placeholder="Enter text"
        buttonText="Submit"
        onAction={handleAction}
      />,
    );
    const button = screen.getByRole("button", { name: "Submit" });
    const input = screen.getByPlaceholderText("Enter text");

    await user.type(input, '    ');
    await user.clear(input);

    expect(handleAction).not.toHaveBeenCalled();
  });
});
