import React, { useEffect, useState } from "react";
import ShowAllToys from "../../components/ShowAllToys/ShowAllToys";
import Footer from "../../Shared/Footer/Footer";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle('alltoys')
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  return(
    <div>
     <div className="overflow-x-auto mt-10">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>SELLER NAME</th>
                <th>TOY NAME</th>
                <th>SUB-CATEGORY</th>
                <th>PRICE</th>
                <th>AVAILABLE QUANTITY</th>
                <th>VIEW</th>
              </tr>
            </thead>
            {
        allProducts.map(single=><ShowAllToys key={single._id} single={single}></ShowAllToys>)
      }
          </table>
          <div>
            <Footer></Footer>
          </div>
        </div>
    </div>
  )
};

export default AllToys;
