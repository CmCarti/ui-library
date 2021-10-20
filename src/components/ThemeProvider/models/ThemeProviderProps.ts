import ButtonThemeOptions from "../../Buttons/models/ButtonThemeOptions";

export default interface ThemeProviderProps {
  theme: ThemeProviderTheme;
}

export interface ThemeProviderTheme {
  button?: ButtonThemeOptions;
}
