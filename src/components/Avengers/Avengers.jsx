import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Avengers = ({subCate}) => {
    const {_id,sellerName, price, rating, quantity, photo, description, detail, selected, toyName} = subCate;

    return (
        <div className="card w-96 bg-base-100 shadow-xl bg-purple-200">
      <figure>
        <img className="card-img pt-5"
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {toyName}</h2>
        <h2 className="card-title">Price: ${price}</h2>
        <h2 className="card-title">Rating:<FaStar className="text-yellow-500"/>{rating}</h2>
       
        <div className="card-actions justify-end">
         <Link to={`/showviewdetails/${_id}`}> <button className="btn bg-purple-500 border-none">View Details</button></Link>
        </div>
      </div>
    </div>
    );
};

export default Avengers;