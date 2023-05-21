import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import { Link } from 'react-router-dom';

const ShowAllToys = ({single}) => {
   const {_id, photo, sellerName, rating, quantity, toyName, price, selected, description} = single;
    

    return (
        <tbody>
            
        <tr>
                <th></th>
                <td>{sellerName}</td>
                <td>{toyName}</td>
                <td>{selected}</td>
                <td>${price}</td>
                <td>{quantity}</td>
                <td><Link to={`/viewdetails/${_id}`} className='btn bg-purple-500 border-none font-bold hover:bg-purple-600'>View Details</Link></td>
              </tr>
              
            </tbody>
    );
};

export default ShowAllToys;