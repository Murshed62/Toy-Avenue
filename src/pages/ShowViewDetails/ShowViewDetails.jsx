import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const ShowViewDetails = () => {
   
    const dataLoad = useLoaderData();
    const {_id, 
        photo,
        sellerName,
        rating,
        quantity,
        toyName,
        price,
        selected,
        description,
        sellerEmail
} = dataLoad;
    return (
        <>
      <h1 className="text-5xl  font-bold text-fuchsia-500 text-center mt-4">
        Toy Details
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-12  rounded-2xl bg-base-100 shadow-2xl w-3/4 border-4 border-blue-200 mx-auto p-6">
        <div className=" w-[300px] p-0">
          <h2 className="card-title text-2xl">{toyName}</h2>
          <p>
            <span className="font-bold">Description: </span>
            {description}
          </p>
          <br />

        {sellerName && <p>Seller Name: {sellerName}</p>}
          <p>Seller Email: {sellerEmail}</p>
          <p>Price: ${price}</p>
          <div className="justify-end mt-10">
            <div className="badge badge-outline border-yellow-500 bg-yellow-500 mr-2">
              <p className="py-2 px-3">Rating: </p>
              {rating}
            </div>
            <div className="badge badge-outline bg-fuchsia-500 border-fuchsia-500">
              <p className="py-2 px-3">Quantity: </p>
              {quantity}
            </div>
          </div>
        </div>
        <div className=" mr-0">
          <img className=" border-2 p-2 mr-0" src={photo} alt="Album" />
        </div>
      </div>
    </>
    );
};

export default ShowViewDetails;