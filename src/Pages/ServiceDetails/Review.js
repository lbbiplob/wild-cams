import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Review = ({ serviceDetails }) => {
  const { user } = useContext(AuthContext);
  const { name, _id } = serviceDetails;

  const handelReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const massage = form.textarea.value;
    console.log(name, email, phone, massage);
    const reviewInfo = {
      service: _id,
      customer: name,
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
        console.log(data);
      })
      .catch((error) => console.error(error));
  };
  return (
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
      <input className="btn btn-primary mt-12" type="submit" value="Submit" />
    </form>
  );
};

export default Review;
