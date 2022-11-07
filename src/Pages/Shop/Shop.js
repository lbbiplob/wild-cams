import { useLoaderData } from "react-router-dom";
import Products from "./Products";

const Shop = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="w-10/12 mx-auto">
      <h2>Total products : {products.length} </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </div>
    </div>
  );
};

export default Shop;
