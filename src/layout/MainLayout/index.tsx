import { ReactNode } from "react";
import Header from "../../components/Header";
import classes from "./MainLayout.module.scss";
interface IMainLayout {
  children?: ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
