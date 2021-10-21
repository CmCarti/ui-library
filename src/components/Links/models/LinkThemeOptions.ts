import GenericOptions from "../../ThemeProvider/models/GenericOptions";

export default interface LinkThemeOptions extends GenericOptions {
  underline: boolean;
  hover: "underline" | "color" | "both";
}
