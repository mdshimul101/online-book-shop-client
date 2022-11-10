import React, { useEffect, useState } from "react";
import AllServicesCard from "./AllServicesCard";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://online-book-shop-server.vercel.app/allBooks")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="w-10/12 mx-auto">
      <div className="text-center my-14">
        <p className="text-2xl font-bold text-orange-600">Books</p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-24">
        {services
          .sort((a, b) => (a.time > b.time ? -1 : 1))
          .map((service) => (
            <AllServicesCard
              key={service._id}
              service={service}
            ></AllServicesCard>
          ))}
      </div>
    </div>
  );
};

export default AllServices;
