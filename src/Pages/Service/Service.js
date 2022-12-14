import { useEffect, useState } from "react";

import useTitle from "../../useTitle/useTitle";

import "react-photo-view/dist/react-photo-view.css";

import Products from "./Products";

const Service = () => {
  const [spiner, setSpiner] = useState(true);
  useTitle("Services");

  const [products, setProducts] = useState();
  // load all service
  useEffect(() => {
    fetch("https://react-assingment-11-backend.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSpiner(false);
      });
  }, []);
  return (
    <div>
      <div>
        {spiner ? <button className="btn loading">loading</button> : ""}
      </div>
      <div>
        <div className="w-10/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products?.map((product) => (
              <Products key={product._id} product={product}></Products>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
