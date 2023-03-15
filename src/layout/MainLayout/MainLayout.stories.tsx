import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainLayout from "./index";
import Section from "../../components/Section";

export default {
  title: "Layouts/MainLayout",
  component: MainLayout,
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = () => (
  <MainLayout>
    <Section />
  </MainLayout>
);

export const SectionTemplate = Template.bind({});
