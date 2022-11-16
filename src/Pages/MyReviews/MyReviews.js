import React, { useContext, useEffect, useState } from "react";
import useTitle from "../../useTitle/useTitle";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MyReviewInfo from "./MyReviewInfo";

const MyReviews = () => {
  useTitle("My Reviews");
  const { user, loading } = useContext(AuthContext);
  const [reviews, setReviews] = useState();
  // my reviews filter by email
  useEffect(() => {
    fetch(
      `https://react-assingment-11-backend.vercel.app/reviews?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, reviews]);
  if (loading) {
    return <button className="btn loading">loading</button>;
  }
  // review massage edit
  const handelEditReview = (event, id) => {
    event.preventDefault();
    const form = event.target;
    const editValue = form.massage.value;
    console.log(editValue);

    if (editValue) {
      fetch(`https://react-assingment-11-backend.vercel.app/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ massage: editValue }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            const remainingEdit = reviews.filter((review) => review._id !== id);
            const editReview = reviews.find((review) => review._id === id);
            const newReviews = [editReview, ...remainingEdit];
            toast("Edit Successful");
            form.reset();

            setReviews(newReviews);
          }
        });
    }
  };

  // this is remove review faction
  const handelDelete = (id) => {
    const confirm = window.confirm("Are your sure delete this review");
    console.log(confirm);
    if (confirm) {
      fetch(`https://react-assingment-11-backend.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast("Delete Successful");
            const remainingReviews = reviews.filter(
              (review) => review._id !== id
            );
            setReviews(remainingReviews);
          }
          console.log(data);
        });
    } else {
      alert("Delete cancel ");
    }
  };

  return (
    <div className="lg:w-8/12 w-10/12 mx-auto mt-12">
      <div>
        <h2 className="text-2xl font-bold mb-10">Your Reviews</h2>
      </div>
      <div>
        {reviews?.length === 0 ? (
          <p className="text-lg font-bold">No reviews were added</p>
        ) : (
          ""
        )}
      </div>
      <div>
        {reviews?.map((review) => (
          <MyReviewInfo
            key={review._id}
            handelDelete={handelDelete}
            handelEditReview={handelEditReview}
            review={review}
          ></MyReviewInfo>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
