import React from "react";
import Button from "../../Buttons/Button/Button";
import RenderIf from "./RenderIf";

export default {
  title: "RenderIf",
  component: RenderIf,
  argTypes: {
    toggle: { control: "boolean" },
  },
};

const RenderIfStory = (props) => {
  return (
    <div>
      <RenderIf render={props.toggle}>
        <div>
          If the toggle is set to true, we show the child of the first RenderIf
        </div>
      </RenderIf>
      <RenderIf render={!props.toggle}>
        <div>
          If the toggle is set to false, we show the child of the second
          RenderIf
        </div>
      </RenderIf>
    </div>
  );
};

export const Standard = RenderIfStory.bind({});
Standard.args = { toggle: true };
