import React from "react";
import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/pages/Dashboard.js";


function App() {
  return (
  <div>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Dashboard} />
      </Routes>
   
      
      </div>
  );
}
export default App;
