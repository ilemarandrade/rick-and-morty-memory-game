import GameBoard from "../../components/GameBoard";
import data from "../../__test__/data/characters.json";

const Play = () => {
  return (
    <>
      <div className="d-flex jc-space-between">
        <h2 className="mb-1-5">Aciertos:</h2>
        <h2 className="mb-1-5">Turnos:</h2>
      </div>
      <GameBoard data={data.results} />
    </>
  );
};

export default Play;
