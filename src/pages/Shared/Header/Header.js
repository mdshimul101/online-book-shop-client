import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          daisyUI
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a href="/">Item 1</a>
          </li>

          <li>
            <a href="/">Item 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
