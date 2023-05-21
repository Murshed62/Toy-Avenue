import React from "react";
import { FaStar } from "react-icons/fa";


const Products = ({pd}) => {
  const {name, price, rating, quantity, img, description, detail} = pd;
 

  return (
    <div className="card w-96 bg-base-100 shadow-xl bg-purple-200">
      <figure>
        <img className="card-img pt-5"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <h2 className="card-title">Price: {price}</h2>
        <h2 className="card-title">Rating:<FaStar className="text-yellow-500"/>{rating}</h2>
       
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
