import React, { useState, useEffect } from "react";
import TInput from "../Input/Input";
// import App from "../App/App";

function Exchange({ tickets, setTickets, loading }) {
  const [ch, setCh] = useState(1);
  const [ready, setReady] = useState(false);
  const [chek, setChek] = useState(false);

  useEffect(() => {
    let a = false;
    tickets.forEach((el) => {
      if (el.v) {
        a = true;
      }
    });
    setReady(a);
  }, [tickets]);

  return (
    <div
      className="container content_container mt-5 "
      style={{ marginBottom: "100px" }}
    >
      <div className="title_block">
        Введите номера всех билетов для возврата:
      </div>

      <div className="row" id="tickets_c">
        {tickets.map((t, index) => {
          return (
            <TInput
              key={t.id}
              t={t}
              setTickets={setTickets}
              index={index}
              tickets={tickets}
            />
          );
        })}

        <div className="col-lg-4 form_item" id="add_ticket_block">
          <button
            type="button"
            className="btn border_line add_ticket"
            id="add_ticket"
            onClick={() => {
              setTickets((arr) => [...arr, { id: ch, v: "" }]);
              setCh((c) => c + 1);
            }}
          >
            + Добавить билет для возврата
          </button>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="form-check">
          <input
            className="form-check-input form-check-input1"
            type="checkbox"
            checked={chek}
            onChange={(e) => {
              setChek(e.target.checked);
            }}
            id="flexCheckaccept"
          />

          <label className="form-check-label h-jyt" htmlFor="flexCheckaccept">
            Согласен на обработку{" "}
            <a href="/privacy-policy">персональных данных</a>
          </label>
        </div>
      </div>
      {loading ? (
        <div className="container">
          <img src="./assets/images/load.gif" alt="" className="loading_img" />
        </div>
      ) : (
        <button
          disabled={ready === false || chek === false}
          className="btn_link chose m-auto"
          type="submit"
        >
          Оформить возврат
        </button>
      )}
    </div>
  );
}

export default Exchange;
