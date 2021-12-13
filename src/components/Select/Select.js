import React from "react";

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
  return (
    <div className="form-group select" key={info.id}>
      <label htmlFor={`example${info.id}`}>{info.name}</label>
      <select
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
      </select>
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
