import server from "./axiosInstance";
import {
  TRANSACTION_ROUTE,
  USER_BALANCE_ROUTE,
  SEND_CRYPTO_INTERNAL_ROUTE,
  VERIFY_SENDOUT_EMAIL_USERNAME,
  PRICE_TICKER_ROUTE,
} from "./ApiRoutes";

export const TRANSACTIONS = async () => {
  try {
    const res = await server.get(TRANSACTION_ROUTE);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const PRICE_TICKER = async () => {
  try {
    const res = await server.get(PRICE_TICKER_ROUTE);
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

export const SEND_CRYPTO_FUNDS_INTERNAL = async (payload) => {
  try {
    const res = await server.post(SEND_CRYPTO_INTERNAL_ROUTE, payload);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const USERNAME_EMAIL_IS_VALID = async (payload) => {
  try {
    const res = await server.post(VERIFY_SENDOUT_EMAIL_USERNAME, payload);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
