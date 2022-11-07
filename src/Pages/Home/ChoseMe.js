import React from "react";
import photo from "../../images/choseMe.jpg";

const ChoseMe = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-12">
      <div className="p-6">
        <h2 className="text-xl font-bold"> Why Choose Me?</h2>
        <h1 className="font-bold text-4xl">I'm passionate about service</h1>
        <p className="font-semibold">
          I maintain an eco-system of high quality on-demand services by
          equipping my instrument with the latest technology to manage thousands
          of jobs every year. I enforce service level agreements with
          third-party contractors to ensure that our workforce delivers
          exceptional service with unrivalled efficiency.
        </p>
      </div>
      <div>
        <img className="rounded-lg " src={photo} alt="" />
      </div>
    </div>
  );
};

export default ChoseMe;
