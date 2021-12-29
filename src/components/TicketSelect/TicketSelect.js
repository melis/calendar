import React from "react";
import Form from "../Form/Form";
import { format } from "date-fns";
import ruLocale from "date-fns/locale/ru";

const TicketSelect = ({ bilet, setBilet, data, exChTickets }) => {
  return (
    <>
      <div className="blue_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h3>{bilet.title}</h3>
            </div>
            <div className="col-lg-4">
              {bilet.type !== "1" ? (
                <div className="ticket_close">
                  <img
                    src="/assets/images/icons/close_white.svg"
                    alt=""
                    onClick={() => {
                      setBilet(null);
                    }}
                  />
                </div>
              ) : null}
              <h4>{`${
                bilet?.type === "1"
                  ? bilet.date
                  : format(new Date(bilet.date), "d MMMM", {
                      locale: ruLocale,
                    })
              } ${bilet.selectTime ? "в " + bilet.selectTime : ""}`}</h4>
            </div>
          </div>
        </div>
      </div>
      <Form bilet={bilet} data={data} exChTickets={exChTickets} />
    </>
  );
};

export default TicketSelect;
