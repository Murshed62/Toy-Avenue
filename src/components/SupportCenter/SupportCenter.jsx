import React from 'react';
import './SupportCenter.css'

const SupportCenter = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-3xl text-purple-600 my-10'>Support Center</h1>
            <div className="hero min-h-fit bg-base-200 w-2/3 py-10 mx-auto mobile-support">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Support center</h1>
      <p className="py-6 font-bold">24/7h Support(10AM-5PM)</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Write your problem details.</span>
          </label>
          <textarea type="text" placeholder="write here..." className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SupportCenter;