import React from 'react';
import { useParams } from 'react-router-dom';
import AllToys from '../../pages/AllToys/AllToys';

const AllToysCollection = () => {
    const {_id} = useParams();
    const products = useLoaderData();

    
    
    return (
        <div>
            <h1>total: {products}</h1>
            {/* {
                products.map(pdView=>{<AllToys 
                    key={pdView._id}
                pd={pdView}
                ></AllToys>})
            } */}
        </div>
    );
};

export default AllToysCollection;