import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const { img, price, name, details, _id } = serviceDetails;
  return (
    <div className="card lg:card-side grid grid-cols-1 lg:grid-cols-2 w-8/12 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img className="w-full" src={img} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <p className="text-amber-400 font-bold">Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
