import React, { useContext } from "react";
import single from "../../src/assets/images/single.jpg";
import double from "../../src/assets/images/double.jpg";
import family from "../../src/assets/images/family.jpg";
import { FaBed, FaChild } from "react-icons/fa";
import { AuthContext } from "../contexts/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:p-20 pt-10">
      <div className="card w-96 bg-rose-200 shadow-2xl">
        <figure>
          <img className="h-60 w-full" src={single} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Single Room !!</h2>
          <div className="flex mt-10 justify-between">
            <span className="pt-3">
              <p>
                <FaBed></FaBed> <span>1</span>
              </p>
            </span>
            <span className="pt-3">
              <p>
                <FaChild /> <span>1</span>
              </p>
            </span>
            <span>
              <h5 className="">Price</h5>
              <strong>$ 400</strong>
            </span>
          </div>
          <div className="pt-3">
            <button className="btn btn-accent">Book Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96  bg-rose-200 shadow-2xl">
        <figure>
          <img className="h-60 w-full" src={double} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Double Room !!</h2>
          <div className="flex mt-10 justify-between">
            <span className="pt-3">
              <p>
                <FaBed></FaBed> <span>1</span>
              </p>
            </span>
            <span className="pt-3">
              <p>
                <span className="flex">
                  {" "}
                  <FaChild /> <FaChild />{" "}
                </span>
                <span>2</span>
              </p>
            </span>
            <span>
              <h5 className="">Price</h5>
              <strong>$ 700</strong>
            </span>
          </div>
          <div className="pt-3">
            <button className="btn btn-accent">Book Now</button>
          </div>
        </div>
      </div>
      <div className="card w-96  bg-rose-200 shadow-2xl">
        <figure>
          <img className="h-60 w-full" src={family} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Family Room !!</h2>
          <div className="flex mt-10 justify-between">
            <span className="pt-3">
              <p>
                <span className="flex">
                  <FaBed></FaBed>
                  <FaBed></FaBed>
                </span>{" "}
                <span>2</span>
              </p>
            </span>
            <span className="pt-3">
              <p>
                <span className="flex ml-11">
                  <FaChild /> <FaChild /> <FaChild />
                </span>{" "}
                <span>More Than 3 Person</span>
              </p>
            </span>
            <span>
              <h5 className="">Price</h5>
              <strong>$ 1400</strong>
            </span>
          </div>
          <div className="pt-3">
            <button className="btn btn-accent">Book Now</button>
          </div>
        </div>
      </div>
      <h2>{user}</h2>
    </div>
  );
};

export default Home;
