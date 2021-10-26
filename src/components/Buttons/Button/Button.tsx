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
  const {
    color = "primary",
    size = "md",
    elevation = 0,
    disabled = false,
    onClick = undefined,
    ...rest
  } = props;
  const theme = useContext(ThemeContext);

  function handleClick(e: React.MouseEvent) {
    if (!disabled && onClick) onClick(e);
  }

  let borderRadius = 5;
  let { padding, fontSize } = getButtonSize(size);

  if (theme && theme.button) {
    borderRadius = theme.button.borderRadius || borderRadius;
    padding = theme.button.padding || padding;
  }

  let className = "";
  const paddingClassName = getPaddingClassName(padding);
  const elevationClassName = getElevation(elevation);

  if (disabled) {
    className += `bg-disabled 
    hover:bg-disabled-hover
    text-disabled-text
    hover:text-disabled-text-hover
    cursor-default
    `;
  }
  if (!disabled) {
    className += `bg-${color} 
    hover:bg-${color}-hover
    text-${color}-text
    hover:text-${color}-text-hover
    focus:ring-2
    focus:ring-${color}
    focus:ring-offset-2`;
  }

  className += `                               
                border-radius-${borderRadius}px
                ${paddingClassName}                 
                text-${fontSize}
                ${elevationClassName}                
                
                `;
  return (
    <button
      {...rest}
      className={className}
      onClick={onClick ? handleClick : undefined}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
