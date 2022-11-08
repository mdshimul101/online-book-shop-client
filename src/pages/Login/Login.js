import React, { useContext } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  useTitle("Login");
  const { providerLogin, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        //console.log(user);
        navigate(from, { replace: true });
      })
      .then((error) => console.log(error));
  };

  return (
    <div className="hero w-full my-20">
      <div className="card flex-shrink-0 w-full max-w-sm border bg-base-100 py-20">
        <h1 className="text-5xl text-center font-bold text-yellow-500">
          Login
        </h1>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="btn border-none bg-yellow-500"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <div className="flex justify-center  mb-8">
          <button
            onClick={handleGoogleSignIn}
            className=" flex justify-center items-center rounded-md border py-1 px-4 text-center border-yellow-500"
          >
            <FaGoogle className="mr-3 text-sky-800"></FaGoogle>
            Google Sign In
          </button>
        </div>
        <p className="text-center">
          Have an account?{" "}
          <Link className="text-orange-600 font-bold" to="/signup">
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
