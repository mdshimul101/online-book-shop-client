import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
const SignUp = () => {
  useTitle("Sign Up");
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset("");
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="hero w-full my-20">
      <div className="card flex-shrink-0 w-full max-w-sm border bg-base-100 py-20">
        <h1 className="text-5xl text-center font-bold text-yellow-500">
          Sign Up
        </h1>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="image"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Sign Up" />
          </div>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-orange-600 font-bold" to="/login">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUp;