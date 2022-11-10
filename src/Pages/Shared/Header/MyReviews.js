import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyReviewInfo from "./MyReviewInfo";

const MyReviews = () => {
  const { user, loading } = useContext(AuthContext);
  const [reviews, setReviews] = useState();

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
  // const handelmassage = (event) => {
  //   const value = event.target.value;
  // };
  const handelEdit = (id) => {
    // const confirm = window.confirm("Are your sure delete this review");
    // if (confirm) {
    //   fetch(`http://localhost:5000/reviews/${id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //   });
    // }
  };

  // this is remove review faction
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
            handelEdit={handelEdit}
            review={review}
          ></MyReviewInfo>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
