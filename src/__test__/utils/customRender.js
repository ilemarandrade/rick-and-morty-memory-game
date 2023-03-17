import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GameControlProvider from "../../providers/GameControlProvider";

const AllTheProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <GameControlProvider>{children}</GameControlProvider>
    </BrowserRouter>
  );
};

const customRender = (ui, { ...options } = {}) =>
  render(ui, {
    wrapper: ({ children }) => <AllTheProviders children={children} />,
    ...options,
  });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
