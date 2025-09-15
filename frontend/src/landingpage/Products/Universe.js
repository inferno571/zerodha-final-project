// import React from "react";

// function Universe() {
//   return (
//     <div className="container mt-5">
//       <div className="row text-center">
//         <h1>The Zerodha Universe</h1>
//         <p>
//           Extend your trading and investment experience even further with our
//           partner platforms
//         </p>

//         <div className="col-4 p-3 mt-5">
//           <img src="images/smallcaseLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="images/streakLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="images/sensibullLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="images/zerodhaFundhouseLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="images/GoldenpiLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <div className="col-4 p-3 mt-5">
//           <img src="images/dittoLogo.png" />
//           <p className="text-small text-muted">Thematic investment platform</p>
//         </div>
//         <button
//           className="p-2 btn btn-primary fs-5 mb-5"
//           style={{ width: "20%", margin: "0 auto" }}
//         >
//           Signup Now
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Universe;
import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      {/* Section Heading */}
      <div className="row text-center">
        <div className="col">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>

      {/* Platforms Grid */}
      <div className="row mt-4">
        <div className="col-lg-4 col-md-6 text-center p-4">
          <img src="images/smallcaseLogo.png" style={{ width: "150px" }} />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
          <a href="#" style={{ textDecoration: "none" }}>See more</a>
        </div>
        <div className="col-lg-4 col-md-6 text-center p-4">
          <img src="images/streakLogo.png" style={{ width: "150px" }} />
          <p className="text-small text-muted mt-2">
            Create, backtest & deploy trading strategies
          </p>
          <a href="#" style={{ textDecoration: "none" }}>See more</a>
        </div>
        <div className="col-lg-4 col-md-6 text-center p-4">
          <img src="images/sensibullLogo.svg" style={{ width: "150px" }} />
          <p className="text-small text-muted mt-2">Options trading platform</p>
          <a href="#" style={{ textDecoration: "none" }}>See more</a>
        </div>
        <div className="col-lg-4 col-md-6 text-center p-4">
          <img src="images/zerodhaFundhouse.png" style={{ width: "150px" }} />
          <p className="text-small text-muted mt-2">Asset management</p>
          <a href="#" style={{ textDecoration: "none" }}>See more</a>
        </div>
        <div className="col-lg-4 col-md-6 text-center p-4">
          <img src="images/GoldenpiLogo.png" style={{ width: "150px" }} />
          <p className="text-small text-muted mt-2">Bonds & Debentures</p>
          <a href="#" style={{ textDecoration: "none" }}>See more</a>
        </div>
        <div className="col-lg-4 col-md-6 text-center p-4">
          <img src="images/dittoLogo.png" style={{ width: "150px" }} />
          <p className="text-small text-muted mt-2">Insurance</p>
          <a href="#" style={{ textDecoration: "none" }}>See more</a>
        </div>
      </div>

      {/* Signup Button */}
      <div className="row text-center mt-5 mb-5">
        <div className="col">
          <button
            className="p-2 btn btn-primary fs-5"
            style={{ width: "250px" }} // Fixed width for better control
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;