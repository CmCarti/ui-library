import Link from "./Link";
import React from "react";
import { mount, shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<Link>Test</Link>);
});

it("renders an <a>", () => {
  const link = shallow(<Link>Test</Link>);
  expect(link.exists("a")).toEqual(true);
});

it("Accepts props", () => {
  const link = mount(
    <Link href="#" color="primary" fontSize="base" underline hover="underline">
      Test
    </Link>
  );
  const { href, fontSize, underline, hover, color } = link.props();
  expect(href).toEqual("#");
  expect(fontSize).toEqual("base");
  expect(underline).toEqual(true);
  expect(hover).toEqual("underline");
  expect(color).toEqual("primary");
});

it("Renders children", () => {
  const link = mount(
    <Link href="#">
      <div>Test</div>
    </Link>
  );
  expect(link.containsMatchingElement(<div>Test</div>)).toEqual(true);
});

it("handles a click event", () => {
  const handleClick = jest.fn();
  const link = shallow(
    <Link href="#" onClick={handleClick}>
      Test Click
    </Link>
  );
  link.find("a").props().onClick();
  expect(handleClick).toHaveBeenCalled();
});

it("disables correctly", () => {
  const handleClick = jest.fn();
  const link = shallow(
    <Link href="#" onClick={handleClick} disabled>
      Test Click
    </Link>
  );
  link.find("a").props().onClick();
  expect(handleClick).toHaveBeenCalledTimes(0);
});

it("properly links to a new page", () => {
  const link = shallow(<Link href="/test">Test Link</Link>);
  expect(link.find("a").first().props().href).toEqual("/test");
});

it("properly opens the correct target", () => {
  const link = shallow(
    <Link href="/test" target="_blank">
      Test Link
    </Link>
  );
  expect(link.find("a").first().props().target).toEqual("_blank");
  expect(link.find("a").first().props().rel).toEqual("noreferrer");
});

describe("Properly applies styles", () => {
  // todo
});
