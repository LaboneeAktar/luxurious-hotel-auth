import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-rose-100">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-rose-800">
              Login Now!!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit="{handleSubmit}" className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-xl">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="input input-bordered lg:w-96"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="/" className=" link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent text-normal">Login</button>
              </div>
              <button
                onClick="{handleGoogleSignIn}"
                className="btn btn-outline btn-success text-normal"
              >
                <FaGoogle /> <span className="pl-2"> Sign In with Google</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
