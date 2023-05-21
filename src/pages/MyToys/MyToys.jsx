import React, { useContext, useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import { AuthContext } from '../../Shared/Provider/AuthProvider';

const MyToys = () => {
  const {user} = useContext(AuthContext);
  
  const [myToy, setMyToy] = useState([]);
  const [sorting, setSorting] = useState("");


  useEffect(()=>{
    fetch( `http://localhost:5000/toy?email=${user?.email}&sort=${sorting}`)
    .then(res=>res.json())
    .then(data=>setSorting(data))
  },[sorting])

  console.log(sorting);

    return (
        <div>
          <h2>{sorting.length}</h2>
        </div>
    );
};

export default MyToys;