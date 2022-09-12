import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, HashRouter} from "react-router-dom";
import AppRouter from "./Components/Routing/AppRouter";


function App() {
  return (
      <BrowserRouter basename={"/resume"}>
          <div className="App">
              <NavBar/>
              <AppRouter/>
          </div>
      </BrowserRouter>
  );
}

export default App;
