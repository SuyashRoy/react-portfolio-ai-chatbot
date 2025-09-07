import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    // backgroundColor: theme.palette.background_dark.default,
    backgroundColor: 'black',
    width: '100%',
  },
  logo: {
    height: '6em',
    willChange: 'filter',
    transition: 'filter 300ms',
    '&:hover': {
      filter: 'drop-shadow(0 0 2em #646cffaa)',
    },
    '&.react:hover': {
      filter: 'drop-shadow(0 0 2em #61dafbaa)',
    },
  },
  logoSpin: {
    animation: `$spin 20s linear infinite`,
  },
  readTheDocs: {
    color: '#888',
  },
  '@keyframes spin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  '@media (prefers-reduced-motion: no-preference)': {
  logoSpin: {
    animation: `$spin 20s linear infinite`,
  },
},
}));

