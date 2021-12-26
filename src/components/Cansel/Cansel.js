import React, { useEffect, useState } from "react";
import TInput from "../Input/Input";

function Cansel(props) {
  const [tikets, setTikets] = useState([{ id: 0, v: "" }]);
  const [ch, setCh] = useState(1);
  const [ready, setReady] = useState(true);
  useEffect(() => {
    let a = false;
    tikets.forEach((el) => {
      if (!el.v) {
        a = true;
      }
    });
    setReady(a);
  }, [tikets]);
  return (
    <div
      className="container content_container"
      style={{ marginBottom: "100px" }}
    >
      <div className="title_block">Подтвердите отмену экскурсии:</div>

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
            + Добавить билет для отмены
          </button>
        </div>
      </div>

      <button
        disabled={ready}
        className={`btn_link  m-auto ${!ready && "chose"}`}
        type="submit"
        onClick={() => {
          console.log(tikets);
        }}
      >
        Отменить экскурсию
      </button>
    </div>
  );
}

export default Cansel;
