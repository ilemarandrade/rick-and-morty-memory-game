import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loading from "./index";

export default {
  title: "Components/Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = () => <Loading />;

export const LoadingTemplate = Template.bind({});
