import React, { useEffect, useRef, useState } from "react";

import Table from "../Table/Table";
import mApi from "../../api";
const Form = ({ bilet, data, exChTickets, setAfter }) => {
  const { price } = bilet;

  const [summ, setSumm] = useState(0);
  const [tickets, setTickets] = useState(null);
  const [prefValid, setPrefValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const tRef = useRef(null);

  useEffect(() => {
    setSumm(0);
    setTickets(null);
  }, [bilet]);

  useEffect(() => {
    if (tickets) {
      setSumm(
        tickets.baseCount * price.base + tickets.childCount * price.child
      );
    }
    if (tickets?.pref?.prefCount > 0) {
      setPrefValid(false);
      tickets.pref.prefInfo.forEach((i) => {
        if (i.value_id < 1) {
          setPrefValid(true);
        }
      });
    }
  }, [tickets, price, prefValid]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (prefValid) {
      tRef.current.scrollIntoView();
    } else {
      setLoading(true);
      let p = "";
      if (tickets?.pref?.prefInfo?.length) {
        tickets.pref.prefInfo.forEach((el, i) => {
          p += `${el.value_id}${
            tickets.pref.prefInfo.length !== i + 1 ? ", " : ""
          }`;
        });
      }

      let orders = {
        order_type: bilet.type,
        base_count: tickets?.baseCount ? tickets.baseCount : 0,
        child_count: tickets?.childCount ? tickets.childCount : 0,
        pref: p,
        product_id: bilet.id,
        product_session_id: bilet.product_session,
        time: bilet.selectTime,
        order_id: data.order_id,
      };

      mApi
        .ticketsUpdate(orders, exChTickets)
        .then((data) => {
          if (data.status) {
            if (data.url) {
              window.location.href = data.url;
            } else {
              setAfter(JSON.stringify(data));
            }
          } else throw data;
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <form
      id="needs-validation"
      className="container"
      noValidate
      onSubmit={onSubmit}
    >
      <Table
        bilet={bilet}
        setTickets={setTickets}
        summ={summ}
        ref={tRef}
        data={data}
      />
      <div className="container checkout">
        <div className="col-lg-12">
          <div className="payment">
            Доплата за обмен: <span id="cart_summ2"> {summ}</span> ₽
          </div>
        </div>
        {loading ? (
          <div className="container">
            <img
              src="./assets/images/load.gif"
              alt=""
              className="loading_img"
            />
          </div>
        ) : (
          <button
            className={`btn_link  m-auto ${!prefValid ? "chose" : ""}`}
            type="submit"
          >
            Оформить обмен
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
