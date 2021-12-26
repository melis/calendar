import React, { useState } from "react";

const Select = ({ info, setPrefInfo, lgots }) => {
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
              className={`select-option ${
                l.id === info.value_id ? "selected" : ""
              }`}
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
