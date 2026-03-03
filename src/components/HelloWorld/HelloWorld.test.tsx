import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HelloWorld } from "./HelloWorld";

describe("HelloWorld Component", () => {
  it("renders correctly", () => {
    const { container } = render(<HelloWorld />);
    expect(container).toBeInTheDocument();
  });
});
