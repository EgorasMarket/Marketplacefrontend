import server from "./axiosInstance";
import {
  FETCH_ALL_PRODUCTS_ROUTE,
  FETH_PRODUCT_BY_ID_ROUTE,
  PURCHASE_PRODUCT_ROUTE,
  DELIVERY_INFO_ROUTE,
  FETCH_ALL_ORDERS_ROUTE,
  FETCH_ALL_STAKE_ROUTE,
} from "./ApiRoutes";

export const FETCH_PRODUCTS = async () => {
  try {
    const res = await server.get(FETCH_ALL_PRODUCTS_ROUTE);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const FETCH_ALL_ORDERS = async () => {
  try {
    const res = await server.get(FETCH_ALL_ORDERS_ROUTE);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const FETCH_ALL_STAKE = async () => {
  try {
    const res = await server.get(FETCH_ALL_STAKE_ROUTE);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const FETCH_PRODUCTS_BY_ID = async (id) => {
  try {
    const res = await server.get(`${FETH_PRODUCT_BY_ID_ROUTE}/${id}`);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};

export const PURCHASE_PRODUCT = async (payload) => {
  try {
    const res = await server.post(PURCHASE_PRODUCT_ROUTE, payload);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const SUBMIT_DELIVERY_INFO = async (payload) => {
  try {
    const res = await server.post(DELIVERY_INFO_ROUTE, payload);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
