import React from "react";
import useTitle from "../../useTitle/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="w-10/12 mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <div className="border rounded-lg p-4">
        <h2 className="font-bold text-xl">Difference between SQL and NoSQL</h2>
        <p>
          SQL databases are primarily referred to as Relational Databases
          (RDBMS). NoSQL databases are primarily referred to as Non-relational
          or Distributed Database
        </p>
      </div>
      <div className="border rounded-lg p-4">
        <h2 className="font-bold text-xl">
          What is JWT, and how does it work?
        </h2>
        <p>
          JWTs are a good way of securely transmitting information between
          parties because they can be signed, which means you can be sure that
          the senders are who they say they are. Additionally, the structure of
          a JWT allows you to verify that the content hasn't been tampered with
        </p>
      </div>
      <div className="border rounded-lg p-4">
        <h2 className="font-bold text-xl">
          What is the difference between javascript and NodeJS?
        </h2>
        <p>
          SJavaScript is a programming language, which runs in web browsers.
          Whereas Node.js is an interpreter or running environment for
          JavaScript
        </p>
      </div>
      <div className="border rounded-lg p-4">
        <h2 className="font-bold text-xl">
          How does NodeJS handle multiple requests at the same time?
        </h2>
        <p>
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
