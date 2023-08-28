import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/pages/Dashboard.js";
import Offbe from "./components/pages/Offbe";
import Former from "./components/pages/Former";
import Convenor from "./components/pages/Convenor";
import Snapshots from "./components/pages/Snapshots";
import Upcoming from "./components/pages/Upcoming";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";

import { NavLink } from "react-router-dom";


function App() {
  return (
  <div>
      
      <Navbar />

      <div id="dashboard">
        <Dashboard />
      </div>
      
      <div id="upcoming">
        <Upcoming />
      </div>
      
      <div id="former">
        <Former />
      </div>
      
      <div id="snapshots">
        <Snapshots />
      </div>
      
      <div id="convenor">
        <Convenor />
      </div>
      
      <div id="offbe">
        <Offbe />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      
      <Footer />
    
   
      
      </div>
  );
}
export default App;
