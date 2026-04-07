import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#9C2340',
      light: '#c43d5c',
      dark: '#72182f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#334155',
      light: '#475569',
      dark: '#1e293b',
      contrastText: '#f8fafc',
    },
    accent: {
      main: '#0d9488',
      light: '#14b8a6',
      dark: '#0f766e',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f9fafb',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#64748b',
    },
    divider: 'rgba(15, 23, 42, 0.08)',
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Segoe UI", system-ui, sans-serif',
    h1: {
      fontSize: '2.375rem',
      fontWeight: 700,
      letterSpacing: '-0.035em',
      lineHeight: 1.15,
      '@media (min-width:600px)': {
        fontSize: '2.75rem',
      },
      '@media (min-width:900px)': {
        fontSize: '3.25rem',
      },
    },
    h2: {
      fontSize: '1.875rem',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      lineHeight: 1.2,
      '@media (min-width:900px)': {
        fontSize: '2.25rem',
      },
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.3,
      '@media (min-width:900px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.35,
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      letterSpacing: '-0.015em',
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1.0625rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.45,
    },
    subtitle1: {
      fontSize: '1.0625rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '0.9375rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1.0625rem',
      lineHeight: 1.75,
      '@media (max-width:599px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: '0.9375rem',
      lineHeight: 1.7,
    },
    overline: {
      fontSize: '0.8125rem',
      fontWeight: 600,
      letterSpacing: '0.12em',
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.02em',
      fontSize: '0.9375rem',
    },
    caption: {
      fontSize: '0.8125rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          backgroundColor: '#f9fafb',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        '::selection': {
          backgroundColor: 'rgba(156, 35, 64, 0.18)',
          color: '#0f172a',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '8px 18px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        outlined: {
          borderWidth: 1,
        },
        sizeLarge: {
          padding: '10px 22px',
          fontSize: '0.9375rem',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          border: '1px solid rgba(15, 23, 42, 0.1)',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          marginTop: 8,
          minWidth: 200,
          borderRadius: 12,
          boxShadow: '0 8px 30px rgba(15, 23, 42, 0.08)',
          border: '1px solid rgba(15, 23, 42, 0.06)',
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
