import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import GameBoard from "../../components/GameBoard";
import routes from "../../constants/routes";
import { useCharactersState } from "../../contexts/CharactersContext";

const Home = () => {
  const { characters } = useCharactersState();
  return (
    <>
      <h2 className="mb-1-5">Personajes</h2>
      {characters && <GameBoard data={characters} />}
      <div className="perfect-centered">
        <Button label="Jugar" component={NavLink} to={routes.PLAY} />
      </div>
    </>
  );
};

export default Home;
