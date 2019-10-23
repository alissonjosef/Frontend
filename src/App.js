import React from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  function handleSubmit(){
    console.log("Hello Word");

  }

  return (

    <div className="container">
      <img src={logo} alt="Aircnc"/>

    <div className="content">
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
      </p>

    <form onSubmit={handleSubmit}>
      <label htmlFor="email">E-MAIL *</label>
      <input 
      id="email" 
      type="email" 
      placeholder="Seu melhor e-mail"
      />

    <button className="btn" type="submit">Entrar</button>

    </form>

    </div>

    </div>

  );
}

export default App;
