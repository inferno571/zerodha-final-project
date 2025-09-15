import React from "react";
import { Route, Routes } from "react-router-dom";

// Your local components
import Apps from "./App"; // This is your component
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

// The icon from @mui/icons-material is renamed to avoid a name collision
import { Apps as AppsIcon } from "@mui/icons-material";

const Dashboard = () => {
  // Note: The icon is now available as <AppsIcon /> if you need to use it.
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          {/* This route correctly uses your local Apps component */}
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
