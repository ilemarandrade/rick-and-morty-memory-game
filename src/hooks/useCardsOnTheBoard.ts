import { useState } from "react";

const shuffleCards = <T>(cards: T[]) => {
  const randomAllCard = cards?.sort(() => 0.5 - Math.random());

  return [...randomAllCard?.slice(0, 6), ...randomAllCard?.slice(0, 6)]?.sort(
    () => 0.5 - Math.random()
  );
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
