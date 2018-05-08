import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Hub from './pages/Hub';

export const App = () => (
  <Switch>
    <Route path='/hub' component={Hub}/>
    <Home/>
  </Switch>
)

export default App;
