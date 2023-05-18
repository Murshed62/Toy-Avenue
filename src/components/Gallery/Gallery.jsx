import React from 'react';
import gal1 from '../../assets/gal1.jpg'
import gal2 from '../../assets/gal2.jpg'
import gal3 from '../../assets/gal3.jpg'
import gal4 from '../../assets/gal4.jpg'
import gal5 from '../../assets/gal5.jpg'
import gal6 from '../../assets/gal6.jpg'

const Gallery = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-16 text-purple-600'>Some Wonderful Gallery Collection</h2>

            <div className='mt-5 grid lg:grid-cols-3 mx-auto gap-5'>
                <img src={gal1} alt="" />
                <img src={gal2} alt="" />
                <img src={gal3} alt="" />
                <img src={gal4} alt="" />
                <img src={gal5} alt="" />
                <img src={gal6} alt="" />
            </div>
        </div>
    );
};

export default Gallery;