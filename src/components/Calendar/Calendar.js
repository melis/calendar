import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import CalendarPickerSkeleton from "@mui/lab/CalendarPickerSkeleton";
import ruLocale from "date-fns/locale/ru";

const Calendar = ({ date, setDate }) => {
  // const [value, setValue] = React.useState();
  const [icoHov, setIcoHov] = React.useState();
  return (
    <div
      className="return_calendar "
      onMouseMove={(e) => {
        if (
          e.target.localName === "svg" ||
          e.target.localName === "path" ||
          e.target.localName === "button"
        ) {
          setIcoHov(true);
        } else {
          setIcoHov(false);
        }
      }}
      onMouseLeave={() => {
        setIcoHov(false);
      }}
    >
      <img
        src={`/assets/images/icons/calendar_ico_${icoHov ? "h" : "a"}.svg`}
        alt=""
        className="calendar_ico"
      />
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
        <DatePicker
          className="melis"
          inputFormat="dd MMMM yyyy"
          mask=""
          value={date}
          onChange={(d) => setDate(d)}
          renderInput={(params) => <TextField {...params} />}
          renderLoading={() => <CalendarPickerSkeleton />}
          onMonthChange={(d) => setDate(d)}
          showToolbar={false}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
