import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './common/Header';
import ApplicationsPage from './applications/ApplicationsPage';
import ApplicationTypesPage from './applicationTypes/ApplicationTypesPage';
import HomePage from './home/HomePage';
import PageNotFound from './NotFoundPage';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/applications" component={ApplicationsPage} />
        <Route path="/applicationtypes" component={ApplicationTypesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}


export default App;