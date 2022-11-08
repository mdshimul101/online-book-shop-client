import React from "react";
import { Link } from "react-router-dom";

const AllServicesCard = ({ service }) => {
  const { _id, img, price, name, description, ratings, reviews } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl marker:w-full">
      <figure>
        <img src={img} alt="Shoes" className="w-full " />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl text-center">{name}</h2>
        <p className="text-left">{description.slice(0, 100)}...</p>
        <p className="text-xl text-orange-600 font-semibold ">
          Price: ${price}
        </p>
        <div className="flex">
          <p className="text-base text-orange-600 font-semibold">
            Ratings: {ratings}K
          </p>
          <p className="text-base text-orange-600 font-semibold">
            Reviews: {reviews}K
          </p>
        </div>
        <div className="">
          <Link to={`/checkout/${_id}`}>
            <button className="btn bg-yellow-600 border-none w-full ">
              View details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllServicesCard;
