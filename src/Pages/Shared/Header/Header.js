import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import userIcon from "../../../images/user-icon.png";
import logo from "../../../images/logo.png";
import { toast } from "react-toastify";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut()
      .then((result) => {
        toast("Logout Successful");
      })
      .catch((error) => {});
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar bg-base-100 w-10/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/home"}>Home</Link>
              </li>
              <li>
                <Link to={"/services"} className="">
                  Service
                </Link>
              </li>
              <li>
                <Link to={"/Blogs"}>Blogs</Link>
              </li>
              {user?.uid ? (
                <>
                  {" "}
                  <li>
                    <Link to={"/myreview"}>My review</Link>
                  </li>
                  <li>
                    <Link to={"/addservice"}>Add Service</Link>
                  </li>
                  <li>
                    <Link onClick={handelLogOut}>Logout</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={"/register"}>Register</Link>
                  </li>
                  <li>
                    <Link to={"/login"}>Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to={"/"} className="w-14">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/services"}>Service</Link>
            </li>
            <li>
              <Link to={"/blogs"}>Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="menu menu-horizontal p-0 hidden lg:flex">
            {user?.uid ? (
              <>
                {" "}
                <li>
                  <Link to={"/myreview"}>My review</Link>
                </li>
                <li>
                  <Link to={"/addservice"}>Add Service</Link>
                </li>
                <li>
                  <Link onClick={handelLogOut}>Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
              </>
            )}
          </div>
          <div className=" ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user?.uid ? (
                  <img alt="" src={user?.photoURL} />
                ) : (
                  <img alt="" src={userIcon} />
                )}
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
