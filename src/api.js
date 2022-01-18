import axios from "axios";
import { getMonth, getYear } from "date-fns";
class Api {
  url = "";
  baseUrl = "http://laplandzap.ru";

  async getPrice() {
    try {
      const { data } = await axios.get(
        `${this.url}/crm/api/?method=get_product_independent`
      );
      return data;
    } catch (e) {
      return {
        error: e,
      };
    }
  }

  async getEvents(date) {
    try {
      const { data } = await axios.get(
        `${this.url}/crm/api/?method=get_products&year=${getYear(
          new Date(date)
        )}&month=${getMonth(new Date(date)) + 1 < 10 ? "0" : ""}${
          getMonth(new Date(date)) + 1
        }`
      );
      return data;
    } catch (e) {
      return {
        error: e,
      };
    }
  }

  async byTickets(order) {
    try {
      const { data } = await axios.post(
        `${this.url}/crm/api/?method=buy_tickets`,
        {
          order,
        }
      );
      return data;
    } catch (e) {
      return {
        error: e,
      };
    }
  }

  async getLgotList() {
    try {
      const { data } = await axios.get(
        "http://tickets.laplandzap.ru/crm/api/?method=get_product_bonus"
      );
      return data;
    } catch (e) {
      return {
        error: e,
      };
    }
  }
}
export default new Api();
