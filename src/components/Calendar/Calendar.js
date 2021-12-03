import * as React from "react";
import Badge from "@mui/material/Badge";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import PickersDay from "@mui/lab/PickersDay";
import DatePicker from "@mui/lab/DatePicker";
import CalendarPickerSkeleton from "@mui/lab/CalendarPickerSkeleton";
import ruLocale from "date-fns/locale/ru";
import data from "../../data";
import { getMonth } from "date-fns";
// import { getDay, getDate, setDate } from "date-fns";

function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      if (getMonth(date) !== getMonth(new Date())) {
        resolve([]);
      }
      resolve(data);
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException("aborted", "AbortError"));
    };
  });
}

const Calendar = ({ list, setList }) => {
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
  const [value, setValue] = React.useState(new Date());

  const disableDays = (d) => {
    let a = true;
    highlightedDays.forEach((e) => {
      if (
        new Date(e.date).getDate() === d.getDate() &&
        d.getDate() >= new Date().getDate()
      ) {
        a = false;
      }
    });
    return a;
  };

  const renderDay = (day, _value, DayComponentProps) => {
    let exc = false;
    let evn = false;
    highlightedDays.forEach((el) => {
      if (
        !DayComponentProps.outsideCurrentMonth &&
        Date.parse(el.date) === Date.parse(day)
      ) {
        exc = el.type === "excursion" ? true : exc;
        evn = el.type === "event" ? true : evn;
      }
    });
    return (
      <Badge
        key={day.toString()}
        overlap="circular"
        badgeContent={
          <>
            {exc ? <span className="m_label_1"></span> : null}
            {evn ? <span className="m_label_2"></span> : null}
          </>
        }
      >
        <PickersDay {...DayComponentProps} />
      </Badge>
    );
  };

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then((data) => {
        setHighlightedDays(data);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== "AbortError") {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(new Date());
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }
    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  return (
    <div className="input_date_pos">
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
        <DatePicker
          inputFormat="dd MMMM yyyy"
          value={value}
          loading={isLoading}
          onChange={(newValue) => {
            setList(
              highlightedDays.filter(
                (el) => new Date(el.date).getDate() === newValue.getDate()
              )
            );
            setValue(newValue);
          }}
          onMonthChange={handleMonthChange}
          shouldDisableDate={disableDays}
          renderInput={(params) => <TextField {...params} />}
          renderLoading={() => <CalendarPickerSkeleton />}
          renderDay={renderDay}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
