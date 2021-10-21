import React from "react";
import Link from "./Link";

export default {
  title: "Link",
  component: Link,
  argTypes: {
    label: { control: "text" },
  },
};

const LinkStory = (props) => {
  return <Link {...props}>{props.label}</Link>;
};

const LinkStory2 = (props) => {
  return (
    <Link {...props}>
      <div>
        <p>
          This is a test of the link component with block level components
          inside.
        </p>
      </div>
    </Link>
  );
};

export const Standard = LinkStory.bind({});
Standard.args = { label: "Basic Link" };

export const Block = LinkStory2.bind({});
