import { ReactNode } from "react";
import Header from "../../components/Header";
import classes from "./MainLayout.module.scss";

interface Props {
  children?: ReactNode;
}
const MainLayout = ({ children }: Props) => {
  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
