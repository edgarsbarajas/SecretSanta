import React, { Component } from 'react';
import Home from './components/Home'
import FamilyIndex from './components/FamilyIndex'
import PersonDetails from './components/PersonDetails'
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/family/:family_id' component={FamilyIndex}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
