import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../styles'
// Define what props.theme will look like
export const AppThemeProvider = props => {
    console.log("AppThemeProvider")
    return (
        <ThemeProvider theme={theme}>
          {props.children}
        </ThemeProvider>
      );
    }
export default AppThemeProvider;