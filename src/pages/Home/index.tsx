import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import GameBoard from "../../components/GameBoard";
import routes from "../../constants/routes";
import data from "../../__test__/data/characters.json";
const Home = () => {
  return (
    <>
      <h2 className="mb-1-5">Personajes</h2>
      <GameBoard data={data.results} />
      <div className="perfect-centered">
        <Button label="Jugar" component={NavLink} to={routes.PLAY} />
      </div>
    </>
  );
};

export default Home;
