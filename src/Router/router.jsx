import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import Blogs from "../pages/Blogs/Blogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import AllToysCollection from "../components/AllToysCollection/AllToysCollection";
import PrivateRoute from "./PrivateRoute";
import ShowViewDetails from "../pages/ShowViewDetails/ShowViewDetails";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import Update from "../components/Update/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/mytoys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path: "/addatoy",
        element: <AddAToy></AddAToy>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      // {
      //   path: "/viewdetails",
      //   element: <ViewDetails></ViewDetails>,
      //   loader: fetch('http://localhost:5000/products')
      // }
    ],
  },
  
  {
    path: "/products",
    element: <Main></Main>,
    children: [
      {
        path: ":id",
        element: <AllToysCollection></AllToysCollection>,
        loader: () => fetch('http://localhost:5000/products')
      },
    ],
  },
  {
    path:'/showviewdetails/',
    element:<Main></Main>,
    children:[
      {
        path:':id',
        element:<PrivateRoute><ShowViewDetails></ShowViewDetails></PrivateRoute>,
        loader:({params}) =>fetch(`http://localhost:5000/products/${params.id}`)
      }
    ]
  }
]);

export default router;
