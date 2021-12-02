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
import { getDay, getDate, setDate } from "date-fns";

const data = [
  {
    id: 0,
    type: "excursion",
    date: "12.02.2021",
    time: ["12:00", "15:00"],
    title: "Экскурсия «От болота до вершины» по тропе «В гору Ельнюн-2»",
    text: `Знакомит с ландшафтами заповедника и особенностями северной природы.
    Подойдет подготовленным посетителям, которые любят 
    долгие прогулки, вылазки в горы и с легкостью преодолевают 
    большие расстояния.`,
    proceed: "3-5",
    img_url:
      "https://obrazovaka.ru/wp-content/uploads/2017/09/kak-pishetsya-ekskursiya.jpg",
    ageLimit: 8,
    distance: 12,
    transport: "Пеший",
    count: "5-30",
    price: { base: 450, child: 400, pref: 0 },
  },
  {
    id: 1,
    type: "event",
    date: "12.02.2021",
    time: "Предпоследняя суббота июля, 11:00 — 17:00",
    title: "День открытых дверей",
    text: `Добрая традиция заповедника — день, когда усадьба превращается 
    в одну большую эколого-просветительскую площадку, где каждый 
    находит занятие по душе.`,
    img_url:
      "https://obrazovaka.ru/wp-content/uploads/2017/09/kak-pishetsya-ekskursiya.jpg",
    price: { base: 450, child: 400, pref: 0 },
  },
  {
    id: 2,
    type: "excursion",
    date: "12.06.2021",
    time: ["10:00", "15:00"],
    title: "Экскурсия «От болота до вершины» по тропе «В гору Ельнюн-2»",
    text: `Знакомит с ландшафтами заповедника и особенностями северной природы.
    Подойдет подготовленным посетителям, которые любят 
    долгие прогулки, вылазки в горы и с легкостью преодолевают 
    большие расстояния.`,
    proceed: "3-5",
    img_url:
      "https://obrazovaka.ru/wp-content/uploads/2017/09/kak-pishetsya-ekskursiya.jpg",
    ageLimit: 4,
    distance: 12,
    transport: "Пеший",
    count: "10-25",
    price: { base: 450, child: 400, pref: 0 },
  },
  {
    id: 3,
    type: "event",
    date: "12.05.2021",
    time: "Предпоследняя суббота июля, 11:00 — 17:00",
    title: "День открытых дверей",
    text: `Добрая традиция заповедника — день, когда усадьба превращается 
    в одну большую эколого-просветительскую площадку, где каждый 
    находит занятие по душе.`,
    img_url:
      "https://obrazovaka.ru/wp-content/uploads/2017/09/kak-pishetsya-ekskursiya.jpg",
    price: { base: 450, child: 400, pref: 0 },
  },
  {
    id: 4,
    type: "excursion",
    date: "12.03.2021",
    time: ["12:00", "15:00"],
    title: "Экскурсия «От болота до вершины» по тропе «В гору Ельнюн-2»",
    text: `Знакомит с ландшафтами заповедника и особенностями северной природы.
    Подойдет подготовленным посетителям, которые любят 
    долгие прогулки, вылазки в горы и с легкостью преодолевают 
    большие расстояния.`,
    proceed: "3-5",
    img_url:
      "https://obrazovaka.ru/wp-content/uploads/2017/09/kak-pishetsya-ekskursiya.jpg",
    ageLimit: 6,
    distance: 7,
    transport: "Пеший",
    count: "5-25",
    price: { base: 450, child: 400, pref: 0 },
  },
  {
    id: 5,
    type: "event",
    date: "12.10.2021",
    time: "Предпоследняя суббота июля, 11:00 — 17:00",
    title: "День открытых дверей",
    text: `Добрая традиция заповедника — день, когда усадьба превращается 
    в одну большую эколого-просветительскую площадку, где каждый 
    находит занятие по душе.`,
    img_url:
      "https://obrazovaka.ru/wp-content/uploads/2017/09/kak-pishetsya-ekskursiya.jpg",
    price: { base: 450, child: 400, pref: 0 },
  },
  {
    id: 6,
    type: "excursion",
    date: "12.11.2021",
    time: ["12:00", "15:00"],
    title: "Экскурсия «От болота до вершины» по тропе «В гору Ельнюн-2»",
    text: `Знакомит с ландшафтами заповедника и особенностями северной природы.
    Подойдет подготовленным посетителям, которые любят 
    долгие прогулки, вылазки в горы и с легкостью преодолевают 
    большие расстояния.`,
    proceed: "3-5",
    img_url:
      "https://obrazovaka.ru/wp-content/uploads/2017/09/kak-pishetsya-ekskursiya.jpg",
    ageLimit: 6,
    distance: 7,
    transport: "Пеший",
    count: "5-25",
    price: { base: 450, child: 400, pref: 0 },
  },
  {
    id: 7,
    type: "event",
    date: "12.13.2021",
    time: "Предпоследняя суббота июля, 11:00 — 17:00",
    title: "День открытых дверей",
    text: `Добрая традиция заповедника — день, когда усадьба превращается 
    в одну большую эколого-просветительскую площадку, где каждый 
    находит занятие по душе.`,
    img_url:
      "https://obrazovaka.ru/wp-content/uploads/2017/09/kak-pishetsya-ekskursiya.jpg",
    price: { base: 450, child: 400, pref: 0 },
  },
  {
    id: 8,
    type: "excursion",
    date: "12.15.2021",
    time: ["12:00", "15:00"],
    title: "Экскурсия «От болота до вершины» по тропе «В гору Ельнюн-2»",
    text: `Знакомит с ландшафтами заповедника и особенностями северной природы.
    Подойдет подготовленным посетителям, которые любят 
    долгие прогулки, вылазки в горы и с легкостью преодолевают 
    большие расстояния.`,
    proceed: "3-5",
    img_url:
      "https://obrazovaka.ru/wp-content/uploads/2017/09/kak-pishetsya-ekskursiya.jpg",
    ageLimit: 6,
    distance: 7,
    transport: "Пеший",
    count: "5-25",
    price: { base: 450, child: 400, pref: 0 },
  },
  {
    id: 9,
    type: "event",
    date: "12.15.2021",
    time: "Предпоследняя суббота июля, 11:00 — 17:00",
    title: "День открытых дверей",
    text: `Добрая традиция заповедника — день, когда усадьба превращается 
    в одну большую эколого-просветительскую площадку, где каждый 
    находит занятие по душе.`,
    img_url:
      "https://obrazovaka.ru/wp-content/uploads/2017/09/kak-pishetsya-ekskursiya.jpg",
    price: { base: 450, child: 400, pref: 0 },
  },
  {
    id: 10,
    type: "excursion",
    date: "12.20.2021",
    time: ["12:00", "15:00"],
    title: "Экскурсия «От болота до вершины» по тропе «В гору Ельнюн-2»",
    text: `Знакомит с ландшафтами заповедника и особенностями северной природы.
    Подойдет подготовленным посетителям, которые любят 
    долгие прогулки, вылазки в горы и с легкостью преодолевают 
    большие расстояния.`,
    proceed: "3-5",
    img_url:
      "https://obrazovaka.ru/wp-content/uploads/2017/09/kak-pishetsya-ekskursiya.jpg",
    ageLimit: 6,
    distance: 7,
    transport: "Пеший",
    count: "5-25",
    price: { base: 450, child: 400, pref: 0 },
  },
  {
    id: 11,
    type: "event",
    date: "12.18.2021",
    time: "Предпоследняя суббота июля, 11:00 — 17:00",
    title: "День открытых дверей",
    text: `Добрая традиция заповедника — день, когда усадьба превращается 
    в одну большую эколого-просветительскую площадку, где каждый 
    находит занятие по душе.`,
    img_url:
      "https://obrazovaka.ru/wp-content/uploads/2017/09/kak-pishetsya-ekskursiya.jpg",
    price: { base: 450, child: 400, pref: 0 },
  },
];

const localeMap = {
  ru: ruLocale,
};

function fakeFetch(date, { signal }) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      resolve(data);
    }, 500);

    signal.onabort = () => {
      clearTimeout(timeout);
      reject(new DOMException("aborted", "AbortError"));
    };
  });
}

const Calendar = () => {
  const requestAbortController = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
  const [value, setValue] = React.useState(new Date());

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

  const disableWeekends = (date) => {
    return false;
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
          renderDay={renderDay}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
