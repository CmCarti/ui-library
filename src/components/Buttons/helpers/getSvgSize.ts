import ElementSize from "../../models/ElementSize";

export default function getSvgSize(size: ElementSize): string {
  if (size === "xs") return "w-3.5 h-3.5";
  if (size === "sm") return "w-4 h-4";
  if (size === "lg") return "w-5 h-5";
  if (size === "xl") return "w-6 h-6";
  return "w-5 h-5";
}
