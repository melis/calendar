import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Table from "../Table/Table";
import { useNavigate } from "react-router-dom";

const Form = ({ bilet, setAfter }) => {
  const { price } = bilet;

  const [summ, setSumm] = useState(0);
  const [tickets, setTickets] = useState(null);
  const [prefValid, setPrefValid] = useState(false);
  const tRef = useRef(null);
  const [loding, setLoding] = useState(false);
  const [er, setEr] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onChange" });

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
    if (tickets?.pref?.prefCount > 0) {
      setPrefValid(false);
      tickets.pref.prefInfo.forEach((i) => {
        if (i.value_id < 1) {
          setPrefValid(true);
        }
      });
    } else {
      setPrefValid(false);
    }
  }, [tickets, price, prefValid]);

  const onSubmit = (client) => {
    console.log(tickets);

    if (!tickets) {
      setEr(["Вы не указали количество и тип билетов"]);
      return;
    }
    if (prefValid) {
      tRef.current.scrollIntoView();
    } else {
      const prefMake = (arr) => {
        let str = "";
        arr.forEach((el, i) => {
          str += el.value_id + (arr.length > i + 1 ? ", " : "");
        });
        return str;
      };
      const order = {
        name: `${client.last_name} ${client.first_name} ${client.middle_name}`,
        phone: client.phone,
        email: client.email,
        address: client.place_of_residence,
        order_type: tickets?.event?.type,
        base_count: tickets.baseCount,
        child_count: tickets.childCount,
        pref: prefMake(tickets.pref.prefInfo),
        product_id: tickets.event.id,
        product_session_id: tickets.event.product_session,
        time: tickets.event.select_time ? tickets.event.select_time : "08:00",
      };
      setLoding(true);
      setEr([]);
      axios
        .post("http://tickets.laplandzap.ru/crm/api/?method=buy_tickets", {
          order,
        })
        .then(({ data }) => {
          console.log("data", data);
          if (data.status) {
            if (data.url) {
              window.location.href = data.url;
            } else {
              setLoding(false);
              setAfter(data);
            }
          } else {
            throw data;
          }
        })
        .catch((data) => {
          setLoding(false);
          let newArr = [];
          if (Array.isArray(data)) {
            for (const [key, value] of Object.entries(data)) {
              if (value) {
                newArr.push(value);
              }
            }
          } else {
            newArr.push(data.msg);
          }

          setEr(newArr);
        });
    }
  };

  return (
    <form
      id="needs-validation"
      className="container"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <Table bilet={bilet} setTickets={setTickets} summ={summ} ref={tRef} />
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
                style={errors?.first_name && { border: "2px solid red" }}
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
                style={errors?.last_name && { border: "2px solid red" }}
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
                style={errors?.middle_name && { border: "2px solid red" }}
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
                style={errors?.phone && { border: "2px solid red" }}
                type="text"
                className="form-control"
                id="phone"
                placeholder=" +7 999 999-99-99"
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
                style={errors?.email && { border: "2px solid red" }}
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
                style={
                  errors?.place_of_residence && { border: "2px solid red" }
                }
                type="text"
                className="form-control"
                id="place_of_residence"
                placeholder="Например, Мончегорск"
                {...register("place_of_residence", {
                  required: "Поле обязательно к заполнению",
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
                  style={errors?.accept ? { borderColor: "red" } : null}
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="accept"
                  {...register("accept", {
                    required: "Поле обязательно к заполнению",
                  })}
                />
                <label className="form-check-label" htmlFor="accept">
                  Согласен на обработку{" "}
                  <a href=" http://laplandzap.ru/privacy-policy">
                    персональных данных
                  </a>
                </label>
              </div>
              <div className="invalid-feedback">
                {errors?.accept && (errors?.accept?.message || "*Error")}
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="payment">
              Итого к оплате:
              <span id="cart_summ2"> {summ}</span> ₽
            </div>
          </div>
          <div>
            <ul style={{ color: "red" }}>
              {er.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </ul>

            {loding ? (
              <img
                src="./assets/images/load.gif"
                alt=""
                className="loading_img"
              />
            ) : (
              <button
                className={`btn_link  m-auto ${
                  !prefValid && isValid ? "chose" : ""
                }`}
                type="submit"
              >
                Оплатить заказ
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
