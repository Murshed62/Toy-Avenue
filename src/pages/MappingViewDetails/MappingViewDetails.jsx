import React from 'react';
import { Link } from 'react-router-dom';




const MappingViewDetails = ({mt, myToy, setMyToy}) => {
    const {_id, photo, sellerName, rating, quantity, toyName, price, selected, description} = mt;
    console.log(mt);

    const handleDelete =(_id)=>{
      fetch(`https://mysite-server-six.vercel.app/products/${_id}`,{
        method:'DELETE'
        
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
      console.log(_id);
      if(data.deletedCount > 0){
        const delFilter = myToy.filter((del)=>del._id != _id);
        setMyToy(delFilter);
      }
    }

    return (
        <tbody>
            
        <tr>
                <th></th>
                <td>{toyName}</td>
                <td>{sellerName}</td>
                <td><img className='w-20 rounded-full' src={photo} alt="" /></td>
                <td>{selected}</td>
                <td>${price}</td>
                <td>{rating}</td>
                <td>{quantity}</td>
                <td><Link to={`/update/${_id}`}>update</Link></td>
                <td><button onClick={()=>handleDelete(_id)}><Link>delete</Link></button></td>
                
              </tr>
              
            </tbody>
    );
};

export default MappingViewDetails;