import React from "react";

const Self = () => {
  return (
    <>
      <div className="blue_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h3>Самостоятельное посещение заповедника</h3>
            </div>
            <div className="col-lg-5">
              <h4>Бессрочный билет на год</h4>
            </div>
          </div>
        </div>
      </div>
      <form id="needs-validation" className="container" novalidate>
        <div className="row">
          <div className="ticket_selection">
            <div className="pbt_r_b_title bigest">
              <h4>Выбор типа билета:</h4>
            </div>

            <table
              className="ticket_selection_content accordion"
              id="accordionPanelsStayOpenExample"
            >
              <tr className="ticket_selection_item head">
                <th className="ticket_selection_name">ТИП БИЛЕТА</th>
                <th className="ticket_selection_price">ЦЕНА.РУБ</th>
                <th className="ticket_selection_count">КОЛИЧЕСТВО</th>
                <th className="w_0"></th>
              </tr>
              <tr
                className="ticket_selection_item zebra accordion-item"
                id="headingOne"
              >
                <td
                  className="ticket_selection_name"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Взрослый билет
                </td>
                <td className="ticket_selection_price">450</td>

                <td className="ticket_selection_count">
                  <button className="btn_minus">
                    <img src="./assets/images/icons/minus.svg" alt="" />
                  </button>

                  <input
                    className="cart_num"
                    type="text"
                    value="1"
                    size="3"
                    maxlength="6"
                  />
                  <button className="btn_plus">
                    <img src="./assets/images/icons/plus.svg" alt="" />
                  </button>
                </td>
                <td className="item_sum w_0">450</td>
                <td className="d-block">
                  <div className="chield_collaps">
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Обратите внимание! <br />
                          При оформлении 15 детских билетов 1 взрослый билет
                          оформляется бесплатно.
                        </p>
                        <div className="rounded_circle">
                          Бесплатный взрослый билет: 1
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              <tr className="ticket_selection_item zebra accordion-item">
                <td
                  className="ticket_selection_name"
                  id="headingTwo"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Детский билет <span>(3-18 лет включительно) </span>
                </td>
                <td className="ticket_selection_price">450</td>

                <td className="ticket_selection_count">
                  <button className="btn_minus">
                    <img src="./assets/images/icons/minus.svg" alt="" />
                  </button>

                  <input
                    className="cart_num"
                    type="text"
                    value="1"
                    size="3"
                    maxlength="6"
                  />
                  <button className="btn_plus">
                    <img src="./assets/images/icons/plus.svg" alt="" />
                  </button>
                </td>
                <td className="item_sum w_0">450</td>
                <td className="d-block chield_collaps">
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Обратите внимание! <br />
                        При оформлении 15 детских билетов 1 взрослый билет
                        оформляется бесплатно.
                      </p>
                      <div className="rounded_circle">
                        Бесплатный взрослый билет: 1
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              <tr className="ticket_selection_item zebra">
                <td
                  className="ticket_selection_name"
                  id="headingThree"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Льготный билет
                </td>
                <td className="ticket_selection_price">бесплатно</td>

                <td className="ticket_selection_count">
                  <button className="btn_minus" disabled>
                    <img
                      disabled="true"
                      src="./assets/images/icons/minus.svg"
                      alt=""
                    />
                  </button>

                  <input
                    className="cart_num"
                    type="text"
                    value="0"
                    size="3"
                    maxlength="6"
                  />
                  <button className="btn_plus" disabled>
                    <img src="./assets/images/icons/plus.svg" alt="" />
                  </button>
                </td>
                <td className="item_sum w_0">0</td>
                <td className="d-block chield_collaps">
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Обратите внимание! <br />
                        При оформлении 15 детских билетов 1 взрослый билет
                        оформляется бесплатно.
                      </p>
                      <div className="rounded_circle">
                        Бесплатный взрослый билет: 1
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
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
                <label for="name">Имя*</label>
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
                <label for="surname">Фамилия*</label>
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
                <label for="middle_name">Отчество*</label>
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
                <label for="phone">телефон*</label>
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
                <label for="email">E-mail*</label>
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
                <label for="place_of_residence">Место жительства*</label>
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
                  <label className="form-check-label" for="accept">
                    Согласен на обработку <a href="">персональных данных</a>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="payment">
                Итого к оплате:
                <span id="cart_summ2"></span> ₽
              </div>
            </div>

            <button className="btn_link chose m-auto" type="submit">
              Оплатить заказ
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Self;
