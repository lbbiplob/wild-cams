import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routs/Routs";
import "react-photo-view/dist/react-photo-view.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
