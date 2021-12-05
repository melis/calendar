import React from "react";

const Table = () => {
  return (
    <div className="row">
      <div className="ticket_selection">
        <div className="pbt_r_b_title bigest">
          <h4>Выбор типа билета:</h4>
        </div>

        <table
          className="ticket_selection_content accordion"
          id="accordionPanelsStayOpenExample"
        >
          <thead>
            <tr className="ticket_selection_item head">
              <th className="ticket_selection_name">ТИП БИЛЕТА</th>
              <th className="ticket_selection_price">ЦЕНА.РУБ</th>
              <th className="ticket_selection_count">КОЛИЧЕСТВО</th>
            </tr>
          </thead>
          <tbody>
            <tr className="ticket_selection_item zebra accordion-item">
              <td className="ticket_selection_name">Взрослый билет</td>
              <td className="ticket_selection_price">450</td>
              <td className="ticket_selection_count">
                <button className="btn_minus">
                  <img src="./assets/images/icons/minus.svg" alt="" />
                </button>
                <input className="cart_num" type="text" value="1" size="3" />
                <button className="btn_plus">
                  <img src="./assets/images/icons/plus.svg" alt="" />
                </button>
              </td>
            </tr>

            <tr className="ticket_selection_item zebra accordion-item">
              <td className="ticket_selection_name">
                Детский билет <span>(3-18 лет включительно) </span>
              </td>
              <td className="ticket_selection_price">450</td>
              <td className="ticket_selection_count">
                <button className="btn_minus">
                  <img src="./assets/images/icons/minus.svg" alt="" />
                </button>
                <input className="cart_num" type="text" value="1" size="3" />
                <button className="btn_plus">
                  <img src="./assets/images/icons/plus.svg" alt="" />
                </button>
              </td>
              <td className="d-block chield_collaps">
                <div className="accordion-collapse collapsed">
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
              <td className="ticket_selection_name" type="button">
                Льготный билет
              </td>
              <td className="ticket_selection_price">бесплатно</td>
              <td className="ticket_selection_count">
                <button className="btn_minus" disabled>
                  <img
                    disabled={true}
                    src="./assets/images/icons/minus.svg"
                    alt=""
                  />
                </button>
                <input className="cart_num" type="text" value="0" size="3" />
                <button className="btn_plus" disabled>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
