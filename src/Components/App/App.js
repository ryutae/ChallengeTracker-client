import React from 'react';
import './App.css';
import Routes from '../../Routes'
import Header from '../Common/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
