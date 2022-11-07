import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChoseMe from "./ChoseMe";
import Item from "./Item";
import ServiceTime from "./ServiceTime";

const Home = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/sortcategory")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  console.log(items);
  return (
    <div className="mt-12  lg:w-10/12 mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {items?.map((item) => (
          <Item key={item._id} item={item}></Item>
        ))}
      </div>
      <div className="mb-12 mt-12">
        <Link to={"/services"}>
          <button className="btn btn-primary justify-center">See All</button>
        </Link>
      </div>
      <div>
        <ServiceTime></ServiceTime>
      </div>
      <div>
        <ChoseMe></ChoseMe>
      </div>
    </div>
  );
};

export default Home;
