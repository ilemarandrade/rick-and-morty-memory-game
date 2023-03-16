import classes from "./Card.module.scss";
import rickyAndMorty from "../../assets/images/ricky_morty.png";

interface Props {
  img: string;
  name: string;
  origin: string;
  open?: boolean;
  onClick: () => void;
}
const Card = ({ img, name, origin, open = false, onClick }: Props) => {
  return (
    <button
      className={`${classes[`card-${open ? "open" : "close"}`]} ${
        classes.card
      }`}
      onClick={() => onClick()}
    >
      {open ? (
        <>
          <img alt={name} src={img} />
          <p className={classes.name}>{name}</p>
          <p className={classes.origin}>{origin}</p>
        </>
      ) : (
        <img src={rickyAndMorty} alt="ricky and morty" />
      )}
    </button>
  );
};

export default Card;
