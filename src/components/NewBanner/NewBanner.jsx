import React from "react";
import "./NewBanner.css";
import { Link } from "react-router-dom";
import ball from "../../assets/ball.jpg";

const NewBanner = () => {
  return (
    <div className="bg-color">
      {/* navbar */}
      <div className="navbar">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
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
          <a className="btn btn-ghost normal-case text-xl text-white">
            daisyUI
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li className="font-bold text-2xl">
              <Link>Home</Link>
            </li>
            <li className="font-bold text-2xl">
              <Link>All Toy</Link>
            </li>
            <li className="font-bold text-2xl">
              <Link>My Toy</Link>
            </li>
            <li className="font-bold text-2xl">
              <Link>Add a Toy</Link>
            </li>
            <li className="font-bold text-2xl">
              <Link>Add a Toy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center gap-60 mt-40">
        <div className="w-1/2">
            <h1 className="text-white text-4xl font-bold mb-5">Become a <br /> <span className="text-yellow-500">Web Development</span></h1>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis libero iusto fuga cumque incidunt illum rem sit eos modi facilis at pariatur, id ducimus a quae et placeat suscipit dicta. Dolorem temporibus eum odio enim ab nulla exercitationem quos sed sint, quibusdam ex possimus cupiditate impedit aut nam, veniam soluta?</p>
            <button className="bg-purple-500 py-2 px-2 font-bold text-white mt-4">Start The Enrollment</button>
        </div>
        <div>
            <img src={ball} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewBanner;
