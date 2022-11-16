import React from "react";
import { Link } from "react-router-dom";

const AllAddServices = ({ service }) => {
  const { details, name, img, price, _id } = service;
  return (
    <div className="card card-compact w-80 mx-auto lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img ? img : ""} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details.slice(0, 100)}....</p>
        <p>Price: ${price}</p>
      </div>
      <div className="card-actions justify-center">
        <Link to={`/services/${_id}`}>
          <button className="btn btn-primary mb-4">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default AllAddServices;
