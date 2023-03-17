import { useState } from "react";
import Button from "../Button";

interface Props {
  onClickPlay: (t: boolean) => void;
}
const Intructions = ({ onClickPlay }: Props) => {
  const [showIntructionsAgain, setShowInstructionsAgain] = useState(false);

  return (
    <>
      <h1 className="ta-center">Intrucciones</h1>
      <ul>
        <li>Tendrás 3 segundos para memorizar las cartas.</li>
        <li>Una vez volteadas puedes seleccionar 2 cartas.</li>
        <li>Si las cartas abiertas son iguales te sumará puntos a favor.</li>
        <li>
          Si las cartas son diferentes se colocarán como estaban y podrás volver
          a elegir otras dos más.
        </li>
        <li>Procura hacerlo la menor cantidad de intentos.</li>
        <li>Mientras menos intentos/turnos, más memoria tienes!</li>
      </ul>
      <div className="perfect-centered mb-1-5">
        <input
          type="checkbox"
          id="miCheckbox"
          checked={showIntructionsAgain}
          onChange={() => setShowInstructionsAgain(!showIntructionsAgain)}
        />
        <label htmlFor="miCheckbox">No volver a ver las instrucciones</label>
      </div>
      <div className="perfect-centered">
        <Button
          label="Empezar"
          onClick={() => onClickPlay(showIntructionsAgain)}
          component="button"
        />
      </div>
    </>
  );
};

export default Intructions;
