import axios from "axios";
import React, { forwardRef, useEffect, useState } from "react";
import Select from "../Select/Select";

const Tr = (props, ref) => {
  const { bilet, setTickets, summ } = props;
  const { price } = bilet;
  const [base, setBase] = useState(0);
  const [child, setChild] = useState(0);
  const [pref, setPref] = useState(0);
  const [freeBase, setFreeBase] = useState(0);
  const [prefInfo, setPrefInfo] = useState([]);
  const [lgots, setLgots] = useState([]);

  useEffect(() => {
    setBase(0);
    setFreeBase(0);
    setChild(0);
    setPrefInfo([]);
    setPref(0);
  }, [bilet]);

  useEffect(() => {
    axios
      .get("http://lapland.syntlex.kg/crm/api/?method=get_product_bonus")

      .then(({ data }) => setLgots(data))
      .catch((e) => setLgots([{ id: 0, name: "Error" }]));
  }, []);

  useEffect(() => {
    setTickets({
      event: {
        id: bilet.id,
        date: bilet.date,
        select_time: bilet.selectTime ? bilet.selectTime : "",
        type: bilet.type,
      },
      baseCount: base,
      childCount: child,
      freeBaseCount: freeBase,
      pref: { prefCount: pref, prefInfo },
      summ,
    });
  }, [base, child, setTickets, freeBase, pref, prefInfo, bilet, summ]);

  useEffect(() => {
    setFreeBase((child - (child % 15)) / 15);
  }, [child]);

  return (
    <>
      <tr className="ticket_selection_item zebra accordion-item">
        <td className="ticket_selection_name">Взрослый билет</td>
        <td className="ticket_selection_price">{price.base}</td>
        <td className="ticket_selection_count">
          <button
            className="btn_minus"
            onClick={(e) => {
              e.preventDefault();
              setBase((c) => {
                return c > 0 ? c - 1 : 0;
              });
            }}
          >
            <img src="./assets/images/icons/minus.svg" alt="" />
          </button>
          <input
            className="cart_num"
            type="text"
            value={base + freeBase}
            onChange={(e) => {
              if (!isNaN(Number(e.target.value))) {
                setBase(Number(e.target.value));
              }
            }}
          />
          <button
            className="btn_plus"
            onClick={(e) => {
              e.preventDefault();
              setBase((c) => {
                return c + 1;
              });
            }}
          >
            <img src="./assets/images/icons/plus.svg" alt="" />
          </button>
        </td>
      </tr>

      <tr className="ticket_selection_item zebra accordion-item">
        <td className="ticket_selection_name">
          Детский билет <span>(3-18 лет включительно) </span>
        </td>
        <td className="ticket_selection_price">{price.child}</td>
        <td className="ticket_selection_count">
          <button
            className="btn_minus"
            onClick={(e) => {
              e.preventDefault();
              setChild((c) => {
                return c > 0 ? c - 1 : 0;
              });
            }}
          >
            <img src="./assets/images/icons/minus.svg" alt="" />
          </button>
          <input
            className="cart_num"
            type="text"
            value={child}
            onChange={(e) => {
              if (!isNaN(Number(e.target.value))) {
                setChild(Number(e.target.value));
              }
            }}
          />
          <button
            className="btn_plus"
            onClick={(e) => {
              e.preventDefault();
              setChild((c) => {
                return c + 1;
              });
            }}
          >
            <img src="./assets/images/icons/plus.svg" alt="" />
          </button>
        </td>
        <td className="d-block chield_collaps">
          <div className={`accordion-collapse ${child < 15 && "collapse"}`}>
            <div className="accordion-body">
              <p>
                Обратите внимание! <br />
                При оформлении 15 детских билетов 1 взрослый билет оформляется
                бесплатно.
              </p>
              <div className="rounded_circle">
                Бесплатный взрослый билет: {freeBase}
              </div>
            </div>
          </div>
        </td>
      </tr>

      <tr className="ticket_selection_item zebra" ref={ref}>
        <td className="ticket_selection_name" type="button">
          Льготный билет
        </td>
        <td className="ticket_selection_price">бесплатно</td>
        <td className="ticket_selection_count">
          <button
            className="btn_minus"
            onClick={(e) => {
              e.preventDefault();
              setPref((c) => {
                setPrefInfo((i) => i.filter((el) => el.id !== c - 1));
                return c > 0 ? c - 1 : 0;
              });
            }}
          >
            <img disabled={true} src="./assets/images/icons/minus.svg" alt="" />
          </button>
          <input
            className="cart_num"
            type="text"
            value={pref}
            onChange={(e) => {
              if (!isNaN(Number(e.target.value))) {
                setPref(Number(e.target.value));
              }
            }}
          />
          <button
            className="btn_plus"
            onClick={(e) => {
              e.preventDefault();
              setPref((c) => {
                setPrefInfo((i) => [
                  ...i,
                  {
                    id: c,
                    value_id: 0,
                    name: "Выберите категорию льготы",
                    title: "ЛЬГОТНЫЙ БИЛЕТ " + (c + 1),
                  },
                ]);
                return c + 1;
              });
            }}
          >
            <img src="./assets/images/icons/plus.svg" alt="" />
          </button>
        </td>
        <td className="d-block chield_collaps">
          <div className={`accordion-collapse ${pref < 1 && "collapse"}`}>
            <div className="accordion-body">
              {prefInfo.map((info) => (
                <Select
                  info={info}
                  setPrefInfo={setPrefInfo}
                  key={info.id}
                  lgots={lgots}
                />
              ))}
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default forwardRef(Tr);
