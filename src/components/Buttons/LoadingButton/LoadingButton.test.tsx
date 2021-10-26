import { mount, shallow } from "enzyme";
import React from "react";

import LoadingButton from "./LoadingButton";
import Button from "../Button/Button";
import Spinner from "./components/Spinner";
import Check from "./components/Check";

it("renders without crashing", () => {
  const wrapper = shallow(<LoadingButton>Test</LoadingButton>);
});

it("renders a <Button>", () => {
  const wrapper = mount(<LoadingButton>Test</LoadingButton>);
  expect(wrapper.exists(Button)).toEqual(true);
});

it("renders a spinner when loading", () => {
  const wrapper = mount(<LoadingButton loading>Test</LoadingButton>);
  expect(wrapper.exists(Spinner)).toEqual(true);
});

it("renders a check when successful", () => {
  const wrapper = mount(<LoadingButton success>Test</LoadingButton>);
  expect(wrapper.exists(Check)).toEqual(true);
});

it("should disable events if loading is true", () => {
  const clickTest = jest.fn();
  const wrapper = mount(
    <LoadingButton loading onClick={clickTest}>
      Test
    </LoadingButton>
  );
  wrapper.find("button").props().onClick();
  expect(clickTest).toHaveBeenCalledTimes(0);
});

it("should display a check if success is true", () => {
  const wrapper = mount(<LoadingButton success>Test</LoadingButton>);
  expect(wrapper.contains(<Check />)).toEqual(true);
});
