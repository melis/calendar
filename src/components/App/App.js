import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import Event from "../Event/Event";
import ListTab from "../ListTab/ListTab";
import Self from "../Self/Self";

const App = () => {
  const [list, setList] = useState([]);
  const [tab, setTab] = useState(null);
  const [self, setSelf] = useState(false);

  return (
    <>
      <div className="container content_container">
        <div className="row">
          <div className="col-lg-5">
            <div className="pbt_bl">
              <h4>Выберите дату посещения*</h4>

              <Calendar list={list} setList={setList} disabled={self} />

              <div className="hover_check">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={self}
                    id="Check_1"
                    onChange={(e) => {
                      setSelf(e.target.checked);
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
            {self ? null : <ListTab list={list} tab={tab} setTab={setTab} />}
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
        ) : (
          list.map((el) => {
            if (tab) {
              if (tab === el.type) {
                return <Event el={el} key={el.id} />;
              }
            } else {
              return <Event el={el} key={el.id} />;
            }
            return null;
          })
        )}
      </div>
      {self ? <Self /> : null}
    </>
  );
};

export default App;
