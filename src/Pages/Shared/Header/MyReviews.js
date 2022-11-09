import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyReviewInfo from "./MyReviewInfo";

const MyReviews = () => {
  const { user, loading } = useContext(AuthContext);
  const [reviews, setReviews] = useState();
  console.log(reviews);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, [user?.email]);
  if (loading) {
    return <button className="btn loading">loading</button>;
  }

  const handelEdit = (id) => {
    console.log("click");
    const confirm = window.confirm("Are your sure delete this review");
    console.log(confirm);
    fetch(`http://localhost:5000/reviews/${id}`);
  };

  //   this is remove review faction
  const handelDelete = (id) => {
    const confirm = window.confirm("Are your sure delete this review");
    console.log(confirm);
    if (confirm) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Delete Successful");
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
        {reviews?.map((review) => (
          <MyReviewInfo
            key={review._id}
            handelDelete={handelDelete}
            handelEdit={handelEdit}
            review={review}
          ></MyReviewInfo>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
