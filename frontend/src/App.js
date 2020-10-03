import React from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Chat from './components/pages/Chat';

function App() {
  return (
    <>
      <Router >
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path='/chat' component={Chat} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
