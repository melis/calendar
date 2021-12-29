import React, { useEffect, useState } from "react";
import TInput from "../Input/Input";
import App from "../App/App";
import axios from "axios";

function Exchange(props) {
  const [tikets, setTikets] = useState([{ id: 0, v: "" }]);
  const [ch, setCh] = useState(1);
  // const [app, setApp] = useState(false);
  const [btn, setBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    let l = false;
    tikets.forEach((t) => {
      if (!t.v) {
        l = true;
      }
    });

    setBtn(l);
    if (data) {
      axios
        .post("https://lapland.syntlex.kg/crm/api/?method=exchange_tickets", {
          tickets: tikets.map((t) => t.v),
        })
        .then(({ data }) => {
          if (data.status === false) {
            throw data;
          }
          setData(data);
        })
        .catch((e) => console.log(e))
        .finally((e) => setLoading(false));
    }
  }, [tikets]);
  return (
    <>
      <div
        className="container content_container"
        style={{ marginBottom: "100px" }}
      >
        <div className="title_block">Введите номера билетов для обмена:</div>

        <div className="row" id="tickets_c">
          {tikets.map((t, index) => (
            <TInput
              key={t.id}
              t={t}
              setTikets={setTikets}
              index={index}
              tickets={tikets}
            />
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
        {!data && (
          <button
            disabled={btn}
            className="btn_link chose m-auto"
            type="submit"
            onClick={() => {
              setLoading(true);
              axios
                .post(
                  "https://lapland.syntlex.kg/crm/api/?method=exchange_tickets",
                  {
                    tickets: tikets.map((t) => t.v),
                  }
                )
                .then(({ data }) => {
                  if (data.status === false) {
                    throw data;
                  }
                  setData(data);
                })
                .catch((e) => console.log(e))
                .finally((e) => setLoading(false));
            }}
          >
            Обменять билеты
          </button>
        )}
      </div>
      {loading ? (
        <div className="container">
          <img src="./assets/images/load.gif" alt="" className="loading_img" />
        </div>
      ) : null}
      {data && <App data={data} exChTickets={tikets.map((t) => t.v)} />}
    </>
  );
}

export default Exchange;
