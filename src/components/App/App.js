import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";
import Eventt from "../Event/Event";
import ListTab from "../ListTab/ListTab";

const App = () => {
  const [list, setList] = useState([]);
  const [tab, setTab] = useState(null);

  return (
    <>
      <div className="container content_container">
        <div className="row">
          <div className="col-lg-5">
            <div className="pbt_bl">
              <h4>Выберите дату посещения*</h4>

              <Calendar list={list} setList={setList} />

              <div className="hover_check">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="Check_1"
                  />
                  <label className="form-check-label" htmlFor="Check_1">
                    Хочу посетить заповедник самостоятельно
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <ListTab list={list} tab={tab} setTab={setTab} />
          </div>
        </div>
      </div>
      <div className="container tickets">
        {list.map((el) => {
          if (tab) {
            if (tab === el.type) {
              return <Eventt el={el} />;
            }
          } else {
            return <Eventt el={el} />;
          }
          return null;
        })}
      </div>
    </>
  );
};

export default App;
