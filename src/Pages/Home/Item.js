import React from "react";

const Item = ({ item }) => {
  const { name, details, img, price } = item;
  return (
    <div className="card card-compact w-80 mx-auto lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details.slice(0, 100)}....</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
