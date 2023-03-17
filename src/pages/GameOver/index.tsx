import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import routes from "../../constants/routes";
import { useGameControlState } from "../../contexts/GameControlContext";
import classes from "./GameOver.module.scss";

const GameOver = () => {
  const { turns } = useGameControlState();

  return (
    <div className={classes.root}>
      <h2 className="mb-1 font-primary">¡Felicitaciones!</h2>
      <p className="mb-1-5">{`Terminaste el juego con ${turns} turnos`}</p>
      <div className={`d-flex jc-space-between ${classes.containerButtons}`}>
        <Button label="Repetir" component={NavLink} to={routes.PLAY} />
        <Button
          label="Inicio"
          component={NavLink}
          to={routes.HOME}
          color="secondary"
        />
      </div>
    </div>
  );
};

export default GameOver;
