// import React from 'react'

// const Brokerage = () => {
//   return (
//       <div className="container">
//       <div className="row p-5 mt-5 text-center border-top">
//         <div className="col-8 p-4">
//           <a href="" style={{ textDecoration: "none" }}>
//             <h3 className="fs-5">Brokerage calculator</h3>
//           </a>
//           <ul
//             style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
//             className="text-mut"
//           >
//             <li>
//               Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
//               GST per order.
//             </li>
//             <li>Digital contract notes will be sent via e-mail.</li>
//             <li>
//               Physical copies of contract notes, if required, shall be charged
//               ₹20 per contract note. Courier charges apply.
//             </li>
//             <li>
//               For NRI account (non-PIS), 0.5% or ₹100 per executed order for
//               equity (whichever is lower).
//             </li>
//             <li>
//               For NRI account (PIS), 0.5% or ₹200 per executed order for equity
//               (whichever is lower).
//             </li>
//             <li>
//               If the account is in debit balance, any order placed will be
//               charged ₹40 per executed order instead of ₹20 per executed order.
//             </li>
//           </ul>
//         </div>
//         <div className="col-4 p-4">
//           <a href="" style={{ textDecoration: "none" }}>
//             <h3 className="fs-5">List of charges</h3>
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Brokerage
import React from 'react';

const Brokerage = () => {
  return (
    <div className="container border-top pt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
            <div className='text-center mb-5'>
                <h3 className="fw-semibold">Want to know more?</h3>
                <a href="#" className="text-decoration-none me-4">Brokerage calculator</a>
                <a href="#" className="text-decoration-none">List of charges</a>
            </div>
          <ul className="list-group list-group-flush small text-muted">
            <li className="list-group-item">Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
            <li className="list-group-item">Digital contract notes will be sent via e-mail.</li>
            <li className="list-group-item">Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
            <li className="list-group-item">For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li className="list-group-item">For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
