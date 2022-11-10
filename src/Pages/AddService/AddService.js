import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState();
  console.log(user.email);

  const handelAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.name.value;
    const email = form.email.value;
    const title = form.title.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const details = form.textarea.value;
    const serviceInfos = {
      fullName,
      email,
      title,
      photo,
      price,
      details,
    };
    console.log(serviceInfos);
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceInfos),
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
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div>
      <div>
        <form
          onSubmit={handelAddService}
          className="lg:w-8/12 p-4 mx-auto lg:p-24 bg-base-100 shadow-xl mt-12 rounded-lg"
        >
          <div>
            <h1 className="text-4xl font-bold">Add Service</h1>
          </div>
          <div className="lg:flex  lg:justify-between mt-12">
            <input
              type="text"
              placeholder="full name"
              name="name"
              defaultValue={user?.displayName}
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
              type="text"
              name="title"
              placeholder="service title"
              className="input input-bordered input-info w-full mt-4"
              required
            />
          </div>
          <div className="lg:flex  lg:justify-between mt-4">
            <input
              type="text"
              placeholder="photo URL"
              name="photo"
              className="input input-bordered input-info lg:w-8/12 mt-2 lg:mr-2 w-full "
              required
            />
            <input
              type="number"
              placeholder="price"
              name="price"
              className="input input-bordered input-info w-full mt-2 lg:ml-2 lg:w-8/12 "
              required
            />
          </div>
          <div className="mt-4">
            <h3>Please write service description</h3>
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
    </div>
  );
};

export default AddService;
