import React, { useState } from "react";

const Select = ({ val, setVal }) => {
  const [reasons, setReasons] = useState([
    { id: 1, name: "Причина 1" },
    { id: 2, name: "Причина 2" },
    { id: 3, name: "Причина 3" },
    { id: 4, name: "Причина 4" },
    { id: 5, name: "Причина 5" },
  ]);
  const [active, setActive] = useState(false);

  return (
    <div
      className="form-group select return_select"
      onMouseLeave={() => setActive(false)}
    >
      <div
        className="form-select"
        style={{
          borderColor: active
            ? "#007DB5"
            : val.id === 0
            ? "#E13838"
            : "transparent",
        }}
      >
        <div
          className="select-value"
          onClick={() => {
            setActive((a) => !a);
          }}
          style={val.id === 0 ? { color: "#8B8B8B" } : null}
        >
          {val.name}
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
          {reasons.map((l) => (
            <li
              className={`select-option ${l.id === val.id ? "selected" : ""}`}
              key={l.id}
              onClick={() => {
                let newVal;
                reasons.forEach((e) => {
                  if (l.id === e.id) {
                    newVal = e;
                  }
                });
                setVal(newVal);
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
        style={{ display: val.id > 0 ? "none" : "block" }}
      >
        *выберите причину, чтобы продолжить
      </div>
    </div>
  );
};

export default Select;
