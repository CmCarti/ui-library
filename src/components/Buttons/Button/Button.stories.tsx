import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
  },
};

const ButtonStory = (props) => {
  return (
    <Button {...props} onClick={() => console.log("clicked")}>
      {props.label}
    </Button>
  );
};

export const Standard = ButtonStory.bind({});
Standard.args = { label: "Basic Button" };
