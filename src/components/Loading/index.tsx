import gifLoading from "../../assets/images/loading.gif";
import classes from "./Loading.module.scss";

interface Props {
  isWelcome?: boolean;
}

const Loading = ({ isWelcome = false }: Props) => {
  return (
    <div className={`${classes.root} ${isWelcome && classes["is-welcome"]}`}>
      <img alt="loading" src={gifLoading} />
      {isWelcome && (
        <h1 className={classes.greeting}>Bienvenido a Ricky & Morty game</h1>
      )}
    </div>
  );
};

export default Loading;
