import ButtonThemeOptions from "../../Buttons/models/ButtonThemeOptions";
import LinkThemeOptions from "../../Links/models/LinkThemeOptions";

export default interface ThemeProviderProps {
  theme: ThemeProviderTheme;
}

export interface ThemeProviderTheme {
  button?: ButtonThemeOptions;
  link?: LinkThemeOptions;
}
