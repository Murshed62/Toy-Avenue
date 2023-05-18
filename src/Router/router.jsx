import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Home/Home/Home";
import PageNotFount from "../pages/PageNotFount/PageNotFount";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <PageNotFount></PageNotFount>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element:<Login></Login>
      },
      {
        path: "register",
        element:<Register></Register>
      }
    ],
  },
]);

export default router;
