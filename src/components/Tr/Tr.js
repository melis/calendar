import React, { useState } from "react";

const Tr = ({ bilet }) => {
  const { price } = bilet;
  const [base, setBase] = useState(0);
  const [child, setChild] = useState(0);
  const [pref, setPref] = useState(0);
  return (
    <>
      <tr className="ticket_selection_item zebra accordion-item">
        <td className="ticket_selection_name">Взрослый билет</td>
        <td className="ticket_selection_price">{price.base}</td>
        <td className="ticket_selection_count">
          <button
            className="btn_minus"
            onClick={(e) => {
              e.preventDefault();
              setBase((c) => {
                return c > 0 ? c - 1 : 0;
              });
            }}
          >
            <img src="./assets/images/icons/minus.svg" alt="" />
          </button>
          <input
            className="cart_num"
            type="text"
            value={base}
            onChange={(e) => setBase(Number(e.target.value))}
          />
          <button
            className="btn_plus"
            onClick={(e) => {
              e.preventDefault();
              setBase((c) => {
                return c + 1;
              });
            }}
          >
            <img src="./assets/images/icons/plus.svg" alt="" />
          </button>
        </td>
      </tr>

      <tr className="ticket_selection_item zebra accordion-item">
        <td className="ticket_selection_name">
          Детский билет <span>(3-18 лет включительно) </span>
        </td>
        <td className="ticket_selection_price">{price.child}</td>
        <td className="ticket_selection_count">
          <button
            className="btn_minus"
            onClick={(e) => {
              e.preventDefault();
              setChild((c) => {
                return c > 0 ? c - 1 : 0;
              });
            }}
          >
            <img src="./assets/images/icons/minus.svg" alt="" />
          </button>
          <input
            className="cart_num"
            type="text"
            value={child}
            onChange={(e) => setChild(Number(e.target.value))}
          />
          <button
            className="btn_plus"
            onClick={(e) => {
              e.preventDefault();
              setChild((c) => {
                return c + 1;
              });
            }}
          >
            <img src="./assets/images/icons/plus.svg" alt="" />
          </button>
        </td>
        <td className="d-block chield_collaps">
          <div className="accordion-collapse collapsed">
            <div className="accordion-body">
              <p>
                Обратите внимание! <br />
                При оформлении 15 детских билетов 1 взрослый билет оформляется
                бесплатно.
              </p>
              <div className="rounded_circle">Бесплатный взрослый билет: 1</div>
            </div>
          </div>
        </td>
      </tr>

      <tr className="ticket_selection_item zebra">
        <td className="ticket_selection_name" type="button">
          Льготный билет
        </td>
        <td className="ticket_selection_price">бесплатно</td>
        <td className="ticket_selection_count">
          <button
            className="btn_minus"
            onClick={(e) => {
              e.preventDefault();
              setPref((c) => {
                return c > 0 ? c - 1 : 0;
              });
            }}
          >
            <img disabled={true} src="./assets/images/icons/minus.svg" alt="" />
          </button>
          <input
            className="cart_num"
            type="text"
            value={pref}
            onChange={(e) => setPref(Number(e.target.value))}
          />
          <button
            className="btn_plus"
            onClick={(e) => {
              e.preventDefault();
              setPref((c) => {
                return c + 1;
              });
            }}
          >
            <img src="./assets/images/icons/plus.svg" alt="" />
          </button>
        </td>
        <td className="d-block chield_collaps">
          <div className="accordion-collapse collapsed">
            <div className="accordion-body">
              <div className="form-group select">
                <label htmlFor="example1">Льготный билет 1*</label>
                <select className="form-select" id="example1" required="">
                  <option>Подопечные социальных учреждений</option>
                  <option value="2">2</option>
                  <option value="2">3</option>
                  <option value="2">4</option>
                  <option value="2">5</option>
                </select>
                <div className="invalid-feedback">*текст ошибки</div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Tr;
