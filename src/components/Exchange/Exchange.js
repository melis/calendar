import React, { useState } from "react";
import TInput from "../Input/Inputs";

function Exchange(props) {
  //   const [inputs, setInputs] = useState();
  return (
    <>
      <div className="title_block">Введите номера билетов для обмена:</div>

      <div className="row" id="tickets_c">
        <TInput />

        <div className="col-lg-4 form_item" id="add_ticket_block">
          <button
            type="button"
            className="btn border_line add_ticket"
            id="add_ticket"
          >
            + Добавить билет для обмена
          </button>
        </div>
      </div>
      <button className="btn_link chose m-auto" type="submit">
        Обменять билеты
      </button>
    </>
  );
}

export default Exchange;
