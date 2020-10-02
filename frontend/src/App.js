import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Sidebar/>
        <Switch>
          <Route path='/home' component={Home} exact />
          <Route path='/login' component={Login} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
