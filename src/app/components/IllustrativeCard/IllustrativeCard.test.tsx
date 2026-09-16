import { render, screen } from "@testing-library/react";
import { IllustrativeCard } from "./IllustrativeCard";


describe("IllustrativeCard", () => {
  test("render correctly the central image and the title", () => {
    render(
      <IllustrativeCard
        title="test-title"
        image="/test-image.png"
        imageAlt="ilustracion-test"
      />,
    );

    expect(screen.getByText("test-title")).toBeInTheDocument();
    const image = screen.getByRole('img', { name: /ilustracion-test/i });
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toContain(encodeURIComponent('/test-image.png'));
  });
  test('render the description when only the "description" prop is passed', () => {
    render(
      <IllustrativeCard
        title="test-title"
        image="/test-image.png"
        imageAlt="ilustracion-test"
        description="test-description"
      />,
    );

    expect(screen.getByText("test-title")).toBeInTheDocument();
    const image = screen.getByRole('img', { name: /ilustracion-test/i });
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toContain(encodeURIComponent('/test-image.png'));
  });
});
