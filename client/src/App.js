import React from 'react';
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import darkTheme from './themes/darkTheme';
>>>>>>> Stashed changes
=======
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import darkTheme from './themes/darkTheme';
import styled from '@emotion/styled';
>>>>>>> 105fd7874aaa89427bb3c080719e5dcd706573a6

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <h1>Ticky</h1>
    </ThemeProvider>
  );
}

export default App;
