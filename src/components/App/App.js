import React, { useEffect, useState } from "react";

import mApi from "../../api";
const App = () => {
  const [show, setShow] = useState(0);
  const [chek1, setChek1] = useState(false);
  const [chek2, setChek2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChek1(true);
      setChek2(true);
      setChek1(false);
      setChek2(false);
    }, 0);
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div
              className="accordion-item bg_blue card"
              style={{ transition: "2s" }}
            >
              <div className="accordion-header" id="headingTwo">
                <img src="./assets/images/icons/third.svg" alt="" />

                <button
                  className={`accordion-button ${
                    show !== 1 ? "collapsed" : ""
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  onClick={() => {
                    setShow((s) => {
                      if (s === 1) {
                        return 0;
                      }
                      return 1;
                    });
                  }}
                >
                  Стоимость билетов
                </button>
              </div>

              <div
                id="collapseTwo"
                className={`accordion-collapse collapse ${
                  show === 1 ? "show" : ""
                }`}
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="accordion_content">
                    <table style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th>Детский (до 14 лет)</th>
                          <th>Взрослый</th>
                          <th>Льготные категории</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>400 р.</td>
                          <td>450 р.</td>
                          <td>Бесплатно.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item bg_green card">
              <div className="accordion-header" id="headingThree">
                <img src="./assets/images/icons/second.svg" alt="" />

                <button
                  className={`accordion-button ${
                    show !== 2 ? "collapsed" : ""
                  }`}
                  onClick={() => {
                    setShow((s) => {
                      if (s === 2) {
                        return 0;
                      }
                      return 2;
                    });
                  }}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Что входит в стоимость билетов
                </button>
              </div>

              <div
                id="collapseThree"
                className={`accordion-collapse collapse ${
                  show === 2 ? "show" : ""
                }`}
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="accordion_content">
                    <ul>
                      <li>посещение территории, </li>
                      <li> посещение экотроп, </li>
                      <li> экскурсионное сопровождение, </li>
                      <li> посещение музеев и природных объектов, </li>
                      <li>
                        услуги объектов инфраструктуры: парковки, туалетов,
                        Туристско-информационного центра, Визит-центра и
                        Конференц-дома,
                      </li>
                      <li>посещение всех объектов инфраструктуры для детей.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item bg_blue">
              <div className="accordion-header" id="heading1">
                <img src="./assets/images/icons/first.svg" alt="" />

                <button
                  className={`accordion-button ${
                    show !== 3 ? "collapsed" : ""
                  }`}
                  onClick={() => {
                    setShow((s) => {
                      if (s === 3) {
                        return 0;
                      }
                      return 3;
                    });
                  }}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="false"
                  aria-controls="collapse1"
                >
                  Льготные категории
                </button>
              </div>

              <div
                id="collapse1"
                className={`accordion-collapse collapse ${
                  show === 3 ? "show" : ""
                }`}
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="accordion_content">
                    <p>
                      Бесплатное посещение эколого-экскурсионного комплекса
                      Чунозерской усадьбы Лапландского заповедника разрешается
                      для следующих категорий граждан:
                    </p>

                    <ul>
                      <li>Дети до 2 лет включительно.</li>

                      <li>
                        Пенсионеры старше 60 лет — при предъявлении пенсионного
                        удостоверения.
                      </li>

                      <li>
                        Участники Великой Отечественной войны — при предъявлении
                        удостоверения.
                      </li>

                      <li>
                        Организованные группы воспитанников детских домов,
                        подопечные домов милосердия, домов инвалидов и домов
                        пенсионеров — по предварительной заявке от указанных
                        учреждений и с официальным письмом на имя руководителя
                        заповедника.
                      </li>

                      <li>
                        Члены малообеспеченных семей — при предъявлении справки
                        из Центра социального обслуживания населения.
                      </li>

                      <li>
                        Представители средств массовой информации в целях
                        создания фильмов и репортажей о заповеднике — по
                        предварительной заявке.
                      </li>

                      <li>
                        Партнёры по совместным программам и проектам, по обмену
                        опытом.
                      </li>
                    </ul>

                    <span>
                      Основание — Положение о платных услугах Федерального
                      государственного бюджетного учреждения «Лапландский
                      государственный природный биосферный заповедник», пункт
                      5.8.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="allert">
        <div className="container">
          <div className="row block_content">
            <h4 className="title_block col-md-12">
              Пожалуйста, обратите внимание!
            </h4>

            <div className="col-lg-12">
              <div className="content_block">
                <p className="content_text">
                  При покупке билета на сайте сотрудник экскурсионного отдела не
                  связывается с посетителем по телефону для подтверждения брони.
                </p>

                <p className="content_text">
                  Будьте внимательны при покупке билета: ошибки при указании
                  контактного телефона, <br />
                  электронной почты и количества человек в группе недопустимы.
                </p>

                <p className="content_text">
                  Неиспользованный билет на экскурсионную программу не даёт
                  права посещения <br />
                  эколого-экскурсионного комплекса Заповедника в последующие
                  дни, обмену и возврату не подлежит.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="accept_block">
            <div className="check_block">
              <form className="hover_check">
                <div className="form-check">
                  <input
                    className="form-check-input form-check-input1"
                    type="checkbox"
                    checked={chek1}
                    onChange={(e) => {
                      setChek1(e.target.checked);
                    }}
                    id="flexCheckDefault1"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault1"
                  >
                    С{" "}
                    <a href={`${mApi.baseUrl}/visiting-rules`}>
                      правилами посещения
                    </a>{" "}
                    ознакомлен(а)
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input form-check-input2"
                    type="checkbox"
                    checked={chek2}
                    onChange={(e) => {
                      setChek2(e.target.checked);
                    }}
                    id="flexCheckChecked2"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked2"
                  >
                    С правилами покупки билета ознакомлен(а)
                  </label>
                </div>
              </form>
            </div>

            <a
              href="./purchase.html"
              className={`${
                chek1 && chek2
                  ? "btn_link buy_ticket st_1 st_2"
                  : "btn_link buy_ticket"
              }`}
              onClick={(e) => {
                if (!chek1 || !chek2) {
                  e.preventDefault();
                }
              }}
            >
              Купить билет
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
