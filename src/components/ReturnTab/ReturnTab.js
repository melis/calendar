import React from "react";

function ReturnTab(props) {
  return (
    <div className="row">
      <div className="col-xl-6 col-xxl-5 col-lg-8 col-md-10">
        <div className="content_block">
          <div className="title_block" style={{ color: "#005d90" }}>
            Обратите внимание!
          </div>

          <p className="content_text">
            Вы можете отменить экскурсию, но не возвращать билет — по нему можно
            посетить заповедник самостоятельно в течение года с даты покупки.
          </p>

          <div className="btns">
            {/* <button type="button" className="btn_return btn_link  orange_btn">
              Вернуть билет
            </button> */}

            <button
              type="button"
              className="btn_return btn_link"
              onClick={() => {
                document.location.href =
                  "https://lapland.syntlex.kg/cancellation_of_tickets.html";
              }}
            >
              Отменить экскурсию
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReturnTab;
