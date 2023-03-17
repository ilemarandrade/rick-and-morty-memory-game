import { Link } from "react-router-dom";
import Button from "../../components/Button";
import GameBoard from "../../components/GameBoard";
import routes from "../../constants/routes";
import { useGameControlState } from "../../contexts/GameControlContext";

const Home = () => {
  const { characters } = useGameControlState();

  return (
    <>
      <h2 className="mb-1-5">Personajes</h2>
      {characters.length && <GameBoard cardsData={characters} />}
      <div className="perfect-centered">
        <Button label="Jugar" component={Link} to={routes.PLAY} />
      </div>
    </>
  );
};

export default Home;
