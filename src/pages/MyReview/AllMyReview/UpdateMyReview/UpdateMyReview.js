import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";

const UpdateMyReview = () => {
  const { user } = useContext(AuthContext);

  const handleUpdateReview = (event) => {
    event.preventDefault();

    const form = event.target;
    const displayName = form.name.value;
    const email = user?.email || "unregistered";
    const rating = form.rating.value;
    const photoURL = form.photoURL.value;
    const message = form.message.value;
    const d = new Date();
    var time = d.getTime();

    const order = {
      // service: _id,

      customer: displayName,
      email,
      photoURL,
      message,
      rating,
      time,
    };
    // console.log(email, message, rating, displayName);

    // fetch("http://localhost:5000/allReviews", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(order),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);

    //     if (data.acknowledged) {
    //       alert("Add review successfully");
    //       // const remaining = reviewsData.filter((rvw) => rvw._id !== _id);
    //       // const newReviewData = [...reviewsData, remaining];
    //       // setReviewsData(newReviewData);
    //       form.reset();
    //     }
    //   })
    //   .catch((er) => console.error(er));
  };

  return (
    <div className="w-10/12 mx-auto py-10">
      <div className="my-14 border p-2">
        <h2 className="text-2xl py-6 text-yellow-500 font-semibold">
          Update Your Review
        </h2>
        <form onSubmit={handleUpdateReview}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="input input-ghost w-full  input-bordered"
              required
            />
            <input
              name="rating"
              type="text"
              placeholder="Rating"
              className="input input-ghost w-full  input-bordered"
            />
            <input
              name="photoURL"
              type="text"
              placeholder="PhotoURL"
              className="input input-ghost w-full  input-bordered"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="input input-ghost w-full  input-bordered"
              readOnly
            />
          </div>
          <textarea
            name="message"
            className="textarea textarea-bordered h-24 w-full my-3"
            placeholder="Your Message"
            required
          ></textarea>

          <Link to="/myReview">
            <input
              className="btn border-none text-black bg-yellow-500"
              type="submit"
              value="Add review"
            />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyReview;
