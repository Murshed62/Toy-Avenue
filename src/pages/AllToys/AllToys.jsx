import React, { useEffect, useState } from "react";
import ShowAllToys from "../../components/ShowAllToys/ShowAllToys";
import Footer from "../../Shared/Footer/Footer";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle('alltoys')
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");



  useEffect(() => {
    fetch("https://mysite-server-six.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  const handleSearch = () => {
    fetch(`https://mysite-server-six.vercel.app/searchToy/${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllProducts(data);
      });
  };

  return(
    <div>
      <div className=" p-2 text-center">
        <input
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          className="p-2 border-2 rounded-lg"
        />{" "}
        <button
          className="bg-violet-500 px-4 py-2 rounded-xl text-white font-bold"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
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
