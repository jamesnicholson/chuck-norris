
import React from 'react';
import { ThemeProvider } from 'styled-components';
import style from '../styles'
export const ThemeContext = props => {
    return (
        <ThemeProvider theme={style}>
          {props.children}
        </ThemeProvider>
      );
    }
export default ThemeContext;