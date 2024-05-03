import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

it("Render App", () => {
  render(<App />);
  const veg = screen.getByText("Vegetables");
  const fruits = screen.getByText("Fruits");
  expect(veg).toBeDefined();
  expect(fruits).toBeDefined();
});

it("Click Apple", () => {
  render(<App />);
  const Apple = screen.getByText("Apple");
  fireEvent.click(Apple);
});
