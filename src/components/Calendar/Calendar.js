import * as React from "react";
import Badge from "@mui/material/Badge";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import PickersDay from "@material-ui/lab/PickersDay";
import DatePicker from "@material-ui/lab/DatePicker";
// import CalendarPickerSkeleton from "@material-ui/lab/CalendarPickerSkeleton";
// import CalendarPickerSkeleton from "@mui/x-date-pickers/CalendarPickerSkeleton";
// import { CalendarPickerSkeleton } from "@mui/x-date-pickers";
import ruLocale from "date-fns/locale/ru";
import { useLocation, useNavigate } from "react-router-dom";

import mApi from "../../api";

function fethch(date, { signal }) {
  return new Promise((resolve, reject) => {
    mApi
      .getEvents(date)
      .then((data) => {
        let newArr = [];
        if (!data) {
          resolve(newArr);
        }

        for (const [key, value] of Object.entries(data)) {
          data[key].price = JSON.parse(data[key].price);
          newArr.push(value);
        }

        resolve(newArr);
      })
      .catch((e) => {
        reject(e);
      });

    signal.onabort = () => {
      reject(new DOMException("aborted", "AbortError"));
    };
  });
}

const Calendar = ({
  setList,
  disabled,
  setWarn,
  setBilet,
  tab,
  setTab,
  setIsLoading,
  isLoading,
  setErr,
}) => {
  const requestAbortController = React.useRef(null);
  const [highlightedDays, setHighlightedDays] = React.useState([]);
  const [icoHov, setIcoHov] = React.useState(false);
  const url = useLocation();
  const p = new URLSearchParams(url.search);
  const navigate = useNavigate();
  const [value, setValue] = React.useState(
    p.get("y") && p.get("m") && p.get("d")
      ? new Date(`${p.get("y")}-${Number(p.get("m"))}-${p.get("d")}`)
      : new Date()
  );

  React.useEffect(() => {
    navigate({
      pathname: url.pathname,
      search: `?y=${new Date(value).getFullYear()}&m=${
        new Date(value).getMonth() + 1
      }&d=${new Date(value).getDate()}`,
    });
  }, [value, navigate]);

  React.useEffect(() => {
    setIcoHov(false);
  }, [value]);

  const disableDays = (d) => {
    let a = true;
    if (
      Date.parse(d) >=
      Date.parse(
        new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate()
        )
      )
    ) {
      a = false;
    }
    // highlightedDays.forEach((e) => {
    //   if (
    //     Date.parse(d) >=
    //       Date.parse(
    //         new Date(
    //           new Date().getFullYear(),
    //           new Date().getMonth(),
    //           new Date().getDate()
    //         )
    //       ) &&
    //     d.getDate() === new Date(e.date).getDate()
    //   ) {
    //     a = false;
    //   }
    // });
    return a;
  };

  React.useEffect(() => {
    setBilet(null);
  }, [setBilet, value, tab]);

  React.useEffect(() => {
    setList(
      highlightedDays.filter(
        (el) => new Date(el.date).getDate() === new Date(value).getDate()
      )
    );
  }, [highlightedDays, setList, value]);

  const renderDay = (day, _value, DayComponentProps) => {
    let exc = false;
    let evn = false;

    highlightedDays.forEach((el) => {
      if (
        !DayComponentProps.outsideCurrentMonth &&
        new Date(el.date).getDate() === new Date(day).getDate()
      ) {
        exc = el.type === "2" ? true : exc;
        evn = el.type === "3" ? true : evn;
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
        <PickersDay
          {...DayComponentProps}
          style={{
            fontSize: "18px",
            fontFamily: "Raleway",
            width: "40px",
            height: "40px",
          }}
        />
      </Badge>
    );
  };

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();

    setIsLoading(true);
    fethch(date, {
      signal: controller.signal,
    })
      .then((data) => {
        console.log(data);
        setHighlightedDays(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setErr(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(
      p.get("y") && p.get("m") && p.get("d")
        ? new Date(`${p.get("y")}-${Number(p.get("m"))}-${p.get("d")}`)
        : new Date()
    );
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }
    setIsLoading(true);
    setHighlightedDays([]);
    setValue(date);
    setList([]);
    setBilet(null);
    fetchHighlightedDays(date);
  };

  return (
    <div
      className="input_date_pos"
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
        src={`/assets/images/icons/calendar_ico_${
          disabled ? "d" : icoHov ? "h" : "a"
        }.svg`}
        style={{ pointerEvents: disabled ? "auto" : "none" }}
        onClick={() => {
          setWarn(true);
        }}
        alt=""
        className="calendar_ico"
      />
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
        <DatePicker
          ToolbarComponent={() => (
            <div className="toolbar">
              <div className="toolbar_item ">
                <span className="exc"></span>экскурсии
              </div>
              <div className="toolbar_item ">
                <span className="evn"></span> мероприятия
              </div>
            </div>
          )}
          disabled={disabled}
          inputFormat="dd MMMM yyyy"
          mask=""
          value={value}
          loading={isLoading}
          onChange={(newValue) => {
            setList(
              highlightedDays.filter(
                (el) => new Date(el.date).getDate() === newValue.getDate()
              )
            );
            setValue(newValue);
            setTab();
          }}
          onMonthChange={handleMonthChange}
          shouldDisableDate={disableDays}
          renderInput={(params) => <TextField {...params} />}
          renderLoading={() => <>{/* <CalendarPickerSkeleton /> */}</>}
          renderDay={renderDay}
          showToolbar
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
