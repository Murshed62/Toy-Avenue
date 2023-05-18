import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Home/Home/Home";
import PageNotFount from "../pages/PageNotFount/PageNotFount";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import Blogs from "../pages/Blogs/Blogs";

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
      },
      {
        path: "alltoys",
        element:<AllToys></AllToys>
      },
      {
        path: "mytoys",
        element:<MyToys></MyToys>
      },
      {
        path: "addatoy",
        element:<AddAToy></AddAToy>
      },
      {
        path: "blogs",
        element:<Blogs></Blogs>
      },
      
      
    ],
  },
]);

export default router;
