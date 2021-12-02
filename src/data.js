const data = [
  {
    id: 0,
    type: "excursion",
    date: "12.01.2021",
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
    date: "12.11.2021",
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
    date: "12.25.2021",
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

export default data;
