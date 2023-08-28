import React from "react";
import {  Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/pages/Dashboard.js";
import Offbe from "./components/pages/Offbe";


function App() {
  return (
  <div>
      <Navbar/>
      
         <Dashboard/>
         <Offbe/>
        
     
   
      
      </div>
  );
}
export default App;
