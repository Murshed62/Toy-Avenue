import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import './Header.css'

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="navbar bg-purple-100 px-10 py-5 rounded mobile-width">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
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
          {
            isOpen && (
              <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/alltoys">All Toys</Link>
            </li>
            <li>
              <Link to="/addatoy">Add a Toy</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
            
          )}
        </div>
        <Link>
          <div className="flex items-center">
          <img className="logo mobile-logo" src={logo} alt="" />
          <h1 className="ps-3 font-bold">Toy Avenue</h1>
          </div>
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
           {
            user?.email ?  <Link className="text-2xl font-bold" to="/mytoys">
            My Toys
          </Link>
          : ""
           }
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
      user ? <Link to="/login" onClick={logOut} className="btn font-bold bg-purple-400 border-none text-white hover:bg-purple-600 mobile-logout">Logout</Link>
      :
      <div>
        <Link to="/login" className="font-bold mr-3 mb-1 bg-purple-500 border-none  hover:bg-purple-600 forMblLink py-3 px-4 rounded text-white mobile-login">Login</Link>
      <Link to="/register" className="font-bold mobile-register bg-purple-500 border-none hover:bg-purple-600 forMblLink py-3 px-4 rounded text-white">Register</Link>
      </div>
    }
      </div>
    </div>
  );
};

export default Header;
