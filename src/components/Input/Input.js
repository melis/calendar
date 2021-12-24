import React, { useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import Input from "@mui/material/Input";

import LinearProgress from "@mui/material/LinearProgress";

const TInput = ({ t, setTikets, index }) => {
  const [er, setEr] = useState(false);
  const [find, setFind] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="col-lg-4 form_item ticket_items">
      <div
        className="remove_this"
        onClick={() => {
          setTikets((arr) => arr.filter((e) => e.id !== t.id));
        }}
      ></div>
      <label htmlFor={`ticket${t.id}`}>
        Билет {index + 1}*
        <img src="" alt="" />
      </label>

      <SInput
        setLoading={setLoading}
        t={t}
        setTikets={setTikets}
        setEr={setEr}
        find={find}
        setFind={setFind}
        er={er}
        loading={loading}
      />

      <div
        className={`feedback ${er ? "feedback_invalid" : ""}${
          find ? " feedback_find" : ""
        }`}
      >
        {loading ? <LinearProgress /> : ""}
        {er && !loading
          ? "  **билет не найден, проверьте правильность данных"
          : ""}
        {find && !loading ? "**билет найден" : ""}
      </div>
    </div>
  );
};

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="0000 0000 0000 0000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

function SInput({
  t,
  setTikets,
  setEr,
  find,
  setFind,
  er,
  setLoading,
  loading,
}) {
  const [values, setValues] = React.useState({
    textmask: t.v,
    numberformat: "1320",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (values.textmask.length === 19) {
      setLoading(true);
      setTimeout(() => {
        if (values.textmask.replace(/\s/g, "") === "1111111111111111") {
          setEr(true);
          setFind(false);
        } else {
          setFind(true);
          setEr(false);
          setTikets((arr) => {
            let newArr = [...arr];
            newArr.forEach((e, i) => {
              if (e.id === t.id) {
                newArr[i] = {
                  ...newArr[i],
                  v: values.textmask.replace(/\s/g, ""),
                };
              }
            });
            return newArr;
          });
        }
        setLoading(false);
      }, 1000);
    }
  }, [values, t.id, setTikets, setEr, setFind, setLoading]);
  return (
    <Input
      disabled={loading}
      readOnly={find}
      placeholder="Введите номер билета"
      value={values.textmask}
      onChange={handleChange}
      name="textmask"
      id={`ticket${t.id}`}
      inputComponent={TextMaskCustom}
      className={find ? "finded" : er ? "invalid" : ""}
    />
  );
}

export default TInput;
