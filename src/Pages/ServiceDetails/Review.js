import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ReviewsInfo from "./ReviewsInfo";

const Review = ({ serviceDetails }) => {
  const { user } = useContext(AuthContext);
  const [reviewInfo, setReviewInfo] = useState();
  const { name, _id } = serviceDetails;
  console.log(name);

  const infos = reviewInfo?.filter((info) => info?.service === _id);

  const handelReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const massage = form.textarea.value;
    console.log(name, email, phone, massage);
    const reviewInfo = {
      service: _id,
      serviceName: name,
      customer: fullName,
      email,
      phone,
      massage,
      photo: user.photoURL,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviewInfo(data);
      });
  }, []);
  return (
    <div>
      <div>
        <form
          onSubmit={handelReview}
          className="lg:w-8/12 p-4 mx-auto lg:p-24 bg-base-100 shadow-xl mt-12 rounded-lg"
        >
          <div>
            <h1 className="text-4xl font-bold">Review</h1>
            <h2 className="text-2xl font-bold mt-12">Service Name: {name}</h2>
          </div>
          <div className="lg:flex  lg:justify-between mt-12">
            <input
              type="text"
              placeholder="full name"
              name="name"
              defaultValue={user?.displayName ? user?.displayName : " "}
              className="input input-bordered input-info lg:w-8/12 mt-2 lg:mr-2 w-full "
              required
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              defaultValue={user?.displayName ? user?.email : " "}
              className="input input-bordered input-info w-full mt-2 lg:ml-2 lg:w-8/12 "
              readOnly
              required
            />
          </div>
          <div>
            <input
              type="phone"
              name="phone"
              placeholder="phone number"
              className="input input-bordered input-info w-full mt-4"
              required
            />
          </div>
          <div className="mt-4">
            <h3>Please write your review</h3>
            <textarea
              className="textarea textarea-info w-full "
              name="textarea"
              placeholder="your review"
              required
            ></textarea>
          </div>
          <input
            className="btn btn-primary mt-12"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <div>
        <div className="mt-12">
          <h2 className="text-4xl font-bold">All Review</h2>
          <div className="lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-4">
            {infos?.map((info) => (
              <ReviewsInfo key={info._id} info={info}></ReviewsInfo>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
