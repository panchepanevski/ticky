import React from 'react';
import styled from '@emotion/styled';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import darkTheme from './themes/darkTheme';
import lightTheme from './themes/lightTheme';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewTicket from './pages/NewTicket';
import AddOrder from './pages/AddOrder';
import PageHeader from './components/Header/PageHeader';
import Landing from './pages/Landing';
import TicketList from './pages/TicketList';
import Filter from './components/Filter Bar/Filter';

const Main = styled.main`
  overflow: auto;
`;

function App() {
  // THEMING
  const [theme, setTheme] = React.useState('darkTheme');
  const toggleTheme = () => {
    if (theme === 'darkTheme') {
      setTheme('dark');
    } else {
      setTheme('lightTheme');
    }
  };

  return (
    <ThemeProvider theme={theme === 'darkTheme' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Main>
          <Switch>
            <Route exact path="/landing">
              <Landing />
            </Route>
            <Route exact path="/">
              <Header />
              <Filter />
              <button onClick={toggleTheme}>Toggle theme</button>
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
