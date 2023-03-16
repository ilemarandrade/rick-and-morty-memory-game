import { createContext, useContext } from "react";
import { ICharacters } from "../models/endPointsModel";

interface IContext {
  characters: ICharacters[] | null;
  success: number;
  setSuccess: (n: number) => void;
  turns: number;
  setTurns: (n: number) => void;
  isPlaying: boolean;
  showIntructions: boolean;
}
const CharactersContext = createContext<IContext>({
  characters: null,
  success: 0,
  setSuccess: () => {},
  turns: 0,
  setTurns: () => {},
  isPlaying: false,
  showIntructions: false,
});

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
