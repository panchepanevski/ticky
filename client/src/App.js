import React from 'react';
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import darkTheme from './themes/darkTheme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';
import NewTicket from './pages/NewTicket';
import AddOrder from './pages/AddOrder';
import PageHeader from './components/Header/PageHeader';
import StartPage from './pages/StartPage';
import TicketList from './pages/TicketList';
import OrderList from './pages/OrderList';
import OrdersHeader from './components/Header/OrdersHeader';

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
              <Spring
                from={{ opacity: 0, marginBottom: -500 }}
                to={{ opacity: 1, marginBottom: 0 }}
                config={{ delay: 250, duration: 250 }}
              >
                {props => (
                  <div style={props}>
                    <TicketList />
                  </div>
                )}
              </Spring>
            </Route>
            <Route path="/newticket">
              <PageHeader />
              <Spring
                from={{ opacity: 0, marginBottom: -500 }}
                to={{ opacity: 1, marginBottom: 0 }}
                config={{ delay: 250, duration: 250 }}
              >
                {props => (
                  <div style={props}>
                    <NewTicket />
                  </div>
                )}
              </Spring>
            </Route>
            <Route path="/addorder">
              <OrdersHeader />
              <Spring
                from={{ opacity: 0, marginBottom: -500 }}
                to={{ opacity: 1, marginBottom: 0 }}
                config={{ delay: 250, duration: 250 }}
              >
                {props => (
                  <div style={props}>
                    <AddOrder />
                  </div>
                )}
              </Spring>
            </Route>
            <Route path="/orderlist">
              <Spring
                from={{ opacity: 0, marginBottom: -500 }}
                to={{ opacity: 1, marginBottom: 0 }}
                config={{ delay: 250, duration: 250 }}
              >
                {props => (
                  <div style={props}>
                    <OrderList />
                  </div>
                )}
              </Spring>
            </Route>
          </Switch>
        </Main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
