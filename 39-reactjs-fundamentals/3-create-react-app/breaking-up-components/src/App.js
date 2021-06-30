import React from 'react';
import items from './Items';
import ShoppingCart from './ShoppingCart';
import Alert from './Alert';
import Greeting from './Greeting'
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div>

      <Greeting />

      <Alert variant="success">
        <h1>Welcome Back!</h1>
      </Alert>
      
      <Alert variant="danger">
        <h1>Stranger Danger! uwu</h1>
      </Alert>

      <Alert variant="warning">
        <h1>Warning warning. You have been warned.</h1>
      </Alert>

      <img src={logo} alt="logo"/>
      <ShoppingCart items={items} username="lawrence" />
      <ShoppingCart items={items} username="anonymous" />
    </div>
  );
}

export default App;