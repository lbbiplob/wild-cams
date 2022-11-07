import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Item from "./Item";
import ServiceTime from "./ServiceTime";

const Home = () => {
  const items = useLoaderData();
  console.log(items);
  return (
    <div className="mt-12 w-10/12 mx-auto">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {items.map((item) => (
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
    </div>
  );
};

export default Home;
