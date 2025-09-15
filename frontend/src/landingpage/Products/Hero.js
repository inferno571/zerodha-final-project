import React from 'react';

const Hero = () => {
  return (
    <div className='container border-bottom mb-5'>
      <div className='text-center my-5 p-3'>
        <h1 className='display-4 fw-bold'>Technology</h1>
        <p className='text-muted fs-5 mt-3'>
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className='mt-3'>
          Check out our{" "}
          <a href="#" className="text-decoration-none">
            investment offerings <i className="fa fa-long-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
