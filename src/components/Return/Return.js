import React from "react";
import Exchange from "../Exchange/Exchange";
import ReturnTab from "../ReturnTab/ReturnTab";
import Calendar from "../Calendar/Calendar";

function Return(props) {
  return (
    <>
      <div className="container content_container">
        <ReturnTab />

        <form
          className="row mt-5"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e);
          }}
        >
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
              required=""
            />

            <div className="invalid-feedback">*текст ошибки</div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="surname">ваша Фамилия*</label>

            <input
              type="text"
              className="form-control"
              id="surname"
              placeholder="Введите вашу фамилию"
              required=""
            />

            <div className="invalid-feedback">*текст ошибки</div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="middle_name">ваше Отчество*</label>

            <input
              type="text"
              className="form-control"
              id="middle_name"
              placeholder="Введите ваше отчество (при наличии)"
              required=""
            />

            <div className="invalid-feedback">*текст ошибки</div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="phone">ваш Телефон*</label>

            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="+7 (999) 99-99-99)"
              required=""
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
              required=""
            />

            <div className="invalid-feedback">*текст ошибки</div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="date">дата покупки билетов*</label>

            <div className="input_date_pos simple_date">
              {/* <input
                placeholder="08.09.2021"
                id="date"
                className="form-control"
                type="text"
              /> */}
              <Calendar />
            </div>

            <div className="invalid-feedback">*текст ошибки</div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="">Сумма к возврату, руб.*</label>

            <input
              type="text"
              className="form-control"
              id="place_of_residence"
              placeholder="Введите сумму"
              required=""
            />

            <div className="invalid-feedback">*текст ошибки</div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="">наименование банка*</label>

            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Введите наименование банка"
              required=""
            />

            <div className="invalid-feedback">*текст ошибки</div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="">БИК банка*</label>

            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Введимте БИК банка"
              required=""
            />

            <div className="invalid-feedback">*текст ошибки</div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="">Корреспондентский счет *</label>

            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Введите корреспондентский счет"
              required=""
            />

            <div className="invalid-feedback">*текст ошибки</div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="">Расчётный счет*</label>

            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Введите расчётный счет"
              required=""
            />

            <div className="invalid-feedback">*текст ошибки</div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="">ФИО получателя*</label>

            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Введите ФИО получателя"
              required=""
            />

            <div className="invalid-feedback">*текст ошибки</div>
          </div>

          <div className="col-lg-4 form_item">
            <label htmlFor="">причина возврата билетов *</label>

            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Выберите из списка"
              required=""
            />

            <div className="invalid-feedback">*текст ошибки</div>
          </div>
          <Exchange />
        </form>
      </div>
    </>
  );
}

export default Return;
