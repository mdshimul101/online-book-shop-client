import React from "react";

const Reviews = ({ review }) => {
  const { customer, message, photoURL, rating, email } = review;
  return (
    <div>
      <div className="border  p-3">
        <div className="border p-2 lg:p-3 w-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/12 p-2 lg:p-0 lg:m-0 border lg:border-none">
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={photoURL} alt="No img" />
                </div>
              </div>
              <div>
                <div className="font-bold">{customer}</div>
                <div className="text-sm opacity-50">{email}</div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-5/12 p-2 lg:p-0  lg:m-0 border lg:border-none text-left">
            <div>
              <p className="text-yellow-500 font-semibold">Review</p>
            </div>
            <div>
              <p>{message}</p>
            </div>
          </div>
          <div className="w-full lg:w-2/12 p-2 lg:p-0  lg:m-0 border lg:border-none text-left">
            <div>
              <p className="text-yellow-500 font-semibold">Rating</p>
            </div>
            <div>
              <p>{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
