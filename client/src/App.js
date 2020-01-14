import React from 'react';
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import darkTheme from './themes/darkTheme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';
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
              <Spring
                from={{ opacity: 0, marginBottom: -500 }}
                to={{ opacity: 1, marginBottom: 0 }}
                config={{ delay: 250, duration: 250 }}
              >
                {style => (
                  <div style={style}>
                    <MainPage />
                  </div>
                )}
              </Spring>
            </Route>

            <Route path="/tickets">
              <Spring
                from={{ opacity: 0, marginBottom: -500 }}
                to={{ opacity: 1, marginBottom: 0 }}
                config={{ delay: 250, duration: 250 }}
              >
                {style => (
                  <div style={style}>
                    <TicketList />
                  </div>
                )}
              </Spring>
            </Route>
            <Route exact path="/ticket/new">
              <Spring
                from={{ opacity: 0, marginBottom: -500 }}
                to={{ opacity: 1, marginBottom: 0 }}
                config={{ delay: 250, duration: 250 }}
              >
                {style => (
                  <div style={style}>
                    <NewTicket />
                  </div>
                )}
              </Spring>
            </Route>
            <Route path="/orders">
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
            <Route path="/order/new">
              <Spring
                from={{ opacity: 0, marginBottom: -500 }}
                to={{ opacity: 1, marginBottom: 0 }}
                config={{ delay: 250, duration: 250 }}
              >
                {props => (
                  <div style={props}>
                    <NewOrder />
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
