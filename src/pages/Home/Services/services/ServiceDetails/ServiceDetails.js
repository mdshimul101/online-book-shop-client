import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceDetailsCard from "./ServiceDetailsCard/ServiceDetailsCard";

const ServiceDetails = () => {
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
    name,
    _id,
    img,
    ratings,
    reviews,
    discount,
    writer,
    price,
  };

  return (
    <div className="w-10/12 mx-auto">
      <ServiceDetailsCard props={service} className="py-5"></ServiceDetailsCard>
      <h2 className="mt-5">hello</h2>
    </div>
  );
};

export default ServiceDetails;
