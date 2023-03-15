import { ReactNode } from "react";
import classes from "./Section.module.scss";

interface Props {
  children?: ReactNode;
}
const Section = ({ children }: Props) => {
  return <section className={classes.section}>{children}</section>;
};
export default Section;
