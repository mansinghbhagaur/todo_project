import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useThemeContext } from '../theme/Store';
import { DarkMode } from '@mui/icons-material';

export default function Header() {
      const { mode, toggleTheme } = useThemeContext();
      return (
            <Box sx={{ flexGrow: 1 }}>
                  <AppBar position="static" >
                        <Toolbar variant='dense'>
                              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Todo
                              </Typography>
                              <IconButton color="inherit" onClick={toggleTheme}>
                                    {mode === 'light' ? <DarkMode color='inherit' /> : <LightModeIcon color='inherit' />}
                              </IconButton>
                        </Toolbar>
                  </AppBar>
            </Box>
      );
}
