import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import GameControlProvider from "../providers/GameControlProvider";

interface IProviders {
  children?: ReactNode;
}

const Providers = ({ children }: IProviders) => {
  return (
    <BrowserRouter>
      <GameControlProvider>{children}</GameControlProvider>
    </BrowserRouter>
  );
};

export default Providers;
