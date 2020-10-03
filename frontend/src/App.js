import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Setting from './components/pages/Setting';
import Chat from './components/pages/Chat';

function App() {
  return (
    <>
      <Router>
        <Sidebar/>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' component={Login} />
          <Route path='/Setting' component={Setting} />
          <Route path='/chat' component={Chat} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
