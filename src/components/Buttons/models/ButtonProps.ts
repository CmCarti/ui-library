import React, { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react";
import Colors from "../../models/Colors";
import ElementSize from "../../models/ElementSize";

export default interface ButtonProps {
  color?: Colors;
  size?: ElementSize;
  elevation?: number;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent) => any;
}
