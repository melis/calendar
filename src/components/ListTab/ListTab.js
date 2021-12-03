import React from "react";

const ListTab = ({ tab, list, setTab }) => {
  let exc = true;
  let evn = true;
  list.forEach((el) => {
    if (el.type === "excursion") {
      exc = false;
    }
    if (el.type === "event") {
      evn = false;
    }
  });
  if (!exc && evn) {
    setTab("excursion");
  }
  if (!evn && exc) {
    setTab("event");
  }
  return (
    <div className="pbt_bl">
      <h4>Выберите дату посещения*</h4>
      <div className="btns">
        <button
          disabled={exc}
          className={`btn border_line ${tab === "excursion" ? "active" : ""}`}
          onClick={() => setTab("excursion")}
        >
          Экскурсия
        </button>
        <button
          disabled={evn}
          className={`btn border_line ${tab === "event" ? "active" : ""}`}
          onClick={() => setTab("event")}
        >
          Мероприятие
        </button>
      </div>
      <p>
        Обратите внимание: вы можете выбрать для посещения только одну экскурсию
        в день. Для посещения экскурсии вам нужно выбрать конкретное время.
      </p>
    </div>
  );
};

export default ListTab;
