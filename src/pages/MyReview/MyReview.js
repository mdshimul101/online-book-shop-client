import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

import AllMyReview from "./AllMyReview/AllMyReview";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);

  const url = `http://localhost:5000/allReviews?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReview(data);
      });
  }, [user?.email]);
  return (
    <div>
      <div className="">
        {review.length < 1 ? (
          <p>"There is No Review"</p>
        ) : (
          <>
            <div className="w-10/12 mx-auto">
              <div>
                <p className="text-2xl text-blue-500 py-2 font-bold">
                  Total Reviews: {review.length}
                </p>
                {review.map((rvw) => (
                  <AllMyReview key={rvw._id} review={rvw}></AllMyReview>
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
