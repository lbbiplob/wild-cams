import React from "react";
import { Link } from "react-router-dom";
import photo from "../../images/serviceTime.png";

const ServiceTime = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
      <div>
        <img className="rounded-lg " src={photo} alt="" />
      </div>
      <div className="p-6">
        <h1 className="font-bold text-4xl">Same & Next Day Service</h1>
        <p className="font-semibold">
          I'm dedicated of wild photography field . I often visit on the same or
          next working day (subject to availability). Click the button below to
          see if my service cover your interest .
        </p>
        <Link to={"/services"} className="btn btn-primary mt-8">
          See Services
        </Link>
      </div>
    </div>
  );
};

export default ServiceTime;
