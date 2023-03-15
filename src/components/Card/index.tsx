import classes from "./Card.module.scss";
import rickyAndMorty from "../../assets/images/ricky_morty.png";

interface Props {
  img: string;
  name: string;
  origin: string;
  open?: boolean;
  id: number;
  onClick: (id: number) => void;
}
const Card = ({ img, name, origin, open = false, id, onClick }: Props) => {
  return (
    <button
      className={`${classes[`card-${open ? "open" : "close"}`]} ${
        classes.card
      }`}
      onClick={() => onClick(id)}
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
