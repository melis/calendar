import React, { useState } from "react";

const Event = ({ el, setBilet, bilet }) => {
  const [img, setImg] = useState("http://" + el.img_url);

  return (
    <div className="row ticket_item">
      <div className="col-lg-5">
        <div className="pbt_img">
          <img
            src={img}
            alt=""
            onError={() => setImg("./assets/images/default_img.jpg")}
          />
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
              {el.type === "2" ? (
                <p>{el.age_limit ? el.age_limit : 0}+</p>
              ) : null}
            </div>
            <div className="pbt_r_b_item">
              <img src="./assets/images/icons/clock1.svg" alt="" />

              <p>{el.proceed} ч.</p>
            </div>
            {el.type === "2" ? (
              <>
                <div className="pbt_r_b_item">
                  <img src="./assets/images/icons/icon_distance.svg" alt="" />
                  <p>{el.distance} км</p>
                </div>
                <div className="pbt_r_b_item">
                  <img src="./assets/images/icons/icon_travel.svg" alt="" />
                  <p>{el.transport ? el.transport : "Пеший"}</p>
                </div>
                <div className="pbt_r_b_item">
                  <p>{el.count} чел.</p>
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
              Стоимость: <br />
              {el.price.base} ₽ взрослый, <br />
              {el.price.child} ₽ детский билет, <br /> льготные категории —
              бесплатно.
            </p>
          </div>

          {Date.parse(el.date) >=
          Date.parse(
            `${new Date().getFullYear()}-${
              new Date().getMonth() + 1
            }-${new Date().getDate()}`
          ) ? (
            <div className="btns">
              {el.type === "2" ? (
                el.time.map((time) => (
                  <button
                    className={`btn border_line ${
                      bilet?.product_session === el.product_session &&
                      time === bilet.selectTime
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
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Event;
