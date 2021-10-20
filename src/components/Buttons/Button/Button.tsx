import "../../../index.css";
import React, { ButtonHTMLAttributes, useContext } from "react";
import ButtonProps from "../models/ButtonProps";
import { ThemeContext } from "../../ThemeProvider/ThemeProvider";
import getPaddingClassName from "../../helpers/getPaddingClassName";
import getButtonSize from "../helpers/getButtonSize";
import getElevation from "../../helpers/getElevation";

const Button: React.FC<
  ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  const { color = "primary", size = "md", elevation = 0 } = props;
  const theme = useContext(ThemeContext);
  let borderRadius = 5;
  let { padding, fontSize } = getButtonSize(size);

  if (theme && theme.button) {
    borderRadius = theme.button.borderRadius || borderRadius;
    padding = theme.button.padding || padding;
  }

  let className = "";
  const paddingClassName = getPaddingClassName(padding);
  const elevationClassName = getElevation(elevation);

  className += `bg-${color} 
                hover:bg-${color}-hover
                text-${color}-text
                hover:text-${color}-text-hover                
                border-radius-${borderRadius}px
                ${paddingClassName}                 
                text-${fontSize}
                ${elevationClassName}
                focus:ring-2
                focus:ring-${color}
                focus:ring-offset-2
                `;
  return (
    <button className={className} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
