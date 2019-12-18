import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import darkTheme from './themes/darkTheme';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
