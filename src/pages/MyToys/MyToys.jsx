import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Shared/Provider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import MappingViewDetails from "../MappingViewDetails/MappingViewDetails";
import Footer from "../../Shared/Footer/Footer";

const MyToys = () => {
  useTitle('mytoys');
  const { user } = useContext(AuthContext);
  console.log(user.email);

  const [myToy, setMyToy] = useState([]);
  const [sorting, setSorting] = useState("");
  

  useEffect(() => {
    fetch(`https://mysite-server-six.vercel.app/products/?email=${user?.email}&sort=${sorting}`)
      .then((res) => res.json())
      .then((data) => setMyToy(data));
  }, [sorting]);

  

  console.log(myToy);


  return (
    <div>
      
      <div>
        <button onClick={()=>setSorting(1)} className="btn">Ascending</button>
        <button onClick={()=>setSorting(-1)} className="btn">Descending</button>
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
            {
          myToy.map(mt=><MappingViewDetails key={mt._id} mt={mt} myToy={myToy} setMyToy={setMyToy}></MappingViewDetails>)
        }
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
