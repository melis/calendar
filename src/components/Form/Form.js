import React, { useEffect, useRef, useState } from "react";
// import { useForm } from "react-hook-form";
import Table from "../Table/Table";

const Form = ({ bilet, data }) => {
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
            Оплатить заказ
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
