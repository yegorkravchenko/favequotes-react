import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RandomQuotesPage from './pages/RandomQuotePage';
import AllQuotesPage from './pages/AllQuotesPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RandomQuotesPage />
        </Route>
        <Route exact path="/all">
          <AllQuotesPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
