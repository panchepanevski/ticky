import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import darkTheme from './themes/darkTheme';
import styled from '@emotion/styled';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <h1>Ticky</h1>
    </ThemeProvider>
  );
}

export default App;
