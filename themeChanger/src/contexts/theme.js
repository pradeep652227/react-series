import { createContext } from "react";
import { useContext } from "react";

const themeContext = createContext({ theme: "light", toggleTheme() {} }); //created a context object

export const ThemeContextProvider = themeContext.Provider;//exporting provider that'll provide values to its children

//exporting a custom hook

export function useTheme() {
  return useContext(themeContext);
}
