import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const MappingViewDetails = ({ mt, myToy, setMyToy }) => {
  const {
    _id,
    photo,
    sellerName,
    rating,
    quantity,
    toyName,
    price,
    selected,
    description,
  } = mt;
  console.log(mt);

  const handleDelete = (_id) => {
    fetch(`https://mysite-server-six.vercel.app/products/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const delFilter = myToy.filter((del) => del._id != _id);
          setMyToy(delFilter);
          toast("product deleted successfully");
        }
      });
  };

  return (
    <tbody>
      <tr>
        <th></th>
        <td>{toyName}</td>
        <td>{sellerName}</td>
        <td>
          <img className="w-20 rounded-full" src={photo} alt="" />
        </td>
        <td>{selected}</td>
        <td>${price}</td>
        <td>{rating}</td>
        <td>{quantity}</td>
        <td>
          <Link
            className="bg-purple-500  text-white font-bold py-2 px-3 rounded"
            to={`/update/${_id}`}
          >
            update
          </Link>
        </td>
        <td>
          <button onClick={() => handleDelete(_id)}>
            <Link className="bg-purple-500 text-white font-bold py-2 px-3 rounded">
              delete
            </Link>
          </button>
        </td>
      </tr>

      <ToastContainer />
    </tbody>
  );
};

export default MappingViewDetails;
