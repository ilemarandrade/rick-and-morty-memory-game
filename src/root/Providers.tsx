import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import GameControlProvider from "../providers/GameControlProvider";

interface Props {
  children?: ReactNode;
}
const Providers = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <GameControlProvider>{children}</GameControlProvider>
    </BrowserRouter>
  );
};

export default Providers;
