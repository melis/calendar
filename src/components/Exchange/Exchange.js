import React, { useState } from "react";
import TInput from "../Input/Input";
import App from "../App/App";

function Exchange(props) {
  const [tikets, setTikets] = useState([{ id: 0, v: "" }]);
  const [ch, setCh] = useState(1);
  const [app, setApp] = useState(false);
  return (
    <>
      <div
        className="container content_container"
        style={{ marginBottom: "100px" }}
      >
        <div className="title_block">Введите номера билетов для обмена:</div>

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
              + Добавить билет для обмена
            </button>
          </div>
        </div>
        {!app && (
          <button
            className="btn_link chose m-auto"
            type="submit"
            onClick={() => {
              console.log(tikets);
              setApp(true);
            }}
          >
            Обменять билеты
          </button>
        )}
      </div>
      {app && <App />}
    </>
  );
}

export default Exchange;
