import {
  ALERT_ERROR,
  ALERT_SUCCESS,
  LOADING
} from "./action-type";
export const alertError = (error) => {
  const type = ALERT_ERROR;
  return {
    type,
    error,
  };
};
export const pageLoading = () => {
  const type = LOADING;
  return { type };
};
export const alertSuccess = (success) => {
  const type = ALERT_SUCCESS;
  return {
    type,
    success,
  };
};

