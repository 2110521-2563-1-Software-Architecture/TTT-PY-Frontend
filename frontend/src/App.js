import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Sidebar/>
        <Home/>
        {/* <Switch>
          <Route path='/' exact />
        </Switch> */}
      </Router>
    </>
  );
}

export default App;
