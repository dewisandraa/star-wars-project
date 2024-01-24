import { createTheme } from '@mui/material/styles'
import { responsiveFontSizes } from '@mui/material'

let theme = createTheme({
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

theme = responsiveFontSizes(theme)

export default theme
