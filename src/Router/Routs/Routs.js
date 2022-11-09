import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Login from "../../Pages/Authrncition/Login/Login";
import Register from "../../Pages/Authrncition/Register/Register";
import Home from "../../Pages/Home/Home";
import Blogs from "../../Pages/Blogs/Blogs";
import Service from "../../Pages/Service/Service";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import ErrorPath from "../../Pages/ErrorPath/ErrorPath";
import MyReviews from "../../Pages/Shared/Header/MyReviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Service></Service>,
        loader: () => fetch("http://localhost:5000/category"),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/myreview",
        element: <MyReviews></MyReviews>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPath></ErrorPath>,
  },
]);

export default router;
