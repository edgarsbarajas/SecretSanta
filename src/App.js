import React, { Component } from 'react';
import Home from './components/Home'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Home}/>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
