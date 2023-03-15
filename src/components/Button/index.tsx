import React from "react";
import classes from "./Button.module.scss";

interface ComponentSelected {
  color?: "primary" | "secondary";
  onClick?: () => void;
  component?: unknown;
  href?: string;
}
interface Props extends ComponentSelected {
  label: string;
}

const Component = ({
  component,
  props,
  children,
}: {
  component: unknown;
  props: ComponentSelected;
  children: string;
}) => React.createElement(component as string, { ...props }, children);

const Button = ({
  label,
  color = "primary",
  onClick = () => {},
  component = "a",
  ...restProps
}: Props) => {
  const isButton = component === "button";
  const props = {
    color,
    onClick: isButton ? onClick : undefined,
    className: `${classes["button-base"]} ${classes[`button-color-${color}`]}`,
    ...restProps,
  };
  return <Component {...{ props, component }}>{label}</Component>;
};

export default Button;
