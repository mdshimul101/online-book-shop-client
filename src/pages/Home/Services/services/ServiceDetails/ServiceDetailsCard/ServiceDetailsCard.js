import React from "react";

const ServiceDetailsCard = ({ props }) => {
  const {
    description,
    name,
    _id,
    img,
    ratings,
    reviews,
    discount,
    writer,
    price,
  } = props;
  return (
    <div className="card card-compact bg-base-100 shadow-xl marker:w-10/12  py-5">
      <figure>
        <img src={img} alt="" className="w-6/12  h-auto mx-auto" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl text-center">{name}</h2>
        <p className="text-left text-base">{description}</p>
        <p className="text-left text-base text-gray-900 font-semibold">
          Writer : {writer}
        </p>

        <div className="flex flex-col lg:flex-row ">
          <p className="text-xl text-orange-600 font-semibold my-3">
            Ratings: {ratings}K
          </p>
          <p className="text-xl text-orange-600 font-semibold my-3">
            Reviews: {reviews}K
          </p>
          <p className="text-xl text-orange-600 font-semibold my-3">
            Price: ${price}
          </p>
          <p className="text-xl text-orange-600 font-semibold my-3">
            Discount : {discount}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
