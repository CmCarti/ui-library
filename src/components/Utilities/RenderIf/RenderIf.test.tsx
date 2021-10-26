import { mount, shallow } from "enzyme";
import React from "react";

import RenderIf from "./RenderIf";
import Button from "../../Buttons/Button/Button";

const button = <Button>Test</Button>;

it("renders without crashing", () => {
  shallow(<RenderIf render={true}></RenderIf>);
});

it("renders child if render is true", () => {
  const renderIf = mount(<RenderIf render={true}>{button}</RenderIf>);
  expect(renderIf.contains(button)).toEqual(true);
});

it("does not render child if render is false", () => {
  const renderIf = mount(<RenderIf render={false}>{button}</RenderIf>);
  expect(renderIf.contains(button)).toEqual(false);
});

it("does not render child if render is not given", () => {
  const renderIf = mount(<RenderIf>{button}</RenderIf>);
  expect(renderIf.contains(button)).toEqual(false);
});
