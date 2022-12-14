import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../useTitle/useTitle";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Review from "./Review";

const ServiceDetails = () => {
  useTitle("Details&Reviews");
  const serviceDetails = useLoaderData();
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <button className="btn loading">loading</button>;
  }
  const { img, price, name, details } = serviceDetails;

  return (
    <div>
      <div className="card lg:card-side grid grid-cols-1 lg:grid-cols-2 lg:w-8/12 w-11/12 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <p className="text-amber-400 font-bold">Price: ${price}</p>
        </div>
      </div>
      <div>
        <Review serviceDetails={serviceDetails}></Review>
      </div>
    </div>
  );
};

export default ServiceDetails;
