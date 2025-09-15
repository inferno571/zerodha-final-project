import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
  return (
    <div className='container my-5 py-3'>
      <div className='row align-items-center'>
        <div className='col-md-6 text-center'>
          <img src={imageURL} alt={productName} className='img-fluid' style={{maxWidth: "80%"}} />
        </div>
        <div className='col-md-6 p-4'>
          <h2 className='fw-bold'>{productName}</h2>
          <p className='text-muted'>{productDescription}</p>
          <div className='d-flex align-items-center mb-3'>
            <a href={tryDemo} className="text-decoration-none me-5">Try Demo <i className="fa fa-long-arrow-right"></i></a>
            <a href={learnMore} className="text-decoration-none">Learn More <i className="fa fa-long-arrow-right"></i></a>
          </div>
          <div className='d-flex align-items-center'>
            <a href={googlePlay}>
              <img src="images/googlePlayBadge.svg" alt="Google Play" className='me-3'/>
            </a>
            <a href={appStore}>
              <img src="images/appstoreBadge.svg" alt="App Store"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

