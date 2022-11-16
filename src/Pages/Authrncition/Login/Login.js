import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../../useTitle/useTitle";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  useTitle("Login");
  const [error, setError] = useState();
  const { logIn, googleLogIn } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handelGoogleLogin = () => {
    googleLogIn(provider)
      .then((result) => {
        const user = result.user;
        toast("Login Successful");
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        setError(error.massage);
      });
  };

  const handelLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        toast("Login Successful");

        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  };
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content ">
        <div className="card shadow-2xl bg-base-100">
          <div className="text-center mt-8  ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <form onSubmit={handelLogIn} className="card-body">
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
                    to={"/register"}
                    className="label-text-alt link link-secondary"
                  >
                    Register
                  </Link>
                </span>
              </label>

              {error ? (
                <p className="text-orange-500">Email password not match</p>
              ) : (
                ""
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <div className="form-control p-8 ">
            <button onClick={handelGoogleLogin} className="btn btn-primary">
              Google Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
