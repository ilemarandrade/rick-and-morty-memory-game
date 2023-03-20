import { useState } from "react";
import environment from "../utils/environment";

export const shuffleCards = <T>(cards: T[]) => {
  let cardsToBoard;
  const isTest =
    environment.APP_ENV === "cy-test" || environment.APP_ENV === "test";

  if (isTest) {
    cardsToBoard = [...cards.slice(0, 6), ...cards.slice(0, 6)];
  } else {
    const randomAllCard = cards.sort(() => 0.5 - Math.random());
    cardsToBoard = [
      ...randomAllCard.slice(0, 6),
      ...randomAllCard.slice(0, 6),
    ].sort(() => 0.5 - Math.random());
  }
  return cardsToBoard;
};

type IValueState<T> = {
  [K in keyof T]: T[K];
} & {
  open?: boolean;
  position?: number;
  wasFound?: boolean;
};

const useCardsOnTheBoard = <T>(
  cards: T[]
): [
  IValueState<T>[],
  React.Dispatch<React.SetStateAction<IValueState<T>[]>>
] => {
  const [cardsOnTheBoard, setCardsOnTheBoard] = useState<IValueState<T>[]>(
    () => {
      const shuffledCards = shuffleCards<T>(cards).map(
        ({ ...keys }, index) => ({
          ...keys,
          open: true,
          position: index,
        })
      );

      return shuffledCards;
    }
  );

  return [cardsOnTheBoard, setCardsOnTheBoard];
};

export default useCardsOnTheBoard;
