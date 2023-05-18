import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  


  return (
    <div className="navbar bg-base-100">
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
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link>
          <img className="logo" src={logo} alt="" />
          
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="text-2xl font-bold" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="text-2xl font-bold" to="/alltoys">
              All Toys
            </Link>
          </li>
          <li>
            <Link className="text-2xl font-bold" to="/mytoys">
              My Toys
            </Link>
          </li>
          <li>
            <Link className="text-2xl font-bold" to="/addatoy">
              Add A Toy
            </Link>
          </li>
          <li>
            <Link className="text-2xl font-bold" to="/blogs">
              Blogs
            </Link>
          </li>
          
        </ul>
      </div>
      <div className="navbar-end">
      {
    user?.displayName ? <span className="w-14 rounded-full"><img style={{width:"50px"}} className="rounded-full w-1/2" src={user?.photoURL} title={user?.displayName}alt="" />
    </span>: ""
   }
       {
      user ? <Link to="/login" onClick={logOut} className="btn font-bold bg-purple-400 border-none text-white hover:bg-purple-600">Logout</Link>
      :
      <div>
        <Link to="/login" className="font-bold mr-3 mb-1 bg-purple-500 border-none  hover:bg-purple-600 forMblLink py-3 px-4 rounded text-white">Login</Link>
      <Link to="/register" className="font-bold bg-purple-500 border-none hover:bg-purple-600 forMblLink py-3 px-4 rounded text-white">Register</Link>
      </div>
    }
      </div>
    </div>
  );
};

export default Header;
