import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useThemeContext } from '../theme/Store';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Header() {
  const {mode , toggleTheme} = useThemeContext()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='error'>
        <Toolbar >
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Todo
          </Typography>
          <IconButton onClick={toggleTheme}>
               {mode === 'light' ? <DarkModeIcon/> : <WbSunnyIcon color='inherit'/>}
 
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
