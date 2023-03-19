import { useState } from "react";
import intructions from "../../constants/intructions";
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
        {intructions.map((intruction, index) => (
          <li key={`${index}-${intruction.slice(0, 8)}`}>{intruction}</li>
        ))}
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
