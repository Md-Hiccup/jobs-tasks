import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './container/Main/Main';
import Desc from './container/Desc/Desc';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/desc" component={Desc} />
        </Switch>
      </div>
    );
  }
}

export default App;
