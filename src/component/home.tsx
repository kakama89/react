import React from "react";
import Ticket from "./ticket/ticket";
import Tickets from "./ticket/tickets";
import Stocks from "./stock/stocks";
import Profile from "./profile/profile";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="content row">
      <div className="col cold md-9 " style={{ backgroundColor: "#ECF0F5" }}>
        <div className="col col-md-12">
          <Tickets />
        </div>
        <div className="col col-md-12">
          <div style={{ textAlign: "right", marginBottom: "10px" }}>
            <Link to="/stock-add">Add Stock</Link>
          </div>

          <Stocks />
        </div>
      </div>
      <div className="col col-md-3" style={{ border: "1px solid #c0c0c0" }}>
        <Profile />
      </div>
    </div>
  );
};
export default Home;
