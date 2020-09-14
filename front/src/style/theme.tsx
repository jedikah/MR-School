import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6a353d'
    },
    secondary: {
      main: '#780204'
    }
  }
});

const CustomTheme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomTheme;
