import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className='container my-5 py-3'>
      <div className='row align-items-center'>
        <div className='col-md-6 p-4'>
          <h2 className='fw-bold'>{productName}</h2>
          <p className='text-muted'>{productDescription}</p>
          <a href={learnMore} className="text-decoration-none">Learn More <i className="fa fa-long-arrow-right"></i></a>
        </div>
        <div className='col-md-6 text-center'>
          <img src={imageURL} alt={productName} className='img-fluid' style={{maxWidth: "80%"}} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;

