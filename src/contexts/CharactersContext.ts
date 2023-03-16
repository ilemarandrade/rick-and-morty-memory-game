import { createContext, useContext } from "react";
import { ICharacters } from "../models/endPointsModel";

interface IContext {
  characters: ICharacters[] | null;
}
const CharactersContext = createContext<IContext>({ characters: null });

export const useCharactersState = () => {
  const context = useContext(CharactersContext);
  if (!context) {
    throw new Error(
      "useCharactersState must be used within a CharactersProvider"
    );
  }
  return context;
};

export default CharactersContext;
