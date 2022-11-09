import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../../../../contexts/AuthProvider/AuthProvider";
import Reviews from "./Reviews/Reviews";
import ServiceDetailsCard from "./ServiceDetailsCard/ServiceDetailsCard";

const ServiceDetails = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  const [reviewsData, setReviewsData] = useState([]);

  const {
    name,
    description,
    _id,
    img,
    ratings,
    reviews,
    discount,
    writer,
    price,
  } = useLoaderData();

  const service = {
    description,
    serviceName: name,
    _id,
    img,
    ratings,
    reviews,
    discount,
    writer,
    price,
  };

  useEffect(() => {
    fetch(`http://localhost:5000/allReviews/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviewsData(data);
      });
  }, []);

  const handlePlaceOrder = (event) => {
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
      service: _id,
      serviceName: name,
      price,
      customer: displayName,
      email,
      photoURL,
      message,
      rating,
      time,
    };
    console.log(email, name, message, rating, price);

    fetch("http://localhost:5000/allReviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.acknowledged) {
          alert("Add review successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="w-10/12 mx-auto">
      <div className="py-14">
        <ServiceDetailsCard props={service}></ServiceDetailsCard>
      </div>
      <div>
        <p className="text-blue-500 font-semibold text-2xl my-5">
          Total Review : {reviewsData.length}
        </p>
        {reviewsData
          .sort((a, b) => (a.time > b.time ? -1 : 1))
          .map((review) => (
            <Reviews key={review._id} review={review}></Reviews>
          ))}
      </div>

      {user?.uid ? (
        <>
          {" "}
          <div className="my-14 border p-2">
            <h2 className="text-2xl py-6 text-yellow-500 font-semibold">
              Add Your Review
            </h2>
            <form onSubmit={handlePlaceOrder}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  defaultValue={user?.displayName}
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
                  defaultValue={user?.photoURL}
                  className="input input-ghost w-full  input-bordered"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  defaultValue={user?.email}
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

              <input
                className="btn border-none text-black bg-yellow-500"
                type="submit"
                value="Add review"
              />
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="text-xl py-4">
            Please
            <Link
              to="/login"
              state={{ from: location }}
              replace
              className="text-blue-500 font-semibold ml-2"
            >
              Login
            </Link>{" "}
            for added a review{" "}
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceDetails;
