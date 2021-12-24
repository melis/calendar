import React, { useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import Input from "@mui/material/Input";

const TInput = ({ t, setTikets }) => {
  const [er, setEr] = useState(false);
  const [find, setFind] = useState(false);

  return (
    <div className="col-lg-4 form_item ticket_items">
      <div
        className="remove_this"
        onClick={() => {
          setTikets((arr) => arr.filter((e) => e.id !== t.id));
        }}
      ></div>
      <label htmlFor={`ticket${t.id}`}>
        Билет {t.id + 1}*
        <img src="" alt="" />
      </label>

      <SInput
        t={t}
        setTikets={setTikets}
        setEr={setEr}
        find={find}
        setFind={setFind}
        er={er}
      />
      {er && (
        <div className="invalid-feedback">
          **билет не найден, проверьте правильность данных
        </div>
      )}
      {find && <div className="feedback">**билет найден</div>}
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

function SInput({ t, setTikets, setEr, find, setFind, er }) {
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
      if (values.textmask.replace(/\s/g, "") === "1111111111111111") {
        setEr(true);
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
    }
  }, [values, t.id, setTikets, setEr, setFind]);
  return (
    <Input
      // readOnly={find}
      // disabled={find}
      // style={
      //   find
      //     ? { border: "2px solid green", borderRadius: "5px" }
      //     : er
      //     ? { border: "2px solid red", borderRadius: "5px" }
      //     : null
      // }
      placeholder="Введите номер билета"
      value={values.textmask}
      onChange={handleChange}
      name="textmask"
      id={`ticket${t.id}`}
      inputComponent={TextMaskCustom}
    />
  );
}

export default TInput;
