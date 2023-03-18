import { act, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GameControlProvider from "../../providers/GameControlProvider";

const NetworkProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <GameControlProvider>{children}</GameControlProvider>
    </BrowserRouter>
  );
};

const SimpleProviders = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const simpleRender = (ui, { ...options } = {}) =>
  render(ui, {
    wrapper: ({ children }) => <SimpleProviders children={children} />,
    ...options,
  });

const networkRender = async (ui, { ...options } = {}) =>
  await act(() =>
    render(ui, {
      wrapper: ({ children }) => <NetworkProviders children={children} />,
      ...options,
    })
  );

// re-export everything
export * from "@testing-library/react";

// override render method
export { simpleRender as render, networkRender };
