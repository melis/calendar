import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Table from "../Table/Table";

const Form = ({ bilet }) => {
  const { price } = bilet;

  const [summ, setSumm] = useState(0);
  const [tickets, setTickets] = useState(null);
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm();

  useEffect(() => {
    setSumm(0);
    setTickets(null);
  }, [bilet]);

  useEffect(() => {
    if (tickets) {
      setSumm(
        tickets.baseCount * price.base + tickets.childCount * price.child
      );
    }
  }, [tickets, price]);

  const onSubmit = (client) => {
    alert(JSON.stringify({ client, tickets }));
    console.log(JSON.stringify({ client, tickets }));
  };

  return (
    <form
      id="needs-validation"
      className="container"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <Table bilet={bilet} setTickets={setTickets} summ={summ} />
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
              <label htmlFor="first_name">Имя*</label>
              <input
                id="first_name"
                type="text"
                className="form-control"
                {...register("first_name", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 2,
                    message: "Минимум 2 символов",
                  },
                  pattern: {
                    value: /^[a-zа-яё\s]+$/iu,
                    message: "Не корректные данные",
                  },
                })}
                placeholder="Введите имя"
              />
              <div className="invalid-feedback">
                {errors?.first_name &&
                  (errors?.first_name?.message || "*Error")}
              </div>
            </div>
            <div className="col-lg-4 form_item">
              <label htmlFor="last_name">Фамилия*</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                placeholder="Введите вашу фамилию"
                {...register("last_name", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 2,
                    message: "Минимум 2 символов",
                  },
                  pattern: {
                    value: /^[a-zа-яё\s]+$/iu,
                    message: "Не корректные данные",
                  },
                })}
              />
              <div className="invalid-feedback">
                {errors?.last_name && (errors?.last_name?.message || "*Error")}
              </div>
            </div>
            <div className="col-lg-4 form_item">
              <label htmlFor="middle_name">Отчество*</label>
              <input
                type="text"
                className="form-control"
                id="middle_name"
                placeholder="Введите ваше отчество (при наличии)"
                {...register("middle_name", {
                  minLength: {
                    value: 2,
                    message: "Минимум 2 символов",
                  },
                  pattern: {
                    value: /^[a-zа-яё\s]+$/iu,
                    message: "Не корректные данные",
                  },
                })}
              />
              <div className="invalid-feedback">
                {errors?.middle_name &&
                  (errors?.middle_name?.message || "*Error")}
              </div>
            </div>
            <div className="col-lg-4 form_item">
              <label htmlFor="phone">телефон*</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="+7 (999) 99-99-99)"
                {...register("phone", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 10,
                    message: "Минимум 10 символов",
                  },
                  pattern: {
                    value:
                      /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/,
                    message: "Не корректные данные",
                  },
                })}
              />
              <div className="invalid-feedback">
                {errors?.phone && (errors?.phone?.message || "*Error")}
              </div>
            </div>
            <div className="col-lg-4 form_item">
              <label htmlFor="email">E-mail*</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="example@mail.ru"
                {...register("email", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 4,
                    message: "Минимум 4 символов",
                  },
                  pattern: {
                    value: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
                    message: "Не корректные данные",
                  },
                })}
              />
              <div className="invalid-feedback">
                {errors?.email && (errors?.email?.message || "*Error")}
              </div>
            </div>
            <div className="col-lg-4 form_item">
              <label htmlFor="place_of_residence">Место жительства*</label>
              <input
                type="text"
                className="form-control"
                id="place_of_residence"
                placeholder="Например, Мончегорск"
                {...register("place_of_residence", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 5,
                    message: "Минимум 5 символов",
                  },
                })}
              />
              <div className="invalid-feedback">
                {errors?.place_of_residence &&
                  (errors?.place_of_residence?.message || "*Error")}
              </div>
            </div>
          </div>
          <div className="col-lg-6 form_item">
            <div className="hover_check">
              <div className="form-check">
                <input
                  style={{ borderColor: errors?.accept ? "red" : "inherit" }}
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="accept"
                  {...register("accept", {
                    required: "Поле обязательно к заполнению",
                  })}
                />
                <label className="form-check-label" htmlFor="accept">
                  Согласен на обработку <a href="/">персональных данных</a>
                </label>
              </div>
              <div className="invalid-feedback">
                {errors?.tickets && (errors?.tickets?.message || "*Error")}
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
