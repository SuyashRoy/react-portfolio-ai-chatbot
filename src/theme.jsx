import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#0f1419', // Professional dark background
      paper: '#1a202c', // Dark card background
    },
    text: {
      primary: '#f7fafc', // Clean white text
      secondary: '#a0aec0', // Muted gray text
    },
    primary: {
      main: '#3182ce', // Professional blue
      light: '#63b3ed',
      dark: '#2c5282',
    },
    secondary: {
      main: '#805ad5', // Professional purple
      light: '#b794f6',
      dark: '#553c9a',
    },
    accent: {
      slate: '#1a202c',
      gray: '#2d3748',
      blue: '#2b6cb0',
      purple: '#6b46c1',
      indigo: '#5a67d8',
    },
    gradient: {
      primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      professional: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
    }
  },
});
