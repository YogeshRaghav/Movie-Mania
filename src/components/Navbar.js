import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="ab">
        Movie Mania
      </div>

      <div className="ul">
        <ul>
          <li className = {isActive('/' ? 'active' : '')}>
            <Link to="/">Home</Link>
          </li>
          <li className = {isActive('/toprated') ? 'active' : ''}>
            <Link to="/toprated">Top Rated</Link>
          </li>
          <li className = {isActive('/upcoming') ? 'active' : ''}>
            <Link to="/upcoming">Upcoming</Link>
          </li>
          <li className = {isActive('/popular') ? 'active' : ''}>
            <Link to="/popular">Popular</Link>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
