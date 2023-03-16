import { useMemo } from "react";
import Card from "../Card";
import { AllNumberKeys } from "../models/generics";
import classes from "./GameBoard.module.scss";
interface Props {
  data: {
    name: string;
    image: string;
    status: string;
    species: string;
    id: number;
    onClick?: (data: AllNumberKeys) => void;
    open?: boolean;
    position?: number;
  }[];
  onClickToCard?: any;
}

const GameBoard = ({ data, onClickToCard }: Props) => {
  const cards = useMemo(
    () => (
      <>
        {data.map(
          ({ name, image, status, species, id, open = true, position = 0 }) => (
            <Card
              key={id + position + name}
              name={name}
              img={image}
              open={open}
              origin={`${status} - ${species}`}
              onClick={() => onClickToCard && onClickToCard({ id, position })}
            />
          )
        )}
      </>
    ),
    [data, onClickToCard]
  );
  return <div className={classes.root}>{cards}</div>;
};
export default GameBoard;
