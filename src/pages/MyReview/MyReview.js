import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

import AllMyReview from "./AllMyReview/AllMyReview";

const MyReview = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReview] = useState([]);

  const url = `http://localhost:5000/allReviews?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("bookshop-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        setReview(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/allReviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");

            const remaining = reviews.filter((odr) => odr._id !== id);
            setReview(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/allReviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Updated" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = reviews.filter((odr) => odr._id !== id);
          const approving = reviews.find((odr) => odr._id === id);
          approving.status = "Updated";

          const newReview = [approving, ...remaining];
          setReview(newReview);
        }
      });
  };

  return (
    <div>
      <div className="">
        {reviews.length < 1 ? (
          <p className="text-2xl text-blue-400 text-center  my-5 font-bold">
            "There is No Review"
          </p>
        ) : (
          <>
            <div className="w-10/12 mx-auto">
              <div>
                <p className="text-2xl text-blue-400 text-center  my-5 font-bold">
                  Total Reviews: {reviews.length}
                </p>
                {reviews
                  .sort((a, b) => (a.time > b.time ? -1 : 1))
                  .map((rvw) => (
                    <AllMyReview
                      key={rvw._id}
                      reviews={rvw}
                      handleDelete={handleDelete}
                      handleStatusUpdate={handleStatusUpdate}
                    ></AllMyReview>
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyReview;
