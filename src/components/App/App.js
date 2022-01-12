import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const ref = useRef();
  const [chek, setChek] = useState(false);

  return (
    <>
      <div className="container content_container">
        <div className="row block_content">
          <div className="col-lg-7">
            <div className="content_block">
              <div className="title_block">Общие правила</div>

              <p className="content_text">
                Если у вас изменились планы, вы можете вернуть или обменять
                билет, купленный на наши экскурсии, мероприятия или для
                самостоятельного посещения территории Лапландского заповедника.
              </p>

              <div className="title_block_m">
                Условия обмена и возврата билетов
              </div>

              <p className="content_text">
                Обмен и возврат билетов, приобретенных для посещения территории
                Лапландского заповедника, на экскурсию или мероприятие, возможен
                только при соблюдении следующих условий:
              </p>

              <div className="content_item">
                <img src="./assets/images/icons/moroshka.svg" alt="" />

                <p>
                  с 1 февраля по 30 ноября — не менее чем за 3 рабочих дня до
                  даты проведения экскурсии (мероприятия),
                  <br />с 1 декабря по 31 января — не менее чем за 7 рабочих
                  дней до даты проведения экскурсии (мероприятия).
                </p>
              </div>

              <div className="content_item">
                <img src="./assets/images/icons/moroshka.svg" alt="" />

                <p>
                  Обмен и возврат билетов, приобретенных для самостоятельного
                  посещения территории Лапландского заповедника, возможен не
                  позднее даты окончания действия билета.
                </p>
              </div>

              <div className="content_item">
                <img src="./assets/images/icons/moroshka.svg" alt="" />

                <p>
                  В более поздние сроки Заповедник вправе отказать в обмене
                  билета или не возвращать Заказчику его стоимость за
                  исключением случаев, предусмотренных законодательством, либо
                  по причине отмены экскурсии (мероприятия) со стороны
                  Заповедника.
                </p>
              </div>

              <div className="content_item">
                <img src="./assets/images/icons/moroshka.svg" alt="" />

                <p>
                  Неиспользованный билет на экскурсионную программу не даёт
                  права на посещение эколого-экскурсионного комплекса
                  Заповедника в последующие дни, обмену и возврату не подлежит.
                </p>
              </div>

              <div className="title_block">Обмен билета</div>

              <p className="content_text">
                Обмен билета оформляется на сайте Заповедника в разделе «Обмен
                билета». Обмен билета на экскурсионное обслуживание возможен в
                указанные выше сроки на любую другую свободную дату и время
                экскурсии либо на самостоятельное посещение
                эколого-экскурсионного комплекса Заповедника с открытой датой.
                Дополнительные сборы за обмен не взимаются.
              </p>

              <div className="title_block">Возврат билета</div>

              <p className="content_text">
                Возврат билета оформляется на сайте Заповедника в разделе
                «Возврат билета». Заполненная заявка на возврат поступает
                сотруднику экскурсионно-туристического отдела, который проверяет
                корректность её заполнения, фиксирует дату подачу и передаёт
                заявку в отдел бухгалтерии.
              </p>

              <p className="content_text">
                Возврат денежных средств осуществляется в полном объёме в
                течение десяти рабочих дней тем же способом, которым
                производилась оплата: по банковским реквизитам, указанным при
                онлайн-покупке.
              </p>

              <p className="content_text">
                При покупке билета за наличный расчёт в кассе Заповедника
                возврат денежных средств возможен только в день приобретения
                билета и до начала экскурсии при условии возврата бланка
                бумажного билета в надлежащем виде. Заявку на возврат в этом
                случае заполнять не требуется.
              </p>
            </div>

            <div className="form-check">
              <input
                ref={ref}
                className="form-check-input form-check-input3"
                type="checkbox"
                value={chek}
                id="flexCheckChecked"
                onChange={(e) => {
                  setChek(e.target.checked);
                }}
              />

              <label className="form-check-label" htmlFor="flexCheckChecked">
                С правилами обмена и возврата ознакомлен(а)
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="accept_block_2">
            <a
              href="http://tickets.laplandzap.ru/return_ticket.html"
              className={`btn_link buy_ticket buy_ticket2 ${
                chek ? "st_2" : ""
              }`}
              onClick={(e) => {
                if (!chek) {
                  e.preventDefault();
                }
              }}
            >
              Вернуть билет
            </a>

            <a
              href="http://tickets.laplandzap.ru/ticket_exchange.html"
              className={`btn_link buy_ticket buy_ticket2 ${
                chek ? "st_2" : ""
              }`}
              onClick={(e) => {
                if (!chek) {
                  e.preventDefault();
                }
              }}
            >
              Обменять билет
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
