import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#f5f5fa',
            contrastText: '#e5322d',
        },
    },
});

theme.typography.h3 = {
    color: "#e5322d",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.4rem',
    },
  };

export { theme };