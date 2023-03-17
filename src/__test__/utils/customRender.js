import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CharactersProvider from "../../providers/CharactersProvider";

const AllTheProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <CharactersProvider>{children}</CharactersProvider>
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
