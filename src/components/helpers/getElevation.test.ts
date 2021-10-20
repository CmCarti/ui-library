import getElevation from "./getElevation";

it("Returns blank if 0 or no elevation is passed", () => {
  expect(getElevation(0)).toEqual("");
});

it("Returns shadow-sm if 1 is passed", () => {
  expect(getElevation(1)).toEqual("shadow-sm");
});

it("Returns shadow if 2 is passed", () => {
  expect(getElevation(2)).toEqual("shadow");
});

it("Returns shadow-md if 3 is passed", () => {
  expect(getElevation(3)).toEqual("shadow-md");
});

it("Returns shadow-lg if 4 is passed", () => {
  expect(getElevation(4)).toEqual("shadow-lg");
});

it("Returns shadow-xl if 5 is passed", () => {
  expect(getElevation(5)).toEqual("shadow-xl");
});

it("Returns shadow-2xl if 6 is passed", () => {
  expect(getElevation(6)).toEqual("shadow-2xl");
});

it("Returns shadow-2xl if > 6 is passed", () => {
  expect(getElevation(7)).toEqual("shadow-2xl");
  expect(getElevation(8)).toEqual("shadow-2xl");
  expect(getElevation(100)).toEqual("shadow-2xl");
});

it("Returns blank if < 0 is passed", () => {
  expect(getElevation(-1)).toEqual("");
  expect(getElevation(-2)).toEqual("");
  expect(getElevation(-300)).toEqual("");
});

it("Returns shadow if 2.5 is passed", () => {
  expect(getElevation(2.5)).toEqual("shadow");
});
