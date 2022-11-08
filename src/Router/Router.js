import Home from "../pages/Home/Home/Home";
import AllServices from "../pages/Home/Services/services/allServices/AllServices";
import Login from "../pages/Login/Login";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>,
      },
    ],
  },
]);

export default router;
