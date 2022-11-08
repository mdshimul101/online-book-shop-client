import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="navbar bg-gray-200">
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
          <li className="font-semibold">
            <Link>Blog</Link>
          </li>
          {user?.email ? (
            <>
              <li className="font-semibold">
                <Link>My Review</Link>
              </li>
              <li className="font-semibold">
                <Link>Add Service</Link>
              </li>
              <li className="font-semibold">
                <Link onClick={handleLogOut}>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li className="font-semibold">
                <Link to="/login">Login</Link>
              </li>
              <li className="font-semibold">
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
