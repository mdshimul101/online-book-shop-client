import React from "react";
import { Link } from "react-router-dom";

const AllMyReview = ({ reviews, handleDelete, handleStatusUpdate }) => {
  const {
    _id,
    serviceName,
    customer,
    message,
    photoURL,
    rating,
    email,
    status,
  } = reviews;
  //console.log(reviews);

  return (
    <div className="py-4">
      <div className="border  p-3">
        <div className=" border-none lg:border p-2 lg:p-3 w-full flex flex-col lg:flex-row">
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
          <div className="w-full lg:w-4/12 p-2 lg:p-0  lg:m-0 border lg:border-none text-left">
            <div>
              <p className="text-yellow-500 font-semibold">Review</p>
            </div>
            <div>
              <p>{message}</p>
            </div>
          </div>
          <div className="w-full lg:w-4/12 p-2 lg:p-0  lg:m-0 border lg:border-none text-left">
            <div>
              <p className="text-yellow-500 font-semibold">Book Name</p>
            </div>
            <div>
              <p>{serviceName}</p>
            </div>
          </div>
          <div className="w-full lg:w-2/12 p-2 lg:p-0  lg:m-0 border lg:border-none text-left ml-0 lg:ml-8">
            <div>
              <p className="text-yellow-500 font-semibold">Rating</p>
            </div>
            <div>
              <p>{rating}</p>
            </div>
          </div>
          <div className="flex my-2">
            <Link to="/updateMyReview">
              <button
                onClick={() => handleStatusUpdate(_id)}
                className="btn mr-2 ml-1 lg:ml-0"
              >
                {status ? status : "Edit"}
              </button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMyReview;
