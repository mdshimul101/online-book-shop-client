import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="w-10/12 mx-auto">
      <div className="text-center my-14">
        <p className="text-2xl font-bold text-orange-600">Books</p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-14">
        {services
          .sort((a, b) => (a.time > b.time ? -1 : 1))
          .map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
      </div>
      <div className="pb-10 text-center">
        <Link to="/allServices">
          <button className="btn bg-yellow-500 border-none w-28 ">
            See all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
