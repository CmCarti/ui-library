import React, { Children } from "react";

export default function childrenHasBlockLevelElement(
  children?: React.ReactNode
): boolean {
  if (!children) return false;

  const blockLevelElements = [
    "address",
    "article",
    "aside",
    "blockquote",
    "details",
    "dialog",
    "dd",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "ol",
    "p",
    "pre",
    "section",
    "table",
    "ul",
  ];

  let childrenHasBlockElement = false;
  const childArray = Children.toArray(children);
  Children.map(childArray, (child) => {
    if (React.isValidElement(child)) {
      if (blockLevelElements.includes(child.type.toString())) {
        childrenHasBlockElement = true;
      }
    }
  });

  return childrenHasBlockElement;
}
