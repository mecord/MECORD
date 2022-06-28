import { SocialButton } from ".";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("SocialButton", () => {
  it("render a social button", () => {
    render(<SocialButton />);

    expect(screen.getByTestId("test")).toBeInTheDocument();
  });
});
