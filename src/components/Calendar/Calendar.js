import * as React from "react";
import Badge from "@mui/material/Badge";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import PickersDay from "@mui/lab/PickersDay";
import DatePicker from "@mui/lab/DatePicker";
import CalendarPickerSkeleton from "@mui/lab/CalendarPickerSkeleton";
import getDaysInMonth from "date-fns/getDaysInMonth";
import ruLocale from "date-fns/locale/ru";

const data = [
  {
    id: 0,
    type: "excursion",
    date: "01.02.2021",
    time: ["12:00", "15:00"],
    title: "Экскурсия «От болота до вершины» по тропе «В гору Ельнюн-2»",
    text: `Знакомит с ландшафтами заповедника и особенностями северной природы.
    Подойдет подготовленным посетителям, которые любят 
    долгие прогулки, вылазки в горы и с легкостью преодолевают 
    большие расстояния.`,
    proceed: "3-5",
    ageLimit: 6,
    distance: 7,
    transport: "Пеший",
    count: "5-25",
    price: { base: 450, child: 400, pref: 0 },
  },
  {
    id: 1,
    type: "event",
    date: "01.02.2021",
    time: "Предпоследняя суббота июля, 11:00 — 17:00",
    title: "День открытых дверей",
    text: `Добрая традиция заповедника — день, когда усадьба превращается 
    в одну большую эколого-просветительскую площадку, где каждый 
    находит занятие по душе.`,
    price: { base: 450, child: 400, pref: 0 },
  },
];

const localeMap = {
  ru: ruLocale,
};

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function disableWeekends(date) {
  return date.getDay() === 0 || date.getDay() === 6;
}

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      const daysInMonth = getDaysInMonth(date);

      const daysToHighlight = [1, 2, 3].map(() =>
        getRandomNumber(1, daysInMonth)
      );

      resolve({ daysToHighlight });
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException("aborted", "AbortError"));
    };
  });
}

const initialValue = new Date();

const Calendar = () => {
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
  const [value, setValue] = React.useState(initialValue);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
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
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  return (
    <div className="input_date_pos">
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        locale={localeMap["ru"]}
      >
        <DatePicker
          inputFormat="dd MMMM yyyy"
          value={value}
          loading={isLoading}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          onMonthChange={handleMonthChange}
          hintText="Weekends Disabled"
          shouldDisableDate={disableWeekends}
          renderInput={(params) => <TextField {...params} />}
          renderLoading={() => <CalendarPickerSkeleton />}
          renderDay={(day, _value, DayComponentProps) => {
            const isSelected =
              !DayComponentProps.outsideCurrentMonth &&
              highlightedDays.indexOf(day.getDate()) > -1;

            return (
              <Badge
                key={day.toString()}
                overlap="circular"
                badgeContent={
                  isSelected ? (
                    <>
                      <span className="m_label_1"></span>
                      <span className="m_label_2"></span>
                    </>
                  ) : undefined
                }
              >
                <PickersDay {...DayComponentProps} />
              </Badge>
            );
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
