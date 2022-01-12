import axios from "axios";
import React, { useEffect, useState } from "react";
import TInput from "../Input/Input";
import ReactDOM from "react-dom";

function Cansel(props) {
  const [tikets, setTikets] = useState([{ id: 0, v: "" }]);
  const [ch, setCh] = useState(1);
  const [ready, setReady] = useState(true);
  const [loading, setLoading] = useState(false);
  const [after, setAfter] = useState();

  useEffect(() => {
    let a = false;
    tikets.forEach((el) => {
      if (!el.v) {
        a = true;
      }
    });
    if (tikets.length > 0) {
      setReady(a);
    } else {
      setReady(true);
    }
  }, [tikets]);
  return (
    <>
      {after
        ? ReactDOM.createPortal(
            <div className="modal_body">
              <div className="modal_content">
                <a
                  href="/"
                  className="modal_close"
                  onClick={(e) => {
                    e.preventDefault();
                    setAfter(false);
                    setTikets([]);
                    window.location.href = "/before-the-trip";
                  }}
                >
                  <img src="./assets/images/icons/close_normal.svg" alt="" />
                </a>
                <div className="modal_title">Экскурсия успешно отменена!</div>
                <div>
                  <div className="modal_text">
                    Но мы ждём вас в заповеднике в течение года.
                  </div>
                  <div className="modal_text">
                    Ваши новые билеты на самостоятельное посещение мы отправили
                    на почту, указанную при оформлении заказа.
                  </div>
                  <div className="modal_text">
                    На этой странице вы можете посмотреть наши рекомендации
                    перед поездкой.
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
        <div className="title_block">Подтвердите отмену экскурсии:</div>

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
              + Добавить билет для отмены
            </button>
          </div>
        </div>

        {loading ? (
          <div className="container">
            <img
              src="./assets/images/load.gif"
              alt=""
              className="loading_img"
            />
          </div>
        ) : (
          <button
            disabled={ready}
            className={`btn_link  m-auto ${!ready && "chose"}`}
            type="submit"
            onClick={() => {
              setLoading(true);
              axios
                .post(
                  "https://lapland.syntlex.kg/crm/api/?method=cancel_tickets",
                  { tickets: tikets.map((t) => t.v) }
                )
                .then(({ data }) => {
                  setAfter(data);
                })
                .catch((e) => alert(e))
                .finally((e) => setLoading(false));
            }}
          >
            Отменить экскурсию
          </button>
        )}
      </div>
    </>
  );
}

export default Cansel;
