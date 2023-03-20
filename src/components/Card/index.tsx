import classes from "./Card.module.scss";
import rickyAndMorty from "../../assets/images/ricky_morty.png";
import { useGameControlState } from "../../contexts/GameControlContext";

interface ICard {
  img: string;
  name: string;
  origin: string;
  open?: boolean;
  onClick: () => void;
  wasFound?: boolean;
  id?: number;
  position: number;
}

const Card = ({
  img,
  name,
  origin,
  open = false,
  onClick,
  wasFound = false,
  id,
  position,
}: ICard) => {
  const { isPlaying } = useGameControlState();

  return (
    <button
      className={`
      ${classes[`card-${open ? "open" : "close"}`]} 
      ${classes.card} 
      ${wasFound ? classes.wasFound : ""}
      ${isPlaying ? classes["not-show-texts"] : ""}
      `}
      onClick={() => !open && onClick()}
      data-testid={`card-${id}${position || ""}`}
    >
      {open ? (
        <>
          <img alt={name} src={img} />

          <p className={classes.name} title={name}>
            {name}
          </p>
          <p className={classes.origin}>{origin}</p>
        </>
      ) : (
        <img src={rickyAndMorty} alt="ricky and morty" />
      )}
    </button>
  );
};

export default Card;
