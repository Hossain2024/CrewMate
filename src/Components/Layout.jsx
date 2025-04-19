// Layout.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../App.css'; // adjust path if needed

const Layout = () => (
  <div className="app-container">
    <div className="navigation-panel">
      <div className="header">
        <h1>Crewmate Creator</h1>
      </div>
      <div className="sidebar">
        <Link to="/"><button>Home</button></Link>
        <Link to="/create"><button>Create a Crewmate!</button></Link>
        <Link to="/gallery"><button>Crewmate Gallery</button></Link>
      </div>
    </div>
    <div className="main-content">
      <Outlet />
    </div>
  </div>
);

export default Layout;
