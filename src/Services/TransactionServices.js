import server from "./axiosInstance";
import { TRANSACTION_ROUTE, USER_BALANCE_ROUTE } from "./ApiRoutes";

export const TRANSACTIONS = async () => {
  try {
    const res = await server.get(TRANSACTION_ROUTE);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const USER_BALANCE = async () => {
  try {
    const res = await server.get(USER_BALANCE_ROUTE);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
