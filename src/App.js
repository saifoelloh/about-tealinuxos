import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Credit from './components/Credit';


function App() {
  return (
    <div className="App h-100">
      <HashRouter>
        <Route path="/" component={Home} exact />
        <Route path="/Credit" component={Credit} />
      </HashRouter>
    </div>
  );
}

export default App;
