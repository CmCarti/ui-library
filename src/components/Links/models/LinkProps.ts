import FontSize from "../../models/FontSize";
import Colors from "../../models/Colors";
export default interface LinkProps {
  href: string;
  color?: Colors;
  fontSize?: FontSize;
  underline?: boolean;
  hover?: "underline" | "color" | "both";
  disabled?: boolean;
}
