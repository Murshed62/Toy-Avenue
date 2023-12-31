import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Shared/Provider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MappingViewDetails from "../MappingViewDetails/MappingViewDetails";
import Footer from "../../Shared/Footer/Footer";

const MyToys = () => {
  useTitle("mytoys");
  const { user } = useContext(AuthContext);
  console.log(user.email);

  const [myToy, setMyToy] = useState([]);
  const [sortPrice, setSortPrice] = useState(true);

  useEffect(() => {
    fetch(
      `https://mysite-server-six.vercel.app/products?email=${
        user?.email
      }&sort=${sortPrice ? 1 : -1}`
    )
      .then((res) => res.json())
      .then((data) => setMyToy(data));
  }, [sortPrice]);

  return (
    <div>
      <div className="text-center mt-3">
        <button
          className="bg-purple-500 text-white font-bold py-2 px-3 rounded"
          onClick={() => setSortPrice(!sortPrice)}
        >
          {sortPrice ? "ascending" : "descending"}
        </button>
        <div>
          <div className="overflow-x-auto mt-10">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>TOY NAME</th>
                  <th>SELLER NAME</th>
                  <th>Photo</th>
                  <th>CATEGORY</th>
                  <th>PRICE</th>
                  <th>rating</th>
                  <th>AVAILABLE QUANTITY</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {myToy.map((mt) => (
                <MappingViewDetails
                  key={mt._id}
                  mt={mt}
                  myToy={myToy}
                  setMyToy={setMyToy}
                ></MappingViewDetails>
              ))}
            </table>
            <div>
              <Footer></Footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
