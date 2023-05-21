import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import { AuthContext } from '../../Shared/Provider/AuthProvider';

const Update = () => {
    const loadData = useLoaderData();
    const {_id} = loadData;
    const {user} =useContext(AuthContext);
  console.log(user);
  const [selectedOption, setSelectedOption] = useState(null);

  const updateHandler = (event) => {
    event.preventDefault();
    const form = event.target;
   
    const quantity = form.quantity.value;
   
    const price = form.price.value;
    const description = form.description.value;
   
    // const sellerEmail = form.sellerEmail.value
   


    const collectProductInfo = {
     
      quantity,
     
      price,
      
      description,
      
    };
    

    fetch(`https://mysite-server-six.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(collectProductInfo),
    })
      .then((res) => res.json())
      .then((data) => {console.log(data) 
         alert('updated')});


      form.reset();
  };

    return (
        <div>
        <div className="text-center">
          <h1 className="text-center mt-10 text-2xl font-bold mb-5">Update Page</h1>
  
          <form onSubmit={updateHandler}>
            <div className="flex justify-center gap-10">
              <div>
                
               
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Quantity</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="quantity"
                      placeholder="Available Quantity"
                      className="input input-bordered w-80"
                    />
                  </label>
                </div>
              </div>
              <div>
               
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Price</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="price"
                      placeholder="Price"
                      className="input input-bordered w-80"
                    />
                  </label>
                </div>
                <div className="form-control">
                
  
                  <label className="label">
                    <span className="label-text font-bold">Description</span>
                  </label>
                  <textarea
                    name="description"
                    placeholder="write here..."
                    className="border"
                    id=""
                    cols="20"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
            <input
              className="btn bg-purple-100 hover:bg-purple-200 border-purple-400 border-2 py-2 px-52 mt-10 text-purple-600 font-bold rounded"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Update;