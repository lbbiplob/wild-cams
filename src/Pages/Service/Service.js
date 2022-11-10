import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../useTitle/useTitle";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AllAddServices from "./AllAddServices";

import Products from "./Products";

const Service = () => {
  const [spiner, setSpiner] = useState(true);
  useTitle("Services");
  const { user, loading } = useContext(AuthContext);
  const [services, setServices] = useState();
  console.log(services);

  const products = useLoaderData();

  useEffect(() => {
    fetch(`http://localhost:5000/services?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setSpiner(false);
      });
  }, [user?.email]);
  return (
    <div>
      <div>
        {spiner ? <button className="btn loading">loading</button> : ""}
      </div>
      <div>
        <div className="w-10/12 mx-auto">
          <h2>Total products : {products.length} </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <Products key={product._id} product={product}></Products>
            ))}
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto">
        <div className="mt-12">
          {services?.length > 0 ? (
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
    </div>
  );
};

export default Service;
