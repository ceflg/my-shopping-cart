import React, { Component } from 'react';
import './styles/ShoppingCart.css';
import './app.css';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping list app</h1>
      </header>
      <main className="App-main">
        <ShoppingCart />
      </main>
    </div>
  );
}

export default App;