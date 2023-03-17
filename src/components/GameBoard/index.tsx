import { useCallback, useMemo } from "react";
import Card from "../Card";
import { AllNumberKeys } from "../../models/generics";
import classes from "./GameBoard.module.scss";
import { ICharacters } from "../../models/endPointsModel";

interface ICard extends ICharacters {
  open?: boolean;
  position?: number;
  wasFound?: boolean;
}

interface IGameBoard {
  cardsData: ICard[];
  onClickToCard?: ({ id, position }: AllNumberKeys) => void;
}

const GameBoard = ({ cardsData, onClickToCard = () => {} }: IGameBoard) => {
  const handlerOnClick = useCallback(
    ({ id, position }: AllNumberKeys) => onClickToCard({ id, position }),
    [onClickToCard]
  );

  const cards = useMemo(
    () => (
      <>
        {cardsData.map(
          ({
            name,
            image,
            status,
            species,
            id,
            open = true,
            position = 0,
            wasFound = false,
          }) => (
            <Card
              key={`${id}-${position}-${name}`}
              name={name}
              img={image}
              open={open}
              origin={`${status} - ${species}`}
              onClick={() => handlerOnClick({ id, position })}
              wasFound={wasFound}
            />
          )
        )}
      </>
    ),
    [cardsData, handlerOnClick]
  );

  return <div className={classes.root}>{cards}</div>;
};
export default GameBoard;
