import gifLoading from "../../assets/images/loading.gif";
import classes from "./Loading.module.scss";

interface ILoading {
  isWelcome?: boolean;
}

const Loading = ({ isWelcome = false }: ILoading) => {
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
