import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { HelloWorld } from "./HelloWorld";

describe("HelloWorld Component", () => {
  it("renders children correctly", () => {
    render(<HelloWorld>Prueba Vitest</HelloWorld>);
    expect(screen.getByText("Prueba Vitest")).toBeInTheDocument();
  });
});
