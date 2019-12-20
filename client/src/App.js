import React from 'react';
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import darkTheme from './themes/darkTheme';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewTicket from './pages/NewTicket';

const Main = styled.main`
  overflow: auto;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Main>
          <Switch>
            <Route path="/newticket" component={NewTicket} />
          </Switch>
        </Main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
