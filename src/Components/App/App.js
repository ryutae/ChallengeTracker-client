import React from 'react';
import './App.css';
import Routes from '../../Routes'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
