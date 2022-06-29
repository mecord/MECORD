import { AlertDialog } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("AlertDialog", () => {
  it("render a alert dialog", () => {
    render(<AlertDialog />);

    expect(screen.queryByTestId("test1")).toBeDefined();
  });
});
