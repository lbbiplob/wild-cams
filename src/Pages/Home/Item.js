import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Item = ({ item }) => {
  const { name, details, img, price, _id } = item;
  return (
    <div className="card card-compact w-80 mx-auto lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <PhotoProvider>
          <PhotoView src={img}>
            <img className="rounded" src={img} alt={name} />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details.slice(0, 100)}....</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-center">
          <Link to={`/service/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
