import { mount, shallow } from "enzyme";
import React from "react";

import ButtonProps from "../models/ButtonProps";
import Button from "./Button";

it("renders without crashing", () => {
  shallow(<Button>Hello Button</Button>);
});

it("renders a <button>", () => {
  const wrapper = shallow(<Button>Hello Button</Button>);
  expect(wrapper.exists("button")).toEqual(true);
});

const buttonProps: ButtonProps = {
  color: "secondary",
  size: "sm",
};

describe("Accepts props and chilren", () => {
  const wrapper = mount(
    <Button color={buttonProps.color} size={buttonProps.size}>
      Testing Button
    </Button>
  );
  it("Accepts ButtonProps", () => {
    expect(wrapper.props().color).toEqual(buttonProps.color);
    expect(wrapper.props().size).toEqual(buttonProps.size);
  });
  it("Renders text", () => {
    expect(wrapper.contains("Testing Button")).toEqual(true);
  });
  it("Renders children", () => {
    const wrapper = mount(
      <Button>
        <span>Testing</span>
        <span>Testing 2</span>
      </Button>
    );
    expect(wrapper.containsMatchingElement(<span>Testing</span>)).toEqual(true);
    expect(wrapper.containsMatchingElement(<span>Testing 2</span>)).toEqual(
      true
    );
  });
});

it("Handles a click event correctly", () => {
  let num = 0;
  const wrapper = shallow(
    <Button onClick={() => (num = 1)}>Testing Click</Button>
  );
  wrapper.find("button").simulate("click");
  expect(num).toEqual(1);
});
