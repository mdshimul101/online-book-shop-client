import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="navbar bg-gray-200 flex-col  lg:flex-row">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-2xl text-amber-500 font-bold"
        >
          Book Shop
        </Link>
      </div>
      <div className="flex-none">
        <div className="list-none  flex flex-wrap mx-auto w-10/12 lg:w-full lg:flex-row text-left">
          <li className="font-semibold mr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold mr-4">
            <Link to="/blog">Blog</Link>
          </li>
          {user?.email ? (
            <>
              <li className="font-semibold mr-4">
                <Link to="/myReview">My Review</Link>
              </li>
              <li className="font-semibold mr-4">
                <Link to="/addService">Add Service</Link>
              </li>
              <li className="font-semibold mr-4">
                <Link onClick={handleLogOut}>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li className="font-semibold mr-4">
                <Link to="/login">Login</Link>
              </li>
              <li className="font-semibold mr-2">
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
