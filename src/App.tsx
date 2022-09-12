import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/Routing/AppRouter";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <NavBar/>
              <AppRouter/>
          </div>
      </BrowserRouter>
  );
}

export default App;
