import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import CharactersProvider from "../providers/CharactersProvider";

interface Props {
  children?: ReactNode;
}
const Providers = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <CharactersProvider>{children}</CharactersProvider>
    </BrowserRouter>
  );
};

export default Providers;
