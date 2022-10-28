import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from "components/foundations/palette";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Routes from "./Routes";

const App = () => {

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App