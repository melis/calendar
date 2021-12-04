import React from "react";
import Form from "../Form/Form";

const TicketSelect = ({ bilet, setBilet }) => {
  console.log("bilet:", bilet);
  return (
    <>
      <div className="blue_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h3>{bilet.title}</h3>
            </div>
            <div className="col-lg-5">
              {bilet.type !== "free_date" ? (
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
              <h4>{`${bilet.date} ${
                bilet.selectTime ? "в " + bilet.selectTime : ""
              }`}</h4>
            </div>
          </div>
        </div>
      </div>
      <Form />
    </>
  );
};

export default TicketSelect;
