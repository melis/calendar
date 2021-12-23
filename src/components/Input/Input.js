import * as React from "react";

import { IMaskInput } from "react-imask";

import Input from "@mui/material/Input";

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

export default function Inputs() {
  const [values, setValues] = React.useState({
    textmask: "",
    numberformat: "1320",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Input
      value={values.textmask}
      onChange={handleChange}
      name="textmask"
      id="formatted-text-mask-input"
      inputComponent={TextMaskCustom}
    />
  );
}
