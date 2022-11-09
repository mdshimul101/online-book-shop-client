import React from "react";

const Reviews = ({ review }) => {
  const { customer, message, photoURL, rating } = review;
  return (
    <div>
      <h3>{customer}</h3>
    </div>
  );
};

export default Reviews;
