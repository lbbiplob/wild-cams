import React from "react";

const ReviewsInfo = ({ info }) => {
  //   const filterReview = info.filter((inf) => inf.service !== id);
  const { customer, photo, massage } = info;
  console.log(info);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{customer}</h2>
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="" src={photo} />
            </div>
          </label>
        </div>
        <p>{massage}</p>
      </div>
    </div>
  );
};

export default ReviewsInfo;
