import React, { useState } from "react";

const lgots = [
  { id: 1, name: "Партнеры" },
  { id: 2, name: "Дети до 2 лет включительно" },
  { id: 3, name: "Пенсионеры старше 60 лет" },
  { id: 4, name: "Участники ВОВ" },
  { id: 5, name: "Подопечные социальных учреждений" },
  { id: 6, name: "Малообеспеченные семьи" },
  { id: 7, name: "Представители СМИ" },
];

const Select = ({ info, setPrefInfo }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className="form-group select"
      key={info.id}
      onMouseLeave={() => setActive(false)}
    >
      <label htmlFor={`example${info.id}`}>{info.title}</label>
      <div
        className="form-select"
        style={{
          borderColor: active
            ? "#007DB5"
            : info.value_id === 0
            ? "#E13838"
            : "transparent",
        }}
      >
        <div
          className="select-value"
          onClick={() => {
            setActive((a) => !a);
          }}
          style={info.value_id === 0 ? { color: "#8B8B8B" } : null}
        >
          {info.name}
        </div>
        <img
          src="/assets/images/icons/arrow_down.svg"
          className="select-arrow"
          style={{ transform: active ? "rotate(180deg)" : "rotate(0)" }}
          alt=""
        />
        <ul
          className="select-options"
          style={{ display: `${active ? "block" : "none"}` }}
        >
          {lgots.map((l) => (
            <li
              className="select-option"
              key={l.id}
              onClick={() => {
                setPrefInfo((old) => {
                  let newInfo = [...old];
                  newInfo.forEach((el, index) => {
                    if (el.id === info.id) {
                      newInfo[index].value_id = l.id;
                      newInfo[index].name = l.name;
                    }
                  });
                  return newInfo;
                });
                setActive(false);
              }}
            >
              {l.name}
            </li>
          ))}
        </ul>
      </div>

      {/* <select
        style={{
          border: info.value_id > 0 ? "none" : "2px solid #E13838",
        }}
        className="form-select"
        id={`example${info.id}`}
        required=""
        name={`example${info.id}`}
        value={info.value_id}
        onChange={(e) => {
          setPrefInfo((old) => {
            let newInfo = [...old];
            newInfo.forEach((el, index) => {
              if (el.id === info.id) {
                newInfo[index].value_id = Number(e.target.value);
              }
            });
            return newInfo;
          });
        }}
      >
        <option value={0}>Выберите категорию льготы</option>

        {lgots.map((l) => (
          <option value={l.id} key={l.id}>
            {l.name}
          </option>
        ))}
      </select> */}
      <div
        className="invalid-feedback"
        style={{ display: info.value_id > 0 ? "none" : "block" }}
      >
        *выберите категорию льготы, чтобы продолжить
      </div>
    </div>
  );
};

export default Select;
