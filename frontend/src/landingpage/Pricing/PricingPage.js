// import React from 'react'
// import Hero from "./Hero";
// import Brokerage from "./Brokerage";
// import OpenAccount from "../OpenAccount";
// const PricingPage = () => {
//   return (
//     <div>
//       <Hero />
//       <OpenAccount />
//       <Brokerage />
//     </div>
//   )
// }

// export default PricingPage
import React from 'react';
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount"; // Assuming this is in the same folder

const PricingPage = () => {
  return (
    <div>
      <Hero />
      <OpenAccount />
      <Brokerage />
    </div>
  );
};

export default PricingPage;
