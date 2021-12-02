import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";

const App = () => {
  const [list, setList] = useState();

  return (
    <>
      <div className="container content_container">
        <div className="row">
          <div className="col-lg-5">
            <div className="pbt_bl">
              <h4>Выберите дату посещения*</h4>

              <Calendar />

              <div className="hover_check">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Check_1"
                  />
                  <label className="form-check-label" htmlFor="Check_1">
                    Хочу посетить заповедник самостоятельно
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="pbt_bl">
              <h4>Выберите дату посещения*</h4>
              <div className="btns">
                <button className="btn border_line">Экскурсия</button>
                <button className="btn border_line active">Мероприятие</button>
              </div>
              <p>
                Обратите внимание: вы можете выбрать для посещения только одну
                экскурсию в день. Для посещения экскурсии вам нужно выбрать
                конкретное время.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container tickets">
        <div className="row ticket_item">
          <div className="col-lg-5">
            <div className="pbt_img">
              <img src="./assets/images/bt.png" alt="" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="pbt_r_b">
              <div className="pbt_r_b_top">
                <div className="pbt_r_b_item">
                  <img
                    src="./assets/images/icons/fam.svg"
                    alt=""
                    style={{ maxWidth: "36px" }}
                  />
                  <p>6+</p>
                </div>
                <div className="pbt_r_b_item">
                  <img src="./assets/images/icons/clock1.svg" alt="" />
                  <p>3-5 ч.</p>
                </div>
                <div className="pbt_r_b_item">
                  <img src="./assets/images/icons/icon_distance.svg" alt="" />
                  <p>5.5 км</p>
                </div>
                <div className="pbt_r_b_item">
                  <img src="./assets/images/icons/icon_travel.svg" alt="" />
                  <p>Пеший</p>
                </div>
              </div>
              <div className="pbt_r_b_title">
                <h4>День открытых дверей</h4>
              </div>
              <div className="pbt_r_b_cont">
                <p>
                  Добрая традиция заповедника — день, когда усадьба превращается
                  в одну большую эколого-просветительскую площадку, где каждый
                  находит занятие по душе.
                </p>
                <p>
                  Стоимость: 450 ₽ взрослый, 400 ₽ детский билет, льготные
                  категории — бесплатно.
                </p>
              </div>
              <div className="btns">
                <button className="btn_link chose">Выбрать</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
