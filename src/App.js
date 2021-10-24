import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="checkout">
         <h1>Checkout</h1>
       </Route>
       <Route exact path="login">
        <h1>Login</h1>
       </Route>
       <Route exact path="/">
        <Header/>
        <h1>Home Page</h1>
       </Route>
    </Switch>
   </Router>  
  );
}

export default App;
