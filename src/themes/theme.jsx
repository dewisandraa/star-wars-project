import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'Orbitron, sans-serif',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#646cff',
    },
    background: {
      default: '#000',
    },
  },
})

export default theme
