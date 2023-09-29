import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Section/Navbar';
import RouteComponent from './Routes';

function App() {
  const { ready } = useTranslation();

  if (ready) {
    return (
      <div className="App-header">
        <Router>
        <Navbar/>
        <RouteComponent/>
        </Router>
      </div>
    );
  }
  return <span>Loading...</span>;
}

export default App;
