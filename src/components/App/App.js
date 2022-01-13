import React, { useEffect, useRef, useState } from "react";
import Calendar from "../Calendar/Calendar";
import Event from "../Event/Event";
import ListTab from "../ListTab/ListTab";
import TicketSelect from "../TicketSelect/TicketSelect";
import { useLocation, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";

const App = () => {
  const [list, setList] = useState([]);
  const [tab, setTab] = useState(null);
  const [self, setSelf] = useState(false);
  const [bilet, setBilet] = useState();
  const [warn, setWarn] = useState(false);
  const Sref = useRef(null);
  const bRef = useRef(null);
  const url = useLocation();
  const [mem, setMem] = useState(url.search);
  const [isLoading, setIsLoading] = useState(false);
  const [after, setAfter] = useState();
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const p = new URLSearchParams(url.search);
    const l = !!p.get("y");
    if (tab) {
      navigate({
        pathname: url.pathname,
        search: l
          ? `?y=${p.get("y")}&m=${p.get("m")}&d=${p.get("d")}&evn=${tab}`
          : `?y=${new Date().getFullYear()}&m=${
              new Date().getMonth() + 1
            }&d=${new Date().getDate()}&evn=${tab}`,
      });
    }
  }, [tab, navigate]);

  useEffect(() => {
    if (warn) {
      setMem(url.search);
      navigate(url.pathname);
    } else {
      navigate({ pathname: url.pathname, search: mem });
    }
  }, [warn, navigate]);

  useEffect(() => {
    if (bilet && bilet.type !== "free_date") {
      Sref.current.scrollIntoView();
    } else {
      bRef.current.scrollIntoView();
    }
  }, [bilet]);

  return (
    <>
      {after
        ? ReactDOM.createPortal(
            <div className="modal_body purchase_modal">
              <div className="modal_content">
                <a
                  href="/"
                  className="modal_close"
                  onClick={(e) => {
                    e.preventDefault();
                    setAfter(false);
                    setBilet(null);
                    // window.location.href = "/before-the-trip";
                  }}
                >
                  <img src="./assets/images/icons/close_normal.svg" alt="" />
                </a>
                <div className="modal_title">Заказ успешно оплачен!</div>
                <div>
                  <div className="modal_text">
                    Мы отправили ваши билеты на почту, указанную при оформлении
                    заказа.
                  </div>
                  <div className="modal_text">
                    <a href="/before-the-trip">На этой странице</a> вы можете
                    посмотреть наши рекомендации перед поездкой.
                  </div>
                </div>
              </div>
            </div>,
            document.getElementById("modal")
          )
        : null}
      <div className="container content_container" ref={bRef}>
        <div className="row">
          <div className="col-lg-5">
            <div className="pbt_bl">
              <h4>Выберите дату посещения*</h4>

              <Calendar
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                setTab={setTab}
                setList={setList}
                disabled={self}
                warn={warn}
                setWarn={setWarn}
                setBilet={setBilet}
                tab={tab}
                setErr={setErr}
              />

              <div className="hover_check">
                <div className="form-check">
                  <span
                    className="a_warning"
                    style={warn ? { display: "block" } : { display: "none" }}
                  >
                    Снимите галочку, чтобы вернуться от самостоятельного
                    посещения без даты к списку мероприятий и экскурсий
                    <img
                      src="/assets/images/icons/close_normal.svg"
                      alt=""
                      onClick={() => {
                        setWarn(false);
                      }}
                    />
                  </span>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={self}
                    id="Check_1"
                    onChange={(e) => {
                      setSelf(e.target.checked);
                      if (e.target.checked) {
                        setBilet({
                          type: "1",
                          title: "Самостоятельное посещение заповедника",
                          price: { base: 450, child: 400, pref: 0 },
                          date: "Разовое посещение в течение года с момента покупки билета",
                        });
                        setWarn(true);
                      } else {
                        setBilet(null);
                        setWarn(false);
                      }
                    }}
                  />

                  <label className="form-check-label" htmlFor="Check_1">
                    Хочу посетить заповедник самостоятельно
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            {self ? null : (
              <ListTab list={list} tab={tab} setTab={setTab} bilet={bilet} />
            )}
          </div>
        </div>
      </div>
      <div className="container tickets">
        {self ? (
          <div className="row ticket_item">
            <div className="col-lg-5">
              <div className="pbt_r_b">
                <div className="pbt_r_b_title bigest">
                  <h4>Самостоятельное посещение заповедника</h4>
                </div>
                <div className="pbt_r_b_cont">
                  <p>
                    Билет даёт право на посещение территории
                    эколого-экскурсионного комплекса Чунозерской усадьбы
                    Лапландского заповедника.
                  </p>
                  <div className="pbt_r_b_title">
                    <h4>В стоимость билета входит:</h4>
                  </div>
                  <ul>
                    <li>посещение территории,</li>

                    <li>
                      посещение экотроп, посещение музеев и природных объектов,
                    </li>

                    <li>
                      услуги объектов инфраструктуры: парковки, туалетов,
                      Туристско-информационного центра, Визит-центра и
                      Конференц-дома,
                    </li>
                    <li>посещение всех объектов инфраструктуры для детей.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="pbt_img right">
                <img src="./assets/images/bt.png" alt="" />
              </div>
            </div>
          </div>
        ) : list.length < 1 ? (
          isLoading ? (
            <div className="row ticket_item">
              <img
                src="./assets/images/load.gif"
                alt=""
                className="loading_img"
              />
            </div>
          ) : (
            <div className="row ticket_item">
              {err
                ? err
                : "Увы! В этот день мероприятий нет. Пожалуйста, выберите другую дату!"}
            </div>
          )
        ) : (
          list.map((el) => {
            if (tab === el.type) {
              return (
                <Event el={el} key={el.id} setBilet={setBilet} bilet={bilet} />
              );
            }
            return null;
          })
        )}
      </div>
      {bilet ? (
        <div ref={Sref}>
          <TicketSelect bilet={bilet} setBilet={setBilet} setAfter={setAfter} />
        </div>
      ) : null}
    </>
  );
};

export default App;
