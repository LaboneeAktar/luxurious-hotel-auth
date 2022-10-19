import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-rose-100">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-rose-800 mt-5">
              Register Now!!
            </h1>
            <p className="py-6">Please Register Now.</p>
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit="{handleSubmit}" className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-xl">User Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered lg:w-96"
                  required
                />
              </div>
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
                  <span className="text-xl">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirm"
                  placeholder="Enter Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="/login" className=" link link-hover">
                    Already Have an Accout?
                    <span className="text-blue-700"> Login</span>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent text-normal">
                  Register Now
                </button>
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

export default Register;
