import React, { useState, useEffect } from "react";
import Ticket from "./ticket";
import request from "../../request";
import { TicketModel } from "../../model/ticket";
const Tickets: React.FC<{}> = () => {
  const initState: Array<TicketModel> = [];
  const [tickets, setTickets] = useState<Array<TicketModel>>(initState);

  useEffect(() => {
    request
      .get("tickets")
      .then((tickets) => setTickets(tickets.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="row no-gutters tickets">
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} {...ticket} />
      ))}
    </div>
  );
};
export default Tickets;
