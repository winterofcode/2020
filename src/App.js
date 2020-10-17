import React from 'react';
import LandingPage from "./Routes/LandingPage"
import "./App.css"
import Reviews from './Routes/Reviews';
function App() {
  return (
    <div className="App">
    <LandingPage />
    <Reviews />
    </div>
  );
}

export default App;
