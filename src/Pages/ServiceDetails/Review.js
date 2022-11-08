import React from "react";

const Review = ({ serviceDetails }) => {
  const { name } = serviceDetails;
  return (
    <form className="lg:w-8/12 p-4 mx-auto lg:p-24 bg-base-100 shadow-xl mt-12 rounded-lg">
      <div>
        <h2 className="text-3xl font-bold">Service Name: {name}</h2>
      </div>
      <div className="lg:flex  lg:justify-between mt-12">
        <input
          type="text"
          placeholder="full name"
          name="name"
          className="input input-bordered input-info lg:w-8/12 mt-2 lg:mr-2 w-full "
          required
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          className="input input-bordered input-info w-full mt-2 lg:ml-2 lg:w-8/12 "
          required
        />
      </div>
      <div>
        <input
          type="phone"
          placeholder="phone number"
          className="input input-bordered input-info w-full mt-4"
        />
      </div>
      <div className="mt-4">
        <h3>Please write your review</h3>
        <textarea
          className="textarea textarea-info w-full "
          placeholder="your review"
          required
        ></textarea>
      </div>
      <input className="btn btn-primary mt-12" type="submit" value="Submit" />
    </form>
  );
};

export default Review;
