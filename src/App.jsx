import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import User from "./components/User";
import { Box, CssBaseline } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <User/>
    </ThemeProvider>
  );
};

export default App;
