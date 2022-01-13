import React, { useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import Input from "@mui/material/Input";
import axios from "axios";

import LinearProgress from "@mui/material/LinearProgress";

const TInput = ({ t, setTickets, index, tickets }) => {
  const [er, setEr] = useState(false);
  const [find, setFind] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="col-lg-4 form_item ticket_items">
      <div
        className="remove_this"
        onClick={() => {
          setTickets((arr) => arr.filter((e) => e.id !== t.id));
        }}
      ></div>
      <label htmlFor={`ticket${t.id}`}>
        Билет {index + 1}*
        <img src="" alt="" />
      </label>

      <SInput
        setLoading={setLoading}
        t={t}
        setTickets={setTickets}
        setEr={setEr}
        find={find}
        setFind={setFind}
        er={er}
        loading={loading}
        tickets={tickets}
      />

      <div
        className={`feedback ${er ? "feedback_invalid" : ""}${
          find ? " feedback_find" : ""
        }`}
      >
        {loading ? <LinearProgress /> : ""}
        {er && !loading ? er : ""}
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
      mask="000 000"
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
  setTickets,
  setEr,
  find,
  setFind,
  er,
  setLoading,
  loading,
  tickets,
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
    if (values.textmask.length === 7) {
      let l = false;

      tickets.forEach((t) => {
        if (t.v === values.textmask.replace(/\s/g, "")) {
          l = true;
        }
      });

      if (l && tickets.length > 1) {
        setEr("Этот билет уже вводили");
      } else {
        setLoading(true);
        setEr(false);

        axios
          .post("http://tickets.laplandzap.ru/crm/api/?method=check_tickets", {
            tickets: [values.textmask.replace(/\s/g, "")],
          })
          .then(({ data }) => {
            if (!data.status) {
              throw data;
            } else {
              setFind(true);
              setTickets((arr) => {
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
          })
          .catch((e) => {
            console.dir(e);
            setEr(
              e[0] ? e[0].msg : e[1] ? e[1].msg : e[2] ? e[2].msg : "Ошибка "
            );
          })
          .finally((a) => setLoading(false));
      }
    } else {
      setEr(false);
    }
  }, [values, t.id, setTickets, setEr, setFind, setLoading]);
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
