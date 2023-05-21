import React, { useContext, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Select from "react-select";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../Shared/Provider/AuthProvider";

const options = [
  { value: "avengers", label: "Avengers" },
  { value: "marvel", label: "Marvel" },
  { value: "transformers", label: "Transformers" },
];

const AddAToy = () => {
  useTitle('addatoy');
  const {user} =useContext(AuthContext);
  console.log(user);
  const [selectedOption, setSelectedOption] = useState(null);

  const addAToyHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const sellerName = form.sellerName.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const toyName = form.toyName.value;
    const price = form.price.value;
    const description = form.description.value;
    const selected = selectedOption.value;
    // const sellerEmail = form.sellerEmail.value
    const sellerEmail = user?.email;


    const collectProductInfo = {
      photo,
      sellerName,
      rating,
      quantity,
      toyName,
      price,
      selected,
      description,
      sellerEmail
    };
    

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(collectProductInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

      form.reset();
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-center mt-10 text-2xl font-bold mb-5">ADD A TOY</h1>

        <form onSubmit={addAToyHandler}>
          <div className="flex justify-center gap-10">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Picture</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="photo"
                    placeholder="Picture URL"
                    className="input input-bordered w-80"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Seller Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Seller Name"
                    name="sellerName"
                    defaultValue={user?.displayName}
                    readOnly
                    className="input input-bordered w-80"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Rating</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="rating"
                    placeholder="Rating"
                    className="input input-bordered w-80"
                  />
                </label>
              </div>
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
                  <span className="label-text font-bold">Toy Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="toyName"
                    placeholder="Toy Name"
                    className="input input-bordered w-80"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Seller Email</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="sellerEmail"
                    placeholder="seller email"
                    defaultValue={user?.email}
                    readOnly
                    className="input input-bordered w-80"
                  />
                </label>
              </div>
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
              <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />

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

export default AddAToy;
