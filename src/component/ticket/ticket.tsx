import React from "react";
const Ticket = ({ icon, name, desc }) => {
  return (
    <div className="row no-gutters col ticket">
      <div className="col-sm-4 icon">
        <i className={icon}></i>
      </div>
      <div className="col-sm-8 info">
        <span>{name}</span>
        <span>{desc}</span>
      </div>
    </div>
  );
};
export default Ticket;
