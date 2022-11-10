import React from "react";
import { Link } from "react-router-dom";

const AllAddServices = ({ service }) => {
  const { details, email, fullName, photo, title, _id, price } = service;
  return (
    <div className="card card-compact w-80 mx-auto lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photo ? photo : ""} alt={fullName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details.slice(0, 100)}....</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-center">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllAddServices;
