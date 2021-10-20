import React, { createContext } from "react";
import ThemeProviderProps, {
  ThemeProviderTheme,
} from "./models/ThemeProviderProps";

export const ThemeContext = createContext<ThemeProviderTheme>({});

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { theme } = props;

  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
