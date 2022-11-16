import React from "react";
import { useLoaderData } from "react-router-dom";
import Review from "../ServiceDetails/Review";

const AddAllServiceDatails = () => {
  const addServices = useLoaderData();
  console.log(addServices);
  const { details, img, title, price } = addServices;
  console.log(addServices);
  return (
    <div>
      <div className="card lg:card-side grid grid-cols-1 lg:grid-cols-2 lg:w-8/12 w-11/12 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={img ? img : ""} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <p className="text-amber-400 font-bold">Price: ${price}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AddAllServiceDatails;
