import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "./index";

export default {
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardOpen = Template.bind({});
CardOpen.args = {
  img: "https://placekitten.com/200/200",
  name: "Beth Smith",
  origin: "Alive - Human",
  open: true,
  onClick: () => {
    alert("hola");
  },
};

export const CardClose = Template.bind({});
CardClose.args = {
  img: "https://placekitten.com/200/200",
  name: "Ilemar Andrade",
  origin: "Alive - Human",
  onClick: () => {
    alert("hola");
  },
};
