import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import App from './App.jsx';
import './index.css';

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
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
