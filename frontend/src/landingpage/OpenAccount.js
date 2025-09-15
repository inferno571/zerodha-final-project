// import React from 'react';

// const OpenAccount = () => {
//   return (
//      <div className='container p-5 mb-5'>
//       <div className='row'>
//         <img src='images/homeHero.png' alt="hero image" className='mb-5'/>
//         <h1 className='mt-5'>Open a Zerodha account  </h1>
//         <p>Modern platforms and apps, ₹0 investments,and flat ₹20 intraday and F&0 trades.</p>
//         <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Signup Now</button>
//       </div>
//     </div>
//   )
// }

// export default OpenAccount;
import React from 'react';

const OpenAccount = () => {
  return (
    <div className='container p-5 mb-5'>
      {/* The 'text-center' class on the row will center all the content */}
      <div className='row text-center'>
        {/* All content must be inside a column div (e.g., col-12) for proper alignment */}
        <div className='col-12'>
          
          <h1 className='mt-5 fw-bold'>Open a Zerodha account</h1>
          
          <p className='lead text-muted'>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          
          {/* Using a div with flexbox for centering is more reliable than inline styles */}
          <div className='d-flex justify-content-center mt-4'>
              <button className='btn btn-primary btn-lg fs-5 px-5 py-2'>Signup Now</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OpenAccount;