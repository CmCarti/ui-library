import React from "react";
import LinkComponent from "./Link";

export default {
  title: "UI Components/Links/Link",
  component: LinkComponent,
  argTypes: {
    label: { control: "text" },
  },
};

const LinkStory = (props) => {
  return <LinkComponent {...props}>{props.label}</LinkComponent>;
};

const LinkStory2 = (props) => {
  return (
    <LinkComponent {...props}>
      <div>
        <p>
          This is a test of the link component with block level components
          inside.
        </p>
      </div>
    </LinkComponent>
  );
};

export const Link = LinkStory.bind({});
Link.args = { label: "Basic Link" };

export const BlockLink = LinkStory2.bind({});
