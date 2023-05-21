import React from 'react';
import review1 from '../../assets/review/close-up-portrait-curly-handsome-european-male-min.jpg';
import review2 from '../../assets/review/handsome-young-man-with-new-stylish-haircut-min.jpg';
import review3 from '../../assets/review/young-bearded-man-with-striped-shirt-min.jpg';
import './Review.css';

const Review = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-3xl text-purple-700 my-10 mt-32'>Our Satisfied Buyer Review</h1>
            <div className="carousel w-1/3 mx-auto my-5 mobile-review">
  <div id="slide1" className="carousel-item relative w-full border-2 py-20 bg-purple-100 border-none rounded-2xl">
    <h1 className='mx-auto border-4 py-20 px-28 text-center font-bold bg-purple-400 rounded-3xl'><span><img className='rounded-full mx-auto' width={'95px'} src={review1} alt="" /></span>Danial Jonson <br /> <span className='font-normal text-white'>I'm very much satisfied to buying some transformers toys for my children. All are very much quality full.</span></h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full border-2 py-20 bg-purple-100 border-none rounded-2xl">
  <h1 className='mx-auto border-4 py-20 px-28 text-center font-bold bg-purple-400 rounded-3xl'><span><img className='rounded-full mx-auto' width={'95px'} src={review2} alt="" /></span>Danial Jonson <br /> <span className='font-normal text-white'>I'm to much crazy to buying some marvel toys for my children. All are very much quality full.</span></h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full border-2 py-20 bg-purple-100 border-none rounded-2xl">
  <h1 className='mx-auto border-4 py-20 px-28 text-center font-bold bg-purple-400 rounded-3xl'><span><img className='rounded-full mx-auto' width={'95px'} src={review3} alt="" /></span>Danial Jonson <br /> <span className='font-normal text-white'>I'm very much satisfied to buying some avengers toys for my children. All are very much quality full.</span></h1>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
        </div>
    );
};

export default Review;