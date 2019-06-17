import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Credit from './components/Credit';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Credit" component={Credit}  />
      </Switch>
    </div>
  );
}

export default App;
