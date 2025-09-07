import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: 'black', // Custom background color
    },
    text: {
      primary: '#ffffff', // Custom text color
    },
    primary: {
      main: '#1a73e8', // Custom primary color (blue)
    },
    secondary: {
      main: '#f50057', // Custom secondary color (pink)
    },
    background_dark: {
      default: '#000000', // Dark mode background
      paper: '#1d1d1d', // Dark card background
    },
    text_dark: {
      primary: '#ffffff', // White text on dark background
    },
  },
});
