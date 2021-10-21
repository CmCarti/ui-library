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

export const Standard = LinkStory.bind({});
Standard.args = { label: "Basic Link" };
