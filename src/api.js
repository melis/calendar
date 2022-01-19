import axios from "axios";
import { getMonth, getYear } from "date-fns";
class Api {
  url = ".";
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
        `${this.url}/crm/api/?method=get_product_bonus`
      );
      return data;
    } catch (e) {
      return {
        error: e,
      };
    }
  }

  async ticketsExchange(tickets) {
    try {
      const { data } = await axios.post(
        `${this.url}/crm/api/?method=exchange_tickets`,
        {
          tickets,
        }
      );
      return data;
    } catch (e) {
      return {
        error: e,
      };
    }
  }

  async ticketsUpdate(orders, tickets) {
    try {
      const { data } = await axios.post(
        `${this.url}/crm/api/?method=update_and_add_tickets`,
        {
          orders,
          tickets,
        }
      );
      return data;
    } catch (e) {
      return {
        error: e,
      };
    }
  }

  async chekTickets(tickets) {
    try {
      const { data } = await axios.post(
        `${this.url}/crm/api/?method=check_tickets`,
        {
          tickets,
        }
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
