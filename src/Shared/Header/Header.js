import React from "react";
import { NavLink } from "react-router-dom";
import TopOfHome from "../TopOfHome/TopOfHome";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className=" bg-red-200">
        <div className="navbar px-20 py-5">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li tabIndex={0}></li>
                <li>
                  <NavLink to="/book">Book</NavLink>
                </li>
                <li tabIndex={0}></li>
                <li>
                  <NavLink to="/Register">Register</NavLink>
                </li>
                <li tabIndex={0}></li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="normal-case text-3xl text-red-900">
                Luxurious Hotel
              </h1>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className="header">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeStyle" : undefined
                }
                to="/home"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeStyle" : undefined
                }
                to="/book"
              >
                Book
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeStyle" : undefined
                }
                to="/register"
              >
                Register
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeStyle" : undefined
                }
                to="/login"
              >
                Login
              </NavLink>
            </div>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="..." src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              ></ul>
            </div>
          </div>
        </div>
      </div>
      <TopOfHome></TopOfHome>
    </div>
  );
};

export default Header;
