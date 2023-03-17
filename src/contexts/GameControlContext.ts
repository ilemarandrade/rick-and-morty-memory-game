import { createContext, useContext } from "react";
import { ICharacters } from "../models/endPointsModel";

interface IContext {
  characters: ICharacters[] | null;
  success: number;
  setSuccess: (n: number) => void;
  turns: number;
  setTurns: (n: number) => void;
}

const GameControlContext = createContext<IContext>({
  characters: null,
  success: 0,
  setSuccess: () => {},
  turns: 0,
  setTurns: () => {},
});

export const GameControlState = () => {
  const context = useContext(GameControlContext);

  if (!context) {
    throw new Error(
      "GameControlState must be used within a GameControlProvider"
    );
  }

  return context;
};

export default GameControlContext;
