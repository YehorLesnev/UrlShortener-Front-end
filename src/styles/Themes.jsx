import { createTheme } from '@mui/material/styles';

const getTheme = (isDark) => {
  if (isDark) {
    return createTheme({
      palette: {
        background: {
          default: '#0d1117'
        },

        text: {
          primary: "#c9d1d9",
          secondary: '#fff',
          dark: '#c9d1d9'
        },

        primary: {
          main: '#010409',
          contrastText: '#fff',
        },

        btnSubmit: {
          main: '#6e7681',
          contrastText: '#f5f5fa',
          dark: '#161b22'
        },

        logo: {
          main: '#e5322d'
        }
      },
    });
  }

  return createTheme({
    palette: {
      primary: {
        main: '#f5f5fa',
        contrastText: '#e5322d',
      },

      text: {
        primary: "#000",
        secondary: '#393c47',
        dark: ''
      },

      btnSubmit: {
        main: '#f5f5fa',
        contrastText: '#e5322d',
        dark: '#ababaf'
      },

      logo: {
        main: '#e5322d'
      }
    },
  });
}


const theme = createTheme({
  palette: {
    primary: {
      main: '#f5f5fa',
      contrastText: '#e5322d',
    },
  }
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

export { theme, getTheme };