import Footer from './components/Footer'
import NavigationBar from './components/NavigationBar'

import Router from './Router'

import { MathJaxContext } from "better-react-mathjax";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#004d40',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#f57c00',
      contrastText: '#ffffff'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <MathJaxContext>
        <Router />
      </MathJaxContext>
      <Footer />
    </ThemeProvider>
  )
}
