import gifLoading from "../../assets/images/loading.gif";
import classes from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={classes.root}>
      <img alt="loading" src={gifLoading} />
    </div>
  );
};

export default Loading;
