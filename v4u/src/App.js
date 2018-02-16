import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import "./App.css"
import Main from './container/Main/Main';
import Desc from './container/Desc/Desc';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/:id" component={Desc} />
        </Switch>
      </div>
    );
  }
}

export default App;
