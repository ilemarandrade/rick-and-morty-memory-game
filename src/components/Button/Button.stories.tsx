import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./index";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  label: "Jugar",
  component: "button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  label: "Inicio",
};
