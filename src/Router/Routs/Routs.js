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
import PrivetRoute from "./PrivetRoute";
import AddService from "../../Pages/AddService/AddService";
import AddAllServiceDatails from "../../Pages/Service/AddAllServiceDatails";

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
        path: "/services/:id",
        element: <AddAllServiceDatails></AddAllServiceDatails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
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
        element: (
          <PrivetRoute>
            <MyReviews></MyReviews>
          </PrivetRoute>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivetRoute>
            <AddService></AddService>
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPath></ErrorPath>,
  },
]);

export default router;
