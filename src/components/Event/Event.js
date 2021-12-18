import React from "react";
import { format } from "date-fns";
import ruLocale from "date-fns/locale/ru";
const Event = ({ el, setBilet, bilet }) => {
  return (
    <div className="row ticket_item">
      <div className="col-lg-5">
        <div className="pbt_img">
          <img src={`https://${el.img_url}`} alt="" />
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
              {el.type === "excursion" ? <p>{el.ageLimit}+</p> : null}
            </div>
            <div className="pbt_r_b_item">
              <img src="./assets/images/icons/clock1.svg" alt="" />
              {el.type === "excursion" ? (
                <p>{el.proceed}</p>
              ) : (
                <p>
                  {format(new Date(el.date), "d MMMM", {
                    locale: ruLocale,
                  })}
                </p>
              )}
            </div>
            {el.type === "excursion" ? (
              <>
                <div className="pbt_r_b_item">
                  <img src="./assets/images/icons/icon_distance.svg" alt="" />
                  <p>{el.distance}км</p>
                </div>
                <div className="pbt_r_b_item">
                  <img src="./assets/images/icons/icon_travel.svg" alt="" />
                  <p>{el.transport}</p>
                </div>
                <div className="pbt_r_b_item">
                  <p>{el.count} чел</p>
                </div>
              </>
            ) : null}
          </div>
          <div className="pbt_r_b_title">
            <h4>{el.title}</h4>
          </div>
          <div className="pbt_r_b_cont">
            <p>{el.text}</p>
            <p>
              Стоимость: {el.price.base} ₽ взрослый, {el.price.child} ₽ детский
              билет, льготные категории — бесплатно.
            </p>
          </div>
          <div className="btns">
            {el.type === "excursion" ? (
              el.time.map((time) => (
                <button
                  className={`btn border_line ${
                    bilet?.id === el.id && time === bilet.selectTime
                      ? "active"
                      : ""
                  }`}
                  key={time}
                  onClick={() => {
                    setBilet({ ...el, selectTime: time });
                  }}
                >
                  {time}
                </button>
              ))
            ) : (
              <button
                className="btn_link chose"
                onClick={() => {
                  setBilet(el);
                }}
              >
                Выбрать
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
