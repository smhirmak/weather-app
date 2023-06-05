'use client';

import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#1c1917' },
    primary: {
      light: '#d8d8d8',
      main: '#b4b4b4',
      dark: '#949494',
      contrastText: '#fff'
    }
  }
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light'
  }
});
