import React, { useState, useEffect } from "react";
import "./App.scss";
import AppRouter from "./Components/Router";
import { CubeGrid } from "styled-loaders-react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },2000);
  }, []);

  return (
    <div className="App">
      {loading ? 
        <div className="loader"><CubeGrid color="#fff" /></div>
         : 
         <AppRouter />}
    </div>
  );
}

export default App;
