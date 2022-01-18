import React, { useRef, useState } from "react";
import Exchange from "../Exchange/Exchange";
import ReturnTab from "../ReturnTab/ReturnTab";
import Calendar from "../Calendar/Calendar";
import { useForm } from "react-hook-form";
import Select from "../Select/Select";
import mApi from "../../api";
import ReactDOM from "react-dom";

function Return(props) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const [date, setDate] = useState(new Date());
  const [reason, setReason] = useState({ id: 0, name: "Выберите из списка" });
  const [tickets, setTickets] = useState([{ id: 0, v: "" }]);
  const [loading, setLoading] = useState(false);
  const [after, setAfter] = useState();
  const reasRef = useRef();
  console.log(tickets);

  const onSubmit = (x) => {
    if (reason.id > 0) {
      const user = {
        name: `${x.surname} ${x.name}${
          x.middle_name ? " " + x.middle_name : ""
        }`,
        fio: x.receiver,
        phone: x.phone,
        email: x.email,
        date_buy_ticket: x.date,
        summ_return: x.return_summ,
        bank_name: x.bank_name,
        bank_bik: x.bank_bik,
        correspondent_account: x.cor_sch,
        payment_account: x.ras_sch,
        product_reason_id: reason.id,
      };
      setLoading(true);
      mApi
        .refundTickets(
          user,
          tickets.filter((t) => t.v).map((t) => t.v)
        )
        .then((data) => {
          setAfter(data);
        })
        .catch((e) => console.log(e))
        .finally((f) => setLoading(false));
    } else {
      reasRef.current.scrollIntoView();
    }
  };

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
                    setTickets([]);
                    window.location.href = mApi.baseUrl;
                  }}
                >
                  <img src="./assets/images/icons/close_normal.svg" alt="" />
                </a>
                <div className="modal_title">
                  Заявка на возврат билетов получена!
                </div>
                <div>
                  <div className="modal_text">
                    Информация о возврате выслана на почту, указанную в заявке.
                  </div>
                  <div className="modal_text">
                    Возврат денежных средств будет произведён в течение 10
                    рабочих дней.
                  </div>
                </div>
              </div>
            </div>,
            document.getElementById("modal")
          )
        : null}
      <div className="container content_container">
        <ReturnTab />

        <form className="row mt-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-lg-12">
            <div className="title_block">
              Введите данные, указанные при покупке билета:
            </div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="name">ваше Имя*</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Введите имя"
              style={errors?.name && { border: "2px solid red" }}
              {...register("name", {
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
              {errors?.name && (errors?.name?.message || "*Error")}
            </div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="surname">ваша Фамилия*</label>
            <input
              type="text"
              className="form-control"
              id="surname"
              placeholder="Введите вашу фамилию"
              style={errors?.surname && { border: "2px solid red" }}
              {...register("surname", {
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
              {errors?.surname && (errors?.surname?.message || "*Error")}
            </div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="middle_name">ваше Отчество*</label>
            <input
              type="text"
              className="form-control"
              id="middle_name"
              placeholder="Введите ваше отчество (при наличии)"
              style={errors?.middle_name && { border: "2px solid red" }}
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
            <label htmlFor="phone">ваш Телефон*</label>
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
            <label htmlFor="date">дата покупки билетов*</label>
            <div className="input_date_pos simple_date">
              <Calendar setDate={setDate} date={date} />
            </div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="ret_summ">Сумма к возврату, руб.*</label>

            <input
              type="text"
              className="form-control"
              id="ret_summ"
              placeholder="Введите сумму"
              style={errors?.return_summ && { border: "2px solid red" }}
              {...register("return_summ", {
                required: "Поле обязательно к заполнению",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Не корректные данные",
                },
              })}
            />
            <div className="invalid-feedback">
              {errors?.return_summ &&
                (errors?.return_summ?.message || "*Error")}
            </div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="bank_name">наименование банка*</label>
            <input
              type="text"
              className="form-control"
              id="bank_name"
              style={errors?.bank_name && { border: "2px solid red" }}
              placeholder="Введите наименование банка"
              {...register("bank_name", {
                required: "Поле обязательно к заполнению",
              })}
            />
            <div className="invalid-feedback">
              {errors?.bank_name && (errors?.bank_name?.message || "*Error")}
            </div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="bank_bik">БИК банка*</label>
            <input
              type="text"
              className="form-control"
              id="bank_bik"
              placeholder="Введите БИК банка"
              style={errors?.bank_bik && { border: "2px solid red" }}
              {...register("bank_bik", {
                required: "Поле обязательно к заполнению",
              })}
            />
            <div className="invalid-feedback">
              {errors?.bank_bik && (errors?.bank_bik?.message || "*Error")}
            </div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="cor_sch">Корреспондентский счет*</label>
            <input
              type="text"
              className="form-control"
              id="cor_sch"
              placeholder="Введите корреспондентский счет"
              style={errors?.cor_sch && { border: "2px solid red" }}
              {...register("cor_sch", {
                required: "Поле обязательно к заполнению",
              })}
            />
            <div className="invalid-feedback">
              {errors?.cor_sch && (errors?.cor_sch?.message || "*Error")}
            </div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="ras_sch">Расчётный счет*</label>
            <input
              type="text"
              className="form-control"
              id="ras_sch"
              placeholder="Введите расчётный счет"
              style={errors?.ras_sch && { border: "2px solid red" }}
              {...register("ras_sch", {
                required: "Поле обязательно к заполнению",
              })}
            />
            <div className="invalid-feedback">
              {errors?.ras_sch && (errors?.ras_sch?.message || "*Error")}
            </div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="receiver">Ф. И. О. получателя*</label>
            <input
              type="text"
              className="form-control"
              id="receiver"
              placeholder="Введите Ф. И. О. получателя"
              style={errors?.receiver && { border: "2px solid red" }}
              {...register("receiver", {
                required: "Поле обязательно к заполнению",
              })}
            />
            <div className="invalid-feedback">
              {errors?.receiver && (errors?.receiver?.message || "*Error")}
            </div>
          </div>

          <div className="col-lg-4 form_item" ref={reasRef}>
            <label htmlFor="">причина возврата билетов*</label>

            <Select val={reason} setVal={setReason} />
          </div>
          <Exchange
            tickets={tickets}
            setTickets={setTickets}
            loading={loading}
          />
        </form>
      </div>
    </>
  );
}

export default Return;
