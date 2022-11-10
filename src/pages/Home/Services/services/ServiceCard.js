import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { _id, img, price, name, description, ratings, reviews } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl marker:w-full">
      <PhotoProvider>
        <PhotoView src={img}>
          <figure>
            <img className="w-full" src={img} alt="Course" />
          </figure>
        </PhotoView>
      </PhotoProvider>
      <div className="card-body  h-72">
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
          <Link to={`/serviceDetails/${_id}`}>
            <button className="btn bg-yellow-600 border-none w-full ">
              View details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
