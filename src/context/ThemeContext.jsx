import { useContext } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ContextUse = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = useState('light');

      const ToggleTheme = () => {
            setTheme((prev) => prev === 'light' ? 'black' : 'light');
      }

      return (
            <ThemeContext.Provider value={{ theme, ToggleTheme }}>
                  {children}
            </ThemeContext.Provider>
      )
}