import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ListTab = ({ tab, list, setTab, bilet }) => {
  const [exc, setExc] = useState(true);
  const [evn, setEvn] = useState(true);
  const url = useLocation();

  useEffect(() => {
    const p = new URLSearchParams(url.search);
    setExc(true);
    setEvn(true);

    list.forEach((el) => {
      if (el.type === "excursion") {
        setExc(false);
      }
      if (el.type === "event") {
        setEvn(false);
      }
    });

    if (p.get("evn")) {
      setTab(p.get("evn"));
    } else {
      if (!evn) {
        setTab("event");
      }
      if (!exc) {
        setTab("excursion");
      }
    }
  }, [setEvn, setExc, exc, evn, setTab, list]);
  return (
    <div className="pbt_bl">
      <h4>Выберите вид посещения*</h4>
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
      {!exc && tab === "excursion" ? (
        <p>
          Обратите внимание: вы можете выбрать для посещения только одну
          экскурсию в день. Для посещения экскурсии вам нужно выбрать конкретное
          время.
        </p>
      ) : null}
    </div>
  );
};

export default ListTab;
