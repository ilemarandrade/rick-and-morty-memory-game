import title from "../../assets/images/title.png";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <img alt="title of game" src={title} />
      <div className={classes.subtitle}>
        <h1>Juego de memoria</h1>
      </div>
    </header>
  );
};
export default Header;
