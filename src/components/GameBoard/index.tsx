import Card from "../Card";
import classes from "./GameBoard.module.scss";
interface Props {
  data: {
    name: string;
    image: string;
    status: string;
    species: string;
    id: number;
    onClick?: (id: number) => void;
  }[];
}

const GameBoard = ({ data }: Props) => {
  return (
    <div className={classes.root}>
      {data.map(({ name, image, status, species, id, onClick = () => {} }) => (
        <Card
          key={id}
          name={name}
          img={image}
          open
          origin={`${status} - ${species}`}
          id={id}
          onClick={() => onClick(id)}
        />
      ))}
    </div>
  );
};
export default GameBoard;
