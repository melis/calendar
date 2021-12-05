import React from "react";
import Tr from "../Tr/Tr";

const Table = ({ bilet }) => {
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
            <Tr bilet={bilet} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
