import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../useTitle/useTitle";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  useTitle("Register");
  const { createUser } = useContext(AuthContext);

  const handelRegiser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="card mx-auto p-3 m-9 w-full max-w-lg shadow-2xl bg-base-100">
      <form onSubmit={handelRegiser} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="text"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
          />
          <label className="label">
            <span>
              if You don't have an account please
              <Link
                to={"/login"}
                className="label-text-alt link link-secondary"
              >
                Login
              </Link>
            </span>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
