import server from "./axiosInstance";
import {
  GET_DASHBOARD_DATA_ROUTE,
  GET_REFERRAL_COUNT_ROUTE,
  GET_STAKE_DATA_ROUTE,
  GET_REFERRAL_LEADERBOARD_ROUTE,
  TRIGGER_EGAX_DEPOSIT_ROUTE,
  SEND_CRYPTO_EXTERNAL_ROUTE,
} from "./ApiRoutes";

export const FETCH_DASHBOARD_DATA = async () => {
  try {
    const res = await server.get(GET_DASHBOARD_DATA_ROUTE);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const FETCH_REFERRAL_DATA = async () => {
  try {
    const res = await server.get(GET_REFERRAL_COUNT_ROUTE);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const FETCH_REFERRAL_LEADERBOARD = async () => {
  try {
    const res = await server.get(GET_REFERRAL_LEADERBOARD_ROUTE);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const FETCH_STAKE_POOL_DATA = async () => {
  try {
    const res = await server.get(GET_STAKE_DATA_ROUTE);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const TRIGGER_DEPOSIT = async (payload) => {
  try {
    const res = await server.post(TRIGGER_EGAX_DEPOSIT_ROUTE, payload);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
export const SEND_CRYPTO_EXTERNAL = async (payload) => {
  try {
    const res = await server.post(SEND_CRYPTO_EXTERNAL_ROUTE, payload);
    return res.data;
  } catch (error) {
    return error.response || error.message;
  }
};
