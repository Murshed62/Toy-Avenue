import React from 'react';
import './ErrorPage.css'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import pageNotFoundImg from '../../assets/errorPage.png';

const ErrorPage = () => {
    
    return (
        <div className='w-full'>
            <div className='bg-purple-100'>
                <img className='notFoundImg' src={pageNotFoundImg} alt="" />
            <Link className='home-redirect' to='/'><FaHome className='mx-auto pt-1'></FaHome> Home</Link>
        </div>
        </div>
    );
};

export default ErrorPage;