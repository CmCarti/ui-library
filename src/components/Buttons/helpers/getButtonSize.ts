import ElementSize from "../../models/ElementSize";
import FontSize from "../../models/FontSize";
import Spacing from "../../models/Spacing";

interface ButtonSize {
  fontSize: FontSize;
  padding: Spacing;
}

export default function getButtonSize(size: ElementSize): ButtonSize {
  const buttonSize: ButtonSize = { fontSize: "base", padding: ["1", "3"] };

  if (size === "xs") {
    buttonSize.fontSize = "xs";
    buttonSize.padding = ["1", "2"];
  }
  if (size === "sm") {
    buttonSize.fontSize = "sm";
    buttonSize.padding = ["1", "2"];
  }
  if (size === "lg") {
    buttonSize.fontSize = "lg";
    //buttonSize.padding = ["1.5", "5"];
  }
  if (size === "xl") {
    buttonSize.fontSize = "xl";
    buttonSize.padding = ["1.5", "4"];
  }
  return buttonSize;
}
