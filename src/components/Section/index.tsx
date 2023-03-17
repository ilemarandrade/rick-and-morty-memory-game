import { ReactNode } from "react";
import classes from "./Section.module.scss";
interface ISection {
  children?: ReactNode;
}

const Section = ({ children }: ISection) => {
  return <section className={classes.section}>{children}</section>;
};

export default Section;
