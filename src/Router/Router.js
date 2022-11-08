import Home from "../pages/Home/Home/Home";
import AllServices from "../pages/Home/Services/services/allServices/AllServices";
import ServiceDetails from "../pages/Home/Services/services/ServiceDetails/ServiceDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

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
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>,
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allBooks/${params.id}`),
      },
    ],
  },
]);

export default router;
