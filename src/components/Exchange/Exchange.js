import React, { useEffect, useState } from "react";
import TInput from "../Input/Input";
import App from "../App/App";

import ReactDOM from "react-dom";
import mApi from "../../api";

function Exchange(props) {
  const [tikets, setTikets] = useState([{ id: 0, v: "" }]);
  const [ch, setCh] = useState(1);

  const [btn, setBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [after, setAfter] = useState(false);

  useEffect(() => {
    let xArr = [];
    let l = false;
    tikets.forEach((t) => {
      if (!t.v) {
        l = true;
      } else {
        xArr.push(t.v);
      }
    });
    if (!tikets.length) {
      setData(null);
      l = true;
    }
    setBtn(l);
    if (data) {
      mApi
        .ticketsExchange(xArr)
        .then((data) => {
          if (data.status === false) {
            throw data;
          }

          setData(data);
        })
        .catch((e) => {
          console.log("error", e);
          setData(null);
        })
        .finally((e) => setLoading(false));
    }
  }, [tikets]);

  return (
    <>
      {after
        ? ReactDOM.createPortal(
            <div className="modal_body change_modal">
              <div className="modal_content">
                <a
                  href="/"
                  className="modal_close"
                  onClick={(e) => {
                    e.preventDefault();

                    setAfter(false);
                    window.location.href = `${mApi.baseUrl}/before-the-trip`;
                  }}
                >
                  <img src="./assets/images/icons/close_normal.svg" alt="" />
                </a>
                <div className="modal_title">Вы успешно обменяли билеты!</div>
                <div>
                  <div className="modal_text">
                    Мы отправили ваши билеты на почту, указанную при оформлении
                    заказа.
                  </div>
                  <div className="modal_text">
                    <a href={`${mApi.baseUrl}/before-the-trip`}>
                      На этой странице
                    </a>{" "}
                    вы можете посмотреть наши рекомендации перед поездкой.
                  </div>
                </div>
              </div>
            </div>,
            document.getElementById("modal")
          )
        : null}
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
                let l = false;
                tikets.forEach((t) => {
                  if (!t.v) {
                    l = true;
                  }
                });
                if (!l) {
                  setTikets((arr) => [...arr, { id: ch, v: "" }]);
                  setCh((c) => c + 1);
                }
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
              mApi
                .ticketsExchange(tikets.map((t) => t.v))
                .then((data) => {
                  if (data.status === false) {
                    throw data;
                  }
                  console.log("knopka", data);
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
      {data && (
        <App
          data={data}
          exChTickets={tikets.filter((t) => t.v).map((t) => t.v)}
          setAfter={setAfter}
        />
      )}
    </>
  );
}

export default Exchange;
