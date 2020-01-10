import React from 'react';
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import darkTheme from './themes/darkTheme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewTicket from './pages/NewTicket';
import AddOrder from './pages/AddOrder';
import PageHeader from './components/Header/PageHeader';
import StartPage from './pages/StartPage';
import TicketList from './pages/TicketList';

const Main = styled.main`
  overflow: none;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Router>
        <Main>
          <Switch>
            <Route path="/startpage">
              <StartPage />
            </Route>
            <Route exact path="/">
              <TicketList />
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
