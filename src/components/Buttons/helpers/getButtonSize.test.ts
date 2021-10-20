import getButtonSize from "./getButtonSize";

const md = {
  fontSize: "base",
  padding: ["1", "4"],
};

const xs = {
  fontSize: "xs",
  padding: ["1", "2"],
};

it("returns a default size if no matching size is found", () => {
  expect(getButtonSize("md")).toEqual(md);
});

it("returns xs when xs is passed", () => {
  expect(getButtonSize("xs")).toEqual(xs);
});
