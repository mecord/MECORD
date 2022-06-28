import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HelpButton } from ".";

test("click", () => {
  render(<HelpButton />);

  const button = screen.getByRole("button");
  userEvent.click(button);
});
