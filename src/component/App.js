import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={Detail} />
    </Router>
  );
}

export default App;
