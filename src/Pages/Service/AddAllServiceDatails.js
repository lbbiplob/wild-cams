import React from "react";
import { useLoaderData } from "react-router-dom";

const AddAllServiceDatails = () => {
  const addServices = useLoaderData();
  const { details, email, fullName, photo, title, _id, price } = addServices;
  console.log(addServices);
  return (
    <div>
      <div className="card lg:card-side grid grid-cols-1 lg:grid-cols-2 lg:w-8/12 w-11/12 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={photo ? photo : ""} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <p className="text-amber-400 font-bold">Price: ${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AddAllServiceDatails;
