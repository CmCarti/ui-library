import Spacing from "../models/Spacing";

export default function getPaddingClassName(padding: Spacing): string {
  if (!padding) return "";
  return Array.isArray(padding)
    ? padding.length === 2
      ? `py-${padding[0]} px-${padding[1]}`
      : padding.length === 3
      ? `pt-${padding[0]} px-${padding[1]} pb-${padding[2]}`
      : padding.length === 4
      ? `pt-${padding[0]} pr-${padding[1]} pb-${padding[2]} pl-${padding[3]}`
      : `p-0`
    : `p-${padding}`;
}
