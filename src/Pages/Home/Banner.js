import React from "react";
import banner from "../../images/banner.jpg";
const Banner = () => {
  return (
    <div className="bg-primary mb-12 p-12 text-white lg:flex items-center rounded-lg">
      <div className="w-full p-4">
        <h2 className=" text-5xl font-bold">I'm at your service</h2>
        <p className="mt-4 ">
          Begin by making a list of your specific photography skills. What do
          you love to photograph, and why? Passion equals dedication. Convey
          your passion as much as possible with words and supporting imagery.
          Clients are attracted to photographers who are not only skilled but
          also passionate about their work.
        </p>
      </div>
      <div className="w-full rounded-lg">
        <img className="rounded-lg" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
