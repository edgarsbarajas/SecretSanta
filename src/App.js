import React, { Component } from 'react';
import Home from './components/Home'
import FamilyIndex from './components/FamilyIndex'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/family/:family_id' component={FamilyIndex}/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
