import { createContext, useContext } from "react";
import { ICharacters } from "../models/endPointsModel";

interface IContext {
  characters: ICharacters[] | void[];
  matchesGot: number;
  setMatchesGot: (n: number) => void;
  turns: number;
  setTurns: (n: number) => void;
}

const GameControlContext = createContext<IContext>({
  characters: [],
  matchesGot: 0,
  setMatchesGot: () => {},
  turns: 0,
  setTurns: () => {},
});

export const useGameControlState = () => {
  const context = useContext(GameControlContext);

  if (!context) {
    throw new Error(
      "GameControlState must be used within a GameControlProvider"
    );
  }

  return context;
};

export default GameControlContext;
