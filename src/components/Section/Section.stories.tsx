import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Section from "./index";
import Card from "../Card";

export default {
  title: "Components/Section",
  component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...{ ...args }} />
);

export const SectionTemplate = Template.bind({});
SectionTemplate.args = {
  children: (
    <>
      <Card
        {...{
          img: "https://placekitten.com/200/200",
          name: "Beth Smith",
          origin: "Alive - Human",
          open: true,
          id: 1,
          onClick: (id) => {
            alert(id);
          },
        }}
      />
    </>
  ),
};
