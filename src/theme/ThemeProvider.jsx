import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { ThemeContext } from './Store';

export const ThemeProvider = ({ children }) => {
      const [mode, setMode] = useState('light');


      useEffect(() => {
            const storedTheme = localStorage.getItem('themeMode');
            setMode(storedTheme);

      }, [])

      const toggleTheme = () => {
            const newTheme = mode === 'light' ? 'dark' : 'light';
            setMode(newTheme);
            localStorage.setItem('themeMode', newTheme);
      }

      // creating theme object light & Dark Theme 
      const lightTheme = createTheme({
            palette: {
                  mode: 'light',
                  primary: {
                        main: '#f05',
                  },
                  secondary: {
                        main: '#f05'
                  },
                  background: {
                        default: '#f4f4f4'
                  }
            }
      });

      const darkTheme = createTheme({
            palette: {
                  mode: 'dark',
                  primary: {
                        main: '#ccc',
                  },
                  background: {
                        default: '#121212'
                  }
            }
      });

      const theme = mode === 'light' ? lightTheme : darkTheme;


      return (
            <ThemeContext.Provider value={{ mode, toggleTheme }}>
                  <MuiThemeProvider theme={theme}>
                        {children}
                  </MuiThemeProvider>
            </ThemeContext.Provider>
      )
}