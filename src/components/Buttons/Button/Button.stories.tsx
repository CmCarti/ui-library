import React from "react";
import ButtonComponent from "./Button";

export default {
  title: "UI Components/Buttons/Button",
  component: ButtonComponent,
  argTypes: {
    label: { control: "text" },
  },
};

const ButtonStory = (props) => {
  return (
    <ButtonComponent {...props} onClick={() => console.log("clicked")}>
      {props.label}
    </ButtonComponent>
  );
};

export const Button = ButtonStory.bind({});
Button.args = { label: "Basic Button" };
