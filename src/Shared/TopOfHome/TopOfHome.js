import React from "react";
import cover1 from "../../assets/images/cover1.jpg";
import cover2 from "../../assets/images/cover2.jpg";
import cover3 from "../../assets/images/cover3.jpg";

const TopOfHome = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={cover1} className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle btn-primary">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-primary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={cover2} className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={cover3} className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle btn-primary">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle btn-primary">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopOfHome;
