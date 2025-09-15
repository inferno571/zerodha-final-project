
import React from 'react';

const Hero = () => {
  return (
    <div className="container">
      {/* Top section with main heading */}
      <div className="row p-5 mt-5 text-center">
        <div className='col-12'>
            <h1 className='display-4 fw-bold'>Pricing</h1>
            <p className="text-muted fs-5 mt-3">
              Free equity investments and flat ₹20 intraday and F&O trades.
            </p>
        </div>
      </div>
      <hr />
      {/* Three-column feature section */}
      <div className="row py-5 text-center">
        <div className="col-md-4 p-4">
          <img 
            src="images/pricingEquity.svg" 
            alt="Free equity delivery" 
            className='mb-3'
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x150/CCCCCC/FFFFFF?text=Image+Error'; }}
            />
          <h3 className="fs-4 fw-semibold">Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-md-4 p-4">
          <img 
            src="images/intradayTrades.svg" 
            alt="Intraday and F&O trades" 
            className='mb-3'
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x150/CCCCCC/FFFFFF?text=Image+Error'; }}
            />
          <h3 className="fs-4 fw-semibold">Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades.
          </p>
        </div>
        <div className="col-md-4 p-4">
          <img 
            src="images/pricingEquity.svg" 
            alt="Free direct MF" 
            className='mb-3'
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/150x150/CCCCCC/FFFFFF?text=Image+Error'; }}
            />
          <h3 className="fs-4 fw-semibold">Free direct MF</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
