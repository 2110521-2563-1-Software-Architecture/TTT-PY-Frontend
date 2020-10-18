import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/pages/Home';
import Header from './components/Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/Login';
import Login2 from './components/pages/Login2';
import Setting from './components/pages/Setting';
import Chat from './components/pages/Chat';

function App() {
  localStorage.setItem("isSignIn",false);
  return (
    <>
      <Router>
        <Sidebar/>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' component={Login2} />
          <Route path='/Setting' component={Setting} />
          <Route path='/chat' component={Chat} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
