import React, { useState } from "react";
import TInput from "../Input/Input";

function Exchange(props) {
  const [tikets, setTikets] = useState([{ id: 0, v: "" }]);
  const [ch, setCh] = useState(1);
  return (
    <>
      <div className="title_block">Введите номера билетов для обмена:</div>

      <div className="row" id="tickets_c">
        {tikets.map((t) => (
          <TInput key={t.id} t={t} index={t.id + 1} setTikets={setTikets} />
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
      <button
        className="btn_link chose m-auto"
        type="submit"
        onClick={() => {
          console.log(tikets);
        }}
      >
        Обменять билеты
      </button>
    </>
  );
}

export default Exchange;
