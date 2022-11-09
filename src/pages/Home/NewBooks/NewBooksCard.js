import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const NewBooksCard = ({ book }) => {
  const { _id, img, price, name, description, ratings } = book;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl marker:w-full">
        <PhotoProvider>
          <PhotoView src={img}>
            <figure>
              <img className="w-full h-96" src={img} alt="Course" />
            </figure>
          </PhotoView>
        </PhotoProvider>
        <div className="card-body h-80">
          <h2 className="text-2xl text-center text-blue-400 font-semibold">
            {name}
          </h2>
          <p className="text-left text-base">{description}</p>

          <div className="flex flex-wrap">
            <p className="text-xl text-orange-600 font-semibold ">
              Price: ${price}
            </p>
            <p className="text-xl text-orange-600 font-semibold">
              Ratings: {ratings}K
            </p>
          </div>
          <div className="">
            <Link to={`/serviceDetails/${_id}`}>
              <button className="btn bg-yellow-600 border-none w-full ">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBooksCard;
