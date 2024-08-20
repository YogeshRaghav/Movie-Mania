import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="ab">
        Movie Mania
      </div>

      <div className="ul">
        <ul>
          <li>
            <Link to="/Movie-Mania">Home</Link>
          </li>
          <li>
            <Link to="/toprated">Top Rated</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming</Link>
          </li>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
