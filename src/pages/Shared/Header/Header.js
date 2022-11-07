import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl text-amber-500 font-bold"
        >
          Book Shop
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="/">Item 1</a>
          </li>

          <li>
            <a href="/">Item 3</a>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
