import React from 'react'
import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';




import Login from "./components/Login";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
  return (
    <div >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
          
          <Login/>
    
          </Route>
          
        </Switch>
    
     </Router>
    </div>
  )
}

export default App
