import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Import createTheme
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme(); // Create a Material-UI theme

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
