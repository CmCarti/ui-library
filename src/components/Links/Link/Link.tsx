import React, {
  AnchorHTMLAttributes,
  Children,
  MouseEvent,
  useContext,
} from "react";
import getPaddingClassName from "../../helpers/getPaddingClassName";
import childrenHasBlockLevelElement from "../../helpers/isBlockLevelElement";
import { ThemeContext } from "../../ThemeProvider/ThemeProvider";
import LinkProps from "../models/LinkProps";

const Link: React.FC<LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  href,
  color = "primary",
  fontSize = "base",
  underline = false,
  hover = "color",
  target,
  onClick,
  disabled = false,
  children,
  ...props
}) => {
  let childrenHasBlockElement = childrenHasBlockLevelElement(children);

  if (typeof href !== "string") {
    console.warn(
      "You must provide a string to href for the link to work properly. Your prop will be overwritten with a blank string"
    );
    href = "";
  }

  const theme = useContext(ThemeContext);

  let className = "";

  if (theme && theme.link) {
    underline = theme.link.underline || underline;
    hover = theme.link.hover || hover;
    className += theme.link.padding
      ? getPaddingClassName(theme.link.padding)
      : "";
  }

  if (disabled) {
    className += `     
    text-disabled
    hover:text-disabled-hover
    cursor-default
    underline
    `;
  }
  if (!disabled) {
    className += `
    text-${color}
    ${(hover === "color" || hover === "both") && `hover:text-${color}-hover`}
    ${(hover === "underline" || hover === "both") && `hover:underline`}
    ${underline && `underline`}
    `;
  }

  className += `text-${fontSize}`;

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (disabled && e) {
      return e.preventDefault();
    }
    if (onClick && !disabled) onClick(e);
  }

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : ""}
      onClick={handleClick}
      className={!childrenHasBlockElement ? className : props.className}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
