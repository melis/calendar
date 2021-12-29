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
      if (el.type === "2") {
        setExc(false);
      }
      if (el.type === "3") {
        setEvn(false);
      }
    });

    if (p.get("evn")) {
      setTab(p.get("evn"));
    } else {
      if (!evn) {
        setTab("3");
      }
      if (!exc) {
        setTab("2");
      }
    }
  }, [setEvn, setExc, exc, evn, setTab, list]);
  return (
    <div className="pbt_bl">
      <h4>Выберите вид посещения*</h4>
      <div className="btns">
        <button
          disabled={exc}
          className={`btn border_line ${tab === "2" ? "active" : ""}`}
          onClick={() => setTab("2")}
        >
          Экскурсия
        </button>
        <button
          disabled={evn}
          className={`btn border_line ${tab === "3" ? "active" : ""}`}
          onClick={() => setTab("3")}
        >
          Мероприятие
        </button>
      </div>
      {!exc && tab === "2" ? (
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
