import { createTheme } from '@mui/material/styles';
import GeneralSans from './fonts/GeneralSans-Regular.otf'
import GeneralSansBold from './fonts/GeneralSans-Bold.otf'

const theme = createTheme({
  palette: {
    primary: {
      main: '#7391c8',
      dark: '#4b508d'
    },
    secondary: {
      main: '#f49e8b',
      light: '#fffaec'
    },
    error: {
      main: '#E74C3C'
    },
    success: {
      main: '#2ECC71',
    },
    warning: {
      main: '#F39C12'
    }
  },
  typography: {
    fontFamily: 'GeneralSans'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "GeneralSans";
          src: local("GeneralSans"), url(${GeneralSans}) format("opentype");
        }
        @font-face {
          font-family: "GeneralSans";
          src: local("GeneralSansBold"), url(${GeneralSansBold}) format("opentype");
          font-weight: bold;
        }
      `
    }
  }
})

export default theme