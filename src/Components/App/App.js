import React from 'react';
import './App.css';
import Routes from '../../Routes'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import PrivateRoute from '../Utils/PrivateRoute'
import PublicRoute from '../Utils/PublicRoute'

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
