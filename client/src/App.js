import React from 'react';
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import darkTheme from './themes/darkTheme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewTicket from './pages/NewTicket';
import NewOrder from './pages/NewOrder';
import StartPage from './pages/StartPage';
import TicketList from './pages/TicketList';
import OrderList from './pages/OrderList';
import MainPage from './pages/MainPage';

const Main = styled.main`
  max-width: 600px;
  margin: 0 auto;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Router>
        <Main>
          <Switch>
            <Route exact path="/">
              <StartPage />
            </Route>
            <Route path="/main">
              <MainPage />
            </Route>

            <Route path="/tickets">
              <TicketList />
            </Route>
            <Route exact path="/ticket/new">
              <NewTicket />
            </Route>
            <Route path="/orders">
              <OrderList />
            </Route>
            <Route path="/order/new">
              <NewOrder />
            </Route>
          </Switch>
        </Main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
