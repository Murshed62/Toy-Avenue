import React, { useEffect } from 'react';
import gal1 from '../../assets/gal1.jpg'
import gal2 from '../../assets/gal2.jpg'
import gal3 from '../../assets/gal3.jpg'
import gal4 from '../../assets/gal4.jpg'
import gal5 from '../../assets/gal5.jpg'
import gal6 from '../../assets/gal6.jpg'
import AOS from "aos";
import "aos/dist/aos.css";



const Gallery = () => {

    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <div>
            <h2 className='text-4xl font-bold text-center mt-16 text-purple-600'>Some Wonderful Gallery Collection</h2>

            <div className='mt-10 grid lg:grid-cols-3 mx-auto gap-5'>
                <img data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" src={gal1} alt="" />
                <img data-aos="fade-up" data-aos-delay="50" data-aos-duration="1200" src={gal2} alt="" />
                <img data-aos="fade-up" data-aos-delay="50" data-aos-duration="1400" src={gal3} alt="" />
                <img data-aos="fade-up" data-aos-delay="50" data-aos-duration="1600" src={gal4} alt="" />
                <img data-aos="fade-up" data-aos-delay="50" data-aos-duration="1800" src={gal5} alt="" />
                <img data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000" src={gal6} alt="" />
            </div>
        </div>
    );
};

export default Gallery;