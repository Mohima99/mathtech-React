import './App.css';
import HomePage from './pages/HomePage';
import Head from './Head';

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ HomePage } />
      
      </Switch>
    </Router>
  );
}

export default App;
