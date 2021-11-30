import DatePicker from "sassy-datepicker";

const Example = () => {
  const onChange = (date) => {
    console.log(date.toString());
  };

  return <DatePicker onChange={onChange} />;
};

export default Example;
