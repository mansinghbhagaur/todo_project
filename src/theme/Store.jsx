import { createContext, useContext } from 'react';

export const ThemeContext = createContext();

// create custom hook for accesing theme context

export const useThemeContext = () => useContext(ThemeContext);