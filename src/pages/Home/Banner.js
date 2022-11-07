import React from "react";

import img1 from "../../Image/2.jpg";

const Banner = () => {
  return (
    <div className="carousel w-10/12 mx-auto h-1/2">
      <div id="slide1" className="carousel-item relative w-full top-10">
        <img src={img1} alt="" className="w-full h-5/6 mx-auto rounded-md" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-72 ">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
