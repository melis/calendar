import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
const Form = ({ bilet }) => {
  const { price } = bilet;
  const [summ, setSumm] = useState(0);
  const [tickets, setTickets] = useState(null);
  useEffect(() => {
    if (tickets) {
      setSumm(tickets.base * price.base + tickets.child * price.child);
    }
  }, [tickets, price]);
  return (
    <form id="needs-validation" className="container" noValidate>
      <Table bilet={bilet} setTickets={setTickets} />
      <div className="container checkout">
        <div className="row">
          <div className="">
            <div className="pbt_r_b_title bigest">
              <h4>Оформление заказа:</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row">
            <div className="col-lg-4 form_item">
              <label htmlFor="name">Имя*</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Введите имя"
                required
              />
              <div className="invalid-feedback">*текст ошибки</div>
            </div>
            <div className="col-lg-4 form_item">
              <label htmlFor="surname">Фамилия*</label>
              <input
                type="text"
                className="form-control"
                id="surname"
                placeholder="Введите вашу фамилию"
                required
              />
              <div className="invalid-feedback">*текст ошибки</div>
            </div>
            <div className="col-lg-4 form_item">
              <label htmlFor="middle_name">Отчество*</label>
              <input
                type="text"
                className="form-control"
                id="middle_name"
                placeholder="Введите ваше отчество (при наличии)"
                required
              />
              <div className="invalid-feedback">*текст ошибки</div>
            </div>
            <div className="col-lg-4 form_item">
              <label htmlFor="phone">телефон*</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="+7 (999) 99-99-99)"
                required
              />
              <div className="invalid-feedback">*текст ошибки</div>
            </div>
            <div className="col-lg-4 form_item">
              <label htmlFor="email">E-mail*</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="example@mail.ru"
                required
              />
              <div className="invalid-feedback">*текст ошибки</div>
            </div>
            <div className="col-lg-4 form_item">
              <label htmlFor="place_of_residence">Место жительства*</label>
              <input
                type="email"
                className="form-control"
                id="place_of_residence"
                placeholder="Например, Мончегорск"
                required
              />
              <div className="invalid-feedback">*текст ошибки</div>
            </div>
          </div>
          <div className="col-lg-6 form_item">
            <div className="hover_check">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="accept"
                />
                <label className="form-check-label" htmlFor="accept">
                  Согласен на обработку <a href="/">персональных данных</a>
                </label>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="payment">
              Итого к оплате:
              <span id="cart_summ2"> {summ}</span> ₽
            </div>
          </div>

          <button className="btn_link chose m-auto" type="submit">
            Оплатить заказ
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
