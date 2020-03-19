import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory, History } from 'history';

const defaultHistory = createBrowserHistory();

const App = ({ history }: { history?: History}) => {
  return (
    <Router history={history || defaultHistory}>
      <h4>Invest application</h4>
    </Router>
  );
}

export default App;
