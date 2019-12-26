import React from 'react';
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import darkTheme from './themes/darkTheme';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewTicket from './pages/NewTicket';
import AddOrder from './pages/AddOrder';
import PageHeader from './components/PageHeader';
import Landing from './pages/Landing';

const Main = styled.main`
  overflow: auto;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Router>
        <Main>
          <Switch>
            <Route path="/landing">
              <Landing />
            </Route>
            <Route exact path="/">
              <Header />
            </Route>
            <Route path="/newticket">
              <PageHeader />
              <NewTicket />
            </Route>
            <Route path="/addorder">
              <PageHeader />
              <AddOrder />
            </Route>
          </Switch>
        </Main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
