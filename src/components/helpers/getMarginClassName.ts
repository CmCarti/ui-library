import Spacing from "../models/Spacing";

export default function getMarginClassName(margin: Spacing): string {
  if (!margin) return "";
  return Array.isArray(margin)
    ? margin.length === 2
      ? `my-${margin[0]} mx-${margin[1]}`
      : margin.length === 3
      ? `mt-${margin[0]} mx-${margin[1]} mb-${margin[2]}`
      : margin.length === 4
      ? `mt-${margin[0]} mr-${margin[1]} mb-${margin[2]} ml-${margin[3]}`
      : `m-0`
    : `m-${margin}`;
}
