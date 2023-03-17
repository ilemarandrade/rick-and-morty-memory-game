import classes from "./Card.module.scss";
import rickyAndMorty from "../../assets/images/ricky_morty.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import breakpointsValues from "../../constants/breakpointsValues";
import { useGameControlState } from "../../contexts/GameControlContext";

interface ICard {
  img: string;
  name: string;
  origin: string;
  open?: boolean;
  onClick: () => void;
  wasFound?: boolean;
}
const Card = ({
  img,
  name,
  origin,
  open = false,
  onClick,
  wasFound = false,
}: ICard) => {
  const { isPlaying } = useGameControlState();
  const isTablet = useMediaQuery((breakpoints: any) =>
    breakpoints.down(breakpointsValues.md)
  );
  return (
    <button
      className={`
      ${classes[`card-${open ? "open" : "close"}`]} ${classes.card} ${
        classes[wasFound ? "wasFound" : ""]
      }`}
      onClick={() => !open && onClick()}
    >
      {open ? (
        <>
          <img alt={name} src={img} />
          {(!isTablet || !isPlaying) && (
            <>
              <p className={classes.name} title={name}>
                {name}
              </p>
              <p className={classes.origin}>{origin}</p>
            </>
          )}
        </>
      ) : (
        <img src={rickyAndMorty} alt="ricky and morty" />
      )}
    </button>
  );
};

export default Card;
