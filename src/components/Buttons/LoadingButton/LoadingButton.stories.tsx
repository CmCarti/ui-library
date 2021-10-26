import React from "react";
import LoadingButtonComponent from "./LoadingButton";

export default {
  title: "UI Components/Buttons/Loading Button",
  component: LoadingButtonComponent,
  argTypes: {
    label: { control: "text" },
  },
};

const LoadingButtonStory = (props) => {
  return (
    <LoadingButtonComponent {...props} onClick={() => console.log("clicked")}>
      {props.label}
    </LoadingButtonComponent>
  );
};

export const LoadingButton = LoadingButtonStory.bind({});
LoadingButton.args = { label: "Basic Button", loading: true };
