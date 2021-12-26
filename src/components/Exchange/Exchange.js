import React, { useState } from "react";
import TInput from "../Input/Input";
// import App from "../App/App";

function Exchange(props) {
  const [tikets, setTikets] = useState([{ id: 0, v: "" }]);
  const [ch, setCh] = useState(1);
  // const [app, setApp] = useState(false);
  return (
    <div
      className="container content_container mt-5 "
      style={{ marginBottom: "100px" }}
    >
      <div className="title_block">
        Введите номера всех билетов для возврата:
      </div>

      <div className="row" id="tickets_c">
        {tikets.map((t, index) => (
          <TInput key={t.id} t={t} setTikets={setTikets} index={index} />
        ))}

        <div className="col-lg-4 form_item" id="add_ticket_block">
          <button
            type="button"
            className="btn border_line add_ticket"
            id="add_ticket"
            onClick={() => {
              setTikets((arr) => [...arr, { id: ch, v: "" }]);
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
            value=""
            id="flexCheckaccept"
          />

          <label className="form-check-label h-jyt" htmlFor="flexCheckaccept">
            Согласен на обработку <a href="/">персональных данных</a>
          </label>
        </div>
      </div>
      <button className="btn_link chose m-auto" type="submit">
        Обменять билеты
      </button>
    </div>
  );
}

export default Exchange;
