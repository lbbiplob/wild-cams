import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../useTitle/useTitle";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AllAddServices from "../Service/AllAddServices";
import Banner from "./Banner";
import ChoseMe from "./ChoseMe";
import Item from "./Item";
import ServiceTime from "./ServiceTime";

const Home = () => {
  useTitle("Home");
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState();
  const [items, setItems] = useState();
  useEffect(() => {
    fetch("https://react-assingment-11-backend.vercel.app/sortcategory")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  useEffect(() => {
    fetch(
      `https://react-assingment-11-backend.vercel.app/services?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [user?.email]);

  console.log(items);
  return (
    <div className="mt-12  lg:w-10/12 mx-auto">
      {/* banner section  */}
      <div>
        <Banner></Banner>
      </div>

      {/* home page 3 service  */}
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
      {/* user added service  */}
      <div className="mb-12">
        <div>
          {services?.length > 0 ? (
            <h2 className="font-bold text-4xl">Your Added services</h2>
          ) : (
            ""
          )}
        </div>
        <div className="mt-12">
          {user?.email && services?.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {services?.map((service) => (
                  <AllAddServices
                    key={service._id}
                    service={service}
                  ></AllAddServices>
                ))}
              </div>{" "}
            </>
          ) : (
            ""
          )}
        </div>
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
